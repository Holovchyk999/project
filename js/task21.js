"use strict";

const arr = [1, 20, 9, 6, 8];
arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
  return a - b;
}

arr.pop()

arr.push(10)

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let value of arr) {
    console.log(value)
};

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри масива ${arr}`)
})

const str = prompt("", "");
const product = str.split(', ')
product.sort()
console.log(product.join('; '))
