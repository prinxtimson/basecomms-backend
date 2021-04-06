<?php

namespace Rainestech\Personnel\Controllers;

use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\Personnel\Entity\Profile;
use Rainestech\Personnel\Requests\CandidatesRequest;

class ProfileController extends BaseApiController {
    public function candidates() {
        return response()->json(Profile::all());
    }

    public function getMyProfile() {
        $user = auth('api')->user();

        if (!$p = Profile::with('docs', 'user')->where('userId', auth('api')->id())->first()) {
            if (!$p = Profile::where('email', $user->email)->orderBy('id', 'desc')->first()) {
                abort(404, 'Profile Record Not Found!');
            } else {
                $p->userId = $user->id;
                $p->save();
                $p->loadWith(['docs', 'user']);

                if ($user->avatar) {
                    $user->avatar = $p->avatar;
                    $user->save();
                }
            }
        }

        return response()->json($p);
    }

    public function getCandidateByUserId($id) {
        if (!$p = Profile::with('docs', 'channels', 'user')->where('userId', $id)->first()) {
            if ($user = Users::find($id)) {
                if (!$p = Profile::where('email', $user->email)->orderBy('id', 'desc')->first()) {
                    abort(404, 'Profile Record Not Found!');
                } else {
                    $p->userId = $id;
                    $p->save();
                    $p->loadWith(['docs', 'channels', 'user']);
                }
            } else {
                abort(404, 'Profile Not Found!');
            }
        }

        return response()->json($p);
    }

    public function saveCandidate(CandidatesRequest $request)
    {
        if ($request->has('id')) {
            return $this->updateCandidate($request);
        }

        $pID = $request->input('user.id');
        if (Profile::where('userId', $pID)->exists())
            abort(400, 'Record Exists for selected candidate. Edit Record instead.');

        $candida = new Profile($request->except(['user']));
        $candida->userId = $request->input('user.id');
        $candida->save();

        return response()->json($candida);
    }

    public function updateCandidate(CandidatesRequest $request) {
        if (!$candidates = Profile::find($request->input('id')))
            abort(404, 'Record Not Found for Update');

        $candidates->fill($request->except(['user', 'id']));
        $candidates->userId = $request->input('user.id');
        $candidates->update();

        return response()->json(Profile::with('user')
            ->where('id', $candidates->id)
            ->first());
    }
}
