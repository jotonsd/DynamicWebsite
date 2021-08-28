<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\address;

class AddressController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        $address =address::all();
        return view('backend.address')
                ->with('menus', $menus)
                ->with('address', $address);
    }
    public function save(Request $req)
    {
    	// dd($req->all());
    	$data = array(
    		'house' => $req->house,
    		'road' => $req->road,
    		'division' => $req->division,
    		'postalcode' => $req->postalcode,
    		'email' => $req->email,
    		'status' =>0,
    		 );
    	address::insert($data);
    	return redirect('/address')->with('message', 'Address saved successfully!');
    }
    public function update(Request $req)
    {
        // dd($req->all());
        $data = array(
    		'house' => $req->house,
    		'road' => $req->road,
    		'division' => $req->division,
    		'postalcode' => $req->postalcode,
    		'email' => $req->email,
             );
       address::where('id',$req->id)->update($data);
        return redirect('/address')->with('message', 'Address updated successfully!');
    }
    public function active($id)
    {
        $data = array('status'=> 1);
       address::where('id', $id)->update($data);
        return redirect('/address')->with('message', 'Address actived successfully!');
    }
    public function deactive($id)
    {
        $data = array('status'=> 0);
       address::where('id', $id)->update($data);
        return redirect('/address')->with('message', 'Address deactived successfully!');
    }
    public function delete($id)
    {
       address::where('id', $id)->delete();
        return redirect('/address')->with('message', 'Address deleted successfully!');
    }
}
