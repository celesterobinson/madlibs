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
        var story = getStory();
        showStory(story);
        fillInStory(story);
    });
});

function showStory(story) {
    $('.story').hide();
    $('#' + story).show();
}

function getStory() {
    if ($('#christmas-btn').is(':checked')){
        return 'christmas';
    } else if ($('#shopping-btn').is(':checked')){
        return 'shopping';
    } else if ($('#brainstorm-btn').is(':checked')){
        return 'brainstorm';
    }
    return false;
}

function fillInStory(story) {
    
}