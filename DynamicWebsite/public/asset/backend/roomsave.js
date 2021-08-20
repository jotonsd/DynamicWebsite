var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
$('#divNumberOfGuest').hide();
$('#CloseguestButton').hide();
$('#CloseConfigButton').hide();
$('#CloseFacilitiesButton').hide();
$('#CloseViewButton').hide();
$('#CloseDistanceButton').hide();
$('#CloseSmokeButton').hide();
$('#divBedConfig').hide();
$('#divFacilities').hide();
$('#divDistance').hide();
$('#divView').hide();
$('#divSmoke').hide();
$('#UpdateData').hide();
$('#divRNBedConfig').hide();
$('#RNCloseConfigButton').hide();
$('#RoomNumberUpdate').hide();


$('#AddguestButton').click(function(){
$('#divNumberOfGuest').show();
$('#CloseguestButton').show();
$('#AddguestButton').hide();
})
function addToGuestList()
{
adults = $('#adults').val();
children = $('#children').val();
extraForChild = $('#extraForChild').val();
extraForAdult = $('#extraForAdult').val();

if(adults == 0 && children == 0 && extraForChild == 0 && extraForAdult == 0){
  alert('Please Enter value in Guest List');

}else{

    $("#addToGuestList tbody").append("<tr><td><a class='btn btn-danger btn-xs btn-delete'>&times;</a></td><td>" + adults + "</td><td>"+ children + "</td><td>" + extraForAdult + "</td><td>" + extraForChild + "</td><td class='hidden'>" + 0 + "</td></tr>");
    $('.btn-delete').css('text-align','center');
    $('#adults').val(0);
    $('#children').val(0);
    $('#extraForChild').val(0);
    $('#extraForAdult').val(0);
    }

}
$("body").on("click", ".btn-delete", function () {
$(this).parents("tr").remove();
})

$('#CloseguestButton').click(function(){
$('#divNumberOfGuest').hide();
$('#CloseguestButton').hide();
$('#AddguestButton').show();
})
$('#CloseConfigButton').click(function(){
$('#divBedConfig').hide();
$('#CloseConfigButton').hide();
$('#AddConfigButton').show();
})
$('#AddConfigButton').click(function(){
$('#divBedConfig').show();
$('#CloseConfigButton').show();
$('#AddConfigButton').hide();
})

function addToConfigList()
{
var details, Attachable;
var value;
configtype.forEach(configtypes=>{
  name = 'check'+ configtypes.BedConfigID;
  if($('#'+configtypes.BedConfigID).val() !=0)
  {
      if ($('#'+name).prop('checked')) {
        var value = 1;
        Attachable = '(Attachable)';
      }else{
        value = 0;
        Attachable = '';
        }
        details = $('#'+configtypes.BedConfigID).val() + configtypes.TypeName + Attachable;
        $("#addToConfigList tbody").append("<tr><td><a class='btn btn-danger btn-xs btn-delete'>&times;</a></td><td>" + details + "</td><td class='hidden'>" + value + "</td><td class='hidden'>" + 0 + "</td></tr>");
        $('#'+configtypes.BedConfigID).val(0);
        $('#'+name).prop('checked',false);
    }else{
      $('#'+configtypes.BedConfigID).val(0);
        $('#'+name).prop('checked',false);
    }
  })
}

$('#CloseFacilitiesButton').click(function(){
$('#divFacilities').hide();
$('#CloseFacilitiesButton').hide();
$('#AddFacilitiesButton').show();
})
$('#AddFacilitiesButton').click(function(){
$('#divFacilities').show();
$('#CloseFacilitiesButton').show();
$('#AddFacilitiesButton').hide();
})
function addToFacilitiesList()
{

facilitiesTypeID = $('#facilitiesType').val();
facilityType = $("#facilitiesType option:selected").text();
qty = $('#qty').val();

if(facilitiesTypeID == '' ){
  alert('Please select facilities type');
  $('#facilitiesType').focus();

}else if(qty == 0){
    alert('Please Enter Quantity');
  $('#facilitiesType').focus();
}else{
      $("#addToFacilitiesList tbody").append("<tr><td><a class='btn btn-danger btn-xs btn-delete'>&times;</a></td><td class='hidden'>" + facilitiesTypeID + "</td><td>" + facilityType + "</td><td>"+ qty + "</td><td class='hidden'>" + 0 + "</td></tr>");
      $('#facilitiesType').val('');
      $('#qty').val(0);
      }
}

$('#CloseDistanceButton').click(function(){
$('#divDistance').hide();
$('#CloseDistanceButton').hide();
$('#AddDistanceButton').show();
})
$('#AddDistanceButton').click(function(){
$('#divDistance').show();
$('#CloseDistanceButton').show();
$('#AddDistanceButton').hide();
})
function addToDistanceList()
{
distanceFrom = $('#distanceFrom').val();
distance = $('#distance').val();
if (distanceFrom == '') {
  alert('Please enter distance from');
  $('#distanceFrom').focus();
  return false;
}else if(distance == ''){
  alert('Please enter distance');
  $('#distance').focus();
  return false;
}else{
  $("#addToDistanceList tbody").append("<tr><td><a class='btn btn-danger btn-xs btn-delete'>&times;</a></td><td>" + distanceFrom + "</td><td>" + distance +"</td><td class='hidden'>" + 0 + "</td></tr>");
  $('#distanceFrom').val('');
  $('#distance').val('');
}
}

$('#CloseViewButton').click(function(){
$('#divView').hide();
$('#CloseViewButton').hide();
$('#AddViewButton').show();
})
$('#AddViewButton').click(function(){
$('#divView').show();
$('#CloseViewButton').show();
$('#AddViewButton').hide();
})

