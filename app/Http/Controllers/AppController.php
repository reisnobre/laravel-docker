<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class AppController extends BaseController
{
    public function index()
    {
        return view('app');
    }
}
