"use strict";

if (4 == 5) {
  console.log("Ok");
} else {
console.log('error')
}

const num = 50;

if (num < 49) {
    console.log("error")
} else if (num > 100) {
    console.log("many")
} else {
    console.log('Ok!')
}

num === 50 ? console.log("Ok!") : console.log("error");

switch (num) {
  case 49:
    console.log("error");
    break;
  case 100:
    console.log("error");
    break;
  case 50:
    console.log("nice");
    break;
    default:
        console.log("ничего не верно");
        break;
}
