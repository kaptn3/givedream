document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll('.slides__controls button');
  const slider = document.querySelector('.slides__inner');
  let active = 0;

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      const x = i === 0 ? 0 : `calc(-${i * 100}% - 25px)`;
      slider.style.transform = `translateX(${x})`;

      for (let k = 0; k < btns.length; k++) {
        btns[k].className = '';
      }
      btns[i].className = 'active';
    })
  }
})
