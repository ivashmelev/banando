const timer = () => {
  const minStr = document.querySelector('.calc__min');
  const secStr = document.querySelector('.calc__sec');


  let min, sec, clock = {};

  if(min === 0 && sec === 1){
    if(timer){
      timer.style.display = 'none';
    }
    if(timerCalc){
      timerCalc.style.display = 'none';
    }
  }

  if(localStorage['timer']){
    min = JSON.parse(localStorage['timer']).min;
    sec = JSON.parse(localStorage['timer']).sec;
  }
  else {
    min = 15;
    sec = 00
  }


  const start = setInterval(() => {
    sec --;
    if(sec <= 0){
      min--;
      sec = 59;
    }
    if(min === 0 && sec === 1 || min < 0 && sec < 0){
      const timer = document.querySelector('.timer');
      const timerCalc = document.querySelector('.calc__timer');
      if(timer){
        timer.style.display = 'none';
      }
      if(timerCalc){
        timerCalc.style.display = 'none';
      }
      secStr.innerText = '00';
      minStr.innerText = '00';
      clearInterval(start);
    }
    else {
      if(sec < 10){
        secStr.innerText = `0${sec}`;
        minStr.innerText = min;
      }
      else {
        secStr.innerText = sec;
        minStr.innerText = min;
      }
    }
    clock.min = min;
    clock.sec = sec;
    localStorage['timer'] = JSON.stringify(clock)

  }, 1000)
}

if(!localStorage['timer']){
  timer();
}
else {
  const clock = JSON.parse(localStorage['timer']);
  if(clock.min !== 0 && clock.sec !== 1){
    timer();
  }
  else {
    const minStr = document.querySelector('.calc__min');
    const secStr = document.querySelector('.calc__sec');
    const timer = document.querySelector('.timer');
    const timerCalc = document.querySelector('.calc__timer');
    if(timer){
      timer.style.display = 'none';
    }
    if(timerCalc){
      timerCalc.style.display = 'none';
    }
    secStr.innerText = '00';
    minStr.innerText = '00';
  }
}

