@extends('backendlayout.main') 
@section('title')
<title>Upload link types</title>
@endsection
@section('content')  
	<div class="layout-content">
        <div class="layout-content-body">
          <div class="title-bar">
            <h1 class="title-bar-title">
              <span class="d-ib">Link types</span>
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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addLinkType"><span><i class="fa fa-plus"></i></span> &nbsp;Add Link types </button>
              
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
                  <strong>Link type list</strong>
                </div>
                <div class="card-body">
                  <table id="demo-datatables-responsive-2" class="table table-bordered table-striped table-nowrap dataTable" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th class="text-center">SL</th>
                        <th class="text-center">Link types</th>
                        <th class="text-center">Status</th>
                        {{-- <th class="text-center">Action</th> --}}
                      </tr>
                    </thead>
                    <tbody class="text-center">
                   @foreach ($linkType as $key => $link_type)
                    	<tr>
	                        <td>{{++$key}}</td>
	                        <td>{{$link_type->link_type}}</td>
                          @if ($link_type->status == 0)
                            <td><a href="/social_link_type/active{{ $link_type->id }}"><span class="btn btn-danger">Deactivated</span></a></td>
                          @else
                          <td><a href="/social_link_type/deactive{{ $link_type->id }}"><span class="btn btn-primary">Activated</span></a></td>
                          @endif
	                        <td>
                            <button class="btn btn-success" onclick="Editcategory({{ $link_type->id }})">Edit</button>
                            @if (Auth::User()->usertype == 'admin')
                              <a onclick="confirm('Want to delete?')" href="/delete_social_link_type{{$link_type->id}}" class="btn btn-danger">Delete</a>
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
<div class="modal fade" id="addLinkType" data-backdrop="static"  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="addLinkType"><span id="headerText">Add Link Type</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style="color:red" onclick="clearall()" aria-hidden="true">&times;</span>
        </button></h3>
        <hr class="sub">
      </div>
      <div class="modal-body" style="margin-top: -35px">
         <div class="demo-form-wrapper">
        	<div class="row">
    		  <form id="myFrom" class="form form-horizontal" action="/save_social_link_type" method="post" autocomplete="off">
            @csrf
        	  <div class="form-group">
                <label class="col-sm-3 control-label" for="link_type">Link Type:</label>
                <div class="col-sm-6">
                  <input class="hidden" name="id" id="id">
                  <input type="text" class="form-control" name="link_type" id="link_type" placeholder="link type...">
                </div>
            </div>
            <div class="form-group">
            	<div class="col-md-4"></div>
              <div class="col-sm-6">
                <button type="submit" id="SaveLink" class="btn btn-primary">Save</button>
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
    $('#link_type').val('');
    $('#SaveLink').text('Save');
    $('#addLinkType').modal('toggle');
    $('#headerText').html('Add Link Type');
  }

  function Editcategory(id){
    // alert(id);
    $('#headerText').html('Update Link Type');
    linkType = {!! $linkType !!};
    // alert(link_type[0].id);
    var data = linkType.findIndex(a => a.id == id);
    if(data>=0)
    {
      $('#id').val(linkType[data].id);
      $('#link_type').val(linkType[data].link_type);
      $('#myFrom').attr('action', '/update_social_link_type');
      $('#SaveLink').text('Update');
      $('#addLinkType').modal('toggle');
    }
  }

</script>
@endsection
