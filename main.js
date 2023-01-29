const heightOutput = document.querySelector('#height');
const stickyNav = document.querySelector('.container');
const hamburger = document.querySelector('.hamburger');
console.log(stickyNav);
hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 250) {
    stickyNav.classList.add('sticky');
  }
  if (window.pageYOffset === 0) {
    stickyNav.classList.remove('sticky');
  }
});
