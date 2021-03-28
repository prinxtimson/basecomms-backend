<?php


namespace Rainestech\Personnel\Controllers;

use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\Personnel\Entity\Channels;
use Rainestech\Personnel\Entity\Friends;
use Rainestech\Personnel\Requests\ChatFriendRequest;

class ChatController extends BaseApiController
{
    public function friends() {
        $resp = [];
        $friends = Friends::where('uId', auth('api')->id())->get();

        foreach ($friends as $friend) {
            $data = new \stdClass();
            $data->id = $friend->friend->id;
            $data->name = $friend->friend->name;
            $data->avatar = $friend->friend->passport ? route('fs.get.file', ['file' => $friend->friend->passport->link]) : '';

            $resp[] = $data;
        }

        return response()->json($resp);
    }

    public function saveFriends(ChatFriendRequest $request) {
        $friends = new Friends();
        $friends->uId = auth('api')->id();
        $friends->fId = $request->input('fId');
        $friends->save();

        return response()->json($friends);
    }

    public function contacts() {
        $resp = [];
        $userId = auth('api')->id();
//        $channels = Channels::whereHas('members', function ($q) use ($userId) {
//            $q->where('id', $userId);
//        })->get();
        foreach (Users::where('status', 1)->get() as $friend) {
                $data = new \stdClass();
                $data->id = $friend->id;
                $data->name = $friend->name;
                $data->avatar = $friend->passport ? route('fs.get.file', ['file' => $friend->passport->link]) : '';

                $resp[] = $data;
        }

//        foreach ($channels as $channel) {
//            foreach ($channel->members as $friend) {
//                if (array_search($friend->id, array_column($resp, 'id')) === false) {
//                    $data = new \stdClass();
//                    $data->id = $friend->id;
//                    $data->name = $friend->name;
//                    $data->avatar = $friend->passport ? route('fs.get.file', ['file' => $friend->passport->link]) : '';
//
//                    $resp[] = $data;
//                }
//            }
//        }

        return response()->json($resp);
    }
}
