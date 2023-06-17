const rScreen = document.querySelector('.screen');
const keys =  document.querySelectorAll('button');
const buttonsPad = document.querySelector('.buttons');
const circle = document.querySelector('.circle');
const tape = document.querySelector('.tape');
const container = document.querySelector('.container');
const equal = document.querySelector('.equal');
const resetBtn = document.querySelector('.resetBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const li = document.querySelectorAll('li');
const calc = document.querySelector('.calc');
const theme = document.querySelector('.theme');
const black = [theme, calc, rScreen];
let position = 0;

let arr = [];
  keys.forEach((item) => {
   item.addEventListener('click', (e) => {
     if (e.target.value === '=') {
      rScreen.style.fontSize = '13px';
       rScreen.value = eval(rScreen.value);
       if (eval(rScreen.value) == '11.11') {
        rScreen.value = 'I see that you found the secret door.';
        setTimeout(() => {
          rScreen.value = 'well then, all I wanna say is...';
        }, 3000)
        setTimeout(() => {
          rScreen.value = 'I love you Miranda.';
        }, 6000)
        setTimeout(() => {
          rScreen.value = '';
        }, 14000) 
       }
       let string = rScreen.value;
       arr = [...string];
     } else if (e.target.value === 'reset') {
      rScreen.value = '';
      arr = [];
    }
    else if (e.target.value === 'delete') {
     arr.pop();
     rScreen.value = arr.join('');
   }
    else {
    rScreen.value += e.target.value;
    arr.push(e.target.value);
    }
   })
  });
  circle.addEventListener('click', (e) => {
    if (position === 0) {
      circle.style.left = `calc(40%)`;

      keys.forEach((item, i) => {
      item.style.backgroundColor = `#e5e4e0`;
      item.style.color = `#000`;
      });
      resetBtn.style.backgroundColor = `hsl(185, 42%, 37%)`;
      deleteBtn.style.backgroundColor = `hsl(185, 42%, 37%)`;
      equal.style.backgroundColor = `hsl(25, 98%, 40%)`;
      buttonsPad.style.backgroundColor = `#d2cdc9`;
      rScreen.style.backgroundColor = `#eeeeee`;
      black.forEach((item, i) => {
      item.style.color = `#000`;
      });
      tape.style.backgroundColor = `#d2cdc9`;
      circle.style.backgroundColor = `hsl(25, 98%, 40%)`;
      li.forEach((item, i) => {
      item.style.color = `#000`;
      });

      document.querySelector('body').style.backgroundColor = `hsl(0, 0%, 90%)`;
      position = 1;
    }
    else if (position === 1) {
      circle.style.left = `calc(73%)`;

      keys.forEach((item, i) => {
      item.style.backgroundColor = `#331a4c`;
      item.style.color = `#ffe539`;
      });
      resetBtn.style.backgroundColor = `#8631ae`;
      deleteBtn.style.backgroundColor = `#8631ae`;
      equal.style.backgroundColor = `#94fff9`;
      buttonsPad.style.backgroundColor = `#1f0735`;
      rScreen.style.backgroundColor = `#1f0735`;
      rScreen.style.color = `#ffe539`;
      black.forEach((item, i) => {
      item.style.color = `#ffe539`;
      });
      tape.style.backgroundColor = `#1f0735`;
      circle.style.backgroundColor = `#8ffffb`;
      li.forEach((item, i) => {
      item.style.color = `#ffe539`;
      });

      document.querySelector('body').style.backgroundColor = `#17062a`;

      position = 2;
    }
    else if (position === 2) {
      circle.style.left = `calc(0% + 2px)`;

      keys.forEach((item, i) => {
      item.style.backgroundColor = `#e9e1d9`;
      item.style.color = `#000`;
      });
      resetBtn.style.backgroundColor = `##a2b3e1`;
      deleteBtn.style.backgroundColor = `##a2b3e1`;
      equal.style.backgroundColor = `#f96c5b`;
      buttonsPad.style.backgroundColor = `#252c45`;
      rScreen.style.backgroundColor = `#181f32`;
      rScreen.style.color = `#fff`;
      black.forEach((item, i) => {
      item.style.color = `#fff`;
      });
      tape.style.backgroundColor = `#252c45`;
      circle.style.backgroundColor = `#f96c5b`;
      li.forEach((item, i) => {
      item.style.color = `#fff`;
      });

      document.querySelector('body').style.backgroundColor = `#3b4664`;

      position = 0;
    }
  })
