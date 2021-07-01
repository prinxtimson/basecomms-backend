<?php

namespace Rainestech\AdminApi\Utils;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Rainestech\AdminApi\Entity\SentMails;
use Rainestech\Personnel\Entity\Channels;

trait SendMail
{
    public function send(SentMails $sentMail)
    {
        $user = auth('api')->user();
        if ($emails = $this->getEmails($sentMail)) {
            $message = $sentMail->template;
            $track = str_replace('{{trackingId}}', $sentMail->id, $message);

            foreach ($emails as $email) {
                Mail::send('notification', ['template' => $track], function ($mail) use ($email, $sentMail, $user) {
                    $mail->to($email['email']);

                    if ($sentMail->bcc)
                        $mail->bcc($sentMail->bcc);

                    if ($sentMail->cc)
                        $mail->cc($sentMail->cc);

                    if ($sentMail->sender)
                        $mail->from(["name" => $user->name, "email" => $user->email ]);

                    $mail->subject($sentMail->subject);
                });

                clock(Mail::failures());
            }
        }

        return $this;

    }


    public function getEmails(SentMails $sentMail) {
        if (Str::contains(strtolower($sentMail->sentTo), "channel")) {
            return $this->getChannelMembers($sentMail->sentTo);
        } else {
            $emails = json_decode($sentMail->toValues, true);
            clock($emails);
            return $emails;
        }
    }

    private function getChannelMembers($sentTo) {
        $id = (int) explode('__', $sentTo)[0];

        if ($id) {
            if ($channel = Channels::find($id)) {
              $emails = [];
              foreach ($channel->members as $member) {
                  $temp = [];
                  $temp['email'] = $member->email;
                  $temp['name'] = $member->name;

                  $emails[] = $temp;
              }

              return $emails;
            }
        }

        return null;
    }
}
