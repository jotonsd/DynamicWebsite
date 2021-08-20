var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
var tblstayPeriodsForRateType = $("#tblstayPeriodsForRateType tbody");
var tbl_black_dates = $("#tbl_black_dates tbody");
var responsed;



function clearAllData(){
	$("#basedRateType").val('');
    $("#discountValue").val('');
    $(':checkbox[name=applicabelFor\\[\\]]:checked').prop('checked', false);
    $("#tbl_black_dates").find("tr:gt(0)").remove();
    $(':checkbox[name=applicabelRoom\\[\\]]:checked').prop('checked', false);
    $("input:checkbox[name=copyPolicies]:checked").prop('checked', false);
    $("input[name='availability']:checked").prop('checked', false);
    $('#title').val('');
    $('textarea:input[name=ratetype_details]').val('');
    $('#startdate_display').val('');
    $('#stopdate_display').val('');
    $('#stopdate_display').val('');
    $("#tblstayPeriodsForRateType").find("tr:gt(0)").remove();
    $(':checkbox[name=Meals\\[\\]]:checked').prop('checked', false);
    $("#minimumStay").val('');
    $("#maximumStay").val('');
    $("#bookatleast").val('');
    $("#bookwithin").val('');
    $("input[name='amends_or_cancel']:checked").prop('checked', false);
}

function fnValidation(){
	if($("input[name='type']:checked").val() == 1){
		if($("input[name='availability']:checked").val() == undefined){
			alert('Please checked availability.');
			return false;
		}else if($('#title').val() == ''){
			alert('Please inter a title');
			$('#title').focus();
			return false;
		}else if($('textarea:input[name=ratetype_details]').val() == ''){
			alert('Please give details about.');
			$('textarea:input[name=ratetype_details]').focus();
			return false;
		}else if($('#startdate_display').val() == ''){
			alert('Please enter start date of display.');
			$('#startdate_display').focus();
			return false;
		}else if($('#stopdate_display').val() == ''){
			alert('Please enter stop date of display.');
			$('#stopdate_display').focus();
			return false;
		}else if(tblstayPeriodsForRateType.children().length == 0){
		  	alert('Add at list one date for stay period.');
		  	$('#divSPForRateType').show();
		  	$('#stDate_StayPeriod').focus();
		  	return false;
		}else if( $(':checkbox[name=Meals\\[\\]]:checked').val() == undefined){
		  	alert('Please check minimum one Meals.');
		  	return false;
		}else if( $("#minimumStay").val() == ''){
		  	alert('Please select minimum stay nights.');
		  	$("#minimumStay").focus();
		  	return false;
		}else if( $("#maximumStay").val() == ''){
		  	alert('Please select maximum stay nights.');
		  	$("#maximumStay").focus();
		  	return false;
		}else if( $("#bookatleast").val() == ''){
		  	alert('Please select booking perior days.');
		  	$("#bookatleast").focus();
		  	return false;
		}else if( $("#bookwithin").val() == ''){
		  	alert('Please select book with in perior days.');
		  	$("#bookwithin").focus();
		  	return false;
		}else if( $("input[name='amends_or_cancel']:checked").val() == undefined){
		  	alert('Please select one amends or cancel.');
		  	return false;
		}else{
			return true;
		}
	}else{
		
		//alert($('textarea:input[name=ratetype_details]').val());

		if($("#basedRateType").val() == ''){
			alert('Please select based rate type.');
			$("#basedRateType").focus();
			return false;
		}else if($("#discountValue").val() == ''){
			alert('Please select discount amount.');
			$("#discountValue").focus();
			return false;
		}else if($(':checkbox[name=applicabelFor\\[\\]]:checked').val() == undefined){
			alert('Please select applicable for.');
			return false;
		}else if(tbl_black_dates.children().length == 0){
		  	alert('Add at list one date for blackout date.');
		  	//$('#divSPForRateType').show();
		  	$('#blackoutDates').focus();
		  	return false;
		}else if($(':checkbox[name=applicabelRoom\\[\\]]:checked').val() == undefined){
			alert('Please check minimum one applicable room.');
			return false;
		}else if($("input:checkbox[name=copyPolicies]:checked").val() == undefined){
			alert('Please select Policies.');
			return false;
		}else if($("input[name='availability']:checked").val() == undefined){
			alert('Please checked availability.');
			return false;
		}else if($('#title').val() == ''){
			alert('Please inter a title');
			$('#title').focus();
			return false;
		}else if($('textarea:input[name=ratetype_details]').val() == ''){
			alert('Please give details about.');
			$('textarea:input[name=ratetype_details]').focus();
			return false;
		}else if($('#startdate_display').val() == ''){
			alert('Please enter start date of display.');
			$('#startdate_display').focus();
			return false;
		}else if($('#stopdate_display').val() == ''){
			alert('Please enter stop date of display.');
			$('#stopdate_display').focus();
			return false;
		}else if(tblstayPeriodsForRateType.children().length == 0){
		  	alert('Add at list one date for stay period.');
		  	$('#divSPForRateType').show();
		  	$('#stDate_StayPeriod').focus();
		  	return false;
		}else if( $(':checkbox[name=Meals\\[\\]]:checked').val() == undefined){
		  	alert('Please check minimum one Meals.');
		  	return false;
		}else if( $("#minimumStay").val() == ''){
		  	alert('Please select minimum stay nights.');
		  	$("#minimumStay").focus();
		  	return false;
		}else if( $("#maximumStay").val() == ''){
		  	alert('Please select maximum stay nights.');
		  	$("#maximumStay").focus();
		  	return false;
		}else if( $("#bookatleast").val() == ''){
		  	alert('Please select booking perior days.');
		  	$("#bookatleast").focus();
		  	return false;
		}else if( $("#bookwithin").val() == ''){
		  	alert('Please select book with in perior days.');
		  	$("#bookwithin").focus();
		  	return false;
		}else if( $("input[name='amends_or_cancel']:checked").val() == undefined){
		  	alert('Please select one amends or cancel.');
		  	return false;
		}else{
			return true;
		}

	}
}

