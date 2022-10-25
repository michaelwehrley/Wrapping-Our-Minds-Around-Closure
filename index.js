'use strict';

function log (arg) {
  document.writeln(arg)
}

/*
  You will be defining functions below.
  The first function `identify` is defined for you
  but the implementation is not there.
  The goal is to write the function that will return itself 
  and then log it using the `log` function defined above.
  When done successfully, you will see the
  value x (i.e., 3) on the screen
*/

// Warm-up task

function identity(x) {
  return x;
}

identity(3) // 3

// 3 binary functions

function add(first, second) {
  return first + second;
}

console.log(add(3, 4)) // 7

function sub(first, second) {
  return first - second;
}

console.log(sub(3, 4)) // -1

function mul(first, second) {
  return first * second;
}

console.log(mul(3, 4)) // 12

var three = identityf(3);

function identityf(x) {
  return function() {
    return x;
  }
}

three() // 3

// function addf(first) {
//   return function(second) {
//     return first + second;
//     // return add(first, second)
//   }
// }

// log(addf(3)(4)) // 7

/*
  Higher Order Functions are functions that receive
  other functions as paramters and return other functions
  as results
*/

function liftf(binary) {

}

var addf = liftf(add);

addf(3)(4) // 7

liftf(mul)(5)(6) // 30
