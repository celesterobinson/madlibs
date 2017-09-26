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
        getUserInput(story);
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

function getUserInput(story) {
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

function injectWords(arr, wordType, story) {
    var spots = $('#' + story + ' .' + wordType);
    for (var i = 0; i < 4; i++) {
        $(spots[i]).html(arr[i]);
    }
}

function createRandWordArr() {
var verbInput = $('#verb-input'); //grabs input from all textboxes
var adjectiveInput = $('#adjective-input');
var adverbInput = $('#adverb-input');
var nounInput = $('#noun-input');
var verbWords = verbInput.val().split(','); //breaks them into arrays on the comma
var adjectiveWords = adjectiveInput.val().split(',');
var adverbWords = adverbInput.val().split(',');
var nounWords = nounInput.val().split(',');
var randNounArr = nounWords;
var randAdjArr = adjectiveWords;
var randVerbArr = verbWords;
var randAdverbArr = adverbWords;
var story = getStory();
if (verbWords[0] === "") {
    verbWords.shift();
}

//Nouns
    while(randNounArr.length < 4) {
        for (var i = 0; i < 3; i++) {
        randNounArr.push(randFilteredWord(nouns, randNounArr));
            if (randNounArr[0] === "") {
                randNounArr.shift();
            }
        }
    }
    if(randNounArr.length > 4) {
        randNounArr.pop();
    }
    console.log(randNounArr);
    injectWords(randNounArr, 'noun', story);

//Adjectives
    while(randAdjArr.length < 4) {
        for (var i = 0; i < 3; i++) {
        randAdjArr.push(randFilteredWord(adjectives, randAdjArr));
            if (randAdjArr[0] === "") {
                randAdjArr.shift();
            }
        }
    }
    if(randAdjArr.length > 4) {
        randAdjArr.pop();
    }
    console.log(randAdjArr);
    injectWords(randAdjArr, 'adjective', story);

//Verbs
    while(randVerbArr.length < 4) {
        for (var i = 0; i < 3; i++) {
        randVerbArr.push(randFilteredWord(verbs, randVerbArr));
            if (randVerbArr[0] === "") {
                randVerbArr.shift();
            }
        }
    }
    if(randVerbArr.length > 4) {
        randVerbArr.pop();
    }
    console.log(randVerbArr);
    injectWords(randVerbArr, 'verb', story);

//Adverbs
    while(randAdverbArr.length < 4) {
        for (var i = 0; i < 3; i++) {
        randAdverbArr.push(randFilteredWord(adverbs, randAdverbArr));
            if (randAdverbArr[0] === "") {
                randAdverbArr.shift();
            }
        }
    }
    if(randAdverbArr.length > 4) {
        randAdverbArr.pop();
    }
    console.log(randAdverbArr);
    injectWords(randAdverbArr, 'adverb', story);
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

