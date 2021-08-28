function EditRoomType(id){
  // alert(id)
  
    $.ajax({
          url: '/room/show_update_basic_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 
                 alert('failed');
                  
              } else {
                // alert(response[0].RoomTypeID);
                $('#RoomTypeID').val(response[0].RoomTypeID);
                $('#RoomTypeName').val(response[0].RoomTypeName);
                $('#RoomDescription').val(response[0].RoomDescription);
                $('#Amenities').val(response[0].Amenities);
                $('#Quantity').val(response[0].Qty)
                $('#RoomSize').val(response[0].RoomSize)
                $('#built_renovation').val(response[0].built_renovation)
                $("input:radio[name='Availability']").filter(function(){
                   return $(this).val() === response[0].Availability
                }).prop( "checked", true);
                $("input:radio[name='TypeOfRoom']").filter(function(){
                   return $(this).val() === response[0].TypeOfRoom
                }).prop( "checked", true);
              }
          }
      });
    $.ajax({
          url: '/room/show_update_guest_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#addToGuestList tbody tr").remove();
              } else {
                $("#addToGuestList tbody tr").remove();
                response.forEach(guestDetails => {
                                $("#addToGuestList tbody").append("<tr><td><a id=" + guestDetails.GuestDetailsID + " class='btn btn-danger btn-xs btn-delete deleteGuest'>&times;</a></td><td>" + guestDetails.Adults + "</td><td>"+ guestDetails.Children + "</td><td>" + guestDetails.ExtraAdults + "</td><td>" + guestDetails.ExtraChildren + "</td><td class='hidden'>" + guestDetails.GuestDetailsID + "</td></tr>");
                            }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_update_config_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#addToConfigList tbody tr").remove();
              } else {

                $("#addToConfigList tbody tr").remove();
                response.forEach(configdetails => {
                  // alert(configdetails.BedDescription)
                                  $("#addToConfigList tbody").append("<tr><td><a id=" + configdetails.ConfigdetailsID + " class='btn btn-danger btn-xs btn-delete deleteConfig'>&times;</a></td><td>" + configdetails.BedDescription + "</td><td class='hidden'>" + configdetails.Attachable + "</td><td class='hidden'>" + configdetails.ConfigdetailsID + "</td></tr>");
                      }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_update_facilities_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#addToFacilitiesList tbody tr").remove();
              } else {

                $("#addToFacilitiesList tbody tr").remove();
                response.forEach(facilities => {
                          $("#addToFacilitiesList tbody").append("<tr><td><a id=" + facilities.FacilitiesDetailsID + " class='btn btn-danger btn-xs btn-delete deleteFacilities'>&times;</a></td><td class='hidden'>" + facilities.facilitiesTypeID + "</td><td>" + facilities.TypeName + "</td><td>"+ facilities.Qty + "</td><td class='hidden'>"+ facilities.FacilitiesDetailsID + "</td></tr>");

                      }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_update_distance_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#addToDistanceList tbody tr").remove();
              } else {

                $("#addToDistanceList tbody tr").remove();
                response.forEach(distance => {
                            $("#addToDistanceList tbody").append("<tr><td><a id=" + distance.DistanceDetailsID + " class='btn btn-danger btn-xs btn-delete deleteDistance'>&times;</a></td><td>" + distance.DistanceFrom + "</td><td>" + distance.Distance +"</td><td class='hidden'>" + distance.DistanceDetailsID +"</td></tr>");
                      }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_update_view_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#addToViewList tbody tr").remove();
              } else {

                $("#addToViewList tbody tr").remove();
                response.forEach(view => {
                            $("#addToViewList tbody").append("<tr><td><a id=" + view.ViewDetailsID + " class='btn btn-danger btn-xs btn-delete deleteView'>&times;</a></td><td Class='hidden'>" + view.ViewTypeID + "</td><td>" + view.TypeName + "</td><td class='hidden'>" + view.ViewDetailsID + "</td></tr>");
                      }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_update_smoke_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#addToSmokeList tbody tr").remove();
              } else {

                $("#addToSmokeList tbody tr").remove();
                response.forEach(smoke => {
                            $("#addToSmokeList tbody").append("<tr><td><a id=" + smoke.SmokeDetailsID + " class='btn btn-danger btn-xs btn-delete deleteSmoke'>&times;</a></td><td Class='hidden'>" + smoke.AllowanceID + "</td><td>" + smoke.SmokingType + "</td><td class='hidden'>" + smoke.SmokeDetailsID + "</td></tr>");
                      }); 
              }
          }
      });
    $('#UpdateData').show();
    $('#SaveData').hide();
}

function fnValidation(){

    // alert(Amenities);

if ($('#RoomTypeName').val() == '') {
  alert('Please Enter Room Type Name');
  $('#RoomTypeName').focus();
  return false;
} else if (RoomDescription == '') {
  alert('Please Enter Room Description');
  $('#RoomDescription').focus();
  return false;
} else if (Amenities == '') {
  alert('Please Enter Room Amenities');
  $('#Amenities').focus();
  return false;
} else if ($('#Quantity').val() == '') {
  alert('Please Enter Room Quantity');
  $('#Quantity').focus();
  return false;
} else if ($('#RoomSize').val() == '') {
  alert('Please Enter Room Size');
  $('#RoomSize').focus();
  return false;
} else if ($('#built_renovation').val() == '') {
  alert('Please Enter Built/Renovation');
  $('#built_renovation').focus();
  return false;
} else{
  return true;
}

}

$('#UpdateData').click(function(){
if (fnValidation()==true) {
  var RoomDescription = $('#RoomDescription').val();
  var Amenities = $('#Amenities').val();

  $.ajax({
      url:'/room/update_basic_data',
      type: 'post',
      data:{
        _token : CSRF_TOKEN,
        RoomTypeID:$('#RoomTypeID').val(),
        Availability: $('input[name="Availability"]:checked').val(),
        RoomTypeName: $('#RoomTypeName').val(),
        TypeOfRoom: $('input[name="TypeOfRoom"]:checked').val(),
        RoomDescription: RoomDescription,
        Amenities: Amenities,
        Quantity: $('#Quantity').val(),
        RoomSize: $('#RoomSize').val(),
        built_renovation: $('#built_renovation').val()
      },
      success: function(response)
      {
        if(response){
          i=0;
          RoomTypeID = $('#RoomTypeID').val();
            $('#addToGuestList tbody tr').each(function () {
                      $(this).find("td:gt(0)").each(function () {
                          i = i + 1;
                          if(i==1){
                              adults = $(this).html();
                             // alert('adults ' + adults);
                          }
                          if(i==2){
                              children = $(this).html();
                              // alert('children '+children);
                          }
                          if(i==3){
                              extraAdults = $(this).html();
                             // alert('extraAdults ' + extraAdults);
                          }
                          if(i==4){
                              extraChild = $(this).html();
                             // alert('extraChild ' + extraChild);
                          }
                          if(i==5){
                              GuestDetailsID = $(this).html();
                              // alert('GuestDetailsID ' + GuestDetailsID);
                          }
                      });
                      // data insert
                      $.ajax({
                          url: '/room/update_guest_details',
                          type: 'post',
                          data: {
                              _token: CSRF_TOKEN,
                              RoomTypeID: RoomTypeID,
                              adults: adults,
                              children: children,
                              extraAdults: extraAdults,
                              extraChild: extraChild,
                              GuestDetailsID:GuestDetailsID
                          },
                          success: function (response) {
                              if (response > 0) {
                                // alert('Guest Details done');
                                $('#addToGuestList tbody tr').remove();
                                  
                              } else {
                                 // alert('failed');
                              }
                          }
                      });
                      i = 0;
                  });


            

            $('#addToConfigList tbody tr').each(function () {
              $(this).find("td:gt(0)").each(function () {
                  i = i + 1;
                  if(i==1){
                      BedDescription = $(this).html();
                  }
                  if(i==2){
                      Attachable = $(this).html();
                  }
                  if(i==3){
                      ConfigdetailsID = $(this).html();
                  }
              });
              //data insert
              $.ajax({
                  url: '/room/update_bed_config_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      BedDescription: BedDescription,
                      Attachable: Attachable,
                      RoomTypeID: RoomTypeID,
                      ConfigdetailsID:ConfigdetailsID
                  },
                  success: function (response) {
                      if (response > 0) {
                          // alert('Bed Description done');
                          $('#addToConfigList tbody tr').remove();
                      } else {
                         // alert('failed');
                      }
                  }
              });
              i = 0;
          });


        $('#addToFacilitiesList tbody tr').each(function () {
              $(this).find("td:gt(0)").each(function () {
                  i = i + 1;
                  if(i==1){
                      FacilityTypeID = $(this).html();
                      
                  }
                  if(i==3){
                      Qty = $(this).html();
                      // alert('Qty'+Qty)
                  }
                  if(i==4){
                      FacilitiesDetailsID = $(this).html();
                      // alert('Qty'+Qty)
                  }
              });
              //data insert
              $.ajax({
                  url: '/room/update_facilities_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      FacilityTypeID: FacilityTypeID,
                      Qty: Qty,
                      FacilitiesDetailsID:FacilitiesDetailsID
                  },
                  success: function (response) {
                      if (response > 0) {
                          // alert('Facilities done');
                        $('#addToFacilitiesList tbody tr').remove();
                      } else {
                          // alert('failed');
                      }
                  }
              });
              i = 0;
          });

        $('#addToDistanceList tbody tr').each(function () {
              $(this).find("td:gt(0)").each(function () {
                  i = i + 1;
                  if(i==1){
                      DistanceFrom = $(this).html();
                       // alert('DistanceFrom'+DistanceFrom)
                      
                  }
                  if(i==2){
                      Distance = $(this).html();
                       // alert('Distance'+Distance)
                  }
                  if(i==3){
                      DistanceDetailsID = $(this).html();
                       // alert('Distance'+Distance)
                  }
              });
              //data insert
              $.ajax({
                  url: '/room/update_distance_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      DistanceFrom: DistanceFrom,
                      Distance: Distance,
                      DistanceDetailsID:DistanceDetailsID
                  },
                  success: function (response) {
                      if (response > 0) {
                          $('#addToDistanceList tbody tr').remove();
                      } else {
                          // alert('failed');
                      }
                  }
              });
              i = 0;
          });

        $('#addToViewList tbody tr').each(function () {
              $(this).find("td:gt(0)").each(function () {
                  i = i + 1;
                  if(i==1){
                      ViewTypeID = $(this).html();
                       // alert('ViewTypeID'+ViewTypeID)
                  }

                  if(i==3){
                      ViewDetailsID = $(this).html();
                       // alert('ViewTypeID'+ViewTypeID)
                  }
              });
              //data insert
              $.ajax({
                  url: '/room/update_view_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      ViewTypeID: ViewTypeID,
                      ViewDetailsID:ViewDetailsID
                  },
                  success: function (response) {
                      if (response > 0) {
                          $('#addToViewList tbody tr').remove();
                      } else {
                          // alert('failed');
                      }
                  }
              });
              i = 0;
          });

         $('#addToSmokeList tbody tr').each(function () {
              $(this).find("td:gt(0)").each(function () {
                  i = i + 1;
                  if(i==1){
                      AllowanceID = $(this).html();
                       // alert('ViewTypeID'+ViewTypeID)
                  }
                  if(i==3){
                      SmokeDetailsID = $(this).html();
                        // alert('SmokeDetailsID '+SmokeDetailsID)
                  }
              });
              //data insert
              $.ajax({
                  url: '/room/update_smoke_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      AllowanceID: AllowanceID,
                      SmokeDetailsID:SmokeDetailsID
                  },
                  success: function (response) {
                      if (response > 0) {
                          $('#addToSmokeList tbody tr').remove();
                           
                          clearAll();
                          // location.reload();
                      } else {
                          clearAll();
                      }
                  }
              });

              i = 0;
          });
        }
        // else{
        //   alert('failed');
        // }
      }
    });
