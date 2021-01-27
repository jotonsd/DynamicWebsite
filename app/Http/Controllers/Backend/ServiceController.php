<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\service;
use App\Models\Menu;

class ServiceController extends Controller
{
    public function why_us()
    {
        $menus = Menu::all();
        $service = service::where('categories_id',1)->get();
        return view('backend.why_us')
                ->with('menus', $menus)
                ->with('service', $service);
    }
    public function services()
    {
        $menus = Menu::all();
        $service = service::where('categories_id',2)->get();
        return view('backend.services')
                ->with('menus', $menus)
                ->with('service', $service);
    }
    public function products()
    {
        $menus = Menu::all();
        $service = service::where('categories_id',3)->get();
        return view('backend.products')
                ->with('menus', $menus)
                ->with('service', $service);
    }
    public function about()
    {
        $menus = Menu::all();
        $service = service::where('categories_id',4)->get();
        return view('backend.about')
                ->with('menus', $menus)
                ->with('service', $service);
    }
    public function upcoming_products()
    {
        $menus = Menu::all();
        $service = service::where('categories_id',5)->get();
        return view('backend.upcoming_products')
                ->with('menus', $menus)
                ->with('service', $service);
    }
    public function save(Request $req)
    {
    	// dd($req->all());
    	$req->validate([
			'title' => 'required',
			'description' => 'required',
			'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
			]);
    	$categories_id = $req->categories_id;
			if ($files = $req->file('image')) {
			$destinationPath = 'image/services/'; // upload path
			$services = date('YmdHis') . "." . $files->getClientOriginalExtension();
			$files->move($destinationPath, $services);
	    	$data = array(
	    		'title' => $req->title,
	    		'categories_id' => $req->categories_id,
	    		'description' => $req->description,
	    		'image' => $services,
	    		'status' => 0,
	    		 );
	    	service::insert($data);
	    	if ( $categories_id == 1) {
	    		return redirect('/why_us')->with('message', 'Updated successfully!');
	    	} else if ( $categories_id == 2) {
	    		return redirect('/services')->with('message', 'Updated successfully!');
	    	} else if ( $categories_id == 3) {
	    		return redirect('/products')->with('message', 'Updated successfully!');
	    	} else if ( $categories_id == 4) {
	    		return redirect('/about')->with('message', 'Updated successfully!');
	    	} else{
	    		return redirect('/upcoming_products')->with('message', 'Updated successfully!');
	    	}
	    	
	    }
	}
	public function update(Request $req)
    {
    	// dd($req->all());
    	$req->validate([
			'description' => 'required',
			]);
    	$categories_id = $req->categories_id;
			if ($files = $req->file('image')) {
			$destinationPath = 'image/logos/'; // upload path
			$image = date('YmdHis') . "." . $files->getClientOriginalExtension();
			$files->move($destinationPath, $image);
	    	$data = array(
	    		'title' => $req->title,
	    		'categories_id' => $req->categories_id,
	    		'description' => $req->description,
	    		'image' => $services,
	    		 );
	    }else{
	    	$data = array(
	    		'title' => $req->title,
	    		'categories_id' => $req->categories_id,
	    		'description' => $req->description,
	    		 );
	    }
	    
	    	service::where('id',$req->id)->update($data);

	    	if ( $categories_id == 1) {
	    		return redirect('/why_us')->with('message', 'Updated successfully!');
	    	} else if ( $categories_id == 2) {
	    		return redirect('/services')->with('message', 'Updated successfully!');
	    	} else if ( $categories_id == 3) {
	    		return redirect('/products')->with('message', 'Updated successfully!');
	    	} else if ( $categories_id == 4) {
	    		return redirect('/about')->with('message', 'Updated successfully!');
	    	} else{
	    		return redirect('/upcoming_products')->with('message', 'Updated successfully!');
	    	}
	}
	public function active($id)
    {
    	$categories = service::select('categories_id')->where('id',$id)->first();
    	$categories_id = $categories->categories_id;
        $data = array('status'=> 1);
        service::where('id', $id)->update($data);
        if ( $categories_id == 1) {
    		return redirect('/why_us')->with('message', 'Actived successfully!');
    	} else if ( $categories_id == 2) {
    		return redirect('/services')->with('message', 'Actived successfully!');
    	} else if ( $categories_id == 3) {
    		return redirect('/products')->with('message', 'Actived successfully!');
    	} else if ( $categories_id == 4) {
    		return redirect('/about')->with('message', 'Actived successfully!');
    	} else{
    		return redirect('/upcoming_products')->with('message', 'Actived successfully!');
    	}
    }
    public function deactive($id)
    {
    	$categories = service::select('categories_id')->where('id',$id)->first();
    	$categories_id = $categories->categories_id;
        $data = array('status'=> 0);
        service::where('id', $id)->update($data);
        if ( $categories_id == 1) {
    		return redirect('/why_us')->with('message', 'Deactived successfully!');
    	} else if ( $categories_id == 2) {
    		return redirect('/services')->with('message', 'Deactived successfully!');
    	} else if ( $categories_id == 3) {
    		return redirect('/products')->with('message', 'Deactived successfully!');
    	} else if ( $categories_id == 4) {
    		return redirect('/about')->with('message', 'Deactived successfully!');
    	} else{
    		return redirect('/upcoming_products')->with('message', 'Deactived successfully!');
    	}
    }
    public function delete($id)
    {
    	$categories = service::select('categories_id')->where('id',$id)->first();
    	$categories_id = $categories->categories_id;
        service::where('id', $id)->delete();
        if ( $categories_id == 1) {
    		return redirect('/why_us')->with('message', 'Deleted successfully!');
    	} else if ( $categories_id == 2) {
    		return redirect('/services')->with('message', 'Deleted successfully!');
    	} else if ( $categories_id == 3) {
    		return redirect('/products')->with('message', 'Deleted successfully!');
    	} else if ( $categories_id == 4) {
    		return redirect('/about')->with('message', 'Deleted successfully!');
    	} else{
    		return redirect('/upcoming_products')->with('message', 'Deleted successfully!');
    	}
    }
}
