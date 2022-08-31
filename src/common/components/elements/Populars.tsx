import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Populars = () => {
  return (
    <section className="populars">
      <div className="container">
        <div className="section-header">
          <h3>Popular Products</h3>
          <nav className="w-100">
            <ul className="nav-tabs">
              <li>
                <button className="nav-tabs__link active">All</button>
              </li>
              <li>
                <button className="nav-tabs__link">Milks & Dairies</button>
              </li>
              <li>
                <button className="nav-tabs__link">Coffes & Teas</button>
              </li>
              <li>
                <button className="nav-tabs__link">Pet Foods</button>
              </li>
              <li>
                <button className="nav-tabs__link">Meats</button>
              </li>
              <li>
                <button className="nav-tabs__link">Vegetables</button>
              </li>
              <li>
                <button className="nav-tabs__link">Fruits</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="populars__wrap">
          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-1-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-1-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>
            <span className="product-card__badge product-card__badge--hot">
              Hot
            </span>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Snack</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>NestFood</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$28.85</span>
                  <span className="product-card__price-old">$32.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-2-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-2-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>
            <span className="product-card__badge product-card__badge--sale">
              Sale
            </span>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Hodo Foods</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    All Natural Italian-Style Chicken Meatballs
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-half.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-half.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(3.5)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>Stouffer</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$52.85</span>
                  <span className="product-card__price-old">$55.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-3-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-3-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>
            <span className="product-card__badge product-card__badge--new">
              New
            </span>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Snack</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Angie&#39;s Boomchickapop Sweet & Salty Kettle Corn
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>StarKist</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$48.85</span>
                  <span className="product-card__price-old">$52.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-4-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-4-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Vegetables</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Foster Farms Takeout Crispy Classic Buffalo Wings
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>NestFood</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$17.85</span>
                  <span className="product-card__price-old">$19.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-5-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-5-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>
            <span className="product-card__badge product-card__badge--best">
              -14%
            </span>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Pet Foods</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Blue Diamond Almonds Lightly Salted Vegetables
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>NestFood</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$23.85</span>
                  <span className="product-card__price-old">$25.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-6-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-6-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Hodo Foods</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Chobani Complete Vanilla Greek Yogurt
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>NestFood</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$54.85</span>
                  <span className="product-card__price-old">$55.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-7-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-7-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Meats</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>NestFood</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$32.85</span>
                  <span className="product-card__price-old">$33.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-8-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-8-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>
            <span className="product-card__badge product-card__badge--sale">
              Sale
            </span>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Snack</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Encore Seafoods Stuffed Alaskan Salmon
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>NestFood</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$35.85</span>
                  <span className="product-card__price-old">$37.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-9-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-9-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>
            <span className="product-card__badge product-card__badge--hot">
              Hot
            </span>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Coffes</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Gorton’s Beer Battered Fish Fillets with soft paper
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(4.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>Old El Paso</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$23.85</span>
                  <span className="product-card__price-old">$25.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img product-card__img--default"
                    src="/imgs/shop/product-10-1.jpg"
                    layout="responsive"
                    width={233}
                    height={233}
                    alt=""
                  />
                  <div className="product-card__hover-wrap">
                    <Image
                      className="product-card__img product-card__img--hover"
                      src="/imgs/shop/product-10-2.jpg"
                      layout="responsive"
                      width={233}
                      height={233}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
              <div className="product-card__actions-box">
                <button
                  className="product-card__action"
                  aria-label="Add To Wishlist"
                >
                  <i className="fi-rs-heart"></i>
                </button>
                <button className="product-card__action" aria-label="Compare">
                  <i className="fi-rs-shuffle"></i>
                </button>
                <button className="product-card__action" aria-label="Quickview">
                  <i className="fi-rs-eye"></i>
                </button>
              </div>
            </div>

            <div className="product-card__content">
              <Link href="/">
                <a className="product-card__category">Cream</a>
              </Link>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Haagen-Dazs Caramel Cone Ice Cream Ketchup
                  </a>
                </Link>
              </h6>
              <div className="product__rating">
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star-fill.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <picture>
                  <source
                    srcSet="/imgs/theme/icons/star.svg"
                    type="image/webp"
                  />
                  <img src="/imgs/theme/icons/star.svg" alt="" />
                </picture>
                <span>(2.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>Tyson</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$22.85</span>
                  <span className="product-card__price-old">$24.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Populars;
