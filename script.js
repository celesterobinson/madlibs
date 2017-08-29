$(document).ready(function(){
    
    //on enter runs the submit button function
    $(document).bind('keypress', function(event) {
        if(event.keyCode==13){
             $('#submit').trigger('click');
        }
    });
    
    //on submit, shows story that matches radio button. When radio button changes and submit/enter is pressed,
    //new story is shown and old story is removed.
    $('#submit').click(function(){
        if ($('#christmas-btn').is(':checked')){
            $('#christmas').show();
            $('#shopping').hide();
            $('#brainstorm').hide();
        } else if ($('#shopping-btn').is(':checked')){
            $('#shopping').show();
            $('#christmas').hide();
            $('#brainstorm').hide();
        } else if ($('#brainstorm-btn').is(':checked')){
            $('#brainstorm').show();
            $('#christmas').hide();
            $('#shopping').hide();
        }
        return false;
    });
});

