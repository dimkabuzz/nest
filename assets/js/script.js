'use strict';

const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');
const headerMobile = document.querySelector('.header-mobile');
const headerBurgerOverlay = document.querySelector('.header__burger-overlay');
const categoriesBtn = document.querySelector('#categories-button');
const categoriesBtnMoreIcon = document.querySelector(
  '.categories-dropdown__more-icon'
);
const categoriesDropdown = document.querySelector('.categories-dropdown');
const categoriesDropdownList = document.querySelector(
  '.categories-dropdown__list'
);
const popularsdProductCards = document.querySelectorAll(
  '.populars__wrap .product-card'
);
const dealCards = document.querySelectorAll('.deals__wrap .deal-card');
const banners = document.querySelectorAll('.banners__wrap .banner');
const featuresBanners = document.querySelectorAll('.banner--feature');
const toplistsColumns = document.querySelectorAll('.toplists__column');
const footerColumns = document.querySelectorAll('.footer-links__column');
const sectionHeaders = document.querySelectorAll('.section-header');
const featuredList = document.querySelector('.featured__list');
const featuredTrack = document.querySelector('.featured__track');
const featuredCards = document.querySelectorAll('.featured__card');
const featuredBtns = document.querySelectorAll(
  '.featured * .slider__arrow--tab'
);
const bestsellsList = document.querySelector('.bestsells__list');
const bestsellsTrack = document.querySelector('.bestsells__track');
const bestsellsCards = bestsellsTrack.querySelectorAll('.product-card');
const bestsellsBtns = document.querySelectorAll(
  '.bestsells__arrows > .slider__arrow--tab'
);

// Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;

  document
    .querySelectorAll('.header--sticky')
    .forEach(el => el.classList.remove('header--sticky'));

  const headerStick =
    window.getComputedStyle(headerBottom).display === 'none'
      ? headerTop
      : headerBottom;

  if (!entry.isIntersecting) headerStick.classList.add('header--sticky');
  else headerStick.classList.remove('header--sticky');
};

const stickyNavObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

stickyNavObserver.observe(header);

// Categories dropdown switcher
const switchDropDown = function (e) {
  e.preventDefault();
  // Hide dropdown if clicked outside
  const hideDropDown = function (e) {
    if (
      !categoriesDropdown.classList.contains('hidden') &&
      !e.target.closest('.categories-dropdown')
    ) {
      categoriesDropdown.classList.add('hidden');
      categoriesBtn.querySelector('.fi-rs-angle-up').classList =
        'fi-rs-angle-down';
      categoriesDropdownList.classList.remove(
        'categories-dropdown__list--full'
      );
      categoriesBtnMoreIcon.classList.remove('open');
    }
  };

  // Show dropdown
  const showDropDown = function () {
    categoriesDropdown.classList.remove('hidden');
    categoriesBtn.querySelector('.fi-rs-angle-down').classList =
      'fi-rs-angle-up';
  };

  categoriesDropdown.classList.contains('hidden') &&
  e.target.closest('#categories-button')
    ? showDropDown()
    : hideDropDown(e);

  // Show/hide MORE categories
  if (e.target.closest('.categories-dropdown__more')) {
    categoriesDropdownList.classList.toggle('categories-dropdown__list--full');
    categoriesBtnMoreIcon.classList.toggle('open');
  }
};

// Mobile menu switcher
const switchMobileMenu = function (e) {
  // Hide mobile menu if clicked outside
  const hideMenu = function (e) {
    if (
      (!headerMobile.classList.contains('hidden') &&
        !e.target.closest('.header-mobile')) ||
      e.target.closest('.btn--close')
    ) {
      headerMobile.classList.add('hidden');
      headerMobile.style.transform = 'translateX(-20rem)';
      body.classList.remove('mobile-menu-active');
    }
  };

  // Show mobile menu
  const showMenu = function () {
    headerMobile.classList.remove('hidden');
    headerMobile.style.transform = 'translateX(0)';
    body.classList.add('mobile-menu-active');
  };

  headerMobile.classList.contains('hidden') &&
  e.target.closest('.header__burger-overlay')
    ? showMenu()
    : hideMenu(e);
};

window.addEventListener('click', switchDropDown);
window.addEventListener('click', switchMobileMenu);

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
  wrap.addEventListener('mouseenter', () => clearInterval(autoSlide));
  wrap.addEventListener(
    'mouseleave',
    () => (autoSlide = setInterval(nextSlide, 3000))
  );
};
heroSlider();

//Set animation class and attributes
const setAnimation = function (
  animateElements,
  animationName,
  animationDelay = false
) {
  animateElements.forEach((element, i) => {
    element.classList.add('animate');
    element.dataset.animationName = animationName;
    if (animationDelay)
      element.dataset.animationDelay = `${animationDelay * i}s`;
  });
};

setAnimation(featuredCards, 'fadeInUp', 0.1);
setAnimation(popularsdProductCards, 'fadeIn', 0.1);
setAnimation(banners, 'fadeInUp', 0.2);
setAnimation(sectionHeaders, 'fadeIn');
setAnimation(dealCards, 'fadeInUp', 0.1);
setAnimation(toplistsColumns, 'fadeInUp', 0.1);
setAnimation(featuresBanners, 'fadeInUp', 0.1);
setAnimation(footerColumns, 'fadeInUp', 0.1);

