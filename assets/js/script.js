'use strict';
// Sticky navigation
const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting)
    headerBottom.classList.add('header__bottom--sticky');
  else headerBottom.classList.remove('header__bottom--sticky');
};

const stickyNavObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${headerBottom.getBoundingClientRect().height / 2}px`,
});

stickyNavObserver.observe(headerTop);
