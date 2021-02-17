<?php

namespace Rainestech\AdminApi\Utils;

use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Rainestech\AdminApi\Entity\Roles;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\AdminApi\Notifications\EmailVerification;
use Rainestech\AdminApi\Requests\RegistrationRequest;
use Rainestech\AdminApi\Requests\UsersRequest;

trait Register {

    /**
     * Handle a registration request for the application.
     *
     * @param UsersRequest $request
     * @return JsonResponse|Response
     */
    public function register(UsersRequest $request) {
        event(new Registered($user = $this->create($request->all(), true)));

        $role = Roles::where('role', 'RECRUITER')->first();
        if ($role) {
            $user->roles()->attach($role->id);
        }

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        return new Response('', 201);
    }

    /**
     * Handle a registration request for quest registration
     *
     * @param UsersRequest $request
     * @return JsonResponse|Response
     */
    public function registerVerify(RegistrationRequest $request)
    {
        event(new Registered($user = $this->create($request->all(), false)));
        $notification = new EmailVerification();
        $notification->sendVerification($user);

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        return new Response('', 201);
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('api');
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @param bool $status
     * @return Users
     */
    protected function create(array $data, bool $status)
    {
        return Users::create([
            'username' => $data['username'],
            'companyName' => $data['companyName'],
            'status' => $status,
            'adminVerified' => false,
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function registered(Request $request, $user) {
        return response()->json($user);
    }
}