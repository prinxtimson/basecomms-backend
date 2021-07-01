<?php


namespace Rainestech\AdminApi\Controllers;


use Rainestech\AdminApi\Entity\SentMails;
use Rainestech\AdminApi\Requests\SendMailRequest;
use Rainestech\AdminApi\Utils\SendMail;

class SendMailController extends BaseApiController {
    use SendMail;

    public function index() {
        return response()->json(SentMails::all());
    }

    public function saveMail(SendMailRequest $request) {
        $temp = new SentMails($request->validated());
        $temp->toValues = json_encode($request->input('toValues'));
        $temp->totalRecipient = count($request->input('toValues'));
        $temp->save();

        if ($temp->status == 'send') {
            $this->send($temp);
            $temp->status = 'sent';
            $temp->update();
        }

        return response()->json($temp);
    }

    public function editMail(SendMailRequest $request) {
        if(!$temp = SentMails::find($request->get('id')))
            abort(404, 'E-Mail not found for edit');

        if ($temp->status == 'sent') {
            abort(422, 'Sent Emails can not be modified');
        }

        $temp->fill($request->except(['id', 'toValues']));
        $temp->toValues = json_encode($request->input('toValues'));
        $temp->totalRecipient = count($request->input('toValues'));

        $temp->save();

        if ($temp->status == 'send') {
            $this->send($temp);
            $temp->status = 'sent';
            $temp->update();
        }

        return response()->json($temp);
    }

    public function deleteMail($id) {
        if(!$temp = SentMails::find($id))
            abort(404, 'Mail not found for delete');

        $temp->delete();
        return response()->json($temp);
    }

    public function track($id) {
        $mail = SentMails::find($id);

        if ($mail) {
            $mail->totalOpen = $mail->totalOpen + 1;
            $mail->update();
        }

        $file = storage_path('app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'mytrk-min.png');

        $response = response()->file($file);
        if (ob_get_length()) ob_end_clean();
        return $response;
    }
}
