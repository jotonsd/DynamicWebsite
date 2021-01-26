<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\slider;
use App\Models\service;

class HomeController extends Controller
{
    public function index()
    {
    	$slider = slider::where('status',1)->orderBy('id', 'DESC')->get();
    	$whyus = service::where('status',1)->where('categories_id',1)->get();
        return view('frontend.home')
        		->with('slider',$slider)
        		->with('whyus',$whyus);
    }
}
