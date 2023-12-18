/* Topics:
   varibale
   data types
   Logical operators
   comparison operators
   if, else if, else condition
*/ 



// var = variable
var name = "Edil"
var car = "Lexus"
var place = "Warsaw"


// DATA types: string, number, boolean, undefined, null, objects, array

// Number
var num = 4;
var floatNum = 3.14;

// String
var text = "Reworking with javascript";
var nameOfBook = 'life is going on';

// Boolean
var isTrue = true;
var isFalse = false;

// Undefined
var city;

// Null;
var value = null;

// Object
var person = {
   name: "John",
   age: 30,
 };

//  Array
var numbers = [1, 2, 3, 4, 5];


// Logical Operators: && = and , || = or 

function f(){
   if(car === "Lexus" && place === "Warsaw"){
      
      console.log(true);
   }else{
      console.log(false);
   }

   if(name === "Edil" || name === "Megan"){
      console.log("his name is " + name);
   }else{
      console.log(false);
   }
}
f();


// if, else if, else condition

var num1 = 5
var num2 = 10 

function calculation(){
   if(num1 > num2){
      console.log(num1 + ' is greater than ' + num2);
   }else{
      console.log(num2 + " is greater than " + num1);
   }
}
calculation();

// comparison operators >, <, ==, ===

var n1 = 90
var n2 = '90'
   
   function check(){
      if(n1 == n2){
         console.log("will show that it is true, however it's not! " +
         "cause double equal mark just checks appearance. string is not equal to number!");
      }else{
         console.log("404");
      }
   }
   check()

var number1 = 30
var number2 = '30'
      
   function check2(){
      if(number1 === number2){
         console.log("true");
      }else{
         console.log("NOT TRUE!, string is not equal to number!");
      }
   }
   check2()