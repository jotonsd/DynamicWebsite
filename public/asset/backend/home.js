var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
$('#oneWeek').click();





function changeCalender(id) {
    // if (id == 1) {
    //     $("#oneWeek").prop("checked", false);
    //     if ($('#fromDate').val() != '' && $('#toDate').val() != '') {
    //         var listDate = [];
    //         var start = new Date($('#fromDate').val());
    //         d = start.getDate();
    //         m = start.getMonth();
    //         m += 1;
    //         if (m < 10) {
    //             m = '0' + m;
    //         }
    //         if (d < 10) {
    //             d = '0' + d;
    //         }
    //         y = start.getFullYear();
    //         startDate = y + '-' + m + '-' + d;

    //         var start = new Date($('#toDate').val());
    //         d1 = start.getDate();
    //         m1 = start.getMonth();
    //         m1 += 1;
    //         if (m1 < 10) {
    //             m1 = '0' + m1;
    //         }
    //         if (d1 < 10) {
    //             d1 = '0' + d1;
    //         }
    //         y1 = start.getFullYear();
    //         endDate = y1 + '-' + m1 + '-' + d1;

    //         var dateMove = new Date(startDate);
    //         var strDate = startDate;
    //         //(startDate + endDate)
    //         while (strDate < endDate) {
    //             var strDate = dateMove.toISOString().slice(0, 10);
    //             listDate.push(strDate);
    //             dateMove.setDate(dateMove.getDate() + 1);
    //         };
    //     } else if ($('#fromDate').val() != '' && $('#toDate').val() == '') {
    //         var start = new Date($('#fromDate').val());
    //         d = start.getDate();
    //         if (d < 10) {
    //             d = '0' + d;
    //         }
    //         var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //         // console.log(startDate);
    //         $('#dateTable').html('');
    //         $('#dateTableDay').html('');
    //         $("#dateTableTd").html('');
    //         $('#dateTableDay').html('<td class="bg-info"><span style="margin-top:5px">RoomType</span></td><td class="bg-info"><span style="margin-top:5px">Rooms</span></td>');

    //         $('#dateTable').append('<td>' + d + '</td>')
    //         var dayName = days[start.getDay()];
    //         // console.log(dayName);
    //         $('#dateTableDay').append('<td class="bg-warning">' + dayName + '</td>');

    //         // Object.keys(vCalenderRoomID).forEach(function(key) {
    //         //     $("#dateTableTd").append("<tr><td colspan='12'>" + vCalenderRoomID[key].RoomTypeName + "</td></tr>");

    //         //     Object.keys(vCalenderRoomDetails).forEach(function(id) {
    //         //         // alert(vCalenderRoomID[key].RoomTypeID + '=='+ vCalenderRoomDetails[id].RoomTypeID)
    //         //         if (vCalenderRoomID[key].RoomTypeID == vCalenderRoomDetails[id].RoomTypeID) {

    //         //             $("#dateTableTd").append("<tr  id='" + vCalenderRoomDetails[id].RoomNumberTitle + "'><td>" + vCalenderRoomDetails[id].RoomNumberTitle + "</td></tr>");
    //         //             for (i = 0; i < 1; i++) {
    //         //                 $('#' + vCalenderRoomDetails[id].RoomNumberTitle).append('<td>ok</td>')
    //         //             }
    //         //         }
    //         //     });
    //         // });
    //         return false;


    //     } else if ($('#toDate').val() != '' && $('#fromDate').val() == '') {
    //         var listDate = [];
    //         date = new Date();
    //         startDate = new Date().toISOString().slice(0, 10);

    //         var start = new Date($('#toDate').val());
    //         d1 = start.getDate();
    //         m1 = start.getMonth();
    //         m1 += 1;
    //         if (m1 < 10) {
    //             m1 = '0' + m1;
    //         }
    //         if (d1 < 10) {
    //             d1 = '0' + d1;
    //         }
    //         y1 = start.getFullYear();
    //         endDate = y1 + '-' + m1 + '-' + d1;

    //         var dateMove = new Date(startDate);
    //         var strDate = startDate;
    //         // console.log(startDate + endDate)
    //         while (strDate < endDate) {
    //             var strDate = dateMove.toISOString().slice(0, 10);
    //             listDate.push(strDate);
    //             dateMove.setDate(dateMove.getDate() + 1);
    //         };

    //     } else {
    //         alert('Please Select Start Date And End Date!')
    //     }

    // } else 
    if (id == 7) {
        $('#fromDate').val('');
        $('#toDate').val('');
        var todayDate = new Date().toISOString().slice(0, 10);
        var temp = new Date();
        var week = temp.getDate() + 7;
        temp.setDate(week);
        var nextWeek = new Date(temp).toISOString().slice(0, 10);
        var listDate = [];

        var startDate = todayDate;
        var endDate = nextWeek;
        var dateMove = new Date(startDate);
        var strDate = startDate;
        while (strDate < endDate) {
            var strDate = dateMove.toISOString().slice(0, 10);
            listDate.push(strDate);
            dateMove.setDate(dateMove.getDate() + 1);
        };
        $.ajax({
            url: 'home/calender_date',
            type: 'POST',
            data: {
                _token: CSRF_TOKEN,
                id: id,

            },
            success: function(response) {
                // for (let i = 0; i < response.length; i++) {
                //     if (response[i].c1 == 0) {
                //         response[i].c1 == 0
                //     }
                // }
                Object.keys(response).forEach(function(key) {
                    var c1 = (response[key].c1).split(";");
                    var c2 = (response[key].c2).split(";");
                    var c3 = (response[key].c3).split(";");
                    var c4 = (response[key].c4).split(";");
                    var c5 = (response[key].c5).split(";");
                    var c6 = (response[key].c6).split(";");
                    var c7 = (response[key].c7).split(";");
                    console.log(c2[1]);
                    $("#dateTableTd").append("<tr><td>" + response[key].RoomType + "</td><td>" + response[key].RoomNumber + "</td><td data-id='" +
                        c1[1] + "'>" + c1[0] + "</td><td data-id='" +
                        c2[1] + "'>" + c2[0] + "</td><td data-id='" +
                        c3[1] + "'>" + c3[0] + "</td><td data-id='" +
                        c4[1] + "'>" + c4[0] + "</td><td data-id='" +
                        c5[1] + "'>" + c5[0] + "</td><td data-id='" +
                        c6[1] + "'>" + c6[0] + "</td><td data-id='" +
                        c7[1] + "'>" + c7[0] + "</td></tr>");
                });
                $('#tabale1 tbody tr').each(function() {
                    $(this).find("td:gt(1)").each(function() {
                        if ($(this).text() == '') {
                            $(this).addClass('BlankCell');
                        } else {
                            $(this).addClass('column_name');
                            // alert($('this').data('id'));
                        }
                    });

                });
            }

        });
    } else if (id == 15) {
        $('#fromDate').val('');
        $('#toDate').val('');
        var todayDate = new Date().toISOString().slice(0, 10);
        var temp = new Date();
        var week = temp.getDate() + 15;
        temp.setDate(week);
        var nextfifth = new Date(temp).toISOString().slice(0, 10);
        // console.log(temp);
        var listDate = [];

        var startDate = todayDate;
        var endDate = nextfifth;
        var dateMove = new Date(startDate);
        var strDate = startDate;
        while (strDate < endDate) {
            var strDate = dateMove.toISOString().slice(0, 10);
            listDate.push(strDate);
            dateMove.setDate(dateMove.getDate() + 1);
        };
        $.ajax({
            url: 'home/calender_date',
            type: 'POST',
            data: {
                _token: CSRF_TOKEN,
                id: id,

            },
            success: function(response) {
                // alert(response[key].length);
                Object.keys(response).forEach(function(key) {
                    var c1 = (response[key].c1).split(";");
                    var c2 = (response[key].c2).split(";");
                    var c3 = (response[key].c3).split(";");
                    var c4 = (response[key].c4).split(";");
                    var c5 = (response[key].c5).split(";");
                    var c6 = (response[key].c6).split(";");
                    var c7 = (response[key].c7).split(";");
                    var c8 = (response[key].c8).split(";");
                    var c9 = (response[key].c9).split(";");
                    var c10 = (response[key].c10).split(";");
                    var c11 = (response[key].c11).split(";");
                    var c12 = (response[key].c12).split(";");
                    var c13 = (response[key].c13).split(";");
                    var c14 = (response[key].c14).split(";");
                    var c15 = (response[key].c15).split(";");
                    // console.log(c2[1]);
                    $("#dateTableTd").append("<tr><td>" + response[key].RoomType + "</td><td>" + response[key].RoomNumber + "</td><td data-id='" +
                        c1[1] + "'>" + c1[0] + "</td><td data-id='" +
                        c2[1] + "'>" + c2[0] + "</td><td data-id='" +
                        c3[1] + "'>" + c3[0] + "</td><td data-id='" +
                        c4[1] + "'>" + c4[0] + "</td><td data-id='" +
                        c5[1] + "'>" + c5[0] + "</td><td data-id='" +
                        c6[1] + "'>" + c6[0] + "</td><td data-id='" +
                        c7[1] + "'>" + c7[0] + "</td><td data-id='" +
                        c8[1] + "'>" + c8[0] + "</td><td data-id='" +
                        c9[1] + "'>" + c9[0] + "</td><td data-id='" +
                        c10[1] + "'>" + c10[0] + "</td><td data-id='" +
                        c11[1] + "'>" + c11[0] + "</td><td data-id='" +
                        c12[1] + "'>" + c12[0] + "</td><td data-id='" +
                        c13[1] + "'>" + c13[0] + "</td><td data-id='" +
                        c14[1] + "'>" + c14[0] + "</td><td data-id='" +
                        c15[1] + "'>" + c15[0] + "</td></tr>");
                });
                $('#tabale1 tbody tr').each(function() {
                    $(this).find("td:gt(1)").each(function() {
                        if ($(this).text() == '') {
                            $(this).addClass('BlankCell');
                        } else {
                            $(this).addClass('column_name');
                            // alert($('this').data('id'));
                        }
                    });

                });
            }

        });
    } else {
        $('#fromDate').val('');
        $('#toDate').val('');
        date = new Date();
        strtDate = new Date().toISOString().slice(0, 10);
        var newDate = date.setMonth(date.getMonth() + 1);
        var nextMonth = new Date(newDate).toISOString().slice(0, 10);

        var listDate = [];

        var startDate = strtDate;
        var endDate = nextMonth;
        var dateMove = new Date(startDate);
        var strDate = startDate;
        while (strDate < endDate) {
            var strDate = dateMove.toISOString().slice(0, 10);
            listDate.push(strDate);
            dateMove.setDate(dateMove.getDate() + 1);
        };
        $.ajax({
            url: 'home/calender_date',
            type: 'POST',
            data: {
                _token: CSRF_TOKEN,
                id: id,

            },
            success: function(response) {
                Object.keys(response).forEach(function(key) {
                    var c1 = (response[key].c1).split(";");
                    var c2 = (response[key].c2).split(";");
                    var c3 = (response[key].c3).split(";");
                    var c4 = (response[key].c4).split(";");
                    var c5 = (response[key].c5).split(";");
                    var c6 = (response[key].c6).split(";");
                    var c7 = (response[key].c7).split(";");
                    var c8 = (response[key].c8).split(";");
                    var c9 = (response[key].c9).split(";");
                    var c10 = (response[key].c10).split(";");
                    var c11 = (response[key].c11).split(";");
                    var c12 = (response[key].c12).split(";");
                    var c13 = (response[key].c13).split(";");
                    var c14 = (response[key].c14).split(";");
                    var c15 = (response[key].c15).split(";");
                    var c16 = (response[key].c16).split(";");
                    var c17 = (response[key].c17).split(";");
                    var c18 = (response[key].c18).split(";");
                    var c19 = (response[key].c19).split(";");
                    var c20 = (response[key].c20).split(";");
                    var c21 = (response[key].c21).split(";");
                    var c22 = (response[key].c22).split(";");
                    var c23 = (response[key].c23).split(";");
                    var c24 = (response[key].c24).split(";");
                    var c25 = (response[key].c25).split(";");
                    var c26 = (response[key].c26).split(";");
                    var c27 = (response[key].c27).split(";");
                    var c28 = (response[key].c28).split(";");
                    var c29 = (response[key].c29).split(";");
                    var c30 = (response[key].c30).split(";");
                    var c31 = (response[key].c31).split(";");
                    $("#dateTableTd").append("<tr><td>" + response[key].RoomType + "</td><td>" + response[key].RoomNumber + "</td><td data-id='" +
                        c1[1] + "'>" + c1[0] + "</td><td data-id='" +
                        c2[1] + "'>" + c2[0] + "</td><td data-id='" +
                        c3[1] + "'>" + c3[0] + "</td><td data-id='" +
                        c4[1] + "'>" + c4[0] + "</td><td data-id='" +
                        c5[1] + "'>" + c5[0] + "</td><td data-id='" +
                        c6[1] + "'>" + c6[0] + "</td><td data-id='" +
                        c7[1] + "'>" + c7[0] + "</td><td data-id='" +
                        c8[1] + "'>" + c8[0] + "</td><td data-id='" +
                        c9[1] + "'>" + c9[0] + "</td><td data-id='" +
                        c10[1] + "'>" + c10[0] + "</td><td data-id='" +
                        c11[1] + "'>" + c11[0] + "</td><td data-id='" +
                        c12[1] + "'>" + c12[0] + "</td><td data-id='" +
                        c13[1] + "'>" + c13[0] + "</td><td data-id='" +
                        c14[1] + "'>" + c14[0] + "</td><td data-id='" +
                        c15[1] + "'>" + c15[0] + "</td><td data-id='" +
                        c16[1] + "'>" + c16[0] + "</td><td data-id='" +
                        c17[1] + "'>" + c17[0] + "</td><td data-id='" +
                        c18[1] + "'>" + c18[0] + "</td><td data-id='" +
                        c19[1] + "'>" + c19[0] + "</td><td data-id='" +
                        c20[1] + "'>" + c20[0] + "</td><td data-id='" +
                        c21[1] + "'>" + c21[0] + "</td><td data-id='" +
                        c22[1] + "'>" + c22[0] + "</td><td data-id='" +
                        c23[1] + "'>" + c23[0] + "</td><td data-id='" +
                        c24[1] + "'>" + c24[0] + "</td><td data-id='" +
                        c25[1] + "'>" + c25[0] + "</td><td data-id='" +
                        c26[1] + "'>" + c26[0] + "</td><td data-id='" +
                        c27[1] + "'>" + c27[0] + "</td><td data-id='" +
                        c28[1] + "'>" + c28[0] + "</td><td data-id='" +
                        c29[1] + "'>" + c29[0] + "</td><td data-id='" +
                        c30[1] + "'>" + c30[0] + "</td><td data-id='" +
                        c31[1] + "'>" + c31[0] + "</td></tr>");
                });
                $('#tabale1 tbody tr').each(function() {
                    $(this).find("td:gt(1)").each(function() {
                        if ($(this).text() == '') {
                            $(this).addClass('BlankCell');
                        } else {
                            $(this).addClass('column_name');
                            // alert($('this').data('id'));
                        }
                    });

                });
            }

        });
    }

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // alert(count);
    var i;
    $('#dateTable').html('');
    $('#dateTableDay').html('');
    $("#dateTableTd").html('');
    $('#dateTableDay').html('<td class="bg-info" rowspan="2"><span style="margin-top:5px">Room Type</span></td><td class="bg-info" rowspan="2"><span style="margin-top:5px">Room Number</span></td>');
    for (i = 0; i < listDate.length - 1; i++) {
        date = new Date(listDate[i]);
        var da = date.getDate();
        $('#dateTable').append('<td>' + da + '</td>')
    }
    for (i = 0; i < listDate.length - 1; i++) {
        var d = new Date(listDate[i]);
        var dayName = days[d.getDay()];
        $('#dateTableDay').append('<td class="bg-warning">' + dayName + '</td>')
    }
    colspan = listDate.length + 2;
    // Object.keys(vCalenderRoomID).forEach(function(key) {
    //     if (vCalenderRoomID[key].Status == 1) {
    //         Status = 'Active';
    //     } else {
    //         Status = 'Deactive';
    //     }
    //     $("#dateTableTd").append("<tr><td colspan='" + colspan + "'>" + vCalenderRoomID[key].RoomTypeName + "<br> Status: " + Status + "</td></tr>");
    // });

}