$('#btnSaveRateType').click(function (e){
	e.preventDefault();
	if(fnValidation() == true){
		if($(':checkbox[name=applicabelFor\\[\\]]:checked').val() != undefined){
			var applicabelFor = jQuery.map($(':checkbox[name=applicabelFor\\[\\]]:checked'),
			function (n,i) {
			    return n.value;
			}).join(',');
		}
		if($(':checkbox[name=applicabelRoom\\[\\]]:checked').val() != undefined){
			var applicabelRoom = jQuery.map($(':checkbox[name=applicabelRoom\\[\\]]:checked'),
			function (n,i) {
			    return n.value;
			}).join(',');
		}
		

		if($(':checkbox[name=Meals\\[\\]]:checked').val() != undefined){
			var Meals = jQuery.map($(':checkbox[name=Meals\\[\\]]:checked'),
			function (n,i) {
			    return n.value;
			}).join(',');
		}
		var disamount = $("#discountValue").val();
		var discountamount = disamount.slice(0,disamount.length-1);
		$.ajax({
			url: 'rates/save_ratetype',
			type: 'post',
			data:{
				_token: CSRF_TOKEN,
				ratetype: $("input[name='type']:checked").val(),
				ratetypebase: $("#basedRateType").val(),
				discountamount: discountamount,
				applicableFor: applicabelFor,
				applicableRooms: applicabelRoom,
				copyPolicies: $("input:checkbox[name=copyPolicies]:checked").val(),
				availability: $("input[name='availability']:checked").val(),
				title: $('#title').val(),
				details: $('textarea:input[name=ratetype_details]').val(),
				startDisplay: $('#startdate_display').val(),
				endDisplay: $('#stopdate_display').val(),
				meals: Meals,
				minimumStay: $("#minimumStay").val(),
				maximumStay: $("#maximumStay").val(),
				bookatleast: $("#bookatleast").val(),
				bookwithin:  $("#bookwithin").val(),
				amends_or_cancel: $("input[name='amends_or_cancel']:checked").val()
			},
			success: function (response){
				if(response>0) {
					var ratetypeinfoID = response;
					if($("input[name='type']:checked").val() == 2) {
							
							//save stay periods
							$('#tblstayPeriodsForRateType tbody tr').each(function () {
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
								url:'rates/ratetype_wise_stayperiod_save',
								type:'post',
								data:{
									_token: CSRF_TOKEN,
									ratetypeId : ratetypeinfoID,
									startDate : startDate,
									endDate : endDate
								},
								success: function (response){
									if(response > 0){
										responsed = response;
									}
								}
							});
				    	});

						//save blackout dates..
						$('#tbl_black_dates tbody tr').each(function () {
							var j = 0;
					        $(this).find("td:gt(0)").each(function () {
					            j++;
					            if(j==1){
					            	blackoutDate = $(this).html();
					            	// alert(startDate);
					            }
					        });
					        $.ajax({
								url:'rates/blackoutDates_save',
								type:'post',
								data:{
									_token: CSRF_TOKEN,
									ratetypeId : ratetypeinfoID,
									blackoutDate : blackoutDate
								},
								success: function (response){
									if(response > 0){
										responsed = response;
										// clearAllData();
									}
								}
							});
				    	});

					}
					else{
						$('#tblstayPeriodsForRateType tbody tr').each(function () {
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
								url:'rates/ratetype_wise_stayperiod_save',
								type:'post',
								data:{
									_token: CSRF_TOKEN,
									ratetypeId : ratetypeinfoID,
									startDate : startDate,
									endDate : endDate
								},
								success: function (response){
									if(response > 0){
										responsed = response;
										clearAllData();
									}
								}
							});
				    	});
					}

				} else {

				}
			}
		});
		if (responsed !=0) {
			alert('Data save successfully.');
			$('#addrateTypeMODAL').modal('toggle');
			clearAllData();
		}
	}

		
});

