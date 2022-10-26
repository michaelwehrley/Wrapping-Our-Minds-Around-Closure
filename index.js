'use strict';

// Warm-up task

function identity(x) {

}

console.log(identity(3)) // 3

// 3 binary functions

function add(first, second) {

}

add(3, 4) // 7

function sub(first, second) {

}

sub(3, 4) // -1

function mul(first, second) {

}

mul(3, 4) // 12


var three = identityf(3);

function identityf(x) {

}

// three() // 3

function addf(first) {

}

// addf(3)(4) // 7

/*
  Note: Higher Order Functions are functions that receive
  other functions as paramters and return other functions
  as results.
*/

function liftf(binary) {

}

// var addf = liftf(add);

// addf(3)(4) // 7
// liftf(mul)(5)(6) // 30
