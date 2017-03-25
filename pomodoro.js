let pomodoro = document.querySelector('pomodoro-timer')
let title = document.querySelector('title')
let timeRemaining = 1499
let running = false

document.onkeyup = function(event){
  if (event.keyCode == 32) {
    running = !running
  }
}

pomodoro.addEventListener('click', function() {
  running = !running
})

setInterval(updateTimer, 1000)

function updateTimer() {
  if (running) {
    time = convertTime(timeRemaining--)
    title.innerHTML = time
    pomodoro.innerHTML = time
  }
}