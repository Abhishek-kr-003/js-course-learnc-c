"use strict"; //treat all JS code as newer version

//alert(3+3) // we are using nodejs not browser so error in alert
// you can use ; in Js but generally prefer not to

//console.log(3+3);
// documentation about js: tc39 and mdn
let name  =" abhi"
let age = 18
let isLoggedIn= true

/*Datatypes in js:
number => 2^53 range
bigint for very big numbers
string => single or double coat
boolean
null => standalone value
undefined => when values id not assigned to variable
symbol => for uniqueness

object
*/
// console.log(typeof agee) // gives type of data
// console.log(typeof null) //u will get output as object


let str1 = "Hello"
let str2 = "Abhishek"
let str3 = str1+str2 //We can add 2 strings by using + in js
console.log(str3);

//console.log(1+ "2");
//console.log("1"+2);
//console.log("1"+2+2); // it will print 122
//console.log(1+2+"2"); // it will print 32 as the element type first is carried out

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

//Datatypes sumary:
//# Primitive datatypes:
/* 7 Primitive types: String , Number, Boolean, Null, Undefined, Symbol
                      BigInt*/

//# Refrence type or Non Primitive
// Arrays, Objects, functions

//We do not use datatypes in js to declarwe a variable Ex: int i=1 this we do not use 
//we can use i=10 in js directly

//to declare a Symbol in js we can use
   const id = Symbol('123')
   const anotherid = Symbol('123')
// both id and anotherid is a symbol but both are not equal
 
//to check
console.log(id === anotherid);
//output is false

// Array decleration
const heros = ["Krish", "Ironman"]

//Object data type decleration
let myObj ={
    name: "Abhishek",
age: 21
}
// To declare a function in js we use function(){} we can also store function in a variable
const myfunc = function(){
    console.log("Hello World");
    
}
// To see all the return types of all the datatypes go to https://262.ecma-international.org/5.1/#sec-11.4.3
// asked in interview