$(document).on('click', '.BlankCell', function() {
    // alert($(this).data('date'));
    $('#bookingEntry').modal('toggle');

});

$(document).on('click', '.column_name', function() {
    id = $(this).data('id');
    // alert(id);
    $.ajax({
        url: 'home/calender_cell_details',
        type: 'POST',
        data: {
            _token: CSRF_TOKEN,
            id: id,
            date: $(this).data('date')

        },
        success: function(response) {
            if (response != 0) {
                var d = new Date(response.fromDate);
                var day = d.getDate();
                var month = d.getMonth() + 1;
                var year = d.getFullYear();
                if (day < 10) {
                    day = "0" + day;
                }
                if (month < 10) {
                    month = "0" + month;
                }
                var fromDate = month + "/" + day + "/" + year;

                var d = new Date(response.toDate);
                var day = d.getDate();
                var month = d.getMonth() + 1;
                var year = d.getFullYear();
                if (day < 10) {
                    day = "0" + day;
                }
                if (month < 10) {
                    month = "0" + month;
                }
                var toDate = month + "/" + day + "/" + year;

                $('#customerName').val(response.customerName);
                $('#RoomTypeID').val(response.RoomTypeID);
                $('#RoomNumberID').val(response.RoomNumberID);
                $('#FromDate').val(fromDate);
                $('#toDate').val(toDate);
                $('#price').val(response.price);
                $('#bookingDetailsID').val(response.bookingDetailsID);
                $('#viewBookingDetails').modal('toggle');
            }
        }
    });
});
// $(document).ready(function(){
//   $(".column_name").hover(function(){
//     $.ajax({
// 	    	url: 'home/calender_cell_details',
// 	    	type: 'POST',
// 	    	data: {
// 	    		_token: CSRF_TOKEN,
// 	    		id:$(this).data('id')

