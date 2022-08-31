import React from 'react';
import Link from 'next/link';

const Banners = () => {
  return (
    <section className="banners">
      <div className="container">
        <div className="banners__wrap">
          <div className="banner banner--bg1">
            <div className="banner__text">
              <h4>
                Everyday Fresh &<br />
                Clean with Our
                <br />
                Products
              </h4>
              <Link href="/">
                <a className="btn btn--shop">
                  Shop Now
                  <i className="fi-rs-arrow-small-right"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="banner banner--bg2">
            <div className="banner__text">
              <h4>
                Make your Breakfast
                <br />
                Healthy and Easy
              </h4>
              <Link href="/">
                <a className="btn btn--shop">
                  Shop Now
                  <i className="fi-rs-arrow-small-right"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="banner banner--bg3 hide-800 show-500">
            <div className="banner__text">
              <h4>
                The best Organic
                <br />
                Products Online
              </h4>
              <Link href="/">
                <a className="btn btn--shop">
                  Shop Now
                  <i className="fi-rs-arrow-small-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
