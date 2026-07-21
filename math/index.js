// turn the user input into a binary number, 
// and log how many 0s and 1s it contains.


// let user_prompt = +prompt("choose a number")
// let binary_number = user_prompt.toString(2)
// console.log(binary_number.split(""));
// let sum_1 = 0
// let sum_0 = 0
// for (let i of binary_number) {
//     if (i == 1 ) 
//         sum_1 += 1
//     else if (i == 0) 
//         sum_0 += 1
// }
// console.log(`your number : ${user_prompt}, in binary : ${binary_number}, contains ${sum_1} 1s and ${sum_0} 0s`);


// 2 give the subtraction of two numbers which are the
// min and max inside a list of numbers

// let numbers = [1, 2, 0]

// let min_num = Math.min(...numbers)
// let max_num = Math.max(...numbers)

// console.log(max_num - min_num);

// 3 trunc vs floor vs parseInt

// trunc JUST removes the decimal part

// floor ALWAYS rounds DOWN, 
// which means if -3.7 is the arguement, 
// it won't return -3, because then 
// it would be higher than when it started
// so, it returns -4, which returns lower than
// when it started // -3.7 < -4

// parseInt is used to return an Integer
// from a string, not remove it's decimal.
// although it CAN be done, it's not supported.
// parseInt tries to convert as much of string to Int 
// as possible until the arg is Not a Number anymore.

// example : parseInt("3.7")
// returns 3 because "." is not a number

// 4 create a function that has two parameters, min and max
// every time the function is called, a random integer
// between the min and max numbers is created

// function RandInt(min, max) {
//     randInt = Math.trunc(Math.random() * (max - min + 1) + min) 
//     console.log(randInt);
    
// }
