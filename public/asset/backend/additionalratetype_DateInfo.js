var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
var lgweekend_tbody = $("#lgweekendDate tbody");
var respons;

//settings start..
function fnValidationForSettings(){
  if( $("input:checkbox[name=AdditionalRateType]:checked").val() == undefined){
  	alert('Please check minimum one addition type rate.');
  	return false;
  }else if(lgweekend_tbody.children().length == 0){
  	alert('Add at list one date for long weekend.');
  	$('#longWeekendDate').focus();
  	return false;
  }
  else{
  	return true;
  }
}

$('#btn_additionalratetype_DateInfo_save').click(function(e){
	e.preventDefault();
	if(fnValidationForSettings() == true){
		$('input:checkbox[name=AdditionalRateType]:checked').each(function(){
		 additionaltyperate = ($(this).val());

			 $('#lgweekendDate tbody tr').each(function () {
				var i = 0;
		        $(this).find("td:gt(0)").each(function () {
		            i = i + 1;
		            if(i==1){
		            	longWeekendDate = $(this).html();
		            	// alert(additionaltyperate);
		            }
		        });
		        $.ajax({
					url:'/additiontratetypeinfo_save',
					type:'post',
					data:{
						_token: CSRF_TOKEN,
						additionaltyprerateID : additionaltyperate,
						lgWeekendDate : longWeekendDate
					},
					success: function (response){
						if(response > 0){
							respons = response;
						}
					}
				})
	    	});
		});
		$("#lgweekendDate").find("tr:gt(0)").remove();
		if(respons != 0){
			alert('Data save Successfully.');
		}
	}
	
});
//settings end..

//Session Part start from here....
$('#btnShowSession').click(function(){
	$('#addSessionMODAL').modal().on('shown.bs.modal', function (e) {
		$(this)
		.find("input,textarea,select").val('').end()
        .find("input[type=checkbox], input[type=radio]").prop("checked", "").end();
		$('#btnsession').html('SAVE');
		$('#sessionHeading').html('Add Seasion');
	});
})
var responsed;
function clearAllsessionViewData(){
	$('#sessionGroup').val('');
	$('#sessionTitle').val('');
	$("#tblPeriods").find("tr:gt(0)").remove();
	$(':checkbox[name=weekendDays\\[\\]]:checked').attr('checked', false);
	$('#childAgeFrom').val('');
	$('#childAgeTo').val('');
	$('#NumberOfAmendmentsAllowed').val('');
	$('#weekday').val('');
	$('#Weekend').val('');
	$('#longWeekend').val('');
	$('#divPeriodDate').hide();
	$('#divTblPeriodDate').hide();
}

var tblPeriods_tbody = $("#tblPeriods tbody");

function fnValidationForSession(){
	if( $('#sessionGroup').val() == ''){
	  	alert('Select Session Group.');
	  	$('#sessionGroup').focus();
	  	return false;
	}else if($('#sessionTitle').val() == ''){
		alert('Give Session Title.');
		$('#sessionTitle').focus();
		return false;
	}else if(tblPeriods_tbody.children().length == 0){
	  	alert('Add at list one start date and end date for period.');
	  	$('#divPeriodDate').show();
		$('#divTblPeriodDate').show();
	  	$('#periodStartDate').focus();
	  	return false;
  	}else if($('input[name="weekendDays"]:checked').val() == undefined){
		alert('Please check minimum one Weekend Days.');
		return false;
	}else if($('#childAgeFrom').val() == ''){
		alert('Select child age from.');
		$('#childAgeFrom').focus();
		return false;
	}else if($('#childAgeTo').val() == ''){
		alert('Select child age end.');
		$('#childAgeTo').focus();
		return false;
	}else if($('#NumberOfAmendmentsAllowed').val() == ''){
		alert('Select Number of Amendies.');
		$('#NumberOfAmendmentsAllowed').focus();
		return false;
	}else if($('#weekday').val() == ''){
		alert('Select Number of weekday.');
		$('#weekday').focus();
		return false;
	}else if($('#Weekend').val() == ''){
		alert('Select Number of weekend.');
		$('#Weekend').focus();
		return false;
	}else if($('#longWeekend').val() == ''){
		alert('Select Number of long weekend.');
		$('#longWeekend').focus();
		return false;
	}else{
		return true;
	}
}

function hideModal(){
	$("#tblPeriods").find("tr:gt(0)").remove();
   	$('#addSessionMODAL').modal('toggle');
}