alert('Updated Successfully');
$('#AddRoomTypeBtn').modal('toggle');
}
// clearAll();
});

$("body").on("click", ".deleteGuest", function (e) {
         e.preventDefault();
        var id = $(this).attr('id');
           if(confirm("Delete permanently,then click ok button")){
            
            $.ajax({
                  url:'/room/delete_guest',
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
$("body").on("click", ".deleteConfig", function (e) {
         e.preventDefault();
        var id = $(this).attr('id');
        // alert(id)
           if(confirm("Delete permanently,then click ok button")){
            
            $.ajax({
                  url:'/room/delete_config',
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
$("body").on("click", ".deleteFacilities", function (e) {
         e.preventDefault();
        var id = $(this).attr('id');
        // alert(id)
           if(confirm("Delete permanently,then click ok button")){
            
            $.ajax({
                  url:'/room/delete_facilities',
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

$("body").on("click", ".deleteDistance", function (e) {
         e.preventDefault();
        var id = $(this).attr('id');
        // alert(id)
           if(confirm("Delete permanently,then click ok button")){
            
            $.ajax({
                  url:'/room/delete_distance',
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

$("body").on("click", ".deleteView", function (e) {
         e.preventDefault();
        var id = $(this).attr('id');
        // alert(id)
           if(confirm("Delete permanently,then click ok button")){
            
            $.ajax({
                  url:'/room/delete_view',
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

$("body").on("click", ".deleteSmoke", function (e) {
         e.preventDefault();
        var id = $(this).attr('id');
        // alert(id)
           if(confirm("Delete permanently,then click ok button")){
            
            $.ajax({
                  url:'/room/delete_smoke',
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
