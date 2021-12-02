"use strict";

function first() {
  // Do something
  setTimeout(function () {
    console.log(1);
  }, 1000);
}

function second() {
  console.log(2);
}

first();
second();
 
function lernJavaScript(lang, callback) {
    console.log(`я учу:${lang}`)
    callback()
    
}

function done() {
    console.log("hello");

    
}

lernJavaScript('JavaScript', done)