<?php

namespace Rainestech\Personnel\Controllers;

use Carbon\Carbon;
use Rainestech\Personnel\Entity\Calendar;
use Rainestech\Personnel\Entity\Channels;
use Rainestech\Tasks\Entity\Tasks;

class DashboardController {
    public function getDashboard() {
        $resp = [];
        $resp['channels'] = Channels::all()->map(function ($channel) {
            return collect(
                [
                    'id' => $channel->id,
                    'name' => $channel->name,
                    'members' => $channel->members->count(),
                ]);
        });;

        $resp['tasks'] = Tasks::all()->map(function ($task) {
            return collect(
                [
                    'name' => $task->name,
                    'taskNo' => $task->taskNo,
                    'channel' => $task->channelName,
                    'tab' => $task->tab,
                    'priority' => $task->priority,
                    'dueDate' => $task->dueDate,
                    'doneDate' => $task->doneDate,
                    'createdAt' => $task->created_at,
                    'assignee' => $task->assignedTo->count(),
                ]);
        });

        $resp['schedule'] = Calendar::whereDate('calDate', '>=', Carbon::now())->get()->map(function ($cal) {
            return collect(
                [
                    'name' => $cal->name,
                    'channel' => $cal->channel->name,
                    'date' => $cal->calDate,
                    'editor' => $cal->user->name,
                    'followers' => $cal->channel->members->count(),
                ]);
        });

        return response()->json($resp);
    }
}
