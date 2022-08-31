import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Toplists = () => {
  return (
    <section className="toplists">
      <div className="container">
        <div className="toplists__wrap">
          <div className="toplists__column">
            <div className="sidebar-header">
              <h4>Top Selling</h4>
            </div>
            <div className="toplists__products">
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-1.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Nestle Original Coffee-Mate Coffee Creamer
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$32.85</span>
                      <span className="product-card__price-old">$33.8</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-2.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$22.85</span>
                      <span className="product-card__price-old">$25.8</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-3.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Pepperidge Farm Farmhouse Hearty White Bread
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$12.85</span>
                      <span className="product-card__price-old">$17.8</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="toplists__column">
            <div className="sidebar-header">
              <h4>Trending Products</h4>
            </div>
            <div className="toplists__products">
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-4.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Organic Cage-Free Grade A Large Brown Eggs
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$27.65</span>
                      <span className="product-card__price-old">$29.8</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-5.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
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
                        srcSet="/imgs/theme/icons/star-fill.svg"
                        type="image/webp"
                      />
                      <img src="/imgs/theme/icons/star-fill.svg" alt="" />
                    </picture>
                    <span>(5.0)</span>
                  </div>
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$48.85</span>
                      <span className="product-card__price-old">$51.8</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-6.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Naturally Flavored Cinnamon Vanilla Light Roast Coffee
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$32.85</span>
                      <span className="product-card__price-old">$33.8</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="toplists__column hide-800">
            <div className="sidebar-header">
              <h4>Recently added</h4>
            </div>
            <div className="toplists__products">
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-7.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Pepperidge Farm Farmhouse Hearty White Bread
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$27.85</span>
                      <span className="product-card__price-old">$29.8</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-8.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Organic Frozen Triple Berry Blend
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$32.85</span>
                      <span className="product-card__price-old">$33.8</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-9.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Nestle Original Coffee-Mate Coffee Creamer
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$32.85</span>
                      <span className="product-card__price-old">$33.8</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="toplists__column hide-1100">
            <div className="sidebar-header">
              <h4>Top Rated</h4>
            </div>
            <div className="toplists__products">
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-10.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$32.85</span>
                      <span className="product-card__price-old">$33.8</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-11.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
                    <Link href="/">
                      <a className="product-card__title">
                        Angie’s Boomchickapop Sweet & Salty Kettle Corn
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
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$32.85</span>
                      <span className="product-card__price-old">$33.8</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="toplists__item">
                <div className="product-card__img-box">
                  <Link href="/">
                    <a>
                      <Image
                        className="product-card__img"
                        src="/imgs/shop/thumbnail-12.jpg"
                        width={110}
                        height={110}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="product-card__content">
                  <h6>
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
                    <span>(4.0)</span>
                  </div>
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span>$32.85</span>
                      <span className="product-card__price-old">$33.8</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toplists;
