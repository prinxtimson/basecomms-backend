<?php

namespace Rainestech\AdminApi\Utils;

use Mail;
use Rainestech\AdminApi\Entity\MailTemplates;
use Rainestech\AdminApi\Entity\Users;

class EmailNotifications
{
    public function sendOTP(Users $user, $tokens, $subject)
    {
        $name = $user->name;
        $temp = MailTemplates::where('name', 'OTP')->first();
        if ($temp) {
            $message = $temp->template;
            $messag = str_replace('{{username}}', strtoupper($name), $message);
            $messa = str_replace('{{token}}', $tokens, $messag);
            Mail::send('email', ['template' => $messa], function ($mail) use ($temp, $user, $subject, $name) {
                $mail->to($user->email, $name);
                $mail->subject($subject);
            });
        }

        return $this;
    }


    public function welcome(Users $user, $password)
    {
        $name = $user->name;
        $temp = MailTemplates::where('name', 'welcome')->first();
        if ($temp) {
            $message = $temp->template;
            $messag = str_replace('{{username}}', strtoupper($name), $message);
            $messa = str_replace('{{password}}', $password, $messag);
            Mail::send('email', ['template' => $messa], function ($mail) use ($temp, $user, $name) {
                $mail->to($user->email, $name);
                $mail->subject('Welcome to Tricomms | Tritek Consulting');
            });
        }

        return $this;
    }

    public function testMail()
    {
        $temp = MailTemplates::find(1);
        if ($temp) {
            $message = $temp->template;
            Mail::send('email', ['template' => $message], function ($mail) {
                $mail->to('ayoola@rainestech.com');
                $mail->subject('Tritek Test Mail');
            });
        }

        return $this;
    }

    public function addedToChannel($emails)
    {
        $temp = MailTemplates::where('name', 'channel_add')->first();
        if ($temp) {
            $message = $temp->template;
            Mail::send('email', ['template' => $message], function ($mail) use ($temp, $emails) {
                $mail->to($emails);
                $mail->subject('You have Added to a new Channel | Tricomms');
            });
        }

        return $this;
    }

    public function assignedTask($emails)
    {
        $temp = MailTemplates::where('name', 'task_assigned')->first();
        if ($temp) {
            $message = $temp->template;
            Mail::send('email', ['template' => $message], function ($mail) use ($temp, $emails) {
                $mail->to($emails);
                $mail->subject('You have a new Task | Tricomms');
            });
        }

        return $this;
    }

    public function newTask($emails)
    {
        $temp = MailTemplates::where('name', 'task_new')->first();
        if ($temp) {
            $message = $temp->template;
            Mail::send('email', ['template' => $message], function ($mail) use ($temp, $emails) {
                $mail->to($emails);
                $mail->subject('New Task Added to Your Channel | Tricomms');
            });
        }

        return $this;
    }

    public function newSchedule($emails)
    {
        $temp = MailTemplates::where('name', 'task_assigned')->first();
        if ($temp) {
            $message = $temp->template;
            Mail::send('email', ['template' => $message], function ($mail) use ($temp, $emails) {
                $mail->to($emails);
                $mail->subject('You have a new Schedule | Tricomms');
            });
        }

        return $this;
    }

    public function sendPasswordChange(Users $user)
    {
        $temp = MailTemplates::where('name', 'password')->first();
        if ($temp) {
            $message = $temp->template;
            $msg = str_replace('{{username}}', strtoupper($user->user_nicename), $message);
            Mail::send('email', ['template' => $msg], function ($mail) use ($temp, $user) {
                $mail->to($user->user_email, $user->user_nicename);
                $mail->subject('Tricomms Password Change');
            });
        }

        return $this;
    }
}
