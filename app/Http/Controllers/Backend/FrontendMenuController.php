<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\fmenu;

class FrontendMenuController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        $fmenu = fmenu::all();
        return view('backend.frontend_menu')
                ->with('menus', $menus)
                ->with('fmenu', $fmenu);
    }
    public function active($id)
    {
        $data = array('status'=> 1);
        fmenu::where('id', $id)->update($data);
        return redirect('/frontend_menu');
    }
    public function deactive($id)
    {
        $data = array('status'=> 0);
        fmenu::where('id', $id)->update($data);
        return redirect('/frontend_menu');
    }

}
