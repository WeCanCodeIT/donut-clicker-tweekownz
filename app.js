const countdownTimer = document.getElementById("countdown-timer")
let timeLeft = 0
let autoClicker = 10


function renderTime(){
    countdownTimer.innerHTML = timeLeft;
}

setInterval(function (){
    renderTime()
    timeLeft = timeLeft + autoClicker
}, 1000)


