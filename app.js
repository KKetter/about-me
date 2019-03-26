'use strict';

//Intro
var tempUserName = prompt('What is your name?');
var userName = tempUserName.toUpperCase();
alert('Hello ' + userName + ', Shall we play a game?. \n Please guess the correct answers to the 5 following questions. \n Also - no "Only way to win is not to play" nonsense!' )
//Q1
//ask question as prompt and to Upper
var dogAnswer = prompt('Is my favorite animal the dog?');
var upperDogAnswer = dogAnswer.toUpperCase();
//check answer in if/else statement with YES/Y || NO/N
if(upperDogAnswer === 'YES'||'Y'){
    alert('Thats right! \n1 point to you!')
}else{
    alert('You need more doggo snugs in your life.')
}
//console log question asked and response shown
console.log('Asked ' + userName + ' if I like dogs, expecting a yes. If a no is given, snark is returned.')
//Q2
//ask question as prompt and to Upper
var oreoAnswer = prompt('Is my favorite store bought cookie the Oreo?');
var upperOreoAnswer = oreoAnswer.toUpperCase();
//check answer in if/else statement with YES/Y || NO/N
if(upperOreoAnswer === 'YES'||'Y'){
    alert('Thats right! \n10 points to you!')
}else{
    alert('I love Oreos!\nAdded "bonus"- Its Vegan!')
}
//console log question asked and response shown
console.log('Asked ' + userName + ' if I like Oreos. Yes is correct, no is ok!.')

//Q3
//Q4
//Q5
