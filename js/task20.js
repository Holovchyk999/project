"use strict";

const options = {
  name: "test",
  with: 1024,
  heigth: 1024,
  colors: {
    border: "black",
    bg: "red",
    },
    makeTest: function () {
      console.log("test")
      
  }
};

options.makeTest()

const { border, bg } = options.colors;
console.log(border)

// console.log(options['colors']['border']);

// delete options.name;

// console.log(options)
// let counter = 0

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//         console.log(`свойства ${i}, имеет значение ${options[key][i]}`);
//         counter++
//     }
//   } else {
//       console.log(`свойства ${key}, имеет значение ${options[key]}`);
//       counter++
//   }
// }

// console.log(counter)

console.log(Object.keys(options).length)



