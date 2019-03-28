'use strict';

//Intro
var userName = prompt('What is your name?');
var questionCounter = 0;
var correctCounter = 0;
//var userName = tempUserName.toUpperCase();
alert('Hello ' + userName + ', Shall we play a game? \n\n Please guess the correct answers to the 5 following questions. \n\n Also - no "Only way to win is not to play" nonsense, Wargames was lame.' )
//Q1
//ask question as prompt and to Upper
var dogAnswer = prompt(userName + ', is my favorite animal the dog?');
questionCounter++;
var upperDogAnswer = dogAnswer.toUpperCase();
//check answer in if/else statement with YES/Y || NO/N
if(upperDogAnswer === 'YES'|| upperDogAnswer === 'Y'){
    alert('Thats right! \n1 point to you!');
    correctCounter++;
}else{
    alert('You need more doggo snugs in your life.');
}
//console log question asked and response shown
console.log('Asked ' + userName + ' if I like dogs, expecting a yes. If a no is given, snark is returned.');
console.log(correctCounter + ' of '+ questionCounter + ' answers correct');
//Q2
//ask question as prompt and to Upper
var oreoAnswer = prompt(userName + ', is my favorite store bought cookie the Oreo?');
questionCounter++;
var upperOreoAnswer = oreoAnswer.toUpperCase();
//check answer in if/else statement with YES/Y || NO/N
if(upperOreoAnswer === 'YES'||upperOreoAnswer === 'Y'){
    alert('Thats right! \n10 points to you!');
    correctCounter++;
}else{
    alert('Incorrect.\nI love Oreos!');
}
//console log question asked and response shown
console.log('Asked ' + userName + ' if I like Oreos. Yes is correct, no is ok!.')
console.log(correctCounter + ' of '+ questionCounter + ' answers correct');
//Q3
var branchAnswer = prompt(userName + ', was I in the Army?');
questionCounter++;
var upperBranchAnswer = branchAnswer.toUpperCase();
if(upperBranchAnswer === 'YES'||upperBranchAnswer === 'Y'){
    alert('Correct! \n3.14159 Points to you!');
    correctCounter++;
}else{
    alert('Sorry, I was in the Army.\nIt was hot\nWe walked a lot\nNothing follows');
}
console.log('Typical military branch question asked. Please dont thank me for my service.');
console.log(correctCounter + ' of '+ questionCounter + ' answers correct');
//Q4
var stateAnswer = prompt(userName + ', was I born in Washington?');
questionCounter++;
var upperStateAnswer = stateAnswer.toUpperCase();
if(upperStateAnswer === 'NO'||upperStateAnswer === 'N'){
    alert('Correct! \nI was born in California!');
    correctCounter++;
}else{
    alert('Sorry, WA is great but parents had other ideas.');
}
console.log('Asked if I was born in WA - expecting no reponse.');
console.log(correctCounter + ' of '+ questionCounter + ' answers correct');
//Q5
var hobbyAnswer = prompt(userName + ', did I play a childrens card game \"professionally\"?');
questionCounter++;
var upperBranchAnswer = branchAnswer.toUpperCase();
if(upperBranchAnswer === 'YES'||upperBranchAnswer === 'Y'){
    alert('Correct! \nSUGGESTED age is just that, a suggestion!');
    correctCounter++;
}else{
    alert('Sorry, I am a mega nerd.\nGoogle \"Kent Ketter\" for a peek into niche gaming markets!');
}
console.log('Nerd questions about magic asked, I have the 1099s to prove it haha');
console.log(correctCounter + ' of '+ questionCounter + ' answers correct');
//Q6 - Guess the Number
var age = 31;
var qSixGuesses = 0;
questionCounter++;
var userAgeGuess = prompt('How old am I?');
var ageGuess = parseInt(userAgeGuess);

 while (qSixGuesses < 5) {
    if (ageGuess > age) {
        qSixGuesses++;
        var ageGuess = alert('Too high. Try Again');
        var userAgeGuess = prompt('How old am I?');
        var ageGuess = parseInt(userAgeGuess);
    } else if (ageGuess < age) {
        qSixGuesses++;
        var ageGuess = alert('Too low. Try Again');
        var userAgeGuess = prompt('How old am I?');
        var ageGuess = parseInt(userAgeGuess);
    } else {
        alert("Nailed it! I am 31 years old.")
        qSixGuesses = 5;
       correctCounter++;
    };
 }

//Q7
var arrayAnswers = ['IL','CA','IN','NY','NC','SC', 'WA'];
var userStateGuess = prompt('Please guess a state I have lived.\nPlease enter the state postal code.');
var upperUserStateGuess = userStateGuess.toUpperCase();
var qSevenGuesses = 0;
questionCounter++;

while (qSevenGuesses < 7) {
    if (arrayAnswers.includes(upperUserStateGuess)) {
        alert('Correct! I have lived in ' + upperUserStateGuess +'.');
        correctCounter++;
        qSevenGuesses = 7;
    } else 
    var userStateGuess = prompt('Incorrect!\nPlease guess a state I have lived.\nPlease enter the state postal code.');
    var upperUserStateGuess = userStateGuess.toUpperCase();
    qSevenGuesses++;
}

//Check this syntax for game results being fed in...errors exist
document.getElementById("results").innerHTML = (correctCounter + ' of '+ questionCounter + ' answers correct.\nBetter luck next time!');
