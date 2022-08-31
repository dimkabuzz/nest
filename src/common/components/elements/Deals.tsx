import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Deals = () => {
  return (
    <section className="deals">
      <div className="container">
        <div className="section-header">
          <h3>Deals Of The Day</h3>
          <Link href="/">
            <a className="section-header__show-all">
              All Deals <i className="fi-rs-angle-right"></i>
            </a>
          </Link>
        </div>

        <div className="deals__wrap">
          <article className="deal-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img"
                    src="/imgs/banner/banner-5.png"
                    width={345}
                    height={310}
                    alt=""
                  />
                </a>
              </Link>
            </div>

            <div className="deal-card__content">
              <div className="deal-card__countdawn">
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">1158</span>
                  <span>Days</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">11</span>
                  <span>Hours</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">51</span>
                  <span>Mins</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">49</span>
                  <span>Sec</span>
                </div>
              </div>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
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

          <article className="deal-card">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img"
                    src="/imgs/banner/banner-6.png"
                    width={345}
                    height={310}
                    alt=""
                  />
                </a>
              </Link>
            </div>

            <div className="deal-card__content">
              <div className="deal-card__countdawn">
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">1154</span>
                  <span>Days</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">10</span>
                  <span>Hours</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">36</span>
                  <span>Mins</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">25</span>
                  <span>Sec</span>
                </div>
              </div>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Perdue Simply Smart Organics Gluten Free
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
                  <span>$24.85</span>
                  <span className="product-card__price-old">$26.8</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="deal-card hide-800">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img"
                    src="/imgs/banner/banner-7.png"
                    width={345}
                    height={310}
                    alt=""
                  />
                </a>
              </Link>
            </div>

            <div className="deal-card__content">
              <div className="deal-card__countdawn">
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">1887</span>
                  <span>Days</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">13</span>
                  <span>Hours</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">46</span>
                  <span>Mins</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">25</span>
                  <span>Sec</span>
                </div>
              </div>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Signature Wood-Fired Mushroom and Caramelized
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
                <span>(3.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>Progresso</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$12.85</span>
                  <span className="product-card__price-old">$13.6</span>
                </div>
                <button className="btn btn--add">
                  <i className="fi-rs-shopping-cart"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>

          <article className="deal-card hide-1100">
            <div className="product-card__img-box">
              <Link href="/">
                <a>
                  <Image
                    className="product-card__img"
                    src="/imgs/banner/banner-8.png"
                    width={345}
                    height={310}
                    alt=""
                  />
                </a>
              </Link>
            </div>

            <div className="deal-card__content">
              <div className="deal-card__countdawn">
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">1425</span>
                  <span>Days</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">09</span>
                  <span>Hours</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">56</span>
                  <span>Mins</span>
                </div>
                <div className="deal-card__countdawn-item">
                  <span className="deal-card__countdawn-amount">15</span>
                  <span>Sec</span>
                </div>
              </div>
              <h6 className="mb-5">
                <Link href="/">
                  <a className="product-card__title">
                    Simply Lemonade with Raspberry Juice
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
                <span>(3.0)</span>
              </div>
              <span className="product-card__vendor">
                By{' '}
                <Link href="/">
                  <a>Yoplait</a>
                </Link>
              </span>
              <div className="product-card__bottom">
                <div className="product-card__price">
                  <span>$15.85</span>
                  <span className="product-card__price-old">$16.8</span>
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

export default Deals;
