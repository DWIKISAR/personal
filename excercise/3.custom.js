// custom hof that return another function
function multiplyBy(n) {
  return function (x) {
    return x * n;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // bawa 1 parameter diawal sudah di deklarasikan
console.log(multiplyBy(10)(32)); // bawa 2 parameter

// Custom hof that implement callback
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function logNumber(n) {
  console.log(`The number is ${n}`);
}

repeat(10, logNumber);
