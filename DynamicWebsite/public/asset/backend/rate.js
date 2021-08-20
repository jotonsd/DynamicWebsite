var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');


$(document).on('blur', '.column_name', function(){
        column_name = $(this).data("column_name");
        column_value = $(this).text();
       	ratetypeID = $(this).data("rate_type");
        additionalratetypeID= $(this).data("additional_rate_type");
        sessiongroupID = $(this).data("session_group");
        roomtypeID =  $(this).data("room_type");

        $.ajax({
        	url: 'rates/update_rateinfo',
        	type: 'POST',
        	data: {
        		_token: CSRF_TOKEN,
        		sessiongroupID: sessiongroupID,
        		RoomTypeID: roomtypeID,
        		RateTypeID: ratetypeID,
        		additionaltyprerateID: additionalratetypeID,
        		column_name: column_name,
        		column_value: column_value
        	},
        	success: function(response){
        		if(response>0){
        			alert('Data updated Sucessfully');
        			location.reload();
        			// window.location.href = window.location.href + '#rates';
     //    			window.location.hash = 'rates';
					// window.location.reload();
        		}
        	}
        })
})