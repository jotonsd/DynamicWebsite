 var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
  detailsID = 0;
  
function indate(id)
{
 $(id).closest("tr").find('td:eq(9)').text(id.value);
}
function outdate(id)
{
 $(id).closest("tr").find('td:eq(10)').text(id.value);
}


 $(document).on('blur', '.folios', function(){
        var row = $(this).parent().parent().children().index($(this).parent());
        column_name = $(this).data("column_name");
        column_value = $(this).text();

        $.ajax({
          url: 'accounting/item_guest_folios',
          type: 'POST',
          data: {
            _token: CSRF_TOKEN,
            detailsID:$(this).closest("tr").find('td:eq(2)').text(),
            rateID:$(this).closest("tr").find('td:eq(1)').text(),
            column_name: column_name,
            column_value: column_value
          },
          success: function(response){
            if(response>0){
              $('#itemTable2 tbody').find("tr:eq("+row+")").find('td:eq(2)').text(response);
              Total=0;
                 $('#itemTable2 tbody tr').each(function () {
                    temp=$(this).find("td:eq(8)").text();
                    Total = parseFloat(Total) + parseFloat(temp);
                  });
               $('#t2total').html(Total);
               $('#total').html(Total);
            }
          }

        });
        

});


  $("body").on("click", ".btn-delete", function () {
  $(this).parents("tr").remove();
  })

  function validation(){
    if($('#vatRate').val()==''){
          alert('Please enter vat rate');
          $('#vatRate').focus();
          return false;
    }else if($('#issuedBy').val()==''){
          alert('Please enter issued by');
          $('#issuedBy').focus();
          return false;
    }else if($('#address').val()==''){
          alert('Please enter address');
          $('#address').focus();
          return false;
    }else if($('#issueDate').val()==''){
          alert('Please enter issued date');
          $('#issueDate').focus();
          return false;
    }else if($('#dueDate').val()==''){
          alert('Please enter due date');
          $('#dueDate').focus();
          return false;
    }else if($('#telephone').val()==''){
          alert('Please enter telephone');
          $('#telephone').focus();
          return false;
    }else if($('#fax').val()==''){
          alert('Please enter fax');
          $('#fax').focus();
          return false;
    }else if($('#email').val()==''){
          alert('Please enter email');
          $('#email').focus();
          return false;
    }else if($('#lineID').val()==''){
          alert('Please enter lineID');
          $('#lineID').focus();
          return false;
    }else if($('#taxID').val()==''){
          alert('Please enter taxID');
          $('#taxID').focus();
          return false;
    }else if($('#branchNo').val()==''){
          alert('Please enter branch no.');
          $('#branchNo').focus();
          return false;
    }else if($('#toCustomer').val()==''){
          alert('Please enter customer name');
          $('#toCustomer').focus();
          return false;
    }else if($('#customerAddress').val()==''){
          alert('Please enter customer address');
          $('#customerAddress').focus();
          return false;
    }else if($('#customerTelephone').val()==''){
          alert('Please enter customer telephone');
          $('#customerTelephone').focus();
          return false;
    }else if($('#customerEmail').val()==''){
          alert('Please enter customer email');
          $('#customerEmail').focus();
          return false;
    }else if($('#customerTelephone').val()==''){
          alert('Please enter customer telephone');
          $('#customerTelephone').focus();
          return false;
    }else if($('#customerTaxID').val()==''){
          alert('Please enter customer taxID');
          $('#customerTaxID').focus();
          return false;
    }else if($('#customerBranchNo').val()==''){
          alert('Please enter customer branch no');
          $('#customerBranchNo').focus();
          return false;
    }else if($('#InvoiceNumber').val()==''){
          alert('Please enter invoice number!');
          $('#InvoiceNumber').focus();
          return false;
    }else{
          return true;
    }
  }

  function clearAll(){
    $('#vatRate').val('');
    $('#issuedBy').val('');
    $('#address').val('');
    $('#issueDate').val('');
    $('#InvoiceNumber').val('');
    $('#dueDate').val('');
    $('#telephone').val('');
    $('#fax').val('');
    $('#email').val('');
    $('#lineID').val('');
    $('#taxID').val('');
    $('#branchNo').val('');
    $('#toCustomer').val('');
    $('#customerAddress').val('');
    $('#customerTelephone').val('');
    $('#customerEmail').val('');
    $('#customerTaxID').val('');
    $('#customerBranchNo').val('');
    $('#Remarks').val('');
    $('#itemTable1 tbody tr').remove();
    $('#t2total').html('');
    $('#tTotal').html('');
    $('#total').html('');
    $('#accountingUpdate').hide();
    $('#accountingSave').show();
  }


  function accountingSave(){
    

    if(validation()==true){
        vatType = $('input[name="vatType"]:checked').map(function () {  
          return this.value;
          }).get().join(",");
      $.ajax({
          url: '/accounting/save_basic_data',
          type: 'post',
          data: {
              _token: CSRF_TOKEN,
              tabIndex: $('#tabID').val(),
              buddhistYear: $('input[name="buddhistYear"]:checked').val(),
              vatType: vatType,
              vatRate: $('#vatRate').val(),
              issuedBy: $('#issuedBy').val(),
              address: $('#address').val(),
              issueDate: $('#issueDate').val(),
              InvoiceNumber: $('#InvoiceNumber').val(),
              dueDate: $('#dueDate').val(),
              telephone: $('#telephone').val(),
              fax: $('#fax').val(),
              email: $('#email').val(),
              lineID: $('#lineID').val(),
              taxID: $('#taxID').val(),
              branchNo: $('#branchNo').val(),
              toCustomer: $('#toCustomer').val(),
              customerAddress : $('#customerAddress ').val(),
              customerTelephone: $('#customerTelephone').val(),
              customerEmail: $('#customerEmail').val(),
              customerTaxID : $('#customerTaxID ').val(),
              customerBranchNo: $('#customerBranchNo').val(),
              Remarks: $('#Remarks').val(),
          },
          success: function (response) {
            if($('#tabID').val()!=3){
              if (response > 0) {
                $('#itemTable1 tbody tr').each(function () {
                  // alert('sd');
                  i=0;
                      $(this).find("td:gt(0)").each(function () {
                          i = i + 1;
                          if(i==1){
                              tbldescription = $(this).html();
                             // alert('adults ' + adults);
                          }
                          if(i==2){
                              tblqty = $(this).html();
                              // alert('children '+children);
                          }
                          if(i==3){
                              tblunitPrice = $(this).html();
                             // alert('extraAdults ' + extraAdults);
                          }
                          if(i==4){
                              tbltotal = $(this).html();
                             // alert('extraChild ' + extraChild);
                          }
                      });
                      //data insert
                      $.ajax({
                          url: '/accounting/save_accounting_details',
                          type: 'post',
                          data: {
                              _token: CSRF_TOKEN,
                              accountingInfoID: response,
                              tbldescription: tbldescription,
                              tblqty: tblqty,
                              tblunitPrice: tblunitPrice,
                              tbltotal: tbltotal
                          },
                          success: function (response) {
                              if (response > 0) {
                                // alert('Guest Details done');
                                clearAll();
                                  
                              } else {
                                 // alert('failed');
                              }
                          }
                      });
                  });
                alert('Saved Successfully');
                $('#AddTextInvoiceBtn').modal('toggle');  

                // clearAll();
                  
              } else {
                 alert('failed');
              }
              //tab condition else
            }else
            {
              if (response > 0) {
                $('#itemTable2 tbody tr').each(function () {
                  // alert('sd');
                  i=0;
                      $(this).find("td:gt(0)").each(function () {
                          i = i + 1;
                          if(i==1){
                              RoomTypeID = $(this).html();
                             // alert('RoomTypeID ' + RoomTypeID);
                          }
                          if(i==2){
                              GuestFolioID = $(this).html();
                              // alert('GuestFolioID '+GuestFolioID);
                          }
                          if(i==9){
                              InDate = $(this).html();
                             // alert('InDate ' + InDate);
                          }
                          if(i==10){
                             OutDate = $(this).html();
                             // alert('OutDate ' + OutDate);
                          }
                      });
                      //data insert
                      $.ajax({
                          url: '/accounting/save_folio_details',
                          type: 'post',
                          data: {
                              _token: CSRF_TOKEN,
                              accountingInfoID: response,
                              RoomTypeID: RoomTypeID,
                              GuestFolioID: GuestFolioID,
                              InDate: InDate,
                              OutDate: OutDate
                          },
                          success: function (response) {
                              if (response > 0) {
                                // alert('Guest Details done');
                                  clearAll();                                 
                              } else {
                                 // alert('failed');
                              }
                          }
                      });
                  });
                alert('Saved Successfully');  
                $('#AddTextInvoiceBtn').modal('toggle');  
                $('#itemTable2 tbody tr').html('');              
              } else {
                 alert('failed');
              }
            }
          }
      });
    }
  }

  
