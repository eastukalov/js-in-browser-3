'use strict';

const sounds = [
  'first.mp3',
  'second.mp3',
  'third.mp3',
  'fourth.mp3',
  'fifth.mp3'
]

const keys = document.getElementsByTagName('li');
const mode = document.getElementsByClassName('set')[0];
let i =0;

document.addEventListener('keydown', event => {

  if (event.altKey) {

    if (mode.classList.contains('higher')) {
      return;
    }

    if (event.key === 'Alt') {
      event.preventDefault();
    }

    mode.classList.remove('middle');
    mode.classList.remove('lover');
    mode.classList.add('higher');
  } else if (event.shiftKey) {

    if (mode.classList.contains('lower')) {
      return;
    }

    mode.classList.remove('higher');
    mode.classList.remove('middle');
    mode.classList.add('lower');
  }

});

document.addEventListener('keyup', () => {

  if (!mode.classList.contains('middle')) {
    mode.classList.remove('higher');
    mode.classList.remove('lower');
    mode.classList.add('middle');
  }

});

for(const key of keys) {
  key.getElementsByTagName('audio')[0].src = 'sounds/middle/' + sounds[i];
  i++;

  key.addEventListener('click', event => {
    const audio = event.currentTarget.getElementsByTagName('audio')[0];
    const record = audio.src.split('/');

    if (mode.classList.contains('middle')) {
      audio.src = 'sounds/middle/' + record[record.length - 1];
    } else if (mode.classList.contains('lower')) {
      audio.src = 'sounds/lower/' + record[record.length - 1];
    } else {
      audio.src = 'sounds/higher/' + record[record.length - 1];
    }

    audio.play();
  });

}