<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\Permission;
use Auth;
use Session;

class HomeController extends Controller 
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        $menus = Menu::all();
       
        return view('backend.home')
                    ->with('menus',$menus);
    }

    public function log_out()
    {
        Session::flush();
        return redirect('/login');
    }

    
}
