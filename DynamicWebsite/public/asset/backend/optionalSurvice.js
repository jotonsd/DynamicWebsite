var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
var responsed;


$('.numValid').bind('keypress',function(e){
    var keyCode=e.which?e.which:e.keyCode;
    if(keyCode>=48 && keyCode<=57)
    {
        return true;
    }
    if(keyCode==8 || keyCode == 46){
        return true;
    }
    return false;
});

//Optional service tab --- meals Plan portion....
function clearOptMealsPlanForm(){
	$('#optMealsplanTitle').val('');
	$('#optAdulRate').val('');
	$('#optChildRate').val('');
	$('#optStartDate').val('');
	$('#optEndDate').val('');
}

function fnValidationOptMealsPlan(){
	if($('#optMealsplanTitle').val() == ''){
		alert('Please enter title');
		$('#optMealsplanTitle').focus();
		return false;
	}else if($('#optAdulRate').val() == ''){
		alert('Please enter adult rate.');
		$('#optAdulRate').focus();
		return false;
	}else if($('#optChildRate').val() == ''){
		alert('Please enter child rate.');
		$('#optChildRate').focus();
		return false;
	}else if($('#optStartDate').val() == ''){
		alert('Please enter start date.');
		$('#optStartDate').focus();
		return false;
	}else if($('#optEndDate').val() == ''){
		alert('Please enter end date.');
		$('#optEndDate').focus();
		return false;
	}else{
		return true;
	}
}

$('#btnAddMealsPlan').click(function(){
	$('#btnSaveOptmealsPlan').show();
	$('#btnUpdateOptmealsPlan').hide();
	$('#cOptionalMealsPlan').html('Add Meals Plan');
	clearOptMealsPlanForm();
	$('#addoptionserviceMealsPlanModal').modal().on('shown.bs.modal', function (e) {});
});

