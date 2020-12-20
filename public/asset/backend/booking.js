var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
function bookingsrhbyParam(){
	$RoomTypeID = $('#RoomTypeID').val();
	$fromDate = $('#fromDate').val();
	$toDate = $('#toDate').val();
	$customerID = $('#customerID').val();
	$country = $('#country').val();

	// alert($RoomTypeID + $fromDate + $toDate + $customerID + $country);

	$.ajax({
		url: 'bookingsearch/SearchByItem',
		type: 'POST',
		data: {
			_token:CSRF_TOKEN,
			RoomTypeID : $('#RoomTypeID').val(),
			fromDate : $('#fromDate').val(),
			toDate : $('#toDate').val(),
			customerID : $('#customerID').val(),
			country : $('#country').val()
		},
		success: function(response){
			$("#tblBookingInfo tbody tr").remove();
			if(response !=0){
				var i = 0;
				response.forEach(item =>{
					i++;
					$('#tblBookingInfo tbody').append('<tr><td>' + i + '</td><td>' + item.customerName + '</td><td>' + item.country + '</td><td>' + item.district + '</td><td>' + item.phone + '</td><td>' + item.RoomTypeName + '</td><td>' + item.fromDate + '</td><td>' + item.toDate + '</td><td>' + item.qty + '</td><td>' + item.price + '</td></tr>');
				});
			}
		}
	})
}