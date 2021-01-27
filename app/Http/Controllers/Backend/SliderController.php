<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\slider;
use App\Models\Menu;


class SliderController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        $slider = slider::all();
        return view('backend.slider')
                ->with('menus', $menus)
                ->with('slider', $slider);
    }
    public function save(Request $req)
    {
    	// dd($req->all());
    	$req->validate([
			'description' => 'required',
			'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
			]);
			if ($files = $req->file('image')) {
			$destinationPath = 'image/sliders/'; // upload path
			$sliders = date('YmdHis') . "." . $files->getClientOriginalExtension();
			$files->move($destinationPath, $sliders);
	    	$data = array(
	    		'description' => $req->description,
	    		'image' => $sliders,
	    		'status' => 0,
	    		 );
	    	slider::insert($data);
	    	return redirect('/upload_slider')->with('message', 'Slider saved successfully!');
	    }
	}
	public function update(Request $req)
    {
    	// dd($req->all());
    	$req->validate([
			'description' => 'required',
			]);
			if ($files = $req->file('image')) {
			$destinationPath = 'image/logos/'; // upload path
			$image = date('YmdHis') . "." . $files->getClientOriginalExtension();
			$files->move($destinationPath, $image);
	    	$data = array(
	    		'description' => $req->description,
	    		'image' => $image,
	    		 );
	    }else{
	    	$data = array(
	    		'description' => $req->description,
	    		 );
	    }
	    
	    	slider::where('id',$req->id)->update($data);
	    	return redirect('/upload_slider')->with('message', 'Slider updated successfully!');
	}
	public function active($id)
    {
        $data = array('status'=> 1);
        slider::where('id', $id)->update($data);
        return redirect('/upload_slider')->with('message', 'Slider actived successfully!');
    }
    public function deactive($id)
    {
        $data = array('status'=> 0);
        slider::where('id', $id)->update($data);
        return redirect('/upload_slider')->with('message', 'Slider deactived successfully!');
    }
    public function delete($id)
    {
        slider::where('id', $id)->delete();
        return redirect('/upload_slider')->with('message', 'Slider deleted successfully!');
    }
}
