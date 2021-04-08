<?php


namespace Rainestech\Personnel\Controllers;


use App\Models\User;
use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\AdminApi\Utils\EmailNotifications;
use Rainestech\Personnel\Entity\Channels;
use Rainestech\Personnel\Requests\ChannelRequest;

class ChannelController extends BaseApiController
{
    public function index() {
        return response()->json(Channels::where('parentId', null)->orderby('id', 'desc')->get());
    }

    public function getChannel($id) {
        $channel = Channels::find($id);

        if (!$channel) {
            return $this->jsonError(404, 'Channel Not Found');
        }

        return response()->json($channel);
    }

    public function saveChannel(ChannelRequest $request) {
        if (auth('api')->user()->role == 'CANDIDATES') {
            return $this->jsonError(401, 'Unauthorized Operation');
        }

        $channel = new Channels();
        $channel->fill($request->except(['leader', 'members']));

        if ($request->input('leader.id')) {
            $channel->leaderId = $request->input('leader.id');
        }

        $channel->save();

        $mails = [];
        foreach ($request->get('members') as $p) {
            $channel->members()->attach($p['id']);
            $mails[$p->email] = $p->name;
        }

        $email = new EmailNotifications();
        $email->addedToChannel($mails);

        $channel->refresh();
        return response()->json($channel);
    }

    public function editChannel(ChannelRequest $request) {
        if (auth('api')->user()->role == 'CANDIDATES') {
            return $this->jsonError(401, 'Unauthorized Operation');
        }

        $channel = Channels::find($request->input('id'));

        if (!$channel) {
            return $this->jsonError(404, 'Channel not Found');
        }

        $dbMembers = $channel->members;

        $channel->fill($request->except(['leader', 'members', 'id']));

        if ($request->input('leader.id')) {
            $channel->leaderId = $request->input('leader.id');
        }

        $channel->update();
        foreach ($dbMembers as $m) {
            $channel->members()->detach($m->id);
        }

        $mails = [];
        foreach ($request->get('members') as $p) {
            $channel->members()->attach($p['id']);

            if (!$temp = $dbMembers->find($p['id'])) {
                $temp = Users::find($p['id']);
                $mails[$temp->email] = $temp->name;
            }
        }

        if (count($mails) > 0) {
            $email = new EmailNotifications();
            $email->addedToChannel($mails);
        }

        $channel->refresh();
        return response()->json($channel);
    }

    public function delete($id) {
        $channel = Channels::find($id);

        if (!$channel) {
            return $this->jsonError(404, 'Channel not Found');
        }

        $dbMembers = $channel->members;

        foreach ($dbMembers as $m) {
            $channel->members()->detach($m->id);
        }

        $channel->delete();
        return response()->json([]);
    }

    public function myChannels() {
        $userId = auth('api')->id();

        $channels = Channels::whereHas('members', function ($q) use ($userId) {
            $q->where('id', $userId);
        })->get();

        return response()->json($channels);
    }
}
