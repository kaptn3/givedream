const slide = (btns, slider, i) => {
  const x = i === 0 ? 0 : `calc(-${i * 100}% - 25px)`;
  slider.style.transform = `translateX(${x})`;

  for (let k = 0; k < btns.length; k++) {
    btns[k].className = '';
  }
  btns[i].className = 'active';
}

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll('.slides__controls button');
  const slider = document.querySelector('.slides__inner');
  let active = 0;

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      slide(btns, slider, i);
      active = i;
    })
  }

  let touchstartX = 0;
  let touchendX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchstartX = e.targetTouches[0].screenX;
  });

  slider.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    const nextSlide = touchendX < touchstartX
      ? active + 1 === btns.length
        ? active
        : active + 1
      : active - 1 === -1
        ? 0
        : active - 1;
    active = nextSlide;
    slide(btns, slider, nextSlide);
  });
})
