const counter = document.getElementById("counter")

let startCount = 0;
let autoClicker = 1;
let click = 1;

let powerOne = false;
let powerTwo = false;
let powerThree = false;
let powerFour = false;
let clickOne = false;
let clickTwo = false;
let clickThree = false;
let clickFour = false;


function autoCount(){
    counter.innerText = startCount;
}

setInterval(function (){
    autoCount()
    startCount = startCount + autoClicker
}, 1000)

// if (x > 50) {
//     /* do something */
//   } else if (x > 5) {
//     /* do something */
//   } else {
//     /* do something */
//   }


