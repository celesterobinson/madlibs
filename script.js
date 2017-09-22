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
        createRandWordArr();
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
}

function fillInStory(story) {
    var verbInput = $('#verb-input'); //grabs input from all textboxes
    var adjectiveInput = $('#adjective-input');
    var adverbInput = $('#adverb-input');
    var nounInput = $('#noun-input');
    var verbWords = verbInput.val().split(','); //breaks them into arrays on the comma
    var adjectiveWords = adjectiveInput.val().split(',');
    var adverbWords = adverbInput.val().split(',');
    var nounWords = nounInput.val().split(',');
    injectWords(verbWords,'verb', story);
    injectWords(adjectiveWords, 'adjective', story);
    injectWords(adverbWords, 'adverb', story);
    injectWords(nounWords, 'noun', story);
} 

// Selects value of input fields and turns input into an array at commas
// is used to fill in spans in stories (for loop)
// If array has less than 4 values, select a random value from data.js arrays to fill
//in the remaining values

function injectWords(arr, wordType, story) {
    var spots = $('#' + story + ' .' + wordType);
    for (var i = 0; i < 4; i++) {
        $(spots[i]).html(arr[i]);
    }
}

function createRandWordArr() {
var randNounArr = [];
var randAdjArr = [];
var randVerbArr = [];
var randAdverbArr = [];
//Nouns
    while(randNounArr.length < 4) {
        if($('#noun-input').val = (' ')) {
            for (var i = 0; i < 4; i++) {
            randNounArr.push(randFilteredWord(nouns, randNounArr));
            }
        }
    }
    console.log(randNounArr);
//Adjectives
    while(randAdjArr.length < 4) {
        if($('#adjective-input').val = (' ')) {
            for (var i = 0; i < 4; i++) {
            randAdjArr.push(randFilteredWord(adjectives, randAdjArr));
            }
        }
    }
    console.log(randAdjArr);
//Verbs
    while(randNounArr.length < 4) {
        if($('#noun-input').val = (' ')) {
            for (var i = 0; i < 4; i++) {
            randNounArr.push(randFilteredWord(verbs, randNounArr));
            }
        }
    }
    console.log(randNounArr);
//Adverbs
    while(randNounArr.length < 4) {
        if($('#noun-input').val = (' ')) {
            for (var i = 0; i < 4; i++) {
            randNounArr.push(randFilteredWord(adverbs, randNounArr));
            }
        }
    }
    console.log(randNounArr);
}

function getRandWord(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function randFilteredWord(arr, filter){
    var rand = getRandWord(arr);
    while (filter.includes(rand)) {
            rand = getRandWord(arr);
    }
    return rand;
}

