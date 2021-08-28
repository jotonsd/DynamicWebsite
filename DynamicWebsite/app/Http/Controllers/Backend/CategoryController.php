<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\category;

class CategoryController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        $category = category::all();
        return view('backend.category')
                ->with('menus', $menus)
                ->with('category', $category);
    }
    public function save_category(Request $req)
    {
    	// dd($req->all());
    	$data = array(
    		'category_type' => $req->name
    		 );
    	category::insert($data);
    	return redirect('/categories')->with('message', 'Category saved successfully!');
    }
    public function update_category(Request $req)
    {
        // dd($req->all());
        $data = array(
            'category_type' => $req->name
             );
        category::where('id',$req->id)->update($data);
        return redirect('/categories')->with('message', 'Category updated successfully!');
    }
    public function active($id)
    {
        $data = array('status'=> 1);
        category::where('id', $id)->update($data);
        return redirect('/categories')->with('message', 'Category actived successfully!');
    }
    public function deactive($id)
    {
        $data = array('status'=> 0);
        category::where('id', $id)->update($data);
        return redirect('/categories')->with('message', 'Category deactived successfully!');
    }
    public function delete_category($id)
    {
        category::where('id', $id)->delete();
        return redirect('/categories')->with('message', 'Category deleted successfully!');
    }
}
