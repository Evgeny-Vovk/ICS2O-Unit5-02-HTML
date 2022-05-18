// Created by: Evgeny
// Created on: mar 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit5-02-HTML/",
  })
}

/**
 * This function compares slider with random number.
 */

function calculate() {

  //input
  const number = parseInt(document.getElementById('number').value)

  // process
  if (number >= 0) {
    document.getElementById("answer").innerHTML =
      "The number " + number + " is a positive number."
  }
  else {
    document.getElementById("answer").innerHTML =
      "The number " + number + " is a negative number."
  }
}