$('#btnSaveOptmealsPlan').click(function(){
	if(fnValidationOptMealsPlan() == true){
		$.ajax({
			url: 'rates/saveOptionalMealsPlan',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				title: $('#optMealsplanTitle').val(),
				adultRate: $('#optAdulRate').val(),
				childRate: $('#optChildRate').val(),
				startDate: $('#optStartDate').val(),
				endDate: $('#optEndDate').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearOptMealsPlanForm();
				}else{
					alert('There occurs some internal problem');
					window.location.reload();
				}
			}
		});

		if(responsed !=0){
			alert('Data Save Successfully.');
			$('#addoptionserviceMealsPlanModal').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalMealsAlldata',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tblMealsPlan tbody tr td").remove();
					response.forEach(optmealsplan =>{
						
						$("#tblMealsPlan tbody").append("<tr><td><button onclick=deleteOptMealsPlan(" + optmealsplan.optMealsID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showOptMealsPlanUpdateModal(" + optmealsplan.optMealsID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ '---' + "</td><td>"+ optmealsplan.title  + "</td><td>"+  optmealsplan.adultRate  + "</td><td>"+ optmealsplan.childRate + "</td><td>"+  optmealsplan.startDate + "</td><td>"+ optmealsplan.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
});

function showOptMealsPlanUpdateModal(id){
	$('#btnSaveOptmealsPlan').hide();
	$('#btnUpdateOptmealsPlan').show();
	$('#cOptionalMealsPlan').html('Update Meals Plan');
	$('#addoptionserviceMealsPlanModal').modal().on('shown.bs.modal', function (e) {});

	$.ajax({
		url: 'rates/showOptionalMealsPlanForUpdate',
		type: 'POST',
		dataType: 'JSON',
		data:{
			_token: CSRF_TOKEN,
			id: id
		},
		success: function(response){
			$('#optionalMealsPlanId').val(response.optMealsID)
			$('#optMealsplanTitle').val(response.title);
			$('#optAdulRate').val(response.adultRate);
			$('#optChildRate').val(response.childRate);
			$('#optStartDate').val(response.startDate);
			$('#optEndDate').val(response.endDate);
		}
	});
}

$('#btnUpdateOptmealsPlan').click(function(){
	if(fnValidationOptMealsPlan() == true){
		$.ajax({
			url: 'rates/updateOptionalMealsPlan',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				id: $('#optionalMealsPlanId').val(),
				title: $('#optMealsplanTitle').val(),
				adultRate: $('#optAdulRate').val(),
				childRate: $('#optChildRate').val(),
				startDate: $('#optStartDate').val(),
				endDate: $('#optEndDate').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearOptMealsPlanForm();
				}
			}
		});

		if(responsed !=0){
			alert('Data Update Successfully.');
			$('#addoptionserviceMealsPlanModal').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalMealsAlldata',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tblMealsPlan tbody tr td").remove();
					response.forEach(optmealsplan =>{
						
						$("#tblMealsPlan tbody").append("<tr><td><button onclick=deleteOptMealsPlan(" + optmealsplan.optMealsID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showOptMealsPlanUpdateModal(" + optmealsplan.optMealsID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ '---' + "</td><td>"+ optmealsplan.title  + "</td><td>"+  optmealsplan.adultRate  + "</td><td>"+ optmealsplan.childRate + "</td><td>"+  optmealsplan.startDate + "</td><td>"+ optmealsplan.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
});
//Optional service tab --- meals Plan portion end....




//Optional service tab --- tranfer sercie portion start....
function clearOptTransferServiceForm(){
	$('#opttrans_transferFrom').val('');
	$('#opttrans_transferTo').val('');
	$('#opttrans_vehicle').val('');
	$('#opttrans_maxpax').val('');
	$('#opttrans_rate').val('');
	$('#opttrans_startDate').val('');
	$('#opttrans_endDate').val('');
	$('#opttsChecked').prop('checked',true);

}

function fnValidTransService(){
	if($("input[name='opttrans_serviceType']:checked").val() == undefined){
		alert('Please checked service type');
		return false;
	}else if($('#opttrans_transferFrom').val() == ''){
		alert('Please enter transfer from');
		$('#opttrans_transferFrom').focus();
		return false;
	}else if($('#opttrans_transferTo').val() == ''){
		alert('Please enter transfer to');
		$('#opttrans_transferTo').focus();
		return false;
	}else if($('#opttrans_vehicle').val() == ''){
		alert('Please enter vehicle number');
		$('#opttrans_vehicle').focus();
		return false;
	}else if($('#opttrans_maxpax').val() == ''){
		alert('Please enter maximum pax');
		$('#opttrans_maxpax').focus();
		return false;
	}else if($('#opttrans_rate').val() == ''){
		alert('Please enter rate');
		$('#opttrans_rate').focus();
		return false;
	}else if($('#opttrans_startDate').val() == ''){
		alert('Please enter start date');
		$('#opttrans_startDate').focus();
		return false;
	}else if($('#opttrans_endDate').val() == ''){
		alert('Please enter end date');
		$('#opttrans_endDate').focus();
		return false;
	}else{
		return true;
	}
}

$('#btntransfer').click(function(){
	$('#btnSaveOptTransferService').show();
	$('#btnUpdateOptTransferService').hide();
	$('#cOptionalMealsPlan').html('Add Tranfer Service');
	clearOptTransferServiceForm();
	$('#addoptionservicetransferserviceModal').modal().on('shown.bs.modal', function (e) {});
})

$('#btnSaveOptTransferService').click(function(){
	if(fnValidTransService() == true){
		$.ajax({
			url: 'rates/saveOptionalTransferService',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				serviceType: $("input[name='opttrans_serviceType']:checked").val(),
				transferFrom: $('#opttrans_transferFrom').val(),
				transferTo: $('#opttrans_transferTo').val(),
				vehicle: $('#opttrans_vehicle').val(),
				maximumPax: $('#opttrans_maxpax').val(),
				rate: $('#opttrans_rate').val(),
				startDate: $('#opttrans_startDate').val(),
				endDate: $('#opttrans_endDate').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearOptTransferServiceForm();
				}else{
					alert('There occurs some internal problem');
					window.location.reload();
				}
			}
		});

		if(responsed !=0){
			alert('Data Save Successfully.');
			$('#addoptionservicetransferserviceModal').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalTransferServiceAllData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tbltransfer tbody tr td").remove();
					response.forEach(opttransferserve =>{
						
						$("#tbltransfer tbody").append("<tr><td><button onclick=deleteOptinalTransferService(" + opttransferserve.optionalTransferServiceID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showOptionalTransferService(" + opttransferserve.optionalTransferServiceID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (opttransferserve.serviceType == 1 ? 'Private' : 'Shared') + "</td><td>"+ opttransferserve.transferFrom  + "</td><td>"+  opttransferserve.transferTo  + "</td><td>"+ opttransferserve.vehicle + "</td><td>"+  opttransferserve.maximumPax + "</td><td>"+ opttransferserve.rate + "</td><td>"+ opttransferserve.startDate + "</td><td>"+ opttransferserve.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
})

function showOptionalTransferService(id){
	$('#btnSaveOptTransferService').hide();
	$('#btnUpdateOptTransferService').show();
	$('#cOptionalMealsPlan').html('Update Tranfer Service');
	$('#addoptionservicetransferserviceModal').modal().on('shown.bs.modal', function (e) {});

	$.ajax({
		url: 'rates/getOptionalTransferserviceData',
		type: 'POST',
		dataType: 'JSON',
		data: {
			_token: CSRF_TOKEN,
			id: id
		},
		success: function(response){
			//console.log(response);
			$('#optionalTransferServiceID').val(response.optionalTransferServiceID);
			$("input[name=opttrans_serviceType][value='" + response.serviceType +"']").prop('checked', true);
		    $('#opttrans_transferFrom').val(response.transferFrom);
		 	$('#opttrans_transferTo').val(response.transferTo);
			$('#opttrans_vehicle').val(response.vehicle);
			$('#opttrans_maxpax').val(response.maximumPax);
			$('#opttrans_rate').val(response.rate);
			$('#opttrans_startDate').val(response.startDate);
			$('#opttrans_endDate').val(response.endDate);
		}
	})
}

$('#btnUpdateOptTransferService').click(function(){
	if(fnValidTransService() == true){
		$.ajax({
			url: 'rates/UpdateOptionalTransferService',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				id: $('#optionalTransferServiceID').val(),
				serviceType: $("input[name='opttrans_serviceType']:checked").val(),
				transferFrom: $('#opttrans_transferFrom').val(),
				transferTo: $('#opttrans_transferTo').val(),
				vehicle: $('#opttrans_vehicle').val(),
				maximumPax: $('#opttrans_maxpax').val(),
				rate: $('#opttrans_rate').val(),
				startDate: $('#opttrans_startDate').val(),
				endDate: $('#opttrans_endDate').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearOptTransferServiceForm();
				}
			}
		});

		if(responsed !=0){
			alert('Data Update Successfully.');
			$('#addoptionservicetransferserviceModal').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalTransferServiceAllData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tbltransfer tbody tr td").remove();
					response.forEach(opttransferserve =>{
						
						$("#tbltransfer tbody").append("<tr><td><button onclick=deleteOptinalTransferService(" + opttransferserve.optionalTransferServiceID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showOptionalTransferService(" + opttransferserve.optionalTransferServiceID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (opttransferserve.serviceType == 1 ? 'Private' : 'Shared') + "</td><td>"+ opttransferserve.transferFrom  + "</td><td>"+  opttransferserve.transferTo  + "</td><td>"+ opttransferserve.vehicle + "</td><td>"+  opttransferserve.maximumPax + "</td><td>"+ opttransferserve.rate + "</td><td>"+ opttransferserve.startDate + "</td><td>"+ opttransferserve.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
})
//Optional service tab --- tranfer sercie portion end....



//Optional service tab --- Excursion or Tour portion start...
function clearTourServiceForm(){
	$('#optour_title').val('');
	$('textarea:input[name=optour_details]').val('');
	$('#optour_maxpux').val('');
	$('#optour_rate').val('');
	$('#optour_start').val('');
	$('#optour_end').val('');
	$('#optour_serviceType1').prop('checked',true);
}

function fnvalidTourService(){
	if($("input[name='optour_serviceType']:checked").val() == undefined){
		alert('Please checked service type');
		return false;
	}else if($('#optour_title').val() == ''){
		alert('Please enter Title');
		$('#optour_title').focus();
		return false;
	}else if($('textarea:input[name=optour_details]').val() == ''){
		alert('Please enter transfer to');
		$('textarea:input[name=optour_details]').focus();
		return false;
	}else if($('#optour_maxpux').val() == ''){
		alert('Please enter maximum pax');
		$('#optour_maxpux').focus();
		return false;
	}else if($('#optour_rate').val() == ''){
		alert('Please enter rate');
		$('#optour_rate').focus();
		return false;
	}else if($('#optour_start').val() == ''){
		alert('Please enter start date');
		$('#optour_start').focus();
		return false;
	}else if($('#optour_end').val() == ''){
		alert('Please enter end date');
		$('#optour_end').focus();
		return false;
	}else{
		return true;
	}
}

$('#btntourservice').click(function(){
	$('#btnSaveOptTourService').show();
	$('#btnUpdateOptTourrService').hide();
	$('#cOptionalMealsPlan').html('Add Excursion/Tour Service');
	clearTourServiceForm();
	$('#addoptionaltourservice').modal().on('shown.bs.modal', function (e) {});
})

$('#btnSaveOptTourService').click(function(){
	if(fnvalidTourService() == true){
		//alert('dd');	
		$.ajax({
			url: 'rates/saveTourService',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				serviceType: $("input[name='optour_serviceType']:checked").val(),
				title: $('#optour_title').val(),
				details: $('textarea:input[name=optour_details]').val(),
				maximumPax: $('#optour_maxpux').val(),
				rate: $('#optour_rate').val(),
				startDate: $('#optour_start').val(),
				endDate: $('#optour_end').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearTourServiceForm();
				}
			}
		});

		if(responsed !=0){
			alert('Data save Successfully');
			$('#addoptionaltourservice').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalTourServiceAllData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tbltourservice tbody tr td").remove();
					response.forEach(opttourserve =>{
						
						$("#tbltourservice tbody").append("<tr><td><button onclick=deleteOptionalTourService(" + opttourserve.optionalTourID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showOptionalTourService(" + opttourserve.optionalTourID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (opttourserve.serviceType == 1 ? 'Private' : 'Shared') + "</td><td>"+ opttourserve.title  + "</td><td>"+  opttourserve.details  + "</td><td>"+ opttourserve.maximumPax + "</td><td>"+  opttourserve.rate + "</td><td>"+ opttourserve.startDate + "</td><td>"+ opttourserve.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
});



function showOptionalTourService(id){
	$('#btnSaveOptTourService').hide();
	$('#btnUpdateOptTourrService').show();
	$('#cOptionalMealsPlan').html('Update Excursion/Tour Service');
	$('#addoptionaltourservice').modal().on('shown.bs.modal', function (e) {});

	$.ajax({
		url: 'rates/getOptionalTourServiceData',
		type: 'POST',
		dataType: 'JSON',
		data: {
			_token: CSRF_TOKEN,
			id: id
		},
		success: function(response){
			//console.log(response);
			$('#opttourserviceID').val(response.optionalTourID);
			$("input[name=optour_serviceType][value='" + response.serviceType +"']").prop('checked', true);
		    $('#optour_title').val(response.title);
		 	$('textarea:input[name=optour_details]').val(response.details);
			$('#optour_maxpux').val(response.maximumPax);
			$('#optour_rate').val(response.rate);
			$('#optour_start').val(response.startDate);
			$('#optour_end').val(response.endDate);
		}
	})
}

$('#btnUpdateOptTourrService').click(function(){
	if(fnvalidTourService() == true){
		//alert('dd');	
		$.ajax({
			url: 'rates/UpdateTourService',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				id: $('#opttourserviceID').val(),
				serviceType: $("input[name='optour_serviceType']:checked").val(),
				title: $('#optour_title').val(),
				details: $('textarea:input[name=optour_details]').val(),
				vehicle: $('#optour_vehicle').val(),
				maximumPax: $('#optour_maxpux').val(),
				rate: $('#optour_rate').val(),
				startDate: $('#optour_start').val(),
				endDate: $('#optour_end').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearTourServiceForm();
				}
			}
		});

		if(responsed !=0){
			alert('Data update Successfully');
			$('#addoptionaltourservice').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalTourServiceAllData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tbltourservice tbody tr td").remove();
					response.forEach(opttourserve =>{
						
						$("#tbltourservice tbody").append("<tr><td><button onclick=deleteOptionalTourService(" + opttourserve.optionalTourID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showOptionalTourService(" + opttourserve.optionalTourID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (opttourserve.serviceType == 1 ? 'Private' : 'Shared') + "</td><td>"+ opttourserve.title  + "</td><td>"+  opttourserve.details  + "</td><td>"+ opttourserve.maximumPax + "</td><td>"+  opttourserve.rate + "</td><td>"+ opttourserve.startDate + "</td><td>"+ opttourserve.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
});

//Optional service tab --- Excursion or Tour portion end...



//Optional service tab --- Other service portion start...
function clearOtherService(){
	$('#opt_tile').val('');
	$('textarea:input[name=opt_serType]').val('');
	$('#opt_details').val('');
	$('#opt_maxpax').val('');
	$('#opt_adultrate').val('');
	$('#opt_start').val('');
	$('#opt_end').val('');
	$('#opt_serType1').prop('checked',true);
}

function fnValidOtherservice(){
	if($("input[name='opt_serType']:checked").val() == undefined){
		alert('Please checked service type');
		return false;
	}else if($('#opt_tile').val() == ''){
		alert('Please enter Title');
		$('#opt_tile').focus();
		return false;
	}else if($('textarea:input[name=opt_details]').val() == ''){
		alert('Please enter transfer to');
		$('textarea:input[name=opt_details]').focus();
		return false;
	}else if($('#opt_maxpax').val() == ''){
		alert('Please enter maximum pax');
		$('#opt_maxpax').focus();
		return false;
	}else if($('#opt_adultrate').val() == ''){
		alert('Please enter rate');
		$('#opt_adultrate').focus();
		return false;
	}else if($('#opt_start').val() == ''){
		alert('Please enter start date');
		$('#opt_start').focus();
		return false;
	}else if($('#opt_end').val() == ''){
		alert('Please enter end date');
		$('#opt_end').focus();
		return false;
	}else{
		return true;
	}
}

$('#btnAddotherService').click(function(){
	$('#btnsaveOtherservice').show();
	$('#btnUpdateOtherservice').hide();
	$('#cOptionalMealsPlan').html('Add Other Service');
	clearOtherService();
	$('#addoptionalotherservice').modal().on('shown.bs.modal', function (e) {});
})


$('#btnsaveOtherservice').click(function(){
	if(fnValidOtherservice() == true){
		$.ajax({
			url: 'rates/saveOtherservice',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				serviceType: $("input[name='opt_serType']:checked").val(),
				title: $('#opt_tile').val(),
				details: $('textarea:input[name=opt_details]').val(),
				maximumPax: $('#opt_maxpax').val(),
				adultRate: $('#opt_adultrate').val(),
				startDate: $('#opt_start').val(),
				endDate: $('#opt_end').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearOtherService();
				}
			}
		});

		if(responsed !=0){
			alert('Data save Successfully');
			$('#addoptionalotherservice').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalOtherServiceAllData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tblotherservice tbody tr td").remove();
					response.forEach(otherservice =>{
						
						$("#tblotherservice tbody").append("<tr><td><button onclick=deleteotherservice(" + otherservice.optionalOtherServiceID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showotherserviceforUpdate(" + otherservice.optionalOtherServiceID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (otherservice.serviceType == 1 ? 'Private' : 'Shared') + "</td><td>"+ otherservice.title  + "</td><td>"+  otherservice.details  + "</td><td>"+ otherservice.maximumPax + "</td><td>"+  otherservice.adultRate + "</td><td>"+ otherservice.startDate + "</td><td>"+ otherservice.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
});


function showotherserviceforUpdate(id){
	$('#btnsaveOtherservice').hide();
	$('#btnUpdateOtherservice').show();
	$('#cOptionalMealsPlan').html('Update Other Service');
	$('#addoptionalotherservice').modal().on('shown.bs.modal', function (e) {});

	$.ajax({
		url: 'rates/getOptionalotherServiceData',
		type: 'POST',
		dataType: 'JSON',
		data: {
			_token: CSRF_TOKEN,
			id: id
		},
		success: function(response){
			console.log(response);
			$('#optotherserviceID').val(response.optionalOtherServiceID);
			$("input[name=opt_serType][value='" + response.serviceType +"']").prop('checked', true);
		    $('#opt_tile').val(response.title);
		 	$('textarea:input[name=opt_details]').val(response.details);
			$('#opt_maxpax').val(response.maximumPax);
			$('#opt_adultrate').val(response.adultRate);
			$('#opt_start').val(response.startDate);
			$('#opt_end').val(response.endDate);
		}
	})
}

$('#btnUpdateOtherservice').click(function(){
	if(fnValidOtherservice() == true){
		$.ajax({
			url: 'rates/updateOtherservice',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				id: $('#optotherserviceID').val(),
				serviceType: $("input[name='opt_serType']:checked").val(),
				title: $('#opt_tile').val(),
				details: $('textarea:input[name=opt_details]').val(),
				maximumPax: $('#opt_maxpax').val(),
				adultRate: $('#opt_adultrate').val(),
				startDate: $('#opt_start').val(),
				endDate: $('#opt_end').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					clearOtherService();
				}
			}
		});

		if(responsed !=0){
			alert('Data update Successfully');
			$('#addoptionalotherservice').modal('toggle');
			$.ajax({
				url: 'rates/getOptionalOtherServiceAllData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tblotherservice tbody tr td").remove();
					response.forEach(otherservice =>{
						
						$("#tblotherservice tbody").append("<tr><td><button onclick=deleteotherservice(" + otherservice.optionalOtherServiceID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showotherserviceforUpdate(" + otherservice.optionalOtherServiceID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button>" + "</td><td>"+ (otherservice.serviceType == 1 ? 'Private' : 'Shared') + "</td><td>"+ otherservice.title  + "</td><td>"+  otherservice.details  + "</td><td>"+ otherservice.maximumPax + "</td><td>"+  otherservice.adultRate + "</td><td>"+ otherservice.startDate + "</td><td>"+ otherservice.endDate  + "</td><td>"+ '#' +"</td></tr>"); 

					})
				}
			})
		}
	}
})
