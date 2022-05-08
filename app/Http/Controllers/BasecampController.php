<?php

namespace App\Http\Controllers;

use App\Actions\Basecamp\Basecamp;
use Illuminate\Http\Request;

class BasecampController extends Controller
{
    
    public function projects()
    {
        $projects = Basecamp::getAllProjects();

        return $projects;
    }

    public function people($id)
    {
        $people = Basecamp::getPeopleOnProject($id);

        return $people;
    }

    public function getSchedules($id, $schedule_id)
    {
        $schedules = Basecamp::getProjectSchedules($id, $schedule_id);

        return $schedules;
    }
}
 