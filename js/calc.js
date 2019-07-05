const amount = document.getElementById("amount");
const period = document.getElementById("period");
const amountStr = document.getElementById("amountStr");
const periodStr = document.getElementById("periodStr");

let percent = 14;

const hundredSpace = (str) => {
    str = str.toString().split("");
  
    if(str.length >= 4){
      str.splice(str.length-3, 0, " ");
    }
  
    return str.join("");
  }

noUiSlider.create(amount, {
    start: [1000],
    connect: [true, false],
    behaviour: 'tap',
    range: {
    'min': [1000],
    'max': [80000]
    },
    step: 1000,
});

noUiSlider.create(period, {
    start:[0],
    connect: [true, false],
    step: 1,
    behaviour: 'tap',
    range:{
    'min': [0],
    'max': [3]
  }
});

amount.noUiSlider.on('update', (val, handle) => {
    const result = hundredSpace(Number(val[handle]));
    amountStr.innerHTML = result;

    if (result < 10000) {
        percent = 14;
      } else if (result > 9000 && result < 30000) {
        percent = 33;
      } else if (result > 29000 && result < 50000) {
        percent = 9;
      } else if (result > 49000) {
        percent = 27;
      }

    const firstOperator = document.querySelector('#one').innerText = hundredSpace(result);
    const secondOperator = Math.round(result * (percent/100)).toFixed()
    // document.querySelector('#two').innerText = hundredSpace(secondOperator);
    thirdOperator = document.querySelector('#three').innerText = hundredSpace(result);

    if(val[handle] < 10000) period.noUiSlider.set(0);
    if(val[handle] >= 10000) period.noUiSlider.set(1);
    if(val[handle] >= 30000) period.noUiSlider.set(2);
    if(val[handle] >= 50000) period.noUiSlider.set(3);
});

period.noUiSlider.on('update', (val, handle) => {
    const result = Number(val[handle]);
  
    switch(result){
      case 0:
        periodStr.innerHTML = "1-14";
        break;
      case 1:
        periodStr.innerHTML = "15-30";
        break;
      case 2: 
        periodStr.innerHTML = "30-180";
        break;
      case 3: 
        periodStr.innerHTML = "210-365";
        break;
    }
  });

  period.addEventListener('mouseup', (e) => {
    if(period.noUiSlider.get() == 0) amount.noUiSlider.set(5000);
    if(period.noUiSlider.get() == 1) amount.noUiSlider.set(15000);
    if(period.noUiSlider.get() == 2) amount.noUiSlider.set(40000);
    if(period.noUiSlider.get() == 3) amount.noUiSlider.set(60000);
  });