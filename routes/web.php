<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'App\Http\Controllers\Frontend\HomeController@index');

Auth::routes();
Route::group(['middleware' => 'auth'], function () {

Route::get('/home', 'App\Http\Controllers\HomeController@index')->name('home');
Route::get('/log_out', 'App\Http\Controllers\HomeController@log_out')->name('log_out');

//Security
//user permission
Route::get('/user_permission', 'App\Http\Controllers\Backend\Security\UserPermissionController@index')->name('user_permission');
Route::post('/user_permission/save_data', 'App\Http\Controllers\Backend\Security\UserPermissionController@save_data');
Route::post('/user_permission/delete_data', 'App\Http\Controllers\Backend\Security\UserPermissionController@delete_data');

// frontend menu
Route::get('/frontend_menu', 'App\Http\Controllers\Backend\FrontendMenuController@index');
Route::get('/frontend_menu/active{id}', 'App\Http\Controllers\Backend\FrontendMenuController@active');
Route::get('/frontend_menu/deactive{id}', 'App\Http\Controllers\Backend\FrontendMenuController@deactive');

});