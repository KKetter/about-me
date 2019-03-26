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
//ask question as prompt and to Upper
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

//Q5
