<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\logo;

class LogoController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        $Logo = logo::all();
        return view('backend.logos')
                ->with('menus', $menus)
                ->with('Logo', $Logo);
    }
    public function save_logo(Request $req)
    {
    	// dd($req->all());
    	$req->validate([
			'company_name' => 'required',
			'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
			]);
			if ($files = $req->file('logo')) {
			$destinationPath = 'image/logos/'; // upload path
			$logo = date('YmdHis') . "." . $files->getClientOriginalExtension();
			$files->move($destinationPath, $logo);
	    	$data = array(
	    		'company_name' => $req->company_name,
	    		'logo' => $logo,
	    		'status' => 0,
	    		 );
	    	logo::insert($data);
	    	return redirect('/upload_logo')->with('message', 'Logo saved successfully!');
	    }
	}
	public function update_logo(Request $req)
    {
    	// dd($req->all());
    	$req->validate([
			'company_name' => 'required',
			]);
			if ($files = $req->file('logo')) {
			$destinationPath = 'image/logos/'; // upload path
			$logo = date('YmdHis') . "." . $files->getClientOriginalExtension();
			$files->move($destinationPath, $logo);
	    	$data = array(
	    		'company_name' => $req->company_name,
	    		'logo' => $logo,
	    		 );
	    }else{
	    	$data = array(
	    		'company_name' => $req->company_name,
	    		 );
	    }
	    
	    	logo::where('id',$req->id)->update($data);
	    	return redirect('/upload_logo')->with('message', 'Logo updated successfully!');
	}
	public function active($id)
    {
        $data = array('status'=> 1);
        logo::where('id', $id)->update($data);
        return redirect('/upload_logo')->with('message', 'Logo actived successfully!');
    }
    public function deactive($id)
    {
        $data = array('status'=> 0);
        logo::where('id', $id)->update($data);
        return redirect('/upload_logo')->with('message', 'Logo deactived successfully!');
    }
    public function delete($id)
    {
        logo::where('id', $id)->delete();
        return redirect('/upload_logo')->with('message', 'Logo deleted successfully!');
    }
}
