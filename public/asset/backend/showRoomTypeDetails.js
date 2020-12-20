  function ShowRoomTypeDetails(id)
  {
    $.ajax({
          url: '/room/show_basic_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                  
              } else {
                 $('#ShowRoomTypeID').val(response[0].RoomTypeID);
                 $('#ShowRoomTypeName').html(response[0].RoomTypeName);
                 $('#ShowRoomDescription').html(response[0].RoomDescription);
                 $('#ShowAmenities').html(response[0].Amenities);
                 $('#ShowAvailability').html(response[0].Availability);
                 $('#ShowTypeOfRoom').html(response[0].TypeOfRoom);
                 $('#ShowQuantity').html(response[0].Qty);
                 $('#ShowRoomSize').html(response[0].RoomSize);
                 $('#ShowBuilt_Renovated').html(response[0].built_renovation);
              }
          }
      });
    $.ajax({
          url: '/room/show_guest_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {

                 
              if (response == 0) {
                 $("#ShowToGuestList tbody tr").remove();
                 $("#ShowToGuestList tbody").append("<tr><td colspan='4' align='center'>No Data Found </td></tr>");
              } else {
                $("#ShowToGuestList tbody tr").remove();
                response.forEach(guestDetails => {
                                $("#ShowToGuestList tbody").append("<tr align='center'><td>" + guestDetails.Adults + "</td><td>"+ guestDetails.Children + "</td><td>" + guestDetails.ExtraAdults + "</td><td>" + guestDetails.ExtraChildren + "</td></tr>");
                            }); 
              }
          }
      });

    $.ajax({
          url: '/room/show_config_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#ShowConfigList tbody tr").remove();
                 $("#ShowConfigList tbody").append("<tr align='center'><td colspan='2' align='center'>No Data Found </td></tr>");
              } else {

                $("#ShowConfigList tbody tr").remove();
                response.forEach(configdetails => {
                  // alert(configdetails.BedDescription)
                                  $("#ShowConfigList tbody").append("<tr align='center'><td>" + configdetails.BedDescription + "</td></tr>");
                      }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_facilities_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
            console.log(response);
              if (response == 0) {
                 $("#ShowFacilitiesList tbody tr").remove();
                 $("#ShowFacilitiesList tbody").append("<tr align='center'><td colspan='2' align='center'>No Data Found </td></tr>");
              } else {

                $("#ShowFacilitiesList tbody tr").remove();
                response.forEach(facilities => {
                          $("#ShowFacilitiesList tbody").append("<tr align='center'><td>" + facilities.TypeName + "</td><td>"+ facilities.Qty + "</td></tr>");
                      }); 
              }
          }
      });

    $.ajax({
          url: '/room/show_distance_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#ShowDistanceList tbody tr").remove();
                 $("#ShowDistanceList tbody").append("<tr><td colspan='2' align='center'>No Data Found </td></tr>");

              } else {

                $("#ShowDistanceList tbody tr").remove();
                response.forEach(distance => {
                            $("#ShowDistanceList tbody").append("<tr align='center'><td>" + distance.DistanceFrom + "</td><td>" + distance.Distance +"</td></tr>");
                      }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_view_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#ShowViewList tbody tr").remove();
                 $("#ShowViewList tbody").append("<tr><td align='center'>No Data Found </td></tr>");
              } else {

                $("#ShowViewList tbody tr").remove();
                response.forEach(view => {
                            $("#ShowViewList tbody").append("<tr><td align='center'>" + view.TypeName + "</td></tr>");
                      }); 
              }
          }
      });
    $.ajax({
          url: '/room/show_smoke_info',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              id:id
          },
          success: function (response) {
              if (response == 0) {
                 $("#ShowSmokeList tbody tr").remove();
                 $("#ShowSmokeList tbody").append("<tr><td align='center'>No Data Found </td></tr>");
              } else {

                $("#ShowSmokeList tbody tr").remove();
                response.forEach(smoke => {
                            $("#ShowSmokeList tbody").append("<tr><td align='center'>" + smoke.SmokingType + "</td></tr>");
                      }); 
              }
          }
      });
  }