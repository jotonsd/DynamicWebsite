var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
var response;
var responsed;

//function for event surcharge validation..
function surchargeValidation(){
	if($('#eventtitle').val() == ''){
		alert('Please enter Event Title.');
		$('#eventtitle').focus();
		return false;
	}else if($('#eventApplytoDate').val() == ''){
		alert('Please enter apply date.');
		$('#eventApplytoDate').focus();
		return false;
	}else if($('#eventSurcharge').val() == ''){
		alert('Please enter surcharge.');
		$('#eventSurcharge').focus();
		return false;
	}else{
		return true;
	}
	
}  

//function for clearing event surcharge data after save or update...
function clearAllEventSurchargeFormVal(){
	$('#eventtitle').val('');
	$('#eventApplytoDate').val('');
	$('#eventSurcharge').val('');
}

//Add button for show event surcharge modal..
$('#btnEventSurchargeADD').click(function(){
	$('#btnSaveEventSurcharge').show();
	$('#btnUpdateEventSurcharge').hide();
	$('#EventSurchargeHead').html('Add Event Surcharge');
	$('#addEventSurchargeModal').modal().on('shown.bs.modal', function (e) {});
});

//save button for save event surcharge...
$('#btnSaveEventSurcharge').click(function(){
	if (surchargeValidation() == true) {
		$.ajax({
			url: 'rates/eventsurchargeSave',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				title: $('#eventtitle').val(),
				applytoDate: $('#eventApplytoDate').val(),
				surcharge: $('#eventSurcharge').val()
			},
			success: function (response){
				if(response){
					responsed = response;
					clearAllEventSurchargeFormVal();
				}else{
					alert('There occurs some Internal Problem.');
					window.location.reload();
				}
			}
		});

		//hide modal and show updated data in the table..
		if(responsed != 0 || responsed != undefined){
			alert('Data save Successfully');
			$('#addEventSurchargeModal').modal('toggle');
			$.ajax({
				url: 'rates/getAllEventSurchargeData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tblEventSurcharge tbody tr td").remove();
					response.forEach(eventsurcharge =>{
					   $("#tblEventSurcharge tbody").append("<tr><td><button onclick=deleteEventSurcharge(" + eventsurcharge.eventSurchageID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showEventSurchargeModalForUpdate(" + eventsurcharge.eventSurchageID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button></td><td>"+ eventsurcharge.title + "</td><td>"+ eventsurcharge.applytoDate  + "</td><td>"+  eventsurcharge.surcharge  + "</td><td>"+ '#' +"</td></tr>"); 
					})
				}
			})
		}

	}
});

