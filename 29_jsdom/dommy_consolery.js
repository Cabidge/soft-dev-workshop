/**
 * Wen Hao Dong, Aaron Contreras
 * SoftDev
 * K29 -- DOMfoolery++
 * 2022-02-10
 * time spent: 2.0
 */

textInput0 = document.getElementById("in0");
textInput1 = document.getElementById("in1");
addGCD = document.getElementById("add-gcd");
addFib = document.getElementById("add-fib");
addFactorial = document.getElementById("add-fact");

let gcd = function (a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

let fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

let fact = (n) => {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
};

let listOut = document.getElementById("list");
let addItem = (text) => {
  let newItem = document.createElement("li");
  newItem.innerHTML = text;
  listOut.appendChild(newItem);
};

addGCD.addEventListener("click", () => {
  let result = gcd(in0.value, in1.value);
  addItem(`The gcd of ${in0.value} and ${in1.value} is ${result}`);
});

addFib.addEventListener("click", () => {
  let result = fib(in0.value);
  addItem(`The fib of ${in0.value} is ${result}`);
});

addFactorial.addEventListener("click", () => {
  let result = fact(in0.value);
  addItem(`The factorial of ${in0.value} is ${result}`);
});