$('#btnSessionSave').click(function(e){
  e.preventDefault();
 
  if($('#btnsession').html() == 'SAVE'){
	  	 var weekendDays = $('input[name="weekendDays"]:checked').map(function () {  
	        return this.value;
	        }).get().join(",");

	    if(fnValidationForSession() == true){
	  	   $.ajax({
		  		url: '/sessioninfo_save',
		  		type: 'post',
		  		data:{
		  			_token : CSRF_TOKEN,
		  			seasionTitle: $('#sessionTitle').val(),
		  			sessionGroupID: $('#sessionGroup').val(),
		  			weakendDays: weekendDays,
		  			childAgeFrom: $('#childAgeFrom').val(),
		  			childAgeTo: $('#childAgeTo').val(),
		  			numberOfAmendisAllowed: $('#NumberOfAmendmentsAllowed').val(),
		  			minimumStayAtWeekday: $('#weekday').val(),
		  			minimumStayAtWeekend: $('#Weekend').val(),
		  			minimumStayAtLongWeekend: $('#longWeekend').val()
		  		},
		  		success: function(response){
		  			if(response>0){
		  				seasionID = response;

		  				$('#tblPeriods tbody tr').each(function () {
						var i = 0;
				        $(this).find("td:gt(0)").each(function () {
				            i = i + 1;
				            if(i==1){
				            	startDate = $(this).html();
				            	// alert(startDate);
				            }else if(i == 2){
				            	endDate = $(this).html();
				            	// alert(endDate)
				            }
				        });
				        $.ajax({
							url:'/sessionperiod_save',
							type:'post',
							data:{
								_token: CSRF_TOKEN,
								seasionID : seasionID,
								startDate : startDate,
								endDate : endDate
							},
							success: function (response){
								if(response > 0){
									responsed = response;
									clearAllsessionViewData();
								}
							}
						})
			    	});




		  			}else{
		  				alert('There are some problems occured');
		  				window.location.reload();
		  			}
		  		}
	  	});
	  	if (responsed != 0) {
	  		alert('Data save Successfully.');
	  	} else {

	  	}
	  }


	//start session update..	  
  }else if($('#btnsession').html() == 'UPDATE'){
  	 //alert('dd');

  	 var weekendDays = $('input[name="weekendDays"]:checked').map(function () {  
	        return this.value;
	        }).get().join(",");

	    if(fnValidationForSession() == true){
	  	   $.ajax({
		  		url: '/sessioninfo_update',
		  		type: 'post',
		  		data:{
		  			_token : CSRF_TOKEN,
		  			sessionID: $('#sessionID').val(),
		  			seasionTitle: $('#sessionTitle').val(),
		  			sessionGroupID: $('#sessionGroup').val(),
		  			weakendDays: weekendDays,
		  			childAgeFrom: $('#childAgeFrom').val(),
		  			childAgeTo: $('#childAgeTo').val(),
		  			numberOfAmendisAllowed: $('#NumberOfAmendmentsAllowed').val(),
		  			minimumStayAtWeekday: $('#weekday').val(),
		  			minimumStayAtWeekend: $('#Weekend').val(),
		  			minimumStayAtLongWeekend: $('#longWeekend').val()
		  		},
		  		success: function(response){

		  			if(response>0){
		  				$('#tblPeriods tbody tr').each(function () {
							var i = 0;
					        $(this).find("td:gt(0)").each(function () {
					            i = i + 1;
					            if(i==1){
					            	startDate = $(this).html();
					            	// alert(startDate);
					            }else if(i == 2){
					            	endDate = $(this).html();
					            	// alert(endDate)
					            }
					        });
					        $.ajax({
								url:'/sessionperiod_update',
								type:'post',
								data:{
									_token: CSRF_TOKEN,
									seasionID : $('#sessionID').val(),
									startDate : startDate,
									endDate : endDate
								},
								success: function (response){
									if(response > 0){
										responsed = response;
										hideModal();
									}
								}
							})
				    	});
		  			}
		  		}
	  	});
	  	if (responsed != 0) {
	  		alert('Data Update Successfully.');
	  	} else {

	  	}
	  }


  }
  //end session update..


});
//session end 


