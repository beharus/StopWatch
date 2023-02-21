let btnContent = document.querySelector(".btn-main");
let start = document.querySelector(".btn");
let reset = document.querySelector("#reset");
let pause = document.querySelector("#pause");
let sec = document.getElementById("sek");
let min = document.getElementById("min");
let hour = document.getElementById("hour");
let interval = null;
// beginning seconds || hour || minutes
let [bsec, bmin, bhour] = [1, 0, 0];

// timer func
function timer() {
  // Interval
  interval = setInterval(() => {
    // seconds: remainder of division 60
    let getSeconds = bsec % 60;
    let setSeconds = (sec.innerHTML = getSeconds);

    // minutes: it will show minutes with division seconds to 60 => ( 180sec / 60 = 3min )
    let getMinutes = (bmin) / 60;

    // hours: it will show hours with division seconds to 60 => ( 180min / 60 = 3hours )
    let getHour = (bhour) / 60;

    // seconds
    if (bsec > 60) {
      // if number less than 10 (1, 5, ...) it will show with 0, that located before that (01, 05, ..)
      setSeconds < 10
        ? (sec.innerHTML = "0" + setSeconds)
        : (sec.innerHTML = setSeconds % 60);

      // minutes
      if (getSeconds == true) {
        // each minute this will work
        console.log("minute left");

        // minutes: remainder of division 60
        let setMinutes = getMinutes % 60;

        // if number less than 10 (1, 5, ...) it will show with 0, that located before that (01, 05, ..)
        setMinutes < 10
          ? (min.innerHTML = "0" + (getMinutes % 60))
          : (min.innerHTML = getMinutes % 60);

        //hours
        if (getMinutes % 60 == true && getMinutes > 60) {
          // each hour this will work
          console.log(hour);

          // hours: remainder of division 60
          let setHour = getHour % 60;
          setHour < 10
            ? (hour.innerHTML = "0" + (getHour % 60))
            : (hour.innerHTML = getHour % 60);
        }
      }
    }

    // bsec + 1 & bmin + 1 & bhour + 1
    bsec++;
    bmin++;
    bhour++;
  }, 20);
  // 1000 = 1sec
}

// start
function startCount() {
  start.addEventListener("click", () => {
    timer();
  });
}
startCount();

// pause
function pauseCounter() {
  pause.addEventListener("click", () => {
    clearInterval(interval);
  });
}
pauseCounter();

// reset
function resetCounter() {
  let c = 0;
  reset.addEventListener("click", () => {
    if (bsec !== 0 && bmin !== 0 && bhour !== 0) {
      location.reload();
    }
  });
  return c;
}
resetCounter();