$(document).on('blur', '.column_name', function(){
    // alert($(this).data("column_name"))

        column_name = $(this).data("column_name");
        column_value = $(this).text();
        if(column_name == 'qty'){
          qty = $(this).text();
          // alert(qty)
        }else if(column_name == 'unitPrice'){
          unitPrice = $(this).text();
          // alert(unitPrice)
        }
        

        $.ajax({
          url: 'accounting/save_item_tamplate',
          type: 'POST',
          data: {
            _token: CSRF_TOKEN,
            detailsID:detailsID,
            category:$('#tabID').val(),
            column_name: column_name,
            column_value: column_value
          },
          success: function(response){
            if(response>0){
              detailsID=response;
              // alert('Data updated Sucessfully');
              // location.reload();
            }
          }
        })
        total = parseFloat(unitPrice)*parseFloat(qty);
        // alert(total);
        Total=0;
        $(this).closest("tr").find('td:eq(4)').text(total);
         $('#itemTable1 tbody tr').each(function () {
                      i=0
                      $(this).find("td:gt(0)").each(function () {
                          i = i + 1;
                          if(i==4){
                              subTotal = $(this).html();
                              // alert('subTotal '+subTotal);
                              Total = parseFloat(Total) + parseFloat(subTotal);
                          }

                      });
                    });
         $('#total').html(Total);
         $('#tTotal').html(Total);

});

