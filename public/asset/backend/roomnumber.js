function addRoomNumber(id)
{
	$('#RNRoomTypeID').val(id);
}
function RNshowConfigList(){
	$('#divRNBedConfig').show();
	$('#RNCloseConfigButton').show();
	$('#RNAddConfigButton').hide();
}


function RNcloseConfigList()
{
	$('#RNCloseConfigButton').hide();
	$('#divRNBedConfig').hide();
	$('#RNAddConfigButton').show();
}

function RNaddToConfigList()
{
	
var details, Attachable;
var value;
configtype.forEach(configtypes=>{
  name = 'RNcheck'+ configtypes.BedConfigID;
  // alert(name);
  if($('#RN'+configtypes.BedConfigID).val() !=0)
  {
      if ($('#'+name).prop('checked')) {
        var value = 1;
        Attachable = '(Attachable)';
      }else{
        value = 0;
        Attachable = '';
        }
        details = $('#RN'+configtypes.BedConfigID).val() + configtypes.TypeName + Attachable;
        $("#RNaddToConfigList tbody").append("<tr><td><a class='btn btn-danger btn-xs btn-delete'>&times;</a></td><td>" + details + "</td><td class='hidden'>" + value + "</td><td class='hidden'>" + 0 + "</td></tr>");
        $('#RN'+configtypes.BedConfigID).val(0);
        $('#'+name).prop('checked',false);
    }else{
      $('#'+configtypes.BedConfigID).val(0);
        $('#'+name).prop('checked',false);
    }
  })
}

function RNvalidation(){
	if($('#RoomNumberTitle').val() == ''){
		alert('Please enter room number title');
		$('#RoomNumberTitle').focus();
		return false;
	}else if ($('#Floor').val() == 0) {
		alert('Please select floor');
		$('#Floor').focus();
		return false;
	}else{
		return true;
	}
}

// $('#RoomNumberSave').click(function(){
// 	if(RNvalidation()==true){
// 		alert('validation done')
// 	}
// });
function RoomNumberSave(){
	if(RNvalidation()==true){
		$.ajax({
          url: '/room/save_room_number',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              Availability: $('input[name="RNAvailability"]:checked').val(),
              RoomTypeID: $('#RNRoomTypeID').val(),
              RoomNumberTitle: $('#RoomNumberTitle').val(),
              Floor: $('#Floor').val()
          },
          success: function (response) {
              if (response > 0) {
              	i=0
              	// alert('response')
              	RoomNumberID = response;
                $('#RNaddToConfigList tbody tr').each(function () {
              $(this).find("td:gt(0)").each(function () {
                  i = i + 1;
                  if(i==1){
                      BedDescription = $(this).html();
                      // alert('BedDescription '+BedDescription);
                  }
                  if(i==2){
                      Attachable = $(this).html();
                      // alert('Attachable '+Attachable);
                  }
              });
              //data insert
              $.ajax({
                  url: '/room/save_room_number_bed_config_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      BedDescription: BedDescription,
                      Attachable: Attachable,
                      RoomNumberID: RoomNumberID
                  },
                  success: function (response) {
                      if (response > 0) {
                          // alert('Bed Description done');
                          $('#RNaddToConfigList tbody tr').remove();

                      } else {
                         alert('failed');
                      }
                  }
              });
              i = 0;
          });
                  
              } else {
                 alert('failed');
              }
              alert('Saved successfully')
              $('#AddRoomNumberBtn').modal('toggle');
              $('#divRNBedConfig').hide();
              $('#RoomNumberTitle').val('');
              $('#Floor').val(0);
          }

      });
	}
}

