const stickyNav = document.querySelector('.container');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

console.log(mobileLinks);
hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
});

mobileLinks.forEach((element) =>
  element.addEventListener('click', () => {
    mobileNav.classList.remove('is-active');
    hamburger.classList.remove('is-active');
  })
);

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 250) {
    stickyNav.classList.add('sticky');
  }
  if (window.pageYOffset === 0) {
    stickyNav.classList.remove('sticky');
  }
});
