<?php

namespace App\Actions\Basecamp;

use Exception;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\Response;

class Basecamp 
{

  protected $access_token;

  protected $refresh_token;

  protected $client_id;

  protected $client_secret;

  public function __construct()
  {
    $this->client_id = env('BASECAMP_CLIENT_ID');
    $this->client_secret = env('BASECAMP_CLIENT_SECRET');
    $this->access_token = config('app.basecamp_token');
    $this->refresh_token = env('BASECAMP_REFRESH_TOKEN');
    $this->getToken();
    $this->setRequestOptions();
  }

  public function getToken()
  {
    $auth = Http::withHeaders(['User-Agent'=> 'developertritek@gmail.com'])->withToken($this->access_token)->get('https://launchpad.37signals.com/authorization.json');

    if($auth->clientError()){
      $res = Http::post('https://launchpad.37signals.com/authorization/token?type=refresh&refresh_token='.$this->refresh_token.'&client_id='.$this->client_id.'&redirect_uri=your-redirect-uri&client_secret='.$this->client_secret)->json();

      $this->access_token = $res['access_token'];

      config(['app.basecamp_token' => $res['access_token']]);
    }
  }

      /**
     * Set options for making the Client request
     */
    private function setRequestOptions()
    {
        $authBearer = 'Bearer '. $this->access_token;
        $this->client = new Client(
            [
                'base_uri' => 'https://3.basecampapi.com/3950847',
                'verify' => false,
                'headers' => [
                    'Authorization' => $authBearer,
                    'Content-Type'  => 'application/json',
                    'Accept'        => 'application/json',
                    'User-Agent'    => 'developertritek@gmail.com'
                ]
            ]
        );
    }

        /**
     * @param string $relativeUrl
     * @param string $method
     * @param array $body
     * @return Paystack
     * @throws Exception
     */
    private function setHttpResponse($relativeUrl, $method, $body = [])
    {
        if (is_null($method)) {
            throw new Exception("Empty method not allowed");
        }
        $this->response = $this->client->{strtolower($method)}(
            'https://3.basecampapi.com/3950847' . $relativeUrl,
            ["body" => json_encode($body)]
        );
        return $this;
    }

    /**
     * Get the whole response from a get operation
     * @return array
     */
    private function getResponse()
    {
        return json_decode($this->response->getBody(), true);
    }

  public function getAllProjects()
  {
    return (new self)->setHttpResponse('/projects.json', 'GET')->getResponse();
  }

  public function getPeopleOnProject($id)
  {
    return (new self)->setHttpResponse('/projects'.'/'.$id.'/people.json', 'GET')->getResponse();
  }

  public function getProjectSchedules($id, $schedule_id)
  {
    return (new self)->setHttpResponse('/buckets'.'/'.$id.'/schedules'.'/'.$schedule_id.'/entries.json', 'GET')->getResponse();
  }

}