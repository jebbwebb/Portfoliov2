document.addEventListener('DOMContentLoaded', function () {
  const stickyNav = document.querySelector('.container');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  const buttons = document.querySelectorAll('.yo');
  const cards = document.querySelectorAll('.card');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });

  const toggleFlipped = (event) => {
    const card = event.currentTarget;
    card.classList.toggle('flipped');
  };
  cards.forEach((card) => {
    card.addEventListener('click', toggleFlipped);
  });

  const removeFlippedOnSmallScreen = () => {
    if (window.innerWidth < 1050) {
      cards.forEach((card) => {
        card.classList.remove('flipped');
      });
    }
  };

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

  removeFlippedOnSmallScreen();
  window.addEventListener('resize', removeFlippedOnSmallScreen);
});
