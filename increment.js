function incrementInitializer() {
  var value = 0;

  return function(inc) {
    value = inc(value)
    return value;
  }
}

function byOne(value) {
  return value + 1;
}

function byTwo(value) {
  return value + 2;
}

const incrementFactory = incrementInitializer()

console.log(incrementFactory(byOne)) // 1
console.log(incrementFactory(byTwo)) // 3
console.log(incrementFactory(byOne)) // 4