//show EventSurchargeModal for update...
 function showEventSurchargeModalForUpdate(id){
 	$('#btnSaveEventSurcharge').hide();
	$('#btnUpdateEventSurcharge').show();
	$('#EventSurchargeHead').html('Update Event Surcharge');
	$('#addEventSurchargeModal').modal().on('shown.bs.modal', function (e) {});

	$.ajax({
		url: 'rates/searchEventSurchargeData',
		type: 'POST',
		dataType: 'JSON',
		data:{
			_token: CSRF_TOKEN,
			id: id
		},
		success: function (response){
			$('#eventSurchageID').val(response.eventSurchageID);
			$('#eventtitle').val(response.title);
			$('#eventApplytoDate').val(response.applytoDate);
			$('#eventSurcharge').val(response.surcharge);
		}
	});
}


	//update EventSurcharge..
	$('#btnUpdateEventSurcharge').click(function (){
		if (surchargeValidation() == true) {
			$.ajax({
				url: 'rates/eventsurchargeUpdate',
				type: 'POST',
				data: {
					_token: CSRF_TOKEN,
					id: $('#eventSurchageID').val(),
					title: $('#eventtitle').val(),
					applytoDate: $('#eventApplytoDate').val(),
					surcharge: $('#eventSurcharge').val()
				},
				success: function (response){
					if(response){
						clearAllEventSurchargeFormVal();
					}
				}
			});

			//hide modal and show updated data in the table..
			if(response != 0){
				alert('Data Update Successfully.');
				$('#addEventSurchargeModal').modal('toggle');
				$.ajax({
					url: 'rates/getAllEventSurchargeData',
					type: 'get',
					dataType: 'JSON',
					success: function(response){
						$("#tblEventSurcharge tbody tr td").remove();
						response.forEach(eventsurcharge =>{
						    $("#tblEventSurcharge tbody").append("<tr><td><button onclick=deleteEventSurcharge(" + eventsurcharge.eventSurchageID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showEventSurchargeModalForUpdate(" + eventsurcharge.eventSurchageID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button></td><td>"+ eventsurcharge.title + "</td><td>"+ eventsurcharge.applytoDate  + "</td><td>"+  eventsurcharge.surcharge  + "</td><td>"+ '#' +"</td></tr>"); 
						})
					}
				})
			}
		}
	});


//add compulsary meals..
$('#btnCompulsaryMealsAdd').click(function(){
	$('#btnSaveCompulsaryMeals').show();
	$('#btnUpdateCompulsaryMeals').hide();
	$('#cMealHead').html('Add Compulsary Meals');
	ClearAllCompulsaryMeal();
	$('#addCompulsaryMealsModal').modal().on('shown.bs.modal', function (e) {});
})

//compulsary meals validation check..
function complusaryMealsValidation(){
	if($("input[name='NumOfDays']:checked").val() == 2){
		if($('#compulsarymealitemname').val() == ''){
			alert('Please enter compulsary meals name.');
			$('#compulsarymealitemname').focus();
			return false;
		}else if($('#Number_of_days').val() == ''){
			alert('Please select number of days.');
			$('#Number_of_days').focus();
			return false;
		}else if($('#cmealAdulPrice').val() == ''){
			alert('Please enter adult meal price.');
			$('#cmealAdulPrice').focus();
			return false;
		}else if($('#cmealChildPrice').val() == ''){
			alert('Please enter child meal price.');
			$('#cmealChildPrice').focus();
			return false;
		}else if($('#cmealsSDate').val() == ''){
			alert('Please enter meals start date.');
			$('#cmealsSDate').focus();
			return false;
		}else if($('#cmealsEDate').val() == ''){
			alert('Please enter meals start date.');
			$('#cmealsEDate').focus();
			return false;
		}else{
		    return true;
		}	
	}else{
		if($('#compulsarymealitemname').val() == ''){
		alert('Please enter compulsary meals name.');
		$('#compulsarymealitemname').focus();
		return false;
	}else if($('#cmealAdulPrice').val() == ''){
		alert('Please enter adult meal price.');
		$('#cmealAdulPrice').focus();
		return false;
	}else if($('#cmealChildPrice').val() == ''){
		alert('Please enter child meal price.');
		$('#cmealChildPrice').focus();
		return false;
	}else if($('#cmealsSDate').val() == ''){
		alert('Please enter meals start date.');
		$('#cmealsSDate').focus();
		return false;
	}else if($('#cmealsEDate').val() == ''){
		alert('Please enter meals start date.');
		$('#cmealsEDate').focus();
		return false;
	}else{
	    return true;
	}
	}
	
}

//clear meal value..
function ClearAllCompulsaryMeal(){
	$('#compulsarymealitemname').val('');
	$("input[name='NumOfDays']:checked").prop('checked', false);
	$('#Number_of_days').val('');
	$('#cmealAdulPrice').val('');
	$('#cmealChildPrice').val('');
	$('#cmealsSDate').val('');
	$('#cmealsEDate').val('');
}
//save compulsary meals..
$('#btnSaveCompulsaryMeals').click(function (){
	if(complusaryMealsValidation() == true){
		$.ajax({
			url: 'rates/saveCompulsaryMeals',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				mealName: $('#compulsarymealitemname').val(),
				dayType: $("input[name='NumOfDays']:checked").val(),
				numberOfDays: $('#Number_of_days').val(),
				adultRate: $('#cmealAdulPrice').val(),
				childRate: $('#cmealChildPrice').val(),
				startDate: $('#cmealsSDate').val(),
				endDate: $('#cmealsEDate').val()
			},
			success: function(response){
				if(response>0){
					responsed = response;
					ClearAllCompulsaryMeal();
				}else{
					alert('There occurs some internal Problems.');
					window.location.reload();
				}
			}					
		});

		//hide modal and show updated data in the table..
		if(responsed != 0 || responsed != undefined){
			alert('Data save Successfully');
			$('#addCompulsaryMealsModal').modal('toggle');
			$.ajax({
				url: 'rates/getAllCompulsaryMealsData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tblCompulsoryMeals tbody tr td").remove();
					response.forEach(compulsarymeals =>{
					   $("#tblCompulsoryMeals tbody").append("<tr><td><button onclick=deleteCompulsaryMealsInfo(" + compulsarymeals.compulsoryMealsSurchargeID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showcompulsaryMealsModal(" + compulsarymeals.compulsoryMealsSurchargeID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button></td><td>"+ compulsarymeals.mealName + "</td><td>"+ compulsarymeals.adultRate  + "</td><td>" +  compulsarymeals.childRate  +  "</td><td>" +  '---'  +  "</td><td>" +  compulsarymeals.startDate  + "</td><td>" +  compulsarymeals.endDate  + "</td><td>"+ '#' +"</td></tr>"); 
					})
				}
			})
		}
	}
});