//session group start..
function fnValidationForSessionGroup(){
	if($('#sessionGroupTitleforSessionGroupInfo').val() == ''){
		alert('Enter Session group title.')
		$('#sessionGroupTitleforSessionGroupInfo').focus();
		return false;
	}else if($('#sessionStartDate').val() == ''){
		alert('Enter start date.');
		$('#sessionStartDate').focus();
		return false;
	}else if($('#sessionEndDate').val() == ''){
		alert('Enter end date.');
		$('#sessionEndDate').focus();
		return false;
	}else{
		return true;
	}
}

function ClearAllSessionGroupViewData(){
	$('#sessionGroupTitleforSessionGroupInfo').val('');
	$('#sessionStartDate').val('');
	$('#sessionEndDate').val('');
}

$('#btnSessionGroupSave').click(function() {
	if(fnValidationForSessionGroup() == true){
		$.ajax({
			url: '/session_group_save',
			type: 'post',
			data:{
				_token: CSRF_TOKEN,
				seasionGroupTitle:$('#sessionGroupTitleforSessionGroupInfo').val(),
				startDate: $('#sessionStartDate').val(),
				endDate: $('#sessionEndDate').val()
			},
			success: function (response){
				if (response>0) {
					alert('Data Save Successfully.');
					ClearAllSessionGroupViewData();
				} else {
					alert('There occured some problems.');
					window.location.reload();
				}
			}
		});
	}
});


$('#btnCancelSessionModal').click(function(){
	//alert('ashe kintu kaz kore na.');
	$('#sessionHeading').html('Add Seasion');
	$('#btnsession').html('SAVE');
	$("#tblPeriods").find("tr:gt(0)").remove();
	
	// $(".modal").on("hidden.bs.modal", function(){
 // 	   // $(".modal-body").html("");
 // 	   $(this).removeData();
	// });
})


function editSessionDetails(id){

	$.ajax({
		url: 'seasion/edit_seasion',
		type: 'post',
		 dataType: "json",
		data:{
			_token: CSRF_TOKEN,
			id: id
		},
		success: function (response){
			$('#addSessionMODAL').modal().on('shown.bs.modal', function (e) {
				//alert('session-id : ' + id);
				$('#sessionID').val(id);
				$('#sessionHeading').html('Update Seasion');
				$('#sessionGroup').val(response[0].sessionGroupID);
				$('#sessionTitle').val(response[0].seasionTitle);

				if(response[0].weakendDays != null){
					var weakendDays = response[0].weakendDays.split(',');
					for(var i = 0; i<weakendDays.length;i++){
						switch(weakendDays[i]){
							case 'Sunday':
								$('#Sunday').attr('checked',true);
								break;
							case 'Monday':
								$('#Monday').attr('checked',true);
								break;
							case 'Tuesday':
								$('#Tuesday').attr('checked',true);
								break;
							case 'Wednesday':
								$('#Wednesday').attr('checked',true);
								break;
							case 'Thursday':
								$('#Thursday').attr('checked',true);
								break;
							case 'Friday':
								$('#Friday').attr('checked',true);
								break;
							case 'Saturday':
								$('#Saturday').attr('checked',true);
								break;

						}
					}
				}

				$('#childAgeFrom').val(response[0].childAgeFrom);
				$('#childAgeTo').val(response[0].childAgeTo);
				$('#NumberOfAmendmentsAllowed').val(response[0].numberOfAmendisAllowed);
				$('#weekday').val(response[0].minimumStayAtWeekday);
				$('#Weekend').val(response[0].minimumStayAtWeekend);
				$('#longWeekend').val(response[0].minimumStayAtLongWeekend);
				$('#btnsession').html('UPDATE');

			});


			//sesison Period start from here
				$.ajax({
					url: 'seasion/edit_seasion_periods',
					type: 'POST',
					dataType: 'json',
					data:{
						_token: CSRF_TOKEN,
						id: id
					},
					success: function (response){
						var i = 0;
						$('#divTblPeriodDate').show();
					response.forEach(sessionPeriod => {
						// alert('dd')
		 				var  sdate = sessionPeriod.startDate.split('-');
		 				var startDate = sdate[2] + '/' + sdate[1] + '/' + sdate[0];

		 				var  edate = sessionPeriod.endDate.split('-');
		 				var endDate = edate[2] + '/' + edate[1] + '/' + edate[0];
	 				     i++;
                       $("#tblPeriods tbody").append("<tr data-SerialNo='" + i + "'data-sessionStart='" + startDate +"'data-sessionEnd='" + endDate +"'><td>"  + i + "</td><td>"+ startDate+ "</td><td>"+ endDate + "</td><td><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>"); 	 	
                       });
					}
				});
		}
	});
	
}