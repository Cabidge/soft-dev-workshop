// Wen Hao Dong, Haotian Gan
// SoftDev
// K27 -- Where Does JS Live?
// 2022-02-07
// --------------------------------------------------

// as a duo...
// pair programming style,
// implement a fact and fib fxn

//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

function fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fact(n - 1) * n;
  }
}

console.log("fact");
for (let i = 0; i < 10; i++) {
  console.log(i, fact(i));
}

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log("fib");
for (let i = 0; i < 10; i++) {
  console.log(i, fib(i));
}
