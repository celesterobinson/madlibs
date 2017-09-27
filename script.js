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
        genStory(story);
    });
});

function showStory(story) {
    $('.story').hide();
    $('#' + story).show();
}

function getStory() {
    return $('input[type=radio]:checked').val();
}

function genStory(story){
    genWordType('noun', story);
    genWordType('verb', story);
    genWordType('adjective', story);
    genWordType('adverb', story);
}

function genWordType(wordType,story){
    var userWords = getUserInput(wordType);
    var finalWords = fillInWordType(wordType, userWords);
    injectWords(finalWords,wordType,story);
}

function getUserInput(wordType) {
    var userInput = $('#' + wordType + '-input'); //grabs input from all textboxes
    var userWords = userInput.val().split(','); //breaks them into arrays on the comma
    if(userWords[0] === '') {
        userWords.shift();
    }
    return userWords;
}

function fillInWordType(wordType, userWords){
    if(wordType === 'noun') {
        var backupWords = backupNouns;
    } else if (wordType === 'adjective') {
        var backupWords = backupAdjectives;
    } else if (wordType === 'verb') {
        var backupWords = backupVerbs;
    } else if (wordType === 'adverb') {
        var backupWords = backupAdverbs;
    }
    while (userWords.length < 4) {
        userWords.push(randFilteredElem(backupWords,userWords));
    }
    return userWords;
}

function randFilteredElem(arr,filter){
    var randEl = randElem(arr);
    while (filter.includes(randEl)) {
        randEl = randElem(arr);
    }
    return randEl;

    function randElem(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }
}

function injectWords(arr, wordType, story) {
    var spots = $('#' + story + ' .' + wordType);
    for (var i = 0; i < 4; i++) {
        $(spots[i]).html(arr[i]);
    }
}