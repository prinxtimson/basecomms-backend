<?php


namespace Rainestech\Personnel\Controllers;


use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Requests\StorageRequest;
use Rainestech\AdminApi\Utils\LocalStorage;
use Rainestech\Personnel\Requests\CommentRequest;
use Rainestech\Tasks\Entity\Comments;

class CommentsController extends BaseApiController
{
    use LocalStorage;

    public function saveComments(CommentRequest $request) {
        $comment = new Comments();
        $comment->fill($request->except(['schedule', 'task']));

        if ($request->input('task.id')) {
            $comment->taskId = $request->input('task.id');
        } else if ($request->input('schedule.id')) {
            $comment->scheduleId = $request->input('schedule.id');
        } else if ($request->input('channel.id')) {
            $comment->channelId = $request->input('schedule.id');
        } else {
            return $this->jsonError(422, 'Comment Precondition failed');
        }

        if ($request->has('file')) {
            $comment->fileId = $request->input('file.id');
        }

        $comment->save();
        $comment->loadWith();

        return response()->json($comment);
    }

    public function deleteComment($id) {
        if (!$comment = Comments::find($id)) {
            return $this->jsonError(404, 'Comment Not Found');
        }

        $comment->delete();
        return response()->json([]);
    }
}
