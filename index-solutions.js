'use strict';

// Warm-up task

function identity(x) {
  return x;
}

identity(3) // 3

// 3 binary functions

function add(first, second) {
  return first + second;
}

add(3, 4) // 7

function sub(first, second) {
  return first - second;
}

sub(3, 4) // -1

function mul(first, second) {
  return first * second;
}

mul(3, 4) // 12

var three = identityf(3);

function identityf(x) {
  return function() {
    return x;
  }
}

three() // 3

function addf(first) {
  return function(second) {
    return first + second;
    // return add(first, second)
  }
}

addf(3)(4) // 7

/*
  Higher Order Functions are functions that receive
  other functions as paramters and return other functions
  as results
*/

function liftf(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second)
    }
  };
}

var addf = liftf(add);

addf(3)(4) // 7
liftf(mul)(5)(6) // 30
