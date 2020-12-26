<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\link_type;

class LinkTypeController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        $linkType =link_type::all();
        return view('backend.link_type')
                ->with('menus', $menus)
                ->with('linkType', $linkType);
    }
    public function save(Request $req)
    {
    	// dd($req->all());
    	$data = array(
    		'link_type' => $req->link_type
    		 );
    	link_type::insert($data);
    	return redirect('/social_link_type')->with('message', 'Social link saved successfully!');
    }
    public function update(Request $req)
    {
        // dd($req->all());
        $data = array(
            'link_type' => $req->link_type
             );
       link_type::where('id',$req->id)->update($data);
        return redirect('/social_link_type')->with('message', 'Social link updated successfully!');
    }
    public function active($id)
    {
        $data = array('status'=> 1);
       link_type::where('id', $id)->update($data);
        return redirect('/social_link_type')->with('message', 'Social link actived successfully!');
    }
    public function deactive($id)
    {
        $data = array('status'=> 0);
       link_type::where('id', $id)->update($data);
        return redirect('/social_link_type')->with('message', 'Social link deactived successfully!');
    }
    public function delete($id)
    {
       link_type::where('id', $id)->delete();
        return redirect('/social_link_type')->with('message', 'Social link deleted successfully!');
    }
}
