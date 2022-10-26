const stopwatch = document.querySelector('.stopwatch'),
  start = document.querySelector('.start'),
  pause = document.querySelector('.pause'),
  reset = document.querySelector('.reset')
let [msec, sec, min, hours] = [0, 0, 0, 0]
let t = null

start.addEventListener('click', startTimer)
pause.addEventListener('click', pauseTimer)
reset.addEventListener('click', resetTimer)

function startTimer() {
  if (t !== null) {
    clearInterval(t)
  }
  t = setInterval(displayTime, 10)
}

function pauseTimer() {
  clearInterval(t)
}

function resetTimer() {
  clearInterval(t)
  ;[msec, sec, min, hours] = [0, 0, 0, 0]
  stopwatch.innerHTML = '00 : 00 : 00 : 000'
}

// Display Time

function displayTime() {
  msec += 10
  if (msec == 1000) {
    msec = 0
    sec++
    if (sec == 60) {
      sec = 0
      min++
      if (min == 60) {
        min = 0
        hours++
      }
    }
  }
  let h = hours < 10 ? '0' + hours : hours
  let m = min < 10 ? '0' + min : min
  let s = sec < 10 ? '0' + sec : sec
  let ms = msec < 10 ? '00' + msec : msec < 100 ? '0' + msec : msec

  stopwatch.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}