function showRateTypeEditModalAllData(id){
	$('#editrateTypeMODAL').modal().on('shown.bs.modal', function (e) {});
	$.ajax({
	 	type: 'post',
	 	url: 'rates/getdata/',
	 	dataType: "json",
		 data: { 
		 	_token: CSRF_TOKEN,
		 	id: id 
		 },
		 success: function(data){
		 	$('#ratetypeId').val(data[0].ratetypeId);	 		

		  	$("input[name=type1][value=" + data[0].ratetype + "]").prop('checked', true);

		  	if(data[0].ratetype == 2){
		  		$('#divDiscountInformation1').show();
		  	}else{
		  		$('#divDiscountInformation1').hide();
		  	}

		  	$('#basedRateType1').val(data[0].ratetypebase);
		    $("#discountValue1").val(data[0].discountamount + "%");
		    // alert(data[0].applicableFor);
		    if(data[0].applicableFor != null){
		    	var applicableFor = data[0].applicableFor.split(',');
		  
			    for(var i = 0; i<applicableFor.length;i++){
			   		 //alert(applicableFor[i]);
				   	switch (applicableFor[i]){
				   		case '2':
				   			$('#longweekend1').attr('checked',true);
				   			break;
				   		case '3':
				   			$('#weekday1').attr('checked',true);
				   			break;
				   	}
			    }
		    }
		    

		  if(data[0].applicableRooms != null){
		  	 var applicableRooms = data[0].applicableRooms.split(',');
		  	 for(var k =0; k<applicableRooms.length;k++){
		   		switch (applicableRooms[k]){
		   			case 'Front Loft':
	   					$('#3').attr('checked',true);
	   					break;
	   				case 'Domitory Room for female':
	   					$('#6').attr('checked',true);
	   					break;
	   				case 'Domitory Room for Male':
	   					$('#5').attr('checked',true);
	   					break;
	   				case 'Esan Loft':
	   					$('#2').attr('checked',true);
	   				 	break;
	   				case 'Mini Loft':
	   					$('#4').attr('checked',true);
	   					break;
	   				case 'VIP Room':
	   					$('#1').attr('checked',true);
	   					break;
		   		}
		   	}
		  }

		   	

		   	if(data[0].copyPolicies == 1){
		   		$('#copyPolicies1').attr('checked',true);
		   	}
		   	if(data[0].availability == 'Extranet only'){
		   		$('#extranet').attr('checked',true);
		   	}else if(data[0].availability == 'All'){
		   		$('#all').attr('checked',true);
		   	}


		   	$('#title1').val(data[0].title);
		   	$('textarea:input[name=ratetype_details1]').val(data[0].details);
		   
		   	var meals = data[0].meals.split(',');
		   	//alert(meals[1]);
		    for(var j=0; j<meals.length;j++){
		    	switch(meals[j]){
		    		case 'Breakfast':
		    			$('#meals1').attr('checked',true);
		    			break;
		    		case 'Lunch':
		    			$('#meals2').attr('checked',true);
		    			break;
		    		case 'Dinner':
		    			$('#meals3').attr('checked',true);
		    			break;
		    	}
		    }
	    	var sdd = data[0].startDisplay.split('-');
	    	var startDisplay = sdd[2]+"/" + sdd[1]+ "/" + sdd[0];
	    	var edd = data[0].endDisplay.split('-');
	    	var endDisplay = edd[2]+"/" + edd[1]+ "/" + edd[0];
		    $('#startdate_display1').val(startDisplay);
		    $('#stopdate_display1').val(endDisplay);
		    $("#minimumStay1").val(data[0].minimumStay);
		    $("#maximumStay1").val(data[0].maximumStay);
		    $("#bookatleast1").val(data[0].bookatleast);
		    $("#bookwithin1").val(data[0].bookwithin);
		    $("input[name=amends_or_cancel1][value='" + data[0].amends_or_cancel +"']").prop('checked', true);
		 }
	});

	//blackoutdates start..
	$.ajax({
	 		url:'rates/blackoutdates_show',
	 		type:'post',
	 		dataType: "json",
	 		data:{
	 			_token: CSRF_TOKEN,
	 			id: id
	 		},
	 		success: function(response){
	 			//alert(response);
	 			var k =0;
	 			response.forEach(blackoutdates => {
	 				//alert(blackoutdates.blackoutDate)
	 				var  bdate = blackoutdates.blackoutDate.split('-');

	 				var blackoutDate = bdate[2] + '/' + bdate[1] + '/' + bdate[0];
	 				//alert(blackoutDate)
	 				k++;
	 			  $("#tbl_black_dates1 tbody").append("<tr data-SerialNo='" + k + "'data-blackoutDates1='" + blackoutDate  +"'><td>"  + k + "</td><td>"+ blackoutDate  + "</td><td><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>"); 	
	 			});
	 		}
	})
    //blackoutdates end..

    //stay period start..
    $.ajax({
	 		url:'rates/stayperiod_show',
	 		type:'post',
	 		dataType: "json",
	 		data:{
	 			_token: CSRF_TOKEN,
	 			id: id
	 		},
	 		success: function(response){
	 			var i =0;
	 			response.forEach(stayPeriods => {
	 				var  sdate = stayPeriods.startDate.split('-');
	 				var startDate = sdate[2] + '/' + sdate[1] + '/' + sdate[0];

	 				var  edate = stayPeriods.endDate.split('-');
	 				var endDate = edate[2] + '/' + edate[1] + '/' + edate[0];
	 				//alert(blackoutDate)
	 				i++;
                    $("#tblstayPeriodsForRateType1 tbody").append("<tr data-SerialNo='" + i + "'data-stDate_StayPeriod1='" + startDate +"'data-endDate_stayPeriod1='" + endDate +"'><td>"  + i + "</td><td>"+ startDate+ "</td><td>"+ endDate + "</td><td><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>"); 	 			});
	 		}
	})
	//stay period end.....
}

