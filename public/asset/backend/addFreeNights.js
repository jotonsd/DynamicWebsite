var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
var response;
$(document).ready(function(){
	$('#divforFreeNigthsDetails').hide();
	$('#btnUpdateFreeNights').hide();
});

//add offers
$('#btnOffers').click(function(){
	$('#divforFreeNigthsDetails').show();
});

//add to list btnAddOffersToList
$('#btnAddOffersToList').click(function(){
	if($('#minimumStayFreeNights').val() == ''){
		alert('Please select stay nights.');
		$('#minimumStayFreeNights').focus();
		return false;
	}else if($('#minimumPayFreeNights').val() == ''){
		alert('Please select payment for stay nights.');
		$('#minimumPayFreeNights').focus();
		return false;
	}else{
		//while update modal open, it should be checking the serail number and then write next number as well
		$('#tblOffersList tbody tr').each(function () {
		 	var i = -1;
	        $(this).find("td:eq(0)").each(function () {
	            i = i + 1;
	            if(i== 0){
	            	k = $(this).html();
	            }
	        });
		});
		k++;
		var stay = $('#minimumStayFreeNights').val();
		var pay = $('#minimumPayFreeNights').val();

		$("#tblOffersList tbody").append("<tr data-SerialNo='" + k + "'data-stay='" + stay  +"'data-pay='" + pay  +"'><td>"  + k + "</td><td>"+ stay + "</td><td>"+ pay  + "</td><td><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>"); 

	 	$('#minimumStayFreeNights').val('');
	 	$('#minimumPayFreeNights').val('');
	}
	
});

//clear form and modal
function ClearFreeNights(){
	$("#tblOffersList").find("tr:gt(0)").remove();
	$('#ChildBed').val('');
	$('#AdultBed').val('');
	$('#sDate').val('');
	$('#AdultBreakfast').val('');
	$('#ChildBreakfast').val('');
	$('#maxFreeNights').val('');
	$('textarea:input[name=freeNightDetails]').val('');
	$('#eDate').val('');
	$('#sDate').val('');
}


//show modal
$('#addFreeNights').click(function(){
	$('#divforFreeNigthsDetails').hide	();
	$('#btnUpdateFreeNights').hide();
	$('#btnSaveFreeNights').show();
	$('#FreeNightsHead').html('Add Free Nights');
	ClearFreeNights();
	$('#addFreeNightsModal').modal().on('shown.bs.modal', function (e) {

	});
});

//close modal..
$('#closeFreeNightsModal').click(function(){
	ClearFreeNights();
});

