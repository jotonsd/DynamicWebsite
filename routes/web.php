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

// Category
Route::get('/categories', 'App\Http\Controllers\Backend\CategoryController@index');
Route::post('/save_category', 'App\Http\Controllers\Backend\CategoryController@save_category');
Route::post('/update_category', 'App\Http\Controllers\Backend\CategoryController@update_category');
Route::get('/categories/active{id}', 'App\Http\Controllers\Backend\CategoryController@active');
Route::get('/categories/deactive{id}', 'App\Http\Controllers\Backend\CategoryController@deactive');
Route::get('/delete_category{id}', 'App\Http\Controllers\Backend\CategoryController@delete_category');

//logo
Route::get('/upload_logo', 'App\Http\Controllers\Backend\LogoController@index');
Route::post('/save_logo', 'App\Http\Controllers\Backend\LogoController@save_logo');
Route::post('/update_logo', 'App\Http\Controllers\Backend\LogoController@update_logo');
Route::get('/logos/active{id}', 'App\Http\Controllers\Backend\LogoController@active');
Route::get('/logos/deactive{id}', 'App\Http\Controllers\Backend\LogoController@deactive');
Route::get('/delete_logo{id}', 'App\Http\Controllers\Backend\LogoController@delete');

// slider
Route::get('/upload_slider', 'App\Http\Controllers\Backend\SliderController@index');
Route::post('/save_slider', 'App\Http\Controllers\Backend\SliderController@save');
Route::post('/update_slider', 'App\Http\Controllers\Backend\SliderController@update');
Route::get('/sliders/active{id}', 'App\Http\Controllers\Backend\SliderController@active');
Route::get('/sliders/deactive{id}', 'App\Http\Controllers\Backend\SliderController@deactive');
Route::get('/delete_slider{id}', 'App\Http\Controllers\Backend\SliderController@delete');

// social link type
Route::get('/social_link_type', 'App\Http\Controllers\Backend\LinkTypeController@index');
Route::post('/save_social_link_type', 'App\Http\Controllers\Backend\LinkTypeController@save');
Route::post('/update_social_link_type', 'App\Http\Controllers\Backend\LinkTypeController@update');
Route::get('/social_link_type/active{id}', 'App\Http\Controllers\Backend\LinkTypeController@active');
Route::get('/social_link_type/deactive{id}', 'App\Http\Controllers\Backend\LinkTypeController@deactive');
Route::get('/delete_social_link_type{id}', 'App\Http\Controllers\Backend\LinkTypeController@delete');

// social link
Route::get('/social_links', 'App\Http\Controllers\Backend\SocialLinkController@index');
Route::post('/save_social_links', 'App\Http\Controllers\Backend\SocialLinkController@save');
Route::post('/update_social_links', 'App\Http\Controllers\Backend\SocialLinkController@update');
Route::get('/social_links/active{id}', 'App\Http\Controllers\Backend\SocialLinkController@active');
Route::get('/social_links/deactive{id}', 'App\Http\Controllers\Backend\SocialLinkController@deactive');
Route::get('/delete_social_links{id}', 'App\Http\Controllers\Backend\SocialLinkController@delete');\

// address
Route::get('/address', 'App\Http\Controllers\Backend\AddressController@index');
Route::post('/save_address', 'App\Http\Controllers\Backend\AddressController@save');
Route::post('/update_address', 'App\Http\Controllers\Backend\AddressController@update');
Route::get('/address/active{id}', 'App\Http\Controllers\Backend\AddressController@active');
Route::get('/address/deactive{id}', 'App\Http\Controllers\Backend\AddressController@deactive');
Route::get('/delete_address{id}', 'App\Http\Controllers\Backend\AddressController@delete');

// Why us
Route::get('/why_us', 'App\Http\Controllers\Backend\ServiceController@why_us');
Route::get('/services', 'App\Http\Controllers\Backend\ServiceController@services');
Route::get('/products', 'App\Http\Controllers\Backend\ServiceController@products');
Route::get('/about', 'App\Http\Controllers\Backend\ServiceController@about');
Route::get('/upcoming_products', 'App\Http\Controllers\Backend\ServiceController@upcoming_products');
Route::post('/save_data', 'App\Http\Controllers\Backend\ServiceController@save');
Route::post('/update_data', 'App\Http\Controllers\Backend\ServiceController@update');
Route::get('/services/active{id}', 'App\Http\Controllers\Backend\ServiceController@active');
Route::get('/services/deactive{id}', 'App\Http\Controllers\Backend\ServiceController@deactive');
Route::get('/delete_data{id}', 'App\Http\Controllers\Backend\ServiceController@delete');
});