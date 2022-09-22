let rScreen = document.querySelector('.screen');
const keys =  document.querySelectorAll('button');
let arr = [];
  keys.forEach((item) => {
   item.addEventListener('click', (e) => {
     if (e.target.value === '=') {
       rScreen.value = eval(rScreen.value);
       let string = rScreen.value;
       arr = [...string];
     } else if (e.target.value === 'reset') {
      rScreen.value = '';
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
