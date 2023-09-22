"use strict"
// ----------------

// ------------> String to Number <----------------------
// let num = "5634"
// console.log(num)
// console.log(typeof num) // returns String

// let convertedNum = Number(num) // Converts string to number
// console.log(convertedNum)
// console.log(typeof convertedNum); // returns Number
// ---------------------------------------------

// ---------------> Number to String <-------------------

// let number = 24
// console.log(number);
// console.log(typeof number);

// let str = String(number)
// console.log(str);
// console.log(typeof str);

// let name = "Mohit Dubey"
// console.log(name)
// console.log(typeof name);

// let convertedName = Number(name) // converts alphabetic or alphanumeric text to NaN(Not a Number) which is also a number datatype
// console.log(convertedName);
// console.log(typeof convertedName);
// -----------------------------------------------------------------------

// ----------------> Boolean Conversion <-------------------

// let isLoggedIn = 0
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

// let isLoggedInStatus = Boolean(isLoggedIn)
// console.log(isLoggedInStatus);
// console.log(typeof isLoggedInStatus);

// let name = "M"
// let convertedName = Boolean(name)
// console.log(convertedName)
// ----------------------------------------------------------

// --------------> NULL to conversions <--------------------

// let value = null
// console.log(value)
// console.log(typeof(value))

// let converteValue = Number(value)
// console.log(converteValue)
// console.log(typeof(converteValue))

// let convertedInStringValue = String(value)
// console.log(convertedInStringValue)
// console.log(typeof(convertedInStringValue))
// ----------------------------------------------------------------

// -------------------> undefined to conversion <------------------

// let name = undefined
// console.log(typeof name)

// let convertedName = String(name)
// console.log(typeof convertedName)
// ----------------------------------------------------------------

// NOTES:
//     1) "33" => 33
//     2) "Mohit" => NaN
//     3) true => 1
//     4) false => 0
//     5) "" => false
//     6) "mohit" => true
//     7) null to Number => 0 (number)
//     8) null to String => null (string)
//     9) null to Boolean => false (boolean)
//    10) null to Boolean => false
//    11) null to Number => NaN
//    12) null to String => string


// **************************************** OPERATIONS *************************************************

let num1 = 2;
let num2 = 6;

// console.log(num1+num2)
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1**num2);
// console.log(num1%num2);


// console.log("1" + 2 + 3); // agar string pehle hai to uske baad saara string ki tarah treat kiya jayega aur concatenate hoga
// console.log(1 + 2 + "3"); // agar string baad me hai to pehle calculation aur fir uske baad string concatenate hoga
// console.log(1 + +"3" + 4); // plus(+) before a number string converts it into an integer

// console.log("Mohit " + "Dubey")

// let str1 = "Mohit"
// let str2 = " Dubey"
// let str3 = str1 + str2
// console.log(str3);

// console.log(true)
// console.log(+true) 
// console.log(+false)
// console.log(+"");

// --------------------------------------------

let counter = 1;
console.log(counter);
counter++;
console.log(counter++);
// counter++;
console.log(++counter);
++counter
console.log(++counter);
console.log(++counter);