// 	    	},
// 	    	success: function(response){
// 	    		if(response != 0){
// 	    			alert(response.bookingID);
// 	    	}
// 	    }
// 	    });
//   });
// });

$(document).ready(function() {
    $("#RoomTypeID").change(function() {
        $('#RoomNumberID').html('<option value="">Select Room Number</option>');

        if (vCalenderRoomDetails != undefined) {
            vCalenderRoomDetails.forEach(roomNumbers => {
                // alert(classinfos.group_id);
                if (roomNumbers.RoomTypeID == $("#RoomTypeID").val())
                    $('#RoomNumberID').append(`<option value="${roomNumbers.RoomNumberID}">${roomNumbers.RoomNumberTitle}</option>`);
            });
        }
    });
});
$('#updateBooking').click(function() {
    $.ajax({
        url: 'home/update_booking',
        type: 'POST',
        data: {
            _token: CSRF_TOKEN,
            RoomNumberID: $('#RoomNumberID').val(),
            fromDate: $('#FromDate').val(),
            toDate: $('#toDate').val(),
            price: $('#price').val(),
            bookingDetailsID: $('#bookingDetailsID').val()

        },
        success: function(response) {
            if (response != 0) {
                alert('Updated Successfully!');
                $('#viewBookingDetails').modal('toggle');
                location.reload();

            } else {
                alert('failed to update!')
            }
        }
    });
})

