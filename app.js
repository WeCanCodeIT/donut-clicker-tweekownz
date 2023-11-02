const counter = document.getElementById("counter")
const leftClick = document.getElementById('onClick')
const donutBounce = document.getElementById('onClick')
const autoClickBtn = document.getElementById('autoClickerBtn')
const autoClickPrice = document.getElementById('autoClickerPrice')
const boughtAutoClicker = document.getElementById('numberofAutoClickers')
const resetBtn = document.getElementById('reset')

let startCount = 0;
let autoClicker = 0;
let click = 100;
let autoClickerPrice = 100
let boughtAutoClickers = 0 

setInterval(function (){
    autoCount()
    startCount += autoClicker}, 1000)

function autoCount(){
    counter.innerText = `Donuts Made: ${startCount}`
}

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

function resetGame(){
    startCount = 0
    autoClicker = 0
    click = 1
    autoClickerPrice = 100
    boughtAutoClickers = 0 
    autoClickPrice.innerHTML = `Auto Clicker Price: ${autoClickerPrice}`
    boughtAutoClicker.innerHTML = `Auto Clickers Bought: ${boughtAutoClickers}`
}

leftClick.addEventListener('click', addClick);
autoClickBtn.addEventListener('click', buyAuto);
resetBtn.addEventListener('click', resetGame)
