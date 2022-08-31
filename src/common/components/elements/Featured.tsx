import React from 'react';
import Link from 'next/link';

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="section-header">
          <div className="section-header__nav">
            <h3>Featured Categories</h3>
            <nav className="hide-500">
              <ul className="nav-tabs">
                <li>
                  <Link href="/">
                    <a className="nav-tabs__link">Cake & Milk</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="nav-tabs__link">Coffes & Teas</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="nav-tabs__link active">Pet Foods</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="nav-tabs__link">Vegetables</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="section-header__arrows">
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

        <div className="featured__list">
          <div className="featured__track">
            <div className="featured__card bg-9">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/shop/cat-13.png"
                        type="image/webp"
                      />
                      <img src="/imgs/shop/cat-13.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Cake & Milk</a>
                </Link>
              </h6>
              <span>26 items</span>
            </div>

            <div className="featured__card bg-10">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/shop/cat-12.png"
                        type="image/webp"
                      />
                      <img src="/imgs/shop/cat-12.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Oganic Kiwi</a>
                </Link>
              </h6>
              <span>28 items</span>
            </div>

            <div className="featured__card bg-11">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/shop/cat-11.png"
                        type="image/webp"
                      />
                      <img src="/imgs/shop/cat-11.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Peach</a>
                </Link>
              </h6>
              <span>14 items</span>
            </div>

            <div className="featured__card bg-12">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-9.png" type="image/webp" />
                      <img src="/imgs/shop/cat-9.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Red Apple</a>
                </Link>
              </h6>
              <span>54 items</span>
            </div>

            <div className="featured__card bg-13">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-3.png" type="image/webp" />
                      <img src="/imgs/shop/cat-3.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Hodo Foods</a>
                </Link>
              </h6>
              <span>56 items</span>
            </div>

            <div className="featured__card bg-14">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-1.png" type="image/webp" />
                      <img src="/imgs/shop/cat-1.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Vegetables</a>
                </Link>
              </h6>
              <span>72 items</span>
            </div>

            <div className="featured__card bg-15">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-2.png" type="image/webp" />
                      <img src="/imgs/shop/cat-2.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Strawberry</a>
                </Link>
              </h6>
              <span>36 items</span>
            </div>

            <div className="featured__card bg-12">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-4.png" type="image/webp" />
                      <img src="/imgs/shop/cat-4.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Black plum</a>
                </Link>
              </h6>
              <span>123 items</span>
            </div>

            <div className="featured__card bg-10">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-5.png" type="image/webp" />
                      <img src="/imgs/shop/cat-5.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Custard apple</a>
                </Link>
              </h6>
              <span>34 items</span>
            </div>

            <div className="featured__card bg-12">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/shop/cat-14.png"
                        type="image/webp"
                      />
                      <img src="/imgs/shop/cat-14.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Coffe & Tea</a>
                </Link>
              </h6>
              <span>89 items</span>
            </div>

            <div className="featured__card bg-9">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/shop/cat-13.png"
                        type="image/webp"
                      />
                      <img src="/imgs/shop/cat-13.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Cake & Milk</a>
                </Link>
              </h6>
              <span>26 items</span>
            </div>

            <div className="featured__card bg-10">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/shop/cat-12.png"
                        type="image/webp"
                      />
                      <img src="/imgs/shop/cat-12.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Oganic Kiwi</a>
                </Link>
              </h6>
              <span>28 items</span>
            </div>

            <div className="featured__card bg-14">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-1.png" type="image/webp" />
                      <img src="/imgs/shop/cat-1.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Vegetables</a>
                </Link>
              </h6>
              <span>72 items</span>
            </div>

            <div className="featured__card bg-15">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-2.png" type="image/webp" />
                      <img src="/imgs/shop/cat-2.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Strawberry</a>
                </Link>
              </h6>
              <span>36 items</span>
            </div>

            <div className="featured__card bg-12">
              <figure className="featured__img">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/shop/cat-4.png" type="image/webp" />
                      <img src="/imgs/shop/cat-4.png" alt="" />
                    </picture>
                  </a>
                </Link>
              </figure>
              <h6>
                <Link href="/">
                  <a>Black plum</a>
                </Link>
              </h6>
              <span>123 items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