function clearAll() {
    $('#FromDate').val('');
    $('#bookingDetailsID').val('');
    $('#RoomNumberID').val('');
    $('#RoomTypeID').val('');
    $('#customerName').val('');
}


$('#SaveBooking').click(function() {
    $.ajax({
        url: '/home/save_booking',
        type: 'POST',
        data: {
            _token: CSRF_TOKEN,
            customerName: $('#customerName1').val(),
            email: $('#Email').val(),
            phone: $('#Phone').val(),
            country: $('#Country').val(),
            district: $('#District').val(),
            ZIP: $('#ZIP').val(),
            additionalInformation: $('#Additionalinfo').val(),
            streetAddress: $('#Address').val(),
            apartment: $('#apartment').val(),
            suite: $('#suite').val(),
            unit: $('#Unit').val(),
            bookBy: $('#bookBy').val(),
            paymentmethodID: $('#paymentmethodID').val(),
            entryDate: $('#startDate').val(),
            fromDate: $('#startDate').val(),
            toDate: $('#endDate').val(),
            RoomNumberID: $('#RoomNumberID1').val(),
            price: $('#Price').val()

        },
        success: function(response) {
            if (response) {
                alert(response)
                $('#bookingEntry').modal('toggle');
                location.reload();
            } else {
                // alert('Already Booked')
            }

        }
    });
});

$(document).ready(function() {
    $('#toDate').datepicker({
        onSelect: function(date, datepicker) {
            if (datepicker.id == "toDate") {
                // $('#endDate').datepicker("setDate", date)
                alert('dddd');
            }
        }
    })

});