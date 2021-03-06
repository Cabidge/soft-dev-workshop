// Wen Hao Dong, Haotian Gan
// SoftDev
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-09
// --------------------------------------------------

//send diagnostic output to console
//(Ctrl-Shift-J in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;

//assign an anonymous fxn to a var
var f = function (x) {
  var j = 30;
  return j + x;
};

//instantiate an object
var o = {
  name: "Thluffy",
  age: 15,
  items: [10, 20, 30, 40],
  morestuff: { a: 1, b: "ayo" },
  func: function (x) {
    return x + 30;
  },
};

var addItem = function (text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

var removeItem = function (n) {
  var listitems = document.getElementsByTagName("li");
  listitems[n].remove();
};

var red = function () {
  var items = document.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    items[i].classList.add("red");
  }
};

var stripe = function () {
  var items = document.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    if (i % 2 == 0) {
      items[i].classList.add("red");
    } else {
      items[i].classList.add("blue");
    }
  }
};

//insert your implementations here for...
const fact = (n) => (n <= 1 ? 1 : fact(n - 1) * n);

const fib = function (n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

addItem(gcd(18, 30));
