// javascript

// import of html elements
let btnContent = document.querySelector(".btn-main");
let start = document.querySelector(".btn");
let reset = document.querySelector("#reset");
let pause = document.querySelector("#pause");
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hour = document.getElementById("hour");
let interval = null;

// beginning seconds || mins || hours
let [bsec, bmin, bhour] = [1, 0, 0];

// timer func
function timer() {
  // interval
  interval = setInterval(() => {
    // seconds remainer of divition 60
    let getSeconds = bsec % 60;
    let setSeconds = (sec.innerHTML = getSeconds);

    // minutes
    let getMinutes = bmin / 60;

    // hours
    let getHour = bhour / 60;

    // seconds func
    if (bsec > 60) {
      setSeconds < 10
        ? (sec.innerHTML = "0" + setSeconds)
        : (sec.innerHTML = setSeconds);

      // min func
      if (getSeconds == true) {
        // min remainer of divition
        let setMinutes = getMinutes % 60;

        setMinutes < 10
          ? (min.innerHTML = "0" + setMinutes)
          : (min.innerHTML = setMinutes);

        // hour func
        if (getMinutes % 60 == true && getMinutes > 60) {
          // min remainer of divition
          let setHours = getHour % 60;

          setHours < 10
            ? (hour.innerHTML = "0" + setHours)
            : (hour.innerHTML = setHours);
        }
      }
    }
    bhour++;
    bmin++;
    bsec++;
  }, 20);

  return interval;
}

// start || pause click
function startCounter() {
  start.addEventListener("click", () => {
    if (start.textContent == "start") {
      start.textContent = "pause";
      timer();
    } else if (start.textContent == "pause") {
      start.textContent = "start";
      clearInterval(interval);
    }
  });
}
startCounter();

// pause

pause.addEventListener('click', ()=> {
    if(bsec !== 0, bmin !== 0, bhour !==0, start.textContent == "pause"){
        clearInterval(interval)
        start.textContent = "start"
    }else{
        start.textContent = "pause"

    }
})

// reset 
reset.addEventListener('click',()=>{
    if(bsec !== 0, bmin !== 0, bhour !==0){
        location.reload()
    }
})

