@section('content')  
	<div class="layout-content">
        <div class="layout-content-body">
          <div class="title-bar">
            <h1 class="title-bar-title">
              <span class="d-ib">Categories</span>
            </h1>
            <hr class="main">
          </div>
          <div class="row">
          	<div class="col-xs-1"></div>
              <div class="col-sm-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addCategory"><span><i class="fa fa-plus"></i></span> &nbsp;Add Category </button>
              
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
                  <strong>category List</strong>
                </div>
                <div class="card-body">
                  <table id="demo-datatables-responsive-2" class="table table-bordered table-striped table-nowrap dataTable" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th class="text-center">SL</th>
                        <th class="text-center">Categories</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                   @foreach ($category as $key => $categorys)
                    	<tr>
	                        <td>{{++$key}}</td>
	                        <td>{{$categorys->name}}</td>
	                        <td>
                            <button class="btn btn-success" onclick="Editcategory({{$categorys->id}})">Edit</button>
                            @if (Auth::User()->role == 'Admin')
                              <button class="btn btn-danger" onclick="deletecategory({{$categorys->id}})">Delete</button>
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
<div class="modal fade" id="addCategory" data-backdrop="static"  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="addCategory"><span id="headerText">Add category</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style="color:red" onclick="clearall()" aria-hidden="true">&times;</span>
        </button></h3>
        <hr class="sub">
      </div>
      <div class="modal-body" style="margin-top: -35px">
         <div class="demo-form-wrapper">
        	<div class="row">
    		  <form class="form form-horizontal" autocomplete="off">
        	  <div class="form-group">
                <label class="col-sm-3 control-label" for="name">category:</label>
                <div class="col-sm-6">
                  <input class="hidden" id="id">
                  <input type="text" class="form-control" name="name" id="name" placeholder="category...">
                </div>
              </div>
    		  </form>
              <div class="form-group">
              	<div class="col-md-4"></div>
                <div class="col-sm-6">
                  <button type="button" value="1" id="Savecategory" class="btn btn-primary">Save</button>
                  <button type="button" onclick="clearall()" class="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancel</button>
                </div>
              </div>
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
    $('#Savecategory').val(1);
    $('#Savecategory').text('Save');
    $('#addCategory').modal('toggle');
    $('#headerText').html('Add Category');
  }
  $('#Savecategory').click(function(){
    if ($('#Savecategory').val() == 1) {
      if($('#name').val()==''){
        alert('Please enter category!');
        $('#name').focus();
      }else{
        $.ajax({
                url: '/save_category',
                type: 'post',
                data: {
                    _token: CSRF_TOKEN,
                    name:$('#name').val()
                },
                success: function (response) {
                  if (response == 0) {
                    alert('Same category not allowed!');
                    $('#name').focus();
                  }else{
                    alert(response)
                    $('#addCategory').modal('toggle');
                    location.reload();
                  }
                }
            });
      }
    } else {
      if($('#name').val()==''){
        alert('Please enter category!');
        $('#name').focus();
      }else{
        $.ajax({
                url: '/update_category',
                type: 'post',
                data: {
                    _token: CSRF_TOKEN,
                    id:$('#id').val(),
                    name:$('#name').val()
                },
                success: function (response) {
                  if (response == 0) {
                    alert('Same category not allowed!');
                    $('#name').focus();
                  }else{
                    alert(response)
                    $('#addCategory').modal('toggle');
                    location.reload();
                  }
                }
            });
      }
    }
    
  });

  function Editcategory(id){
    // alert(id);
    $('#headerText').html('Update Category');
    var stdClass = {!! $category !!};
    var data = stdClass.findIndex(a => a.id == id);
    if(data>=0)
    {
      $('#id').val(stdClass[data].id);
      $('#name').val(stdClass[data].name);
      $('#Savecategory').val(2);
      $('#Savecategory').text('Update');
      $('#addCategory').modal('toggle');
    }
  }

  function deletecategory(id)
  {
    if(confirm("Delete permanently,then click ok button")){
      $.ajax({
        url: '/delete_category',
        type: 'post',
        data: {
            _token: CSRF_TOKEN,
            id:id
        },
        success: function (response) {
          alert(response);
          location.reload();
          }
      });
    }
  }
</script>
@endsection
