const counter = document.getElementById("counter")
const leftClick = document.getElementById('onClick')
const donutBounce = document.getElementById('onClick')
const autoClickBtn = document.getElementById('autoClickerBtn')
const autoClickPrice = document.getElementById('autoClickerPrice')
const boughtAutoClicker = document.getElementById('numberofAutoClickers')

let startCount = 0;
let autoClicker = 0;
let click = 10;
let autoClickerPrice = 100
let boughtAutoClickers = 0 

function autoCount(){
    counter.innerText = startCount;
}

setInterval(function (){
    autoCount()
    startCount += autoClicker}, 1000)

function addClick(){
    startCount += click 
}

function buyAuto(){
    if (startCount >= autoClickerPrice){
        autoClicker ++
        startCount -= autoClickerPrice
        autoClickerPrice = Math.round(autoClickerPrice * 1.1)
        boughtAutoClickers ++
        counter.innerHTML = startCount
        autoClickPrice.innerHTML = `Auto Clicker Price: ${autoClickerPrice}`
        boughtAutoClicker.innerHTML = `Auto Clickers Bought: ${boughtAutoClickers}`
    }
}

leftClick.addEventListener('click', addClick);
autoClickBtn.addEventListener('click', buyAuto);





// if (x > 50) {
//     /* do something */
//   } else if (x > 5) {
//     /* do something */
//   } else {
//     /* do something */
//   }


