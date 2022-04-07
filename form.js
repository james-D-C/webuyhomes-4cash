$(document).ready(function() { 

    var clicked = false;

    var options = { 
        dataType:  'json',
        success: function processJson( data ) { 

            clicked = false;

            if( data.status == 1 ) // errors
            {
                alert( data.msg.replace(/<br\/>/g, "\n") );

                $.each(data.fields, function(index, value) {
                    $('#'+value).addClass('field_error');

                    $('#'+value).focus(function() {
                         $(this).removeClass('field_error');
                    });
                });

                $('.step').first().show();

                return;
            }
        
            document.location.href = data.msg;
        },

        beforeSubmit: function(arr, $form, options) { 

           if( clicked ) {
               return false;
           }

           clicked = true;

           return true;
        }
    }; 
 
    $('#offer_form').ajaxForm(options); 

    $('#offer_form').submit(function() {

        if( $('#first_name').val() != "test" ) {
            _webpushTrackAttributes({
                "aff_id": $("input[name='aid']").val(),
                "first_name": name[0],
                "city": $("input[name='city']").val(),
                "state": $("input[name='state']").val(),
                "zip": $("input[name='zip']").val()
            });
        }
        $(this).ajaxSubmit(options);
        return false;
    });

     /*$.get("submit.php?page=geo", function(data) {
        $('#geo-city').html(data.city);            
     });*/

     $("input").keypress(function (evt) {
         var charCode = evt.charCode || evt.keyCode;
         if( charCode == 13 ) { //Enter key's keycode
             return false;
         }
     });
}); 
