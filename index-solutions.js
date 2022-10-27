'use strict';

// Warm-up task

function identity(x) {
  return x;
}

// console.log(identity(3)) // 3

// 3 binary functions

function add(first, second) {
  return first + second;
}

// console.log(add(3, 4)) // 7

function sub(first, second) {
  return first - second;
}

// console.log(sub(3, 4)) // -1

function multiply(first, second) {
  return first * second;
}

// console.log(multiply(3, 4)) // 12


// Functions as First-Class Citizens

var three = identityf(3);

function identityf(x) {
  return function() {
    return x;
  }
}

// console.log(three()) // 3

function addf(first) {
  return function(second) {
    return add(first, second)
    // return first + second;
  }
}

// console.log(addf(3)(4)) // 7

/*
  Note: Higher Order Functions are functions that receive
  other functions as paramters and return other functions
  as results.
*/

function liftf(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second)
    }
  };
}

var addf = liftf(add);
// console.log(addf(3)(4)) // 7

// console.log(liftf(multiply)(5)(6)) // 30