// Rate type show for edit..
$('#cancelEdit').on("click", function(event){
	//alert('ss');
	$('#longweekend1').attr('checked',false);
	$('#weekday1').attr('checked',false);
	$("#tbl_black_dates1").find("tr:gt(0)").remove();
	$("#tblstayPeriodsForRateType1").find("tr:gt(0)").remove();
});


$(document).ready(function (e) {

   function hideModal(){
	$("#tbl_black_dates1").find("tr:gt(0)").remove();
	$("#tblstayPeriodsForRateType1").find("tr:gt(0)").remove();
   	$('#editrateTypeMODAL').modal('toggle');
   }


 
	//update rate type method...
	$('#btnUpdateratetype').click(function(e){
	   e.preventDefault();
	// if(fnValidation() == true){
		var applicableFor1 = $('input[name="applicabelFor1"]:checked').map(function () {  
        return this.value;
        }).get().join(",");

        var applicabelRoom1 = $('input[name="applicabelRoom1"]:checked').map(function () {  
        return this.value;
        }).get().join(",");
       // alert(applicabelRoom1);
         var Meals1 = $('input[name="Meals1"]:checked').map(function () {  
        return this.value;
        }).get().join(",");
		var disamount = $("#discountValue1").val();
		var discountamount1 = disamount.slice(0,disamount.length-1);
		$.ajax({
			url: 'rates/update_ratetype',
			type: 'post',
			data:{
				_token: CSRF_TOKEN,
				ratetypeId: $('#ratetypeId').val(),
				ratetype: $("input[name='type1']:checked").val(),
				ratetypebase: $("#basedRateType1").val(),
				discountamount: discountamount1,
				applicableFor: applicableFor1,
				applicableRooms: applicabelRoom1,
				copyPolicies: $("input:checkbox[name=copyPolicies1]:checked").val(),
				availability: $("input[name='availability']:checked").val(),
				title: $('#title1').val(),
				details: $('textarea:input[name=ratetype_details1]').val(),
				startDisplay: $('#startdate_display1').val(),
				endDisplay: $('#stopdate_display1').val(),
				meals: Meals1,
				minimumStay: $("#minimumStay1").val(),
				maximumStay: $("#maximumStay1").val(),
				bookatleast: $("#bookatleast1").val(),
				bookwithin:  $("#bookwithin1").val(),
				amends_or_cancel: $("input[name='amends_or_cancel1']:checked").val()
			},
			success: function (response){
				if(response) {
					var ratetypeinfoID = response;
					if($("input[name='type1']:checked").val() == 2) {
							
							//update stay periods
							$('#tblstayPeriodsForRateType1 tbody tr').each(function () {
							var i = 0;
					        $(this).find("td:gt(0)").each(function () {
					            i = i + 1;
					            if(i==1){
					            	startDate = $(this).html();
					            }else if(i == 2){
					            	endDate = $(this).html();
					            }
					        });
					        $.ajax({
								url:'rates/ratetype_wise_stayperiod_Update',
								type:'post',
								data:{
									_token: CSRF_TOKEN,
									ratetypeId: $('#ratetypeId').val(),
									startDate : startDate,
									endDate : endDate
								},
								success: function (response){
									if(response > 0){
										responsed = response;
									}
								}
							});
				    	});

						//update blackout dates..
						$('#tbl_black_dates1 tbody tr').each(function () {
							var j = 0;
					        $(this).find("td:gt(0)").each(function () {
					            j++;
					            if(j==1){
					            	blackoutDate = $(this).html();
					            	 //alert(startDate);
					            }
					        });
					        $.ajax({
								url:'rates/blackoutDates_Update',
								type:'post',
								data:{
									_token: CSRF_TOKEN,
									ratetypeId: $('#ratetypeId').val(),
									blackoutDate : blackoutDate
								},
								success: function (response){
									if(response > 0){
										responsed = response;
										hideModal();
									}
								}
							});
				    	});

					}
					else{
						$('#tblstayPeriodsForRateType1 tbody tr').each(function () {
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
								url:'rates/ratetype_wise_stayperiod_Update',
								type:'post',
								data:{
									_token: CSRF_TOKEN,
									ratetypeId: $('#ratetypeId').val(),
									startDate : startDate,
									endDate : endDate
								},
								success: function (response){
									if(response > 0){
										responsed = response;
										hideModal();
									}
								}
							});
				    	});
					}

				} else {

				}
			}
		});
		if (responsed !=0) {
			alert('Data Update successfully.');
			//clearAllData();
		}
	// }

	})
});