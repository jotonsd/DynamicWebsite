@extends('backendlayout.main') 
@section('title')
<title>Frontend Menu</title>
@endsection
@section('content')
<div class="layout-content">
    <div class="layout-content-body">
      <div class="title-bar">
        <h1 class="title-bar-title">
          <span class="d-ib">Frontend Menu List</span>
        </h1>
        <hr >
      </div>
      @if(session()->has('message'))
          <div class="alert alert-success">
              {{ session()->get('message') }}
          </div>
      @endif
      <div class="row gutter-xs">
          <div class="col-xs-1"></div>
        <div class="col-xs-10">
          <div class="card">
            <div class="card-header">
              <div class="card-actions">
                <button type="button" class="card-action card-toggler" title="Collapse"></button>
                <button type="button" class="card-action card-reload" title="Reload"></button>
                <button type="button" class="card-action card-remove" title="Remove"></button>
              </div>
              <strong>Menu List</strong>
            </div>
            <div class="card-body">
              <table id="demo-datatables-responsive-2" class="table table-bordered table-striped table-nowrap dataTable" cellspacing="0" width="100%">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Url</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                    @foreach ($fmenu as $key => $fmenus)
                    <tr>
                        <td>{{++$key}}</td>
                        <td>{{$fmenus->title}}</td>
                        <td>{{$fmenus->url}}</td>
                        @if ($fmenus->status == 0)
                          <td><a href="/frontend_menu/active{{ $fmenus->id }}"><span class="btn btn-danger">Deactivated</span></a></td>
                        @else
                        <td><a href="/frontend_menu/deactive{{ $fmenus->id }}"><span class="btn btn-primary">Activated</span></a></td>
                        @endif
                      </tr>
                    @endforeach
                  
                  
                </tbody>
              </table>
            </div>
          </div>
          </div>
      </div>
      </div>
  </div>
@endsection
