@extends('backendlayout.main') 
@section('title')
<title>Upload Address</title>
@endsection
@section('content')  
  <div class="layout-content">
        <div class="layout-content-body">
          <div class="title-bar">
            <h1 class="title-bar-title">
              <span class="d-ib">Address Details</span>
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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addAddress"><span><i class="fa fa-plus"></i></span> &nbsp;Add Address </button>
              
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
                  <strong>Link list</strong>
                </div>
                <div class="card-body">
                  <table id="demo-datatables-responsive-2" class="table table-bordered table-striped table-nowrap dataTable" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th class="text-center">SL</th>
                        <th class="text-center">House</th>
                        <th class="text-center">Road</th>
                        <th class="text-center">Devision</th>
                        <th class="text-center">Postal Code</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                   @foreach ($address as $key => $addresses)
                      <tr>
                          <td>{{++$key}}</td>
                          <td>{{$addresses->house}}</td>
                          <td>{{$addresses->road}}</td>
                          <td>{{$addresses->division}}</td>
                          <td>{{$addresses->postalcode}}</td>
                          <td>{{$addresses->email}}</td>
                          @if ($addresses->status == 0)
                            <td><a href="/address/active{{ $addresses->id }}"><span class="btn btn-danger">Deactivated</span></a></td>
                          @else
                          <td><a href="/address/deactive{{ $addresses->id }}"><span class="btn btn-primary">Activated</span></a></td>
                          @endif
                          <td>
                            <button class="btn btn-success" onclick="Editcategory({{ $addresses->id }})">Edit</button>
                            @if (Auth::User()->usertype == 'admin')
                              <a onclick="confirm('Want to delete?')" href="/delete_address{{$addresses->id}}" class="btn btn-danger">Delete</a>
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
<div class="modal fade" id="addAddress" data-backdrop="static"  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="addAddress"><span id="headerText">Add Address</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style="color:red" onclick="clearall()" aria-hidden="true">&times;</span>
        </button></h3>
        <hr class="sub">
      </div>
      <div class="modal-body" style="margin-top: -35px">
         <div class="demo-form-wrapper">
          <div class="row">
          <form id="myFrom" class="form form-horizontal" action="/save_address" method="post" autocomplete="off">
            @csrf
            <div class="form-group">
                <input class="hidden" name="id" id="id">
                <label class="col-sm-3 control-label" for="house">House:</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="house" id="house" placeholder="house...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="road">Road:</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="road" id="road" placeholder="road...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="division">Division:</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="division" id="division" placeholder="division...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="postalcode">Postal Code:</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="postalcode" id="postalcode" placeholder="postalcode...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="email">Email:</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="email" id="email" placeholder="email...">
                </div>
            </div>
            <div class="form-group">
              <div class="col-md-4"></div>
              <div class="col-sm-6">
                <button type="submit" id="SaveAddress" class="btn btn-primary">Save</button>
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
    $('#house').val('');
    $('#road').val('');
    $('#division').val('');
    $('#postalcode').val('');
    $('#email').val('');
    $('#SaveAddress').text('Save');
    $('#addAddress').modal('toggle');
    $('#headerText').html('Add Address');
  }

  function Editcategory(id){
    // alert(id);
    $('#headerText').html('Update Address');
    address = {!! $address !!};
    // alert(link_type[0].id);
    var data = address.findIndex(a => a.id == id);
    if(data>=0)
    {
      $('#id').val(address[data].id);
      $('#house').val(address[data].house);
      $('#road').val(address[data].road);
      $('#division').val(address[data].division);
      $('#postalcode').val(address[data].postalcode);
      $('#email').val(address[data].email);
      $('#myFrom').attr('action', '/update_address');
      $('#SaveAddress').text('Update');
      $('#addAddress').modal('toggle');
    }
  }

</script>
@endsection
