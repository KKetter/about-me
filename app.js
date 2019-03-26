'use strict';

var userName = prompt('What is your name?');

if(userName === 'Kent'){
    console.log('Hey we have the same name');
} else if (userName === 'Sam'){
    console.log('Hamm...From Birmingham?');
} else {
    console.log('Welcome to the site ' + userName + "!");
}

/*

Declare with "[]"
Seperate values with ','

*/

var testArray = [];
var filledTestArray = [1,'2', userName, true, Array(2), null]

console.log(testArray);
console.log(filledTestArray);