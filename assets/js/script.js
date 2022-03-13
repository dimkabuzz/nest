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
