var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
function paymentsearchbyParam(){
	$RoomTypeID = $('#RoomTypeID').val();
	$fromDate = $('#fromDate').val();
	$toDate = $('#toDate').val();
	$paymentmethodID = $('#paymentmethodID').val();
	$bookBy = $('#bookBy').val();

	 // alert($RoomTypeID + $fromDate + $toDate + $paymentmethodID + $bookBy);

	$.ajax({
		url: 'paymentsearch/SearchByItem',
		type: 'POST',
		data: {
			_token:CSRF_TOKEN,
			RoomTypeID : $('#RoomTypeID').val(),
			fromDate : $('#fromDate').val(),
			toDate : $('#toDate').val(),
			paymentmethodID : $('#paymentmethodID').val(),
			bookBy : $('#bookBy').val()
		},
		success: function(response){
			$("#tblpaymentinfo tbody tr").remove();
			if(response !=0){
				var i = 0;
				response.forEach(item =>{
					i++;
					$('#tblpaymentinfo tbody').append('<tr><td>' + i + '</td><td>' + item.customerName + '</td><td>' + item.phone + '</td><td>' + item.paymentmethod + '</td><td>' + item.RoomTypeName + '</td><td>' + item.qty + '</td><td>' + item.price + '</td></tr>');
				});
			}
		}
	})
}