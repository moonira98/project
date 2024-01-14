'use strict'

let burger = document.getElementById("burger");

burger.addEventListener("click", toggleBurger)

function toggleBurger () {
    let x = document.getElementById("for-mobile");
    console.log(x);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }


