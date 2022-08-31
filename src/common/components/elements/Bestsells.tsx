import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Bestsells = () => {
  return (
    <section className="bestsells">
      <div className="container">
        <div className="section-header">
          <h3>Daily Best Sells</h3>
          <nav>
            <ul className="nav-tabs">
              <li>
                <button className="nav-tabs__link active">Featured</button>
              </li>
              <li>
                <button className="nav-tabs__link">Popular</button>
              </li>
              <li>
                <button className="nav-tabs__link">New added</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bestsells__wrap">
          <div
            className="banner banner--bg4 ai-fs animate hide-1000"
            data-animation-name="fadeIn"
          >
            <div className="banner__text">
              <h2>Bring nature into your home</h2>
              <Link href="/">
                <a className="btn btn--shop">
                  Shop Now
                  <i className="fi-rs-arrow-small-right"></i>
                </a>
              </Link>
            </div>
          </div>

          <div
            className="bestsells__list animate"
            data-animation-name="fadeIn"
            data-animation-delay="0.4s"
          >
            <div className="bestsells__track">
              <article className="product-card">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img product-card__img--default"
                        src="/imgs/shop/product-1-1.jpg"
                        layout="responsive"
                        width={207}
                        height={207}
                        alt=""
                      />
                      <div className="product-card__hover-wrap">
                        <Image
                          className="product-card__img product-card__img--hover"
                          src="/imgs/shop/product-1-2.jpg"
                          layout="responsive"
                          width={207}
                          height={207}
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
                    <button
                      className="product-card__action"
                      aria-label="Compare"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </button>
                    <button
                      className="product-card__action"
                      aria-label="Quickview"
                    >
                      <i className="fi-rs-eye"></i>
                    </button>
                  </div>
                </div>
                <span className="product-card__badge product-card__badge--hot">
                  Save 15%
                </span>

                <div className="product-card__content">
                  <Link href="/">
                    <a className="product-card__category">Hodo Foods</a>
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
                  </div>
                  <div className="product-card__bottom">
                    <div className="w-100">
                      <div className="product-card__price">
                        <span>$238.85</span>
                        <span className="product-card__price-old">$245.8</span>
                      </div>
                      <div className="product-card__progress">
                        <div className="product-card__progress--full">
                          <div className="product-card__progress--score"></div>
                        </div>
                        <span>Sold: 90/120</span>
                      </div>
                      <button className="btn btn--add-wide">
                        <i className="fi-rs-shopping-cart"></i>
                        Add To Cart
                      </button>
                    </div>
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
                        width={207}
                        height={207}
                        alt=""
                      />
                      <div className="product-card__hover-wrap">
                        <Image
                          className="product-card__img product-card__img--hover"
                          src="/imgs/shop/product-5-2.jpg"
                          layout="responsive"
                          width={207}
                          height={207}
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
                    <button
                      className="product-card__action"
                      aria-label="Compare"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </button>
                    <button
                      className="product-card__action"
                      aria-label="Quickview"
                    >
                      <i className="fi-rs-eye"></i>
                    </button>
                  </div>
                </div>
                <span className="product-card__badge product-card__badge--new">
                  Save 35%
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
                  </div>
                  <div className="product-card__bottom">
                    <div className="w-100">
                      <div className="product-card__price">
                        <span>$238.85</span>
                        <span className="product-card__price-old">$245.8</span>
                      </div>
                      <div className="product-card__progress">
                        <div className="product-card__progress--full">
                          <div className="product-card__progress--score"></div>
                        </div>
                        <span>Sold: 90/120</span>
                      </div>
                      <button className="btn btn--add-wide">
                        <i className="fi-rs-shopping-cart"></i>
                        Add To Cart
                      </button>
                    </div>
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
                        width={207}
                        height={207}
                        alt=""
                      />
                      <div className="product-card__hover-wrap">
                        <Image
                          className="product-card__img product-card__img--hover"
                          src="/imgs/shop/product-2-2.jpg"
                          layout="responsive"
                          width={207}
                          height={207}
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
                    <button
                      className="product-card__action"
                      aria-label="Compare"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </button>
                    <button
                      className="product-card__action"
                      aria-label="Quickview"
                    >
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
                        Angie’s Boomchickapop Sweet and womnies
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
                  </div>
                  <div className="product-card__bottom">
                    <div className="w-100">
                      <div className="product-card__price">
                        <span>$238.85</span>
                        <span className="product-card__price-old">$245.8</span>
                      </div>
                      <div className="product-card__progress">
                        <div className="product-card__progress--full">
                          <div className="product-card__progress--score"></div>
                        </div>
                        <span>Sold: 90/120</span>
                      </div>
                      <button className="btn btn--add-wide">
                        <i className="fi-rs-shopping-cart"></i>
                        Add To Cart
                      </button>
                    </div>
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
                        width={207}
                        height={207}
                        alt=""
                      />
                      <div className="product-card__hover-wrap">
                        <Image
                          className="product-card__img product-card__img--hover"
                          src="/imgs/shop/product-3-2.jpg"
                          layout="responsive"
                          width={207}
                          height={207}
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
                    <button
                      className="product-card__action"
                      aria-label="Compare"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </button>
                    <button
                      className="product-card__action"
                      aria-label="Quickview"
                    >
                      <i className="fi-rs-eye"></i>
                    </button>
                  </div>
                </div>
                <span className="product-card__badge product-card__badge--best">
                  Best Sale
                </span>

                <div className="product-card__content">
                  <Link href="/">
                    <a className="product-card__category">Hodo Foods</a>
                  </Link>
                  <h6 className="mb-5">
                    <Link href="/">
                      <a className="product-card__title">
                        Foster Farms Takeout Crispy Classic
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
                  </div>
                  <div className="product-card__bottom">
                    <div className="w-100">
                      <div className="product-card__price">
                        <span>$238.85</span>
                        <span className="product-card__price-old">$245.8</span>
                      </div>
                      <div className="product-card__progress">
                        <div className="product-card__progress--full">
                          <div className="product-card__progress--score"></div>
                        </div>
                        <span>Sold: 90/120</span>
                      </div>
                      <button className="btn btn--add-wide">
                        <i className="fi-rs-shopping-cart"></i>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              <article className="product-card">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img product-card__img--default"
                        src="/imgs/shop/product-1-1.jpg"
                        layout="responsive"
                        width={207}
                        height={207}
                        alt=""
                      />
                      <div className="product-card__hover-wrap">
                        <Image
                          className="product-card__img product-card__img--hover"
                          src="/imgs/shop/product-1-2.jpg"
                          layout="responsive"
                          width={207}
                          height={207}
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
                    <button
                      className="product-card__action"
                      aria-label="Compare"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </button>
                    <button
                      className="product-card__action"
                      aria-label="Quickview"
                    >
                      <i className="fi-rs-eye"></i>
                    </button>
                  </div>
                </div>
                <span className="product-card__badge product-card__badge--hot">
                  Save 15%
                </span>

                <div className="product-card__content">
                  <Link href="/">
                    <a className="product-card__category">Hodo Foods</a>
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
                  </div>
                  <div className="product-card__bottom">
                    <div className="w-100">
                      <div className="product-card__price">
                        <span>$238.85</span>
                        <span className="product-card__price-old">$245.8</span>
                      </div>
                      <div className="product-card__progress">
                        <div className="product-card__progress--full">
                          <div className="product-card__progress--score"></div>
                        </div>
                        <span>Sold: 90/120</span>
                      </div>
                      <button className="btn btn--add-wide">
                        <i className="fi-rs-shopping-cart"></i>
                        Add To Cart
                      </button>
                    </div>
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
                        width={207}
                        height={207}
                        alt=""
                      />
                      <div className="product-card__hover-wrap">
                        <Image
                          className="product-card__img product-card__img--hover"
                          src="/imgs/shop/product-5-2.jpg"
                          layout="responsive"
                          width={207}
                          height={207}
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
                    <button
                      className="product-card__action"
                      aria-label="Compare"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </button>
                    <button
                      className="product-card__action"
                      aria-label="Quickview"
                    >
                      <i className="fi-rs-eye"></i>
                    </button>
                  </div>
                </div>
                <span className="product-card__badge product-card__badge--new">
                  Save 35%
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
                  </div>
                  <div className="product-card__bottom">
                    <div className="w-100">
                      <div className="product-card__price">
                        <span>$238.85</span>
                        <span className="product-card__price-old">$245.8</span>
                      </div>
                      <div className="product-card__progress">
                        <div className="product-card__progress--full">
                          <div className="product-card__progress--score"></div>
                        </div>
                        <span>Sold: 90/120</span>
                      </div>
                      <button className="btn btn--add-wide">
                        <i className="fi-rs-shopping-cart"></i>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="bestsells__arrows slider__arrows">
              <button
                className="slider__arrow slider__arrow--tab"
                data-position="left"
              >
                <i className="fi-rs-arrow-small-left"></i>
              </button>
              <button
                className="slider__arrow slider__arrow--tab"
                data-position="right"
              >
                <i className="fi-rs-arrow-small-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestsells;
