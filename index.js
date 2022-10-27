'use strict';

// Warm-up task

function identity(x) {

}

console.log(identity(3)) // 3

// 3 binary functions

function add(first, second) {

}

// console.log(add(3, 4)) // 7

function sub(first, second) {

}

// console.log(sub(3, 4)) // -1

function multiply(first, second) {

}

// console.log(multiply(3, 4)) // 12


// Functions as First-Class Citizens

// var three = identityf(3);

function identityf(x) {

}

// console.log(three()) // 3

function addf(first) {

}

// console.log(addf(3)(4)) // 7

/*
  Note: Higher Order Functions are functions that receive
  other functions as paramters and return other functions
  as results.
*/

function liftf(binary) {

}

// var addf = liftf(add);
// console.log(addf(3)(4)) // 7

// console.log(liftf(multiply)(5)(6)) // 30

// const incrementFactory = incrementInitializer()

// console.log(incrementFactory(byOne)) // 1
// console.log(incrementFactory(byTwo)) // 3
// console.log(incrementFactory(byOne)) // 4

