//Henry Song In Cho, Santa Monica College, CS81, Fall 2017, 959323
//Test 1, Problem 7

//The programmer does not implement do-while iteration.

//Built-in prompt function is utilized to enter string value to variable breakfast.
//However, the program does not check the possibility of empty string.

var breakfast = prompt("What would you like for breakfast?");
console.log(breakfast);//Output the string entered.

//Commented script check for empty string entry, it will keep ask for entry until non-empty string is entered.
/*
var breakfast;
do{
   breakfast = prompt("What would you like for breakfast?");
}while(!breakfast)
console.log(breakfast);
*/