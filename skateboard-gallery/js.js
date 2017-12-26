'use strict';

const refs = document.getElementsByTagName('a');
const img = document.getElementById('view');

for(const ref of refs) {
  ref.addEventListener('click', event => {
    event.preventDefault();

    if (event.currentTarget.classList.contains('gallery-current')) {
      return;
    }

    for(const el of refs) {
      el.classList.remove('gallery-current');
    }

    event.currentTarget.classList.add('gallery-current');
    img.src = event.currentTarget.href;
  })
}
