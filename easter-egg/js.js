'use strict';
const check = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
let array = [];

document.addEventListener('keydown', event => {
  const nav = document.getElementsByTagName('nav')[0];

  if (event.ctrlKey && event.altKey && event.code === 'KeyT') {

    if (nav.classList.contains('visible')) {
      nav.classList.remove('visible');
    } else {
      nav.classList.add('visible');
    }

  } else {
    array.push(event.code);

    if (array.join('') !== check.slice(0, array.length).join('')) {
      array.length = 0;
    } else if (array.join('') === check.join('')) {
      document.getElementsByClassName('secret')[0].classList.add('visible');
    }

  }

});