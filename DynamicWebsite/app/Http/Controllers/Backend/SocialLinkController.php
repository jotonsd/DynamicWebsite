<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\social_link;
use App\Models\link_type;

class SocialLinkController extends Controller
{
     public function index()
    {
        $menus = Menu::all();
        $social_link =social_link::select('social_links.*', 'link_types.link_type')->join('link_types', 'link_types.id', 'social_links.link_type_id')->get();
        $link_type =link_type::all();
        return view('backend.social_link')
                ->with('menus', $menus)
                ->with('social_link', $social_link)
                ->with('link_type', $link_type);
    }
    public function save(Request $req)
    {
    	// dd($req->all());
    	$data = array(
    		'link_type_id' => $req->link_type_id,
    		'url' => $req->url,
    		'status' => 0
    		 );
    	social_link::insert($data);
    	return redirect('/social_links')->with('message', 'Social link saved successfully!');
    }
    public function update(Request $req)
    {
        // dd($req->all());
        $data = array(
    		'link_type_id' => $req->link_type_id,
    		'url' => $req->url,
             );
       social_link::where('id',$req->id)->update($data);
        return redirect('/social_links')->with('message', 'Social link updated successfully!');
    }
    public function active($id)
    {
        $data = array('status'=> 1);
       social_link::where('id', $id)->update($data);
        return redirect('/social_links')->with('message', 'Social link actived successfully!');
    }
    public function deactive($id)
    {
        $data = array('status'=> 0);
       social_link::where('id', $id)->update($data);
        return redirect('/social_links')->with('message', 'Social link deactived successfully!');
    }
    public function delete($id)
    {
       social_link::where('id', $id)->delete();
        return redirect('/social_links')->with('message', 'Social link deleted successfully!');
    }
}
