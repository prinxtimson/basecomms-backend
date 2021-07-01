<?php
namespace Rainestech\AdminApi\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Rainestech\AdminApi\Errors\FormValidationErrors;

class SendMailRequest extends FormRequest {
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        $id = $this->request->get('id');

        switch($this->method()) {
            case 'GET':
            case 'DELETE': {
                return [];
            }
            case 'POST': {
                return [
                    'sentTo'  => 'required|between:3,250|string',
                    'subject'  => 'required|string',
                    'toValues.*.name'  => 'required|string',
                    'toValues.*.email'  => 'required|email',
                    'bcc'  => 'string',
                    'cc'  => 'string',
                    'template'  => 'required|string',
                    'json'  => 'required|string',
                    'status' => 'required|string'
                ];
            }
            case 'PUT':
            case 'PATCH': {
                return [
                    'id'    => 'required|integer|exists:notifications_mail_send,id',
                    'sentTo'  => 'required|between:3,250|string',
                    'subject'  => 'required|string',
                    'bcc'  => 'string',
                    'cc'  => 'string',
                    'template'  => 'required|string',
                    'json'  => 'required|string',
                    'status' => 'required|string'
                ];
            }
            default:{
                return [];
                break;
            }
        }
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    protected function failedValidation(Validator $validator) {
        throw new FormValidationErrors($validator);
    }
}
