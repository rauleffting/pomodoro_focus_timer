export default function({minutesDisplay, secondsDisplay}) {
  let timerTimeout
  // timer
  function countdown() {
    timerTimeout = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      
      if( (minutes <= 0) && (seconds <= 0)) {
        pause()
        return
      }

      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      } 

      updateDisplay(minutes, seconds)
      countdown()
    }, 1000)
  }

  function updateDisplay(minutes, seconds) {
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }

  function pause() {
    clearTimeout(timerTimeout)
  }

  return {
    countdown,
    updateDisplay,
    pause
  }
}