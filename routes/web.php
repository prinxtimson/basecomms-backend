<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Rainestech\AdminApi\Controllers\SendMailController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/ping', [Controller::class, 'testPing'])->name('ping');
Route::get('/trkem/{id}', [SendMailController::class, 'track.email'])->name('track');
