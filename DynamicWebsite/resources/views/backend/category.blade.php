@extends('backendlayout.main') 
@section('title')
<title>Categories</title>
@endsection
@section('content')  
	<div class="layout-content">
        <div class="layout-content-body">
          <div class="title-bar">
            <h1 class="title-bar-title">
              <span class="d-ib">Categories</span>
            </h1>
            <hr class="main">
          </div>
          @if(session()->has('message'))
              <div class="alert alert-success">
                  {{ session()->get('message') }}
              </div>
          @endif
          {{-- <div class="row">
          	<div class="col-xs-1"></div>
              <div class="col-sm-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addCategory"><span><i class="fa fa-plus"></i></span> &nbsp;Add Category </button>
              
              </div>
          </div><br> --}}

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
                  <strong>Category List</strong>
                </div>
                <div class="card-body">
                  <table id="demo-datatables-responsive-2" class="table table-bordered table-striped table-nowrap dataTable" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th class="text-center">SL</th>
                        <th class="text-center">Categories</th>
                        <th class="text-center">Status</th>
                        {{-- <th class="text-center">Action</th> --}}
                      </tr>
                    </thead>
                    <tbody class="text-center">
                   @foreach ($category as $key => $categorys)
                    	<tr>
	                        <td>{{++$key}}</td>
	                        <td>{{$categorys->category_type}}</td>
                          @if ($categorys->status == 0)
                            <td><a href="/categories/active{{ $categorys->id }}"><span class="btn btn-danger">Deactivated</span></a></td>
                          @else
                          <td><a href="/categories/deactive{{ $categorys->id }}"><span class="btn btn-primary">Activated</span></a></td>
                          @endif
	                        {{-- <td>
                            <button class="btn btn-success" onclick="Editcategory({{$categorys->id}})">Edit</button>
                            @if (Auth::User()->usertype == 'admin')
                              <a onclick="confirm('Want to delete?')" href="/delete_category{{$categorys->id}}" class="btn btn-danger">Delete</a>
                            @endif
                          </td> --}}
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
<div class="modal fade" id="addCategory" data-backdrop="static"  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="addCategory"><span id="headerText">Add Category</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style="color:red" onclick="clearall()" aria-hidden="true">&times;</span>
        </button></h3>
        <hr class="sub">
      </div>
      <div class="modal-body" style="margin-top: -35px">
         <div class="demo-form-wrapper">
        	<div class="row">
    		  <form id="myFrom" class="form form-horizontal" action="/save_category" method="post" autocomplete="off">
            @csrf
        	  <div class="form-group">
                <label class="col-sm-3 control-label" for="name">Category:</label>
                <div class="col-sm-6">
                  <input class="hidden" name="id" id="id">
                  <input type="text" class="form-control" name="name" id="name" placeholder="category...">
                </div>
            </div>
            <div class="form-group">
            	<div class="col-md-4"></div>
              <div class="col-sm-6">
                <button type="submit" id="Savecategory" class="btn btn-primary">Save</button>
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
    $('#name').val('');
    $('#Savecategory').text('Save');
    $('#addCategory').modal('toggle');
    $('#headerText').html('Add Category');
  }

  // function Editcategory(id){
  //   // alert(id);
  //   $('#headerText').html('Update Category');
  //   var category = {!! $category !!};
  //   var data = category.findIndex(a => a.id == id);
  //   if(data>=0)
  //   {
  //     $('#id').val(category[data].id);
  //     $('#name').val(category[data].category_type);
  //     $('#myFrom').attr('action', '/update_category');
  //     $('#Savecategory').text('Update');
  //     $('#addCategory').modal('toggle');
  //   }
  // }

</script>
@endsection