//show data in modal for update compulsary meals..
function showcompulsaryMealsModal(id){
	$('#btnSaveCompulsaryMeals').hide();
	$('#btnUpdateCompulsaryMeals').show();
	$('#cMealHead').html('Update Compulsary Meals');
	$('#addCompulsaryMealsModal').modal().on('shown.bs.modal', function (e) {});

	$.ajax({
		url: 'rates/searchCompulsaryMealsData',
		type: 'POST',
		dataType: 'JSON',
		data:{
			_token: CSRF_TOKEN,
			id: id
		},
		success: function (response){
			$('#CompulsaryMealID').val(response.compulsoryMealsSurchargeID);
			$('#compulsarymealitemname').val(response.mealName);
			$("input[name=NumOfDays][value='" + response.dayType +"']").prop('checked', true);
			$('#Number_of_days').val(response.numberOfDays);
			$('#cmealAdulPrice').val(response.adultRate);
			$('#cmealChildPrice').val(response.childRate);
			$('#cmealsSDate').val(response.startDate);
			$('#cmealsEDate').val(response.endDate);
		}
	});
}

//update complusay meals surcharge..
$('#btnUpdateCompulsaryMeals').click(function(){
	if(complusaryMealsValidation() == true){
		$.ajax({
			url: 'rates/UpdateCompulsaryMeals',
			type: 'POST',
			data: {
				_token: CSRF_TOKEN,
				id: $('#CompulsaryMealID').val(),
				mealName: $('#compulsarymealitemname').val(),
				dayType: $("input[name='NumOfDays']:checked").val(),
				numberOfDays: $('#Number_of_days').val(),
				adultRate: $('#cmealAdulPrice').val(),
				childRate: $('#cmealChildPrice').val(),
				startDate: $('#cmealsSDate').val(),
				endDate: $('#cmealsEDate').val()
			},
			success: function(response){
				if(response>0){
					ClearAllCompulsaryMeal();
					//$("input[name=NumOfDays]").prop('checked', false);
				}
			}					
		});

		//hide modal and show updated data in the table..
		if(response != 0){
			alert('Data Update Successfully');
			$('#addCompulsaryMealsModal').modal('toggle');
			$.ajax({
				url: 'rates/getAllCompulsaryMealsData',
				type: 'get',
				dataType: 'JSON',
				success: function(response){
					$("#tblCompulsoryMeals tbody tr td").remove();
					response.forEach(compulsarymeals =>{
					   $("#tblCompulsoryMeals tbody").append("<tr><td><button onclick=deleteCompulsaryMealsInfo(" + compulsarymeals.compulsoryMealsSurchargeID + ")><span><i class='fa fa-times' aria-hidden='true'></i></span></button></td><td><button onclick=showcompulsaryMealsModal(" + compulsarymeals.compulsoryMealsSurchargeID + ") <span><i class='fa fa-pencil' aria-hidden='true'></i></span></button></td><td>"+ compulsarymeals.mealName + "</td><td>"+ compulsarymeals.adultRate  + "</td><td>" +  compulsarymeals.childRate  +  "</td><td>" +  '---'  +  "</td><td>" +  compulsarymeals.startDate  + "</td><td>" +  compulsarymeals.endDate  + "</td><td>"+ '#' +"</td></tr>"); 
					})
				}
			})
		}
	}	
});

