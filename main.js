'use strict'
const text = document.querySelector('#text');
text.addEventListener('mousemove', function() {
   let randomColor = Math.floor(Math.random()*16777215).toString(16);
   text.style.color = "#" + randomColor;
   randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.getElementById('container').style.backgroundColor  = "#" + randomColor;
});
