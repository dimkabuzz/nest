import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrap">
          <div
            className="hero-slide"
            style={{
              backgroundImage: "url('/imgs/slider/slider-1.png')",
            }}
          >
            <h1 className="hero-slide__heading">
              Don’t miss amazing
              <br />
              grocery deals
            </h1>
            <p className="hero-slide__desc">Sign up for the daily newsletter</p>
            <form className="subscriber" action="#">
              <input
                type="email"
                className="subscriber__input"
                placeholder="Your emaill address"
              />
              <button className="btn btn--subscribe" type="submit">
                Subscribe
              </button>
            </form>
          </div>

          <div
            className="hero-slide"
            style={{
              backgroundImage: "url('/imgs/slider/slider-2.png')",
            }}
          >
            <h1 className="hero-slide__heading">
              Fresh Vegetables
              <br />
              Big discount
            </h1>
            <p className="hero-slide__desc">
              Save up to 50% off on your first order
            </p>
            <form className="subscriber" action="#">
              <input
                type="email"
                className="subscriber__input"
                placeholder="Your emaill address"
              />
              <button className="btn btn--subscribe" type="submit">
                Subscribe
              </button>
            </form>
          </div>

          <div className="hero-slide__arrows slider__arrows">
            <button
              className="slider__arrow slider__arrow--hero"
              data-position="left"
            >
              <i className="fi-rs-angle-left"></i>
            </button>
            <button
              className="slider__arrow slider__arrow--hero"
              data-position="right"
            >
              <i className="fi-rs-angle-right"></i>
            </button>
          </div>
          <div className="slider__dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
