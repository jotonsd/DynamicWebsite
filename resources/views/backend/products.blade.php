@extends('backendlayout.main') 
@section('title')
<title>Our Products</title>
@endsection
@section('content')  
	<div class="layout-content">
        <div class="layout-content-body">
          <div class="title-bar">
            <h1 class="title-bar-title">
              <span class="d-ib">Our Products</span>
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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addService"><span><i class="fa fa-plus"></i></span> &nbsp;Add </button>
              
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
                  <strong>Slider List</strong>
                </div>
                <div class="card-body">
                  <table id="demo-datatables-responsive-2" class="table table-bordered table-striped table-nowrap dataTable" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th class="text-center">SL</th>
                        <th class="text-center">Title</th>
                        <th class="text-center">Description</th>
                        <th class="text-center">Image</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                   @foreach ($service as $key => $services)
                    	<tr>
	                        <td>{{++$key}}</td>
                          <td>{{$services->title}}</td>
                          <td>{{$services->description}}</td>
                          <td><img height="60px" width="80px" src="image/services/{{$services->image}}"/></td>
                          @if ($services->status == 0)
                            <td><a href="/services/active{{ $services->id }}"><span class="btn btn-danger">Deactivated</span></a></td>
                          @else
                          <td><a href="/services/deactive{{ $services->id }}"><span class="btn btn-primary">Activated</span></a></td>
                          @endif
	                        <td>
                            <button class="btn btn-success" onclick="EditSlider({{$services->id}})">Edit</button>
                            @if (Auth::User()->usertype == 'admin')
                              <a onclick="confirm('Want to delete?')" href="/delete_data{{$services->id}}" class="btn btn-danger">Delete</a>
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
<div class="modal fade" id="addService" data-backdrop="static"  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="addService"><span id="headerText">Add Data</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style="color:red" onclick="clearall()" aria-hidden="true">&times;</span>
        </button></h3>
        <hr class="sub">
      </div>
      <div class="modal-body" style="margin-top: -35px">
         <div class="demo-form-wrapper">
        	<div class="row">
    		  <form id="myFrom" class="form form-horizontal" action="/save_data" method="post" autocomplete="off" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label class="col-sm-3 control-label" for="title">Title:</label>
                <div class="col-sm-6">
                  <input class="hidden" name="categories_id" id="categories_id" value="3">
                  <input class="hidden" name="id" id="id">
                  <input type="text" class="form-control" name="title" id="title" placeholder="title...">
                </div>
            </div>
        	  <div class="form-group">
                <label class="col-sm-3 control-label" for="description">Description:</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="description" id="description" placeholder="description...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="image">Image:</label>
                <div class="col-sm-6">
                  <input type="file" class="form-control" name="image" id="image"  onchange="loadFile(event)">
                  <small><span class="text-danger">*</span>Please provide 200px X 200px image</small>
                </div>

            </div>
            <div class="form-group">
              <div class="col-md-4"></div>
                <img height="150px" width="150px" src="/backend/img/product.jpg" id="output"/>
            </div>
            <div class="form-group">
            	<div class="col-md-4"></div>
              <div class="col-sm-6">
                <button type="submit" id="SaveService" class="btn btn-primary">Save</button>
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
    $('#title').val('');
    $('#categories_id').val('');
    $('#description').val('');
    $('#output').attr('src', '/backend/img/slider.png');
    $('#SaveService').text('Save');
    $('#addService').modal('toggle');
    $('#headerText').html('Add Data');
  }

  function EditSlider(id){
    // alert(id);
    $('#headerText').html('Update Data');
    service = {!! $service !!};
    var data = service.findIndex(a => a.id == id);
    if(data>=0)
    {
      $('#id').val(service[data].id);
      $('#description').val(service[data].description);
      $('#title').val(service[data].title);
      $('#categories_id').val(service[data].categories_id);
      $('#output').attr('src', 'image/services/' + service[data].image);
      $('#myFrom').attr('action', '/update_data');
      $('#SaveService').text('Update');
      $('#addService').modal('toggle');
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
