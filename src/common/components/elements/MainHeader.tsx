import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__wrap">
            <div className="header__burger">
              <div className="header__burger-overlay"></div>
            </div>
            <div className="header__logo">
              <Link href="/">
                <a>
                  <picture>
                    <source srcSet="/imgs/theme/logo.svg" type="image/webp" />
                    <img src="/imgs/theme/logo.svg" alt="Logo Nest" />
                  </picture>
                </a>
              </Link>
            </div>
            <div className="header__search-wrap hide-700">
              <form className="header-search" action="#">
                <select
                  className="header-search__category-select"
                  defaultValue="1"
                  aria-hidden="true"
                >
                  <option value="3">All Categories</option>
                  <option value="13">Milks and Dairies</option>
                  <option value="14">Wines &amp; Alcohol</option>
                  <option value="15">Clothing &amp; Beauty</option>
                  <option value="16">Pet Foods &amp; Toy</option>
                  <option value="17">Fast food</option>
                  <option value="18">Baking material</option>
                  <option value="19">Vegetables</option>
                  <option value="20">Fresh Seafood</option>
                  <option value="21">Noodles &amp; Rice</option>
                  <option value="22">Ice cream</option>
                </select>
                <i className="fi-rs-angle-down"></i>
                <span className="header-search__separate-line"></span>
                <input
                  type="text"
                  className="header-search__search-input"
                  placeholder="Search for items..."
                />
              </form>
            </div>
            <div className="header__actions-wrap">
              <div className="header-action hide-800">
                <Link href="/">
                  <a className="header-action__link">
                    <picture>
                      <source
                        srcSet="/imgs/theme/icons/icon-compare.svg"
                        type="image/webp"
                      />
                      <img
                        className="header-action__img"
                        src="/imgs/theme/icons/icon-compare.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </picture>
                    <span className="header-action__count">3</span>
                    <span className="header-action__label">Compare</span>
                  </a>
                </Link>
              </div>

              <div className="header-action">
                <Link href="/">
                  <a className="header-action__link">
                    <picture>
                      <source
                        srcSet="/imgs/theme/icons/icon-heart.svg"
                        type="image/webp"
                      />
                      <img
                        className="header-action__img"
                        src="/imgs/theme/icons/icon-heart.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </picture>
                    <span className="header-action__count">6</span>
                    <span className="header-action__label">Wishlist</span>
                  </a>
                </Link>
              </div>

              <div className="header-action">
                <Link href="/">
                  <a className="header-action__link">
                    <picture>
                      <source
                        srcSet="/imgs/theme/icons/icon-cart.svg"
                        type="image/webp"
                      />
                      <img
                        className="header-action__img"
                        src="/imgs/theme/icons/icon-cart.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </picture>
                    <span className="header-action__count">2</span>
                    <span className="header-action__label">Cart</span>
                  </a>
                </Link>
                <div className="action-dropdown">
                  <ul className="action-dropdown__list mb-25">
                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__img-link">
                          <Image
                            src="/imgs/shop/thumbnail-3.jpg"
                            layout="fill"
                            alt="Product image"
                          />
                        </a>
                      </Link>
                      <div className="action-dropdown__product-text">
                        <h6 className="mb-10">
                          <Link href="/">
                            <a className="action-dropdown__product-link">
                              Daisy Casual Bag
                            </a>
                          </Link>
                        </h6>
                        <span>1 × $800.00</span>
                      </div>
                      <Link href="/">
                        <a className="action-dropdown__delete">
                          <i className="fi-rs-cross-small"></i>
                        </a>
                      </Link>
                    </li>

                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__img-link">
                          <Image
                            src="/imgs/shop/thumbnail-2.jpg"
                            layout="fill"
                            alt="Product image"
                          />
                        </a>
                      </Link>
                      <div className="action-dropdown__product-text">
                        <h6 className="mb-10">
                          <Link href="/">
                            <a className="action-dropdown__product-link">
                              Corduroy Shirts
                            </a>
                          </Link>
                        </h6>
                        <span>1 × $3200.00</span>
                      </div>
                      <Link href="/">
                        <a className="action-dropdown__delete">
                          <i className="fi-rs-cross-small"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="action-dropdown__footer">
                    <span>Total</span>
                    <span className="action-dropdown__product-price">
                      $4000.00
                    </span>
                    <Link href="/">
                      <a className="btn btn--cart-view">View cart</a>
                    </Link>
                    <Link href="/">
                      <a className="btn btn--cart-checkout">Checkout</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="header-action hide-700">
                <Link href="/">
                  <a className="header-action__link">
                    <picture>
                      <source
                        srcSet="/imgs/theme/icons/icon-user.svg"
                        type="image/webp"
                      />
                      <img
                        className="header-action__img"
                        src="/imgs/theme/icons/icon-user.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </picture>
                    <span className="header-action__label">Account</span>
                  </a>
                </Link>
                <div className="action-dropdown">
                  <ul className="action-dropdown__list">
                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__link">
                          <i className="fi fi-rs-user"></i>My Account
                        </a>
                      </Link>
                    </li>
                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__link">
                          <i className="fi fi-rs-location-alt"></i>Order
                          Tracking
                        </a>
                      </Link>
                    </li>
                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__link">
                          <i className="fi fi-rs-label"></i>My Voucher
                        </a>
                      </Link>
                    </li>
                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__link">
                          <i className="fi fi-rs-heart"></i>My Wishlist
                        </a>
                      </Link>
                    </li>
                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__link">
                          <i className="fi fi-rs-settings-sliders"></i>Setting
                        </a>
                      </Link>
                    </li>
                    <li className="action-dropdown__item">
                      <Link href="/">
                        <a className="action-dropdown__link">
                          <i className="fi fi-rs-sign-out"></i>Sign out
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom hide-700">
        <div className="container">
          <div className="header__wrap">
            <div className="header__nav">
              <button className="btn hide-800" id="categories-button">
                <i className="fi-rs-apps"></i>
                <span className="hide-1200">Browse</span>
                <span>All Categories</span>
                <i className="fi-rs-angle-down"></i>
              </button>

              <div className="categories-dropdown hidden">
                <ul className="categories-dropdown__list">
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-1.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Milk and Dairies</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-6.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Wines & Drinks</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-2.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Clothing & beauty</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-7.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Fresh Seafood</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-3.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Pet Foods & Toy</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-8.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Fast food</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-4.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Baking material</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-9.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Vegetables</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-5.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Fresh Fruit</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/category-10.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Bread and Juice</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/icon-1.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Milks and Dairies</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/icon-3.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Wines & Drinks</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/icon-2.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Clothing & beauty</span>
                      </a>
                    </Link>
                  </li>
                  <li className="categories-dropdown__item">
                    <Link href="/">
                      <a className="categories-dropdown__link">
                        <div className="categories-dropdown__img-wrap">
                          <Image
                            src="/imgs/theme/icons/icon-4.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <span>Fresh Seafood</span>
                      </a>
                    </Link>
                  </li>
                </ul>
                <button className="categories-dropdown__more">
                  <span className="categories-dropdown__more-icon"></span>
                  <span>Show more...</span>
                </button>
              </div>

              <nav>
                <ul className="main-nav">
                  <li className="main-nav__item main-nav__item--hot">
                    <Link href="/">
                      <a className="main-nav__link">
                        <div className="main-nav__img-wrap">
                          <Image
                            src="/imgs/theme/icons/icon-hot.svg"
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        Hot Deals
                      </a>
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link href="/">
                      <a className="main-nav__link active">
                        Home
                        <i className="fi-rs-angle-down"></i>
                      </a>
                    </Link>
                    <ul className="sub-menu">
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Home 1</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Home 2</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Home 3</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Home 4</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Home 5</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Home 6</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="main-nav__item">
                    <Link href="/">
                      <a className="main-nav__link">About</a>
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link href="/">
                      <a className="main-nav__link">
                        Shop
                        <i className="fi-rs-angle-down"></i>
                      </a>
                    </Link>
                    <ul className="sub-menu">
                      <li className="sub-menu">
                        <Link href="/">
                          <a className="sub-menu__link">
                            Shop Grid – Right Sidebar
                          </a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">
                            Shop Grid – Left Sidebar
                          </a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">
                            Shop List – Right Sidebar
                          </a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">
                            Shop List – Left Sidebar
                          </a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Shop - Wide</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">
                            Single Product <i className="fi-rs-angle-right"></i>
                          </a>
                        </Link>
                        <ul className="level-menu">
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">
                                Product – Right Sidebar
                              </a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">
                                Product – Left Sidebar
                              </a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">
                                Product – No sidebar
                              </a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">
                                Product – Vendor Infor
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Shop – Filter</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Shop – Wishlist</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Shop – Cart</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Shop – Checkout</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Shop – Compare</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">
                            Shop Invoice<i className="fi-rs-angle-right"></i>
                          </a>
                        </Link>
                        <ul className="level-menu">
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Shop Invoice 1</a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Shop Invoice 2</a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Shop Invoice 3</a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Shop Invoice 4</a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Shop Invoice 5</a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Shop Invoice 6</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="main-nav__item">
                    <Link href="/">
                      <a className="main-nav__link">
                        <span>Vendors</span>
                        <i className="fi-rs-angle-down"></i>
                      </a>
                    </Link>
                    <ul className="sub-menu">
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Vendors Grid</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Vendors List</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Vendor Details 01</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Vendor Details 02</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Vendor Dashboard</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Vendor Guide</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="main-nav__item position-static">
                    <Link href="/">
                      <a className="main-nav__link">
                        Mega Menu
                        <i className="fi-rs-angle-down"></i>
                      </a>
                    </Link>
                    <div className="mega-menu">
                      <div className="mega-menu__list-col">
                        <Link href="/">
                          <a className="mega-menu__list-title">
                            Fruit & Vegetables
                          </a>
                        </Link>
                        <ul className="mega-menu__list">
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">Meat & Poultry</a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Fresh Vegetables
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Herbs & Seasonings
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">Cuts & Sprouts</a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Exotic Fruits & Veggies
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Packaged Produce
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu__list-col">
                        <Link href="/">
                          <a className="mega-menu__list-title">
                            Fruit & Vegetables
                          </a>
                        </Link>
                        <ul className="mega-menu__list">
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">Meat & Poultry</a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Fresh Vegetables
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Herbs & Seasonings
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">Cuts & Sprouts</a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Exotic Fruits & Veggies
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Packaged Produce
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu__list-col">
                        <Link href="/">
                          <a className="mega-menu__list-title">
                            Fruit & Vegetables
                          </a>
                        </Link>
                        <ul className="mega-menu__list">
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">Meat & Poultry</a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Fresh Vegetables
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Herbs & Seasonings
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">Cuts & Sprouts</a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Exotic Fruits & Veggies
                              </a>
                            </Link>
                          </li>
                          <li className="mega-menu__item">
                            <Link href="/">
                              <a className="mega-menu__link">
                                Packaged Produce
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu__banner-col">
                        <div className="mega-banner">
                          <div className="mega-banner__text">
                            <span className="mega-banner__hot">Hot deals</span>
                            <h4>
                              Don&#39;t miss
                              <br />
                              Trending
                            </h4>
                            <span className="mega-banner__price">
                              Save to 50%
                            </span>
                            <Link href="/">
                              <a className="btn btn--mega">Shop now</a>
                            </Link>
                          </div>
                          <div className="mega-banner__label">
                            <span className="mega-banner__label-nr">25%</span>
                            <span>off</span>
                          </div>
                          <Link href="/">
                            <a className="mega-banner__cover-link"></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="main-nav__item">
                    <Link href="/">
                      <a className="main-nav__link">
                        Blog
                        <i className="fi-rs-angle-down"></i>
                      </a>
                    </Link>
                    <ul className="sub-menu">
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Blog Category Grid</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Blog Category List</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Blog Category Big</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">Blog Category Wide</a>
                        </Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link href="/">
                          <a className="sub-menu__link">
                            Single Post <i className="fi-rs-angle-right"></i>
                          </a>
                        </Link>
                        <ul className="level-menu level-menu--modify">
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Left Sidebar</a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">Right Sidebar</a>
                            </Link>
                          </li>
                          <li className="level-menu__item">
                            <Link href="/">
                              <a className="level-menu__link">No Sidebar</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="main-nav__item">
                    <Link href="/">
                      <a className="main-nav__link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hotline hide-1100">
              <picture>
                <source
                  srcSet="/imgs/theme/icons/icon-headphone.svg"
                  type="image/webp"
                />
                <img
                  className="hotline__icon"
                  src="/imgs/theme/icons/icon-headphone.svg"
                  aria-hidden="true"
                  alt=""
                />
              </picture>
              <div className="hotline__text">
                <p className="hotline__number">1900 - 888</p>
                <p className="hotline__support">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="header-mobile hidden"
        // style={{ transform: 'translateX(-20rem)' }}
      >
        <div className="header-mobile__top">
          <Link href="/">
            <a>
              <picture>
                <source srcSet="/imgs/theme/logo.svg" type="image/webp" />
                <img
                  className="header-mobile__logo"
                  src="/imgs/theme/logo.svg"
                  alt="Logo"
                />
              </picture>
            </a>
          </Link>
          <button className="btn btn--close"></button>
        </div>

        <form className="mobile-search mb-20" action="#">
          <input
            type="text"
            className="mobile-search__input"
            placeholder="Search for items..."
          />
          <button className="btn btn--search" type="submit">
            <i className="fi-rs-search"></i>
          </button>
        </form>

        <nav>
          <ul className="mobile-menu mb-20">
            <li className="mobile-menu__item">
              <Link href="/">
                <a className="mobile-menu__link">Home</a>
              </Link>
              <span className="mobile-menu__expand">
                <i className="fi-rs-angle-small-down"></i>
              </span>
              <ul className="mobile-menu__dropdown">
                <li>
                  <Link href="/">
                    <a>Home 1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Home 2</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Home 3</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Home 4</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Home 5</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Home 6</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-menu__item">
              <Link href="/">
                <a className="mobile-menu__link">Shop</a>
              </Link>
              <span className="mobile-menu__expand">
                <i className="fi-rs-angle-small-down"></i>
              </span>
              <ul className="mobile-menu__dropdown">
                <li>
                  <Link href="/">
                    <a>Shop Grid – Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop Grid – Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop List – Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop List – Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop - Wide</a>
                  </Link>
                </li>
                <li className="mobile-menu__item">
                  <Link href="/">
                    <a className="mobile-menu__link">Single Product</a>
                  </Link>
                  <span className="mobile-menu__expand">
                    <i className="fi-rs-angle-small-down"></i>
                  </span>
                  <ul className="mobile-menu__dropdown">
                    <li>
                      <Link href="/">
                        <a>Product – Right Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Product – Left Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Product – No sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Product – Vendor Infor</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop – Filter</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop – Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop – Cart</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop – Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shop – Compare</a>
                  </Link>
                </li>
                <li className="mobile-menu__item">
                  <Link href="/">
                    <a className="mobile-menu__link">Shop Invoice</a>
                  </Link>
                  <span className="mobile-menu__expand">
                    <i className="fi-rs-angle-small-down"></i>
                  </span>
                  <ul className="mobile-menu__dropdown">
                    <li>
                      <Link href="/">
                        <a>Shop Invoice 1</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Shop Invoice 2</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Shop Invoice 3</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Shop Invoice 4</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Shop Invoice 5</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Shop Invoice 6</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mobile-menu__item">
              <Link href="/">
                <a className="mobile-menu__link">Vendors</a>
              </Link>
              <span className="mobile-menu__expand">
                <i className="fi-rs-angle-small-down"></i>
              </span>
              <ul className="mobile-menu__dropdown">
                <li>
                  <Link href="/">
                    <a>Vendors Grid</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Vendors List</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Vendor Details 01</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Vendor Details 02</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Vendor Dashboard</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Vendor Guide</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-menu__item">
              <Link href="/">
                <a className="mobile-menu__link">Mega Menu</a>
              </Link>
              <span className="mobile-menu__expand">
                <i className="fi-rs-angle-small-down"></i>
              </span>
              <ul className="mobile-menu__dropdown">
                <li className="mobile-menu__item">
                  <Link href="/">
                    <a className="mobile-menu__link">Women&#39;s Fashion</a>
                  </Link>
                  <span className="mobile-menu__expand">
                    <i className="fi-rs-angle-small-down"></i>
                  </span>
                  <ul className="mobile-menu__dropdown">
                    <li>
                      <Link href="/">
                        <a>Dresses</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Blouses &amp; Shirts</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Hoodies &amp; Sweatshirts</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Women&#39;s Sets</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu__item">
                  <Link href="/">
                    <a className="mobile-menu__link">Men&#39;s Fashion</a>
                  </Link>
                  <span className="mobile-menu__expand">
                    <i className="fi-rs-angle-small-down"></i>
                  </span>
                  <ul className="mobile-menu__dropdown">
                    <li>
                      <Link href="/">
                        <a>Jackets</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Casual Faux Leather</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Genuine Leather</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu__item">
                  <Link href="/">
                    <a className="mobile-menu__link">Technology</a>
                  </Link>
                  <span className="mobile-menu__expand">
                    <i className="fi-rs-angle-small-down"></i>
                  </span>
                  <ul className="mobile-menu__dropdown">
                    <li>
                      <Link href="/">
                        <a>Gaming Laptops</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Ultraslim Laptops</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tablets</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Laptop Accessories</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tablet Accessories</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mobile-menu__item">
              <Link href="/">
                <a className="mobile-menu__link">Blog</a>
              </Link>
              <span className="mobile-menu__expand">
                <i className="fi-rs-angle-small-down"></i>
              </span>
              <ul className="mobile-menu__dropdown">
                <li>
                  <Link href="/">
                    <a>Blog Category Grid</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Blog Category List</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Blog Category Big</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Blog Category Wide</a>
                  </Link>
                </li>
                <li className="mobile-menu__item">
                  <Link href="/">
                    <a className="mobile-menu__link">Single Product Layout</a>
                  </Link>
                  <span className="mobile-menu__expand">
                    <i className="fi-rs-angle-small-down"></i>
                  </span>
                  <ul className="mobile-menu__dropdown">
                    <li>
                      <Link href="/">
                        <a>Left Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Right Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>No Sidebar</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mobile-menu__item">
              <Link href="/">
                <a className="mobile-menu__link">Pages</a>
              </Link>
              <span className="mobile-menu__expand">
                <i className="fi-rs-angle-small-down"></i>
              </span>
              <ul className="mobile-menu__dropdown">
                <li>
                  <Link href="/">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Register</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Purchase Guide</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Terms of Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>404 Page</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-menu__item">
              <Link href="/">
                <a className="mobile-menu__link">Language</a>
              </Link>
              <span className="mobile-menu__expand">
                <i className="fi-rs-angle-small-down"></i>
              </span>
              <ul className="mobile-menu__dropdown">
                <li>
                  <Link href="/">
                    <a>English</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>French</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>German</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Spanish</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="header-mobile__info mb-30">
          <Link href="/">
            <a className="header-mobile__info-link">
              <i className="fi-rs-marker"></i>
              Our location
            </a>
          </Link>
          <Link href="/">
            <a className="header-mobile__info-link">
              <i className="fi-rs-user"></i>
              Log In / Sign Up
            </a>
          </Link>
          <Link href="/">
            <a className="header-mobile__info-link">
              <i className="fi-rs-headphones"></i>
              (+01) - 2345 - 6789
            </a>
          </Link>
        </div>

        <div className="social social--mobile mb-50">
          <h6>Follow Us</h6>
          <div className="social__links">
            <Link href="/">
              <a className="social__btn">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/icon-facebook-white.svg"
                    type="image/webp"
                  />
                  <img
                    src="/imgs/theme/icons/icon-facebook-white.svg"
                    alt="Facebook"
                  />
                </picture>
              </a>
            </Link>
            <Link href="/">
              <a className="social__btn">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/icon-twitter-white.svg"
                    type="image/webp"
                  />
                  <img
                    src="/imgs/theme/icons/icon-twitter-white.svg"
                    alt="Twitter"
                  />
                </picture>
              </a>
            </Link>
            <Link href="/">
              <a className="social__btn">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/icon-instagram-white.svg"
                    type="image/webp"
                  />
                  <img
                    src="/imgs/theme/icons/icon-instagram-white.svg"
                    alt="Instagram"
                  />
                </picture>
              </a>
            </Link>
            <Link href="/">
              <a className="social__btn">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/icon-pinterest-white.svg"
                    type="image/webp"
                  />
                  <img
                    src="/imgs/theme/icons/icon-pinterest-white.svg"
                    alt="Pinterest"
                  />
                </picture>
              </a>
            </Link>
            <Link href="/">
              <a className="social__btn">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/icon-youtube-white.svg"
                    type="image/webp"
                  />
                  <img
                    src="/imgs/theme/icons/icon-youtube-white.svg"
                    alt="Youtube"
                  />
                </picture>
              </a>
            </Link>
          </div>
        </div>

        <p className="header-mobile__copyright">
          Copyright 2021 © Nest. All rights reserved. Powered by AliThemes.
        </p>
      </div>
    </header>
  );
};

export default MainHeader;