function addToViewList()
{
viewTypeID = $('#viewType').val();
viewType = $("#viewType option:selected").text();
if(viewTypeID == ''){
  alert('Please enter View Type');
  $('#viewType').focus();
  return false;
}else{
  $("#addToViewList tbody").append("<tr><td><a class='btn btn-danger btn-xs btn-delete'>&times;</a></td><td Class='hidden'>" + viewTypeID + "</td><td>" + viewType + "</td><td class='hidden'>" + 0 + "</td></tr>");
  $('#viewType').val('');
}
}

$('#CloseSmokeButton').click(function(){
$('#divSmoke').hide();
$('#CloseSmokeButton').hide();
$('#AddSmokeButton').show();
})
$('#AddSmokeButton').click(function(){
$('#divSmoke').show();
$('#CloseSmokeButton').show();
$('#AddSmokeButton').hide();
})

function addToSmokeList()
{
allowanceID = $('#allowType').val();
allowance = $("#allowType option:selected").text();
if(allowanceID == ''){
  alert('Please enter allow Type');
  $('#allowType').focus();
  return false;
}else{
  $("#addToSmokeList tbody").append("<tr><td><a class='btn btn-danger btn-xs btn-delete'>&times;</a></td><td Class='hidden'>" + allowanceID + "</td><td>" + allowance + "</td><td class='hidden'>" + 0 + "</td></tr>");
  $('#allowType').val('');
}
}

function clearAll(){

$('#AddViewButton').show();
$('#AddguestButton').show();
$('#AddConfigButton').show();
$('#AddDistanceButton').show();
$('#AddSmokeButton').show();
$('#divNumberOfGuest').hide();
$('#CloseguestButton').hide();
$('#CloseConfigButton').hide();
$('#CloseFacilitiesButton').hide();
$('#CloseViewButton').hide();
$('#CloseDistanceButton').hide();
$('#CloseSmokeButton').hide();
$('#divBedConfig').hide();
$('#divFacilities').hide();
$('#divDistance').hide();
$('#divView').hide();
$('#divSmoke').hide();
$('#addToGuestList tbody').remove();
$('#addToConfigList tbody').remove();
$('#addToFacilitiesList tbody').remove();
$('#addToDistanceList tbody').remove();
$('#addToViewList tbody').remove();
$('#addToSmokeList tbody').remove();
$('#UpdateData').hide();
$('#RoomTypeName').val('');
$('#RoomDescription').val('');
$('#Amenities').val('');
$('#RoomSize').val('');
$('#Quantity').val('');
$('#built_renovation').val('');


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

$('#SaveData').click(function(){
if (fnValidation()==true) {
  var RoomDescription = $('#RoomDescription').val();
  var Amenities = $('#Amenities').val();

  $.ajax({
      url:'/room/save_data',
      type: 'post',
      data:{
        _token : CSRF_TOKEN,
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
        if(response>0){
          i=0;
          RoomTypeID = response;
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
                      });
                      //data insert
                      $.ajax({
                          url: '/room/save_guest_details',
                          type: 'post',
                          data: {
                              _token: CSRF_TOKEN,
                              RoomTypeID: RoomTypeID,
                              adults: adults,
                              children: children,
                              extraAdults: extraAdults,
                              extraChild: extraChild
                          },
                          success: function (response) {
                              if (response > 0) {
                                // alert('Guest Details done');
                                  
                              } else {
                                 alert('failed');
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
              });
              //data insert
              $.ajax({
                  url: '/room/save_bed_config_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      BedDescription: BedDescription,
                      Attachable: Attachable,
                      RoomTypeID: RoomTypeID
                  },
                  success: function (response) {
                      if (response > 0) {
                          // alert('Bed Description done');
                      } else {
                         alert('failed');
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
              });
              //data insert
              $.ajax({
                  url: '/room/save_facilities_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      FacilityTypeID: FacilityTypeID,
                      Qty: Qty
                  },
                  success: function (response) {
                      if (response > 0) {
                          // alert('Facilities done');
                      } else {
                          alert('failed');
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
              });
              //data insert
              $.ajax({
                  url: '/room/save_distance_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      DistanceFrom: DistanceFrom,
                      Distance: Distance
                  },
                  success: function (response) {
                      if (response > 0) {
                          var id = response;
                          // alert('distance done');
                      } else {
                          alert('failed');
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
              });
              //data insert
              $.ajax({
                  url: '/room/save_view_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      ViewTypeID: ViewTypeID
                  },
                  success: function (response) {
                      if (response > 0) {
                          var id = response;
                          // alert('View done');
                      } else {
                          alert('failed');
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
              });
              //data insert
              $.ajax({
                  url: '/room/save_smoke_details',
                  type: 'post',
                  data: {
                      _token: CSRF_TOKEN,
                      RoomTypeID: RoomTypeID,
                      AllowanceID: AllowanceID
                  },
                  success: function (response) {
                      if (response > 0) {
                          var id = response;
                           
                          clearAll();
                      } else {
                          alert('failed');
                      }

                          
                  }
              });

              i = 0;
          });
        }
        else{
          alert('failed');
        }
      }
    });
alert('Saved Successfully');
$('#RoomTypeName').val('');
$('#RoomDescription').val('');
$('#Amenities').val('');
$('#RoomSize').val('');
$('#Quantity').val('');
$('#built_renovation').val('');

        $.ajax({
            url: '/room/get_room_type_data',
            type: 'get',
            success: function (response) {
                if (response > 0) {
                  alert('done');
                } else {
                    // alert('failed');
                }

                    
            }
        });

$('#AddRoomTypeBtn').modal('toggle');

}
// clearAll();
});