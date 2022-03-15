'use strict';

const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');
const categoriesBtn = document.querySelector('#categories-button');
const categoriesBtnMore = document.querySelector('.categories-dropdown__more');
const categoriesBtnMoreIcon = document.querySelector(
  '.categories-dropdown__more-icon'
);
const categoriesDropdown = document.querySelector('.categories-dropdown');
const categoriesDropdownList = document.querySelector(
  '.categories-dropdown__list'
);

// Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting)
    headerBottom.classList.add('header__bottom--sticky');
  else headerBottom.classList.remove('header__bottom--sticky');
};

const stickyNavObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

stickyNavObserver.observe(headerTop);

// Show/hide categories dropdown
const resetCategoriesDropDawn = function () {
  categoriesDropdown.classList.add('hidden');
  categoriesBtn.querySelector('.fi-rs-angle-up').classList = 'fi-rs-angle-down';
  categoriesDropdownList.classList.remove('categories-dropdown__list--full');
  categoriesBtnMoreIcon.classList.remove('open');
};

categoriesBtn.addEventListener('click', function (e) {
  e.preventDefault;

  if (categoriesDropdown.classList.contains('hidden')) {
    categoriesDropdown.classList.remove('hidden');
    categoriesBtn.querySelector('.fi-rs-angle-down').classList =
      'fi-rs-angle-up';
  } else {
    resetCategoriesDropDawn();
  }
});

// Show/hide MORE categories
categoriesBtnMore.addEventListener('click', function () {
  categoriesDropdownList.classList.toggle('categories-dropdown__list--full');
  categoriesBtnMoreIcon.classList.toggle('open');
});

// Hero Slider
const heroSlider = function () {
  const wrap = document.querySelector('.hero__wrap');
  const slides = document.querySelectorAll('.hero-slide');
  const btnLeft = document.querySelector(
    `.slider__arrow--hero[data-position="left"]`
  );
  const btnRight = document.querySelector(
    `.slider__arrow--hero[data-position="right"]`
  );
  const dotsContainer = document.querySelector('.slider__dots');

  let curSlide = 0;
  const totalSlides = slides.length;

  // Slider functions
  const goToSlide = function (toSlide) {
    slides.forEach((slide, i) => {
      i === toSlide
        ? slide.classList.add('hero-slide--active')
        : slide.classList.remove('hero-slide--active');
    });
  };

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="slider__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (toSlide) {
    document.querySelectorAll('.slider__dot').forEach((dot, i) => {
      i === toSlide
        ? dot.classList.add('slider__dot--active')
        : dot.classList.remove('slider__dot--active');
    });
  };

  const nextSlide = function () {
    curSlide === totalSlides - 1 ? (curSlide = 0) : curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    curSlide === 0 ? (curSlide = totalSlides - 1) : curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  // Slider event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('slider__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(+slide);
      activateDot(+slide);
      curSlide = +slide;
    }
  });

  let autoSlide = setInterval(nextSlide, 3000);
  wrap.addEventListener('mouseenter', function () {
    clearInterval(autoSlide);
  });
  wrap.addEventListener('mouseleave', function () {
    autoSlide = setInterval(nextSlide, 3000);
  });
};
heroSlider();
