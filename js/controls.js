export default function({
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  timer
}) {
  buttonPlay.addEventListener("click", () => {
    timer.countdown()
  })

  buttonStop.addEventListener("click", () => {
    timer.pause()
  })

  buttonStop.addEventListener("dblclick", () => {
    timer.pause()
    minutesDisplay.textContent = String(25)
    secondsDisplay.textContent = String(0).padStart(2, "0")
  })

  buttonPlus.addEventListener("click", () => {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
  })

  buttonMinus.addEventListener("click", () => {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    if(minutesDisplay.textContent <= 0) {
      minutesDisplay.textContent = "00"
    } 
  })
}