<?php


namespace Rainestech\Personnel\Requests;


use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Rainestech\AdminApi\Errors\FormValidationErrors;

class CommentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        $id = request('id');

        switch($this->method()) {
            case 'GET':
            case 'DELETE': {
                return [];
            }
            case 'PUT':
            case 'PATCH':
            case 'POST': {
                return [
                    'id'  => 'integer|exists:profiles_channels,id',
                    'task.id'  => 'integer|exists:tasks_tasks,id',
                    'schedule.id'  => 'integer|exists:profiles_calendar,id',
                    'channel.id'  => 'integer|exists:profiles_channels,id',
                    'comment'  => 'required|string',
                    'file.id'  => 'integer|exists:file_storage,id',
                ];
            }

            default:break;
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
