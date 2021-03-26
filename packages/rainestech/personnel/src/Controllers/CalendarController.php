<?php


namespace Rainestech\Personnel\Controllers;


use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\Personnel\Entity\Calendar;
use Rainestech\Personnel\Entity\Channels;
use Rainestech\Personnel\Requests\CalendarRequest;
use Rainestech\Personnel\Requests\ChannelRequest;

class CalendarController extends BaseApiController
{
    public function index($channelId) {
        return response()->json(Calendar::where('channelId', $channelId)->get());
    }

    public function save(CalendarRequest $request) {
        $calendar = new Calendar($request->except(['id', 'channel']));
        $calendar->channelId = $request->input('channel.id');
        $calendar->save();
        $calendar->load('channel');

        return response()->json($calendar);
    }

    public function update(CalendarRequest $request) {
        if (!$calendar = Calendar::find($request->input('id'))) {
            return $this->jsonError(404, 'Resource not found!');
        }

        $calendar->fill($request->except(['id', 'calendar']));
        $calendar->channelId = $request->input('channel.id');
        $calendar->save();

        $calendar->load('channel');
        return response()->json($calendar);
    }

    public function deleteCalendar($id) {
        if (!$calendar = Calendar::find($id)) {
            return $this->jsonError(404, 'Resource not found');
        }

        $calendar->delete();
        return response()->json([]);
    }
}
