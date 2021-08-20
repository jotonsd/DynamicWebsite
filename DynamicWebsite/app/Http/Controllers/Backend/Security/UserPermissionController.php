<?php

namespace App\Http\Controllers\Backend\Security;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menus;
use App\Models\User;
use App\Models\VWUserPermission;
use App\Models\Permission;
use Auth;


class UserPermissionController extends Controller
{
    public function index()
    {
        $permission = Permission::all()->where('permit','=',1)->where('user_id', '=', Auth::user()->id);
        //dd($permission);
        $subset = $permission->map(function ($order) {
                    return collect($order->toArray())
                        ->only(['menu_id'])
                        ->all();
                });
        //dd($subset);
        $menus = Menus::where('parent_id', '=', 0)->whereIn('id',$subset)->get();
    	$menu = Menus::where('parent_id', 0)->get();
    	$user = User::all();
    	$submenu = Menus::all();
    	$vwuserpermission = VWUserPermission::all();

    	return view('backend.security.user_permission')
    				->with('menus',$menus)
    				->with('user',$user)
    				->with('menu',$menu)
    				->with('submenu',$submenu)
    				->with('vwuserpermission',$vwuserpermission);
    }

    public function save_data(Request $request)
    {
    	$user_id = $request->input('userID');
        $menu_id = $request->input('MenuID');
        $data = array(
            'user_id' => $user_id,
            'menu_id' => $menu_id,
            'permit' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        );

        //dd($data);
        if($user_id != '')
        {
            $value = Permission::insertGetId($data);
            if($value)
            {
                echo $value;
            }
            else 
            {
                return 'Same data can not allowed.';
            }
        }
    }

    public function delete_data(Request $request)
    {
        $id = $request->input('id');
        $user_id = $request->input('user_id');


        if($user_id != ''){
            $value = Permission::where('menu_id',$id)->where('user_id',$user_id)->delete();
            echo $value;
        }
    }
}
