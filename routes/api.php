<?php

use App\Http\Controllers\BasecampController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'basecamp'], function() {
    Route::get('projects', [BasecampController::class, 'projects']);
    Route::get('projects/{id}/people', [BasecampController::class, 'people']);
    Route::get('projects/{id}/schedules/{schedule_id}', [BasecampController::class, 'getSchedules']);
});