// Reveal elements and animations
const triggerAnimations = function () {
  const allAnimatedElements = document.querySelectorAll('.animate');

  const observerCallBack = function (entries, observer) {
    const [entry] = entries;
    const animatedElement = entry.target;

    if (!entry.isIntersecting) return;

    animatedElement.classList.remove('hidden');
    animatedElement.classList.add(
      `animate__${animatedElement.dataset.animationName}`
    );
    animatedElement.style.animationDelay =
      animatedElement.dataset.animationDelay;

    observer.unobserve(animatedElement);
  };

  allAnimatedElements.forEach(element => {
    element.classList.add('hidden');

    const elementObserver = new IntersectionObserver(observerCallBack, {
      root: null,
      threshol: 0.1,
    });

    elementObserver.observe(element);
  });
};

triggerAnimations();

// Card slider
const cardSlider = function () {
  const featuredCard = {
    maxTabs: 10,
    splitWidth: 150,
    track: featuredTrack,
    all: featuredCards,
  };

  const bestsellsCard = {
    maxTabs: 4,
    splitWidth: 283,
    track: bestsellsTrack,
    all: bestsellsCards,
  };

  // Responsive width for cards
  const resizeCard = function (e, card) {
    card.move = 0;
    card.track.style.transform = `translateX(0px)`;
    card.gap = parseFloat(
      window.getComputedStyle(card.track).getPropertyValue('column-gap')
    );
    card.containerWidth = e[0].contentRect.width;
    card.fitTabs = Math.round(card.containerWidth / card.splitWidth);
    card.showTabs = card.fitTabs < card.maxTabs ? card.fitTabs : card.maxTabs;
    card.width = Math.trunc(
      (card.containerWidth - card.gap * (card.showTabs - 1)) / card.showTabs
    );

    card.all.forEach((cardSingle, i) => {
      cardSingle.style.minWidth = `${card.width}px`;
      if (i >= card.showTabs) cardSingle.classList.remove('animate');
    });
  };

  // Move cards with one position
  const moveCard = function (e, card) {
    const btnPosition = e
      ? e.target.closest('.slider__arrow--tab').dataset.position
      : 'right';
    const nextMove = Math.trunc(card.width + card.gap);

    if (btnPosition === 'left' && card.move <= -nextMove) {
      card.move += nextMove;
      card.track.style.transform = `translateX(${card.move}px)`;
    } else if (
      btnPosition === 'right' &&
      card.move > -(card.all.length - card.showTabs) * nextMove
    ) {
      card.move -= nextMove;
      card.track.style.transform = `translateX(${card.move}px)`;
    } else {
      card.move = 0;
      card.track.style.transform = `translateX(0px)`;
    }
  };

  // Monitor cards containers width
  const featuredObs = new ResizeObserver(e => resizeCard(e, featuredCard));
  const bestsellsObs = new ResizeObserver(e => resizeCard(e, bestsellsCard));
  featuredObs.observe(featuredList);
  bestsellsObs.observe(bestsellsList);

  // Event listeners for card sliders buttons
  featuredBtns.forEach(btn =>
    btn.addEventListener('click', e => moveCard(e, featuredCard))
  );
  bestsellsBtns.forEach(btn =>
    btn.addEventListener('click', e => moveCard(e, bestsellsCard))
  );

  let autoSlide = setInterval(() => moveCard(null, bestsellsCard), 3000);
  bestsellsList.addEventListener('mouseenter', () => clearInterval(autoSlide));
  bestsellsList.addEventListener(
    'mouseleave',
    () => (autoSlide = setInterval(() => moveCard(null, bestsellsCard), 3000))
  );
};

cardSlider();

// Mobile Menu Dropdown
/////////////////////////////////
// Select all expand buttons
const mobileExpandBtns = document.querySelectorAll('.mobile-menu__expand');

// Add event listeners for each expand button
mobileExpandBtns.forEach(expandBtn => {
  expandBtn.addEventListener('click', function () {
    // Functions
    const getActive = el => el.querySelectorAll('.mobile-menu__active');
    const getParent = el => el.closest('.mobile-menu__active');
    const getHeight = el => Number.parseFloat(el?.style.height);

    const collapseDropDown = function (element) {
      element.classList.remove('mobile-menu__active');
      element.style.height = '0px';
    };

    const calcHeight = el => {
      return Array.prototype.reduce.call(
        el.childNodes,
        function (p, c) {
          return p + (c.offsetHeight || 0);
        },
        0
      );
    };

    // Select current dropdown and calc height
    const dropDown = expandBtn.nextElementSibling;
    const height = calcHeight(dropDown);
    let changeHeight = height;

    // Open dropdown menu
    if (!dropDown.classList.contains('mobile-menu__active')) {
      const allActive = getActive(document);
      const parentDropDown = getParent(dropDown);
      const parentHeight = getHeight(parentDropDown);

      // Set height for expanded dropdown
      dropDown.classList.add('mobile-menu__active');
      dropDown.style.height = height + 'px';

      // Collapse all active dropdowns from different parent
      allActive.forEach(active => {
        if (active !== dropDown && active !== parentDropDown) {
          changeHeight -= getHeight(active);
          collapseDropDown(active);
        }
      });

      // Update the active parent height
      if (parentDropDown)
        parentDropDown.style.height = parentHeight + changeHeight + 'px';
    }

    // Collapse dropdown menu
    else {
      changeHeight = getHeight(dropDown);
      collapseDropDown(dropDown);
      const currentParent = getParent(dropDown);
      const currentParentHeight = getHeight(currentParent);

      // Collapse all active child dropdowns
      getActive(dropDown).forEach(active => collapseDropDown(active));

      // Update the active parent height
      if (currentParent)
        currentParent.style.height = currentParentHeight - changeHeight + 'px';
    }
  });
});

// Preloader
window.addEventListener('load', e => {
  preloader.style.transition = '0.6s';
  preloader.classList.add('hidden');
});
