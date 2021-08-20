@extends('backendlayout.main') 
@section('title')
<title>Upload logo</title>
@endsection
@section('content')  
	<div class="layout-content">
        <div class="layout-content-body">
          <div class="title-bar">
            <h1 class="title-bar-title">
              <span class="d-ib">Logos</span>
            </h1>
            <hr class="main">
          </div>
          @if(session()->has('message'))
              <div class="alert alert-success">
                  {{ session()->get('message') }}
              </div>
          @endif
          <div class="row">
          	<div class="col-xs-1"></div>
              <div class="col-sm-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addlogo"><span><i class="fa fa-plus"></i></span> &nbsp;Add Logo </button>
              
              </div>
          </div><br>

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
                  <strong>Logo List</strong>
                </div>
                <div class="card-body">
                  <table id="demo-datatables-responsive-2" class="table table-bordered table-striped table-nowrap dataTable" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th class="text-center">SL</th>
                        <th class="text-center">Company Name</th>
                        <th class="text-center">Logo</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                   @foreach ($Logo as $key => $Logos)
                    	<tr>
	                        <td>{{++$key}}</td>
	                        <td>{{$Logos->company_name}}</td>
                          <td><img height="60px" width="60px" src="image/logos/{{$Logos->logo}}"/></td>
                          @if ($Logos->status == 0)
                            <td><a href="/logos/active{{ $Logos->id }}"><span class="btn btn-danger">Deactivated</span></a></td>
                          @else
                          <td><a href="/logos/deactive{{ $Logos->id }}"><span class="btn btn-primary">Activated</span></a></td>
                          @endif
	                        <td>
                            <button class="btn btn-success" onclick="EditLogo({{$Logos->id}})">Edit</button>
                            @if (Auth::User()->usertype == 'admin')
                              <a onclick="confirm('Want to delete?')" href="/delete_logo{{$Logos->id}}" class="btn btn-danger">Delete</a>
                            @endif
                          </td>
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
    

    <!-- Modal starts -->
<div class="modal fade" id="addlogo" data-backdrop="static"  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="addlogo"><span id="headerText">Add Logo</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style="color:red" onclick="clearall()" aria-hidden="true">&times;</span>
        </button></h3>
        <hr class="sub">
      </div>
      <div class="modal-body" style="margin-top: -35px">
         <div class="demo-form-wrapper">
        	<div class="row">
    		  <form id="myFrom" class="form form-horizontal" action="/save_logo" method="post" autocomplete="off" enctype="multipart/form-data">
            @csrf
        	  <div class="form-group">
                <label class="col-sm-3 control-label" for="name">Company Name:</label>
                <div class="col-sm-6">
                  <input class="hidden" name="id" id="id">
                  <input type="text" class="form-control" name="company_name" id="company_name" placeholder="company name...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="name">Logo:</label>
                <div class="col-sm-6">
                  <input type="file" class="form-control" name="logo" id="logo"  onchange="loadFile(event)">
                </div>
            </div>
            <div class="form-group">
              <div class="col-md-4"></div>
                <img height="150px" width="150px" src="/backend/img/logo.png" id="output"/>
            </div>
            <div class="form-group">
            	<div class="col-md-4"></div>
              <div class="col-sm-6">
                <button type="submit" id="SaveLogo" class="btn btn-primary">Save</button>
                <button type="reset" onclick="clearall()" class="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancel</button>
              </div>
            </div>
          </form>
        	</div>
        </div>
      </div>
  	</div>
  </div>
</div>
<!-- Modal ends -->


<script>
  var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
  function clearall(){
    $('#company_name').val('');
    $('#output').attr('src', '/backend/img/logo.png');
    $('#SaveLogo').text('Save');
    $('#addlogo').modal('toggle');
    $('#headerText').html('Add Logo');
  }

  function EditLogo(id){
    // alert(id);
    $('#headerText').html('Update Logo');
    logo = {!! $Logo !!};
    var data = logo.findIndex(a => a.id == id);
    if(data>=0)
    {
      $('#id').val(logo[data].id);
      $('#company_name').val(logo[data].company_name);
      $('#output').attr('src', 'image/logos/' + logo[data].logo);
      $('#myFrom').attr('action', '/update_logo');
      $('#SaveLogo').text('Update');
      $('#addlogo').modal('toggle');
    }
  }
</script>
<script>
  var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
</script>
@endsection
