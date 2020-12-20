<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Permission;
use DB;
use Auth;

class Menus extends Model
{
    use HasFactory;
    protected $table = 'menus';

    public function childs() {

    	 $permission = Permission::all()->where('permit','=',1)->where('user_id', '=',  Auth::user()->id);
        $subset = $permission->map(function ($permission) {
            return collect($permission->toArray())
                ->only(['menu_id'])
                ->all();
        });
        return $this->hasMany('App\Models\Menus','parent_id','id')->whereIn('id', $subset);
	}
}
