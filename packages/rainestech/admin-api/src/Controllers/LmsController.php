<?php


namespace Rainestech\AdminApi\Controllers;


use Illuminate\Support\Facades\Http;
use Rainestech\AdminApi\Utils\LmsLogin;

class LmsController extends BaseApiController
{
    use LmsLogin;

    public function getUsers() {
        $ping = $this->ping();

        $response = Http::withToken($ping)->get($this->baseUrl . "/users");

        return $response->json();
    }
}