function EditRoomNumber(id)
	{
		$('#RoomNumberSave').hide();
		$('#RoomNumberUpdate').show();
		$.ajax({
                  url: '/room/show_room_number_info',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      id:id
                  },
                  success: function (response) {
                      if (response == 0) {
                      	alert('failed');

                      } else {

                      	 // alert(response);
                          $("input:radio[name='RNAvailability']").filter(function(){
			                   return $(this).val() === response[0].Availability
			                }).prop( "checked", true);
                          $('#RoomNumberID').val(response[0].RoomNumberID);
			              $('#RNRoomTypeID').val(response[0].RoomTypeID);
			              $('#RoomNumberTitle').val(response[0].RoomNumberTitle);
			              $('#Floor').val(response[0].Floor);
                         
                      }
                  }
              });

		$.ajax({
                  url: '/room/show_room_number_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      id:id
                  },
                  success: function (response) {
                      if (response == 0) {
                      } else {
                        alert()
                      		$("#RNaddToConfigList tbody tr").remove();
                			response.forEach(configdetails => {
                  					// alert(configdetails.BedDescription)
                                  $("#RNaddToConfigList tbody").append("<tr><td><a id=" + configdetails.DetailsID + " class='btn btn-danger btn-xs btn-delete RNdeleteConfig'>&times;</a></td><td>" + configdetails.Details + "</td><td class='hidden'>" + configdetails.Attachable + "</td><td class='hidden'>" + configdetails.DetailsID + "</td></tr>");
                      });
                      	
                      }
                  }
              });
	}

	$("body").on("click", ".RNdeleteConfig", function (e) {
         e.preventDefault();
        var id = $(this).attr('id');
        // alert(id)
           if(confirm("Delete permanently,then click ok button")){
            
            $.ajax({
                  url:'/room/room_number_delete_config',
                  method: 'POST',
                  data:{
                      _token: CSRF_TOKEN,
                      id: id
                  },
                  success:function(response){

                      if(response>0){
                        alert('Deleted Successfully.');
                        $(this).parents("tr").remove();
                      }
                  }

              });
           }
      });

	function RoomNumberUpdate(){
			if(RNvalidation()==true){
				$.ajax({
		          url: '/room/update_room_number',
		          type: 'post',
		          data: {
		              _token: CSRF_TOKEN,
		              RoomNumberID: $('#RoomNumberID').val(),
		              Availability: $('input[name="RNAvailability"]:checked').val(),
		              RoomTypeID: $('#RNRoomTypeID').val(),
		              RoomNumberTitle: $('#RoomNumberTitle').val(),
		              Floor: $('#Floor').val()
		          },
		          success: function (response) {
		              if (response) {
		              	i=0
		              	// alert('response')
		              	RoomNumberID = $('#RoomNumberID').val();
		                $('#RNaddToConfigList tbody tr').each(function () {
		              $(this).find("td:gt(0)").each(function () {
		                  i = i + 1;
		                  if(i==1){
		                      BedDescription = $(this).html();
		                      // alert('BedDescription '+BedDescription);
		                  }
		                  if(i==2){
		                      Attachable = $(this).html();
		                      // alert('Attachable '+Attachable);
		                  }
		                  if(i==3){
		                      DetailsID = $(this).html();
		                      // alert('DetailsID '+DetailsID);
		                  }
		              });
		              //data insert
		              $.ajax({
		                  url: '/room/update_room_number_bed_config_details',
		                  type: 'post',
		                  data: {
		                      _token: CSRF_TOKEN,
		                      BedDescription: BedDescription,
		                      Attachable: Attachable,
		                      RoomNumberID: RoomNumberID,
		                      DetailsID:DetailsID
		                  },
		                  success: function (response) {
		                      if (response) {
		                          // alert('Bed Description done');
		                          $('#RNaddToConfigList tbody tr').remove();

		                      } else {
		                         // alert('failed');
		                      }
		                  }
		              });
		              i = 0;
		          });
		                  
		              } else {
		                 alert('failed');
		              }
		              alert('Updated successfully')
		              $('#AddRoomNumberBtn').modal('toggle');
		              $('#divRNBedConfig').hide();
		              $('#RoomNumberTitle').val('');
		              $('#Floor').val(0);
		          }

		      });
			}
		}