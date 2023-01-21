(function () {
  var hour = document.querySelector(".hour")
  var mint = document.querySelector(".minute")
  var sec = document.querySelector(".sec")
  var startBtn = document.querySelector(".start")
  var stopBtn = document.querySelector(".stop")
  var resetBtn = document.querySelector(".reset")

  var countdownTimer = null;

  //Start Timer Button -start
  startBtn.addEventListener("click", () => {
    if (hour.value == 0 && mint.value == 0 && sec.value == 00) return;
    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countdownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startInterval();
  })
  //Start Timer Button - end

  function timer() {
    //formating timing start
    if (sec.value > 60) {
      mint.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (mint.value > 60) {
      hour.value++;
      mint.value = parseInt(mint.value) - 59;
    }

    //formating timing end
    if (hour.value == 0 && mint.value == 0 && sec.value == 0) {
      stopInterval()
    }
    else if (sec.value != 0) {
      sec.value = `${sec.value > 10 ? "" : "0"}${sec.value - 1}`
    } else if (mint.value != 0 && sec.value == 0) {
      sec.value = 59
      mint.value = `${mint.value > 10 ? "" : "0"}${mint.value - 1}`
    } else if (hour.value != 0 && mint.value == 0 && sec.value == 0) {
      sec.value = 59
      mint.value = 59
      hour.value = `${hour.value > 10 ? "" : "0"}${hour.value - 1}`
    }

    function stopInterval(state) {
      startBtn.innerHTML = state === "pause" ? "Continue" : "pause"
      stopBtn.style.display = "none";
      startBtn.style.display = "initial"
      clearInterval(countdownTimer)
    }

    stopBtn.addEventListener("click", () => {
      stopInterval("pause")
    })

    resetBtn.addEventListener("click", () => {
      hour.value = "";
      mint.value = "";
      sec.value = "";
    })
  }
})()