$(document).ready(function(){

 $('#upload_form').on('submit', function(event){
  event.preventDefault();
  $.ajax({
   url:"/ajax_upload/action",
   method:"POST",
   data:new FormData(this),
   dataType:'JSON',
   contentType: false,
   cache: false,
   processData: false,
   success:function(data)
   {
     $('#uploaded_image').html(data.uploaded_image);
    alert('Image upload Successfully.')
    $('#description').val('');
   }
  })
 });

});