//validation..
function fnValidationforFreeNights(){
	return true;
}
//save free nights..
$('#btnSaveFreeNights').click(function(){
	if(fnValidationforFreeNights() == true){
		$.ajax({
			url: 'rates/freenighs/saveData',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				startDate: $('#sDate').val(),
				endDate: $('#eDate').val(),
				details: $('textarea:input[name=freeNightDetails]').val(),
				maxFreeNight: $('#maxFreeNights').val(),
				breakfastOnFreeNightofrChild: $('#ChildBreakfast').val(),
				breakfastOnFreeNightforAdult: $('#AdultBreakfast').val(),
				extraBedOnFreeNightforChild: $('#ChildBed').val(),
				extraBedonFreeNightforAdult: $('#AdultBed').val()
			},
			success: function (response){
				freeNightInfoID = response;

				$('#tblOffersList tbody tr').each(function () {
				 	var i = 0;
			        $(this).find("td:gt(0)").each(function () {
			            i = i + 1;
			            if(i==1){
			            	Stay = $(this).html();
			            	// alert(startDate);
			            }else if(i == 2){
			            	Pay = $(this).html();
			            	// alert(endDate)
			            }
			        });
			        $.ajax({
						url:'rates/freenightsDetails/saveData',
						type:'POST',
						data:{
							_token: CSRF_TOKEN,
							freeNightInfoID : freeNightInfoID,
							stayDay : Stay,
							pay : Pay
						},
						success: function (response){
							if(response > 0){
								ClearFreeNights();
							}
						}
					})
	    		});
			}
		});

		if(response != 0){
			$('#addFreeNightsModal').modal('toggle');
			$.ajax({
				url: 'rates/getFreeNightsInfoForTable',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#showFreeNightsDetails tbody tr td").remove();
					response.forEach(freeNightsDetails =>{
						
						$("#showFreeNightsDetails tbody").append("<tr><td><button onclick=deletFreeNights(" + freeNightsDetails.freeNightInfoID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showFreeNightsModalUpdate(" + freeNightsDetails.freeNightInfoID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (freeNightsDetails.freeNightInfoID > 0 ? '<span  style="text-align: center; color: green;"><i class="fa fa-check" aria-hidden="true"></i></span>': '<span style="text-align: center; color: red;">&times</span>') + "</td><td>"+ freeNightsDetails.details  + "</td><td>"+  freeNightsDetails.maxFreeNight  + "</td><td>"+ freeNightsDetails.startDate + "</td><td>"+  freeNightsDetails.endDate + "</td><td>"+ freeNightsDetails.breakfastOnFreeNightforAdult   + "</td><td>"+ freeNightsDetails.breakfastOnFreeNightofrChild + "</td><td>"+  freeNightsDetails.extraBedonFreeNightforAdult + "</td><td>"+ freeNightsDetails.extraBedOnFreeNightforChild  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
			alert('Data Save Successfully.');
		}
	}
})

//show update modal,,
function showFreeNightsModalUpdate(id){
	$('#btnUpdateFreeNights').show();
	$('#btnSaveFreeNights').hide();
	$('#FreeNightsHead').html('Update Free Nights');
	$.ajax({
		url:'rates/showFreeNightsDetails',
		type: 'POST',
		dataType: 'JSON',
		data:{
			_token: CSRF_TOKEN,
			id : id
		},
		success: function(response){
			$('#freeNightID').val(response[0].freeNightInfoID);
			$('#sDate').val(response[0].startDate);
			$('#eDate').val(response[0].endDate);
			$('textarea:input[name=freeNightDetails]').val(response[0].details);
			$('#maxFreeNights').val(response[0].maxFreeNight);
			$('#ChildBreakfast').val(response[0].breakfastOnFreeNightofrChild);
			$('#AdultBreakfast').val(response[0].breakfastOnFreeNightforAdult);
			$('#ChildBed').val(response[0].extraBedOnFreeNightforChild);
			$('#AdultBed').val(response[0].extraBedonFreeNightforAdult);
		}
	});
	$.ajax({
		url: 'rates/showFreeNightsDetailslist',
		type: 'POST',
		dataType: 'JSON',
		data:{
			_token: CSRF_TOKEN,
			id:id
		},
		success: function(response){
			$('#divforFreeNigthsDetails').show();
			var k =0;
			response.forEach(data=> {
				
				$("#tblOffersList tbody").append("<tr data-SerialNo='" + k++ + "'data-stay='" + data.stayDay  +"'data-pay='" +data.pay  +"'><td>"  + k + "</td><td>"+ data.stayDay + "</td><td>"+ data.pay  + "</td><td><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>"); 
			})
		}
	})
	$('#addFreeNightsModal').modal().on('shown.bs.modal', function (e) {

	});
}

$('#btnUpdateFreeNights').click(function(){
	if(fnValidationforFreeNights() == true){
	    $.ajax({
	    	url: 'rates/updateFreeNigts',
	    	type: 'POST',
	    	data: {
	    		_token: CSRF_TOKEN,
				freeNightInfoID: $('#freeNightID').val(),
				startDate: $('#sDate').val(),
				endDate: $('#eDate').val(),
				details: $('textarea:input[name=freeNightDetails]').val(),
				maxFreeNight: $('#maxFreeNights').val(),
				breakfastOnFreeNightofrChild: $('#ChildBreakfast').val(),
				breakfastOnFreeNightforAdult: $('#AdultBreakfast').val(),
				extraBedOnFreeNightforChild: $('#ChildBed').val(),
				extraBedonFreeNightforAdult: $('#AdultBed').val()
	    	},
	    	success: function(response){
	    		
	    	}
	    });

	    //update details..
	    $('#tblOffersList tbody tr').each(function () {
		 	var i = 0;
	        $(this).find("td:gt(0)").each(function () {
	            i = i + 1;
	            if(i==1){
	            	Stay = $(this).html();
	            	// alert(startDate);
	            }else if(i == 2){
	            	Pay = $(this).html();
	            	// alert(endDate)
	            }
	        });
	        $.ajax({
				url:'rates/freenightsDetails/UpdateData',
				type:'POST',
				data:{
					_token: CSRF_TOKEN,
					freeNightInfoID : $('#freeNightID').val(),
					stayDay : Stay,
					pay : Pay
				},
				success: function (response){
					if(response > 0){
						ClearFreeNights();
					}
				}
			})
		});

		if(response != 0){
			$('#addFreeNightsModal').modal('toggle');
			$.ajax({
				url: 'rates/getFreeNightsInfoForTable',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#showFreeNightsDetails tbody tr td").remove();
					response.forEach(freeNightsDetails =>{
						
						$("#showFreeNightsDetails tbody").append("<tr><td><button onclick=deletFreeNights(" + freeNightsDetails.freeNightInfoID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showFreeNightsModalUpdate(" + freeNightsDetails.freeNightInfoID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (freeNightsDetails.freeNightInfoID > 0 ? '<span  style="text-align: center; color: green;"><i class="fa fa-check" aria-hidden="true"></i></span>': '<span style="text-align: center; color: red;">&times</span>') + "</td><td>"+ freeNightsDetails.details  + "</td><td>"+  freeNightsDetails.maxFreeNight  + "</td><td>"+ freeNightsDetails.startDate + "</td><td>"+  freeNightsDetails.endDate + "</td><td>"+ freeNightsDetails.breakfastOnFreeNightforAdult   + "</td><td>"+ freeNightsDetails.breakfastOnFreeNightofrChild + "</td><td>"+  freeNightsDetails.extraBedonFreeNightforAdult + "</td><td>"+ freeNightsDetails.extraBedOnFreeNightforChild  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
			alert('Data Update Successfully');	
		}
	}
})