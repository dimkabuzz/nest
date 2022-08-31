import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MainFooter = () => {
  return (
    <footer>
      <section className="newsletter animate" data-animation-name="fadeIn">
        <div className="container">
          <div className="newsletter__wrap">
            <h2 className="mb-20">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="mb-45">
              Start You&#39;r Daily Shopping with Nest Mart
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
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features__wrap">
            <div className="banner banner--feature">
              <picture>
                <source
                  srcSet="/imgs/theme/icons/icon-1.svg"
                  type="image/webp"
                />
                <img src="/imgs/theme/icons/icon-1.svg" alt="" />
              </picture>
              <div>
                <h5 className="mb-5">Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>
            <div className="banner banner--feature">
              <picture>
                <source
                  srcSet="/imgs/theme/icons/icon-2.svg"
                  type="image/webp"
                />
                <img src="/imgs/theme/icons/icon-2.svg" alt="" />
              </picture>
              <div>
                <h5 className="mb-5">Free delivery</h5>
                <p>24/7 amazing services</p>
              </div>
            </div>
            <div className="banner banner--feature">
              <picture>
                <source
                  srcSet="/imgs/theme/icons/icon-3.svg"
                  type="image/webp"
                />
                <img src="/imgs/theme/icons/icon-3.svg" alt="" />
              </picture>
              <div>
                <h5 className="mb-5">Great daily deal</h5>
                <p>When you sign up</p>
              </div>
            </div>
            <div className="banner banner--feature">
              <picture>
                <source
                  srcSet="/imgs/theme/icons/icon-4.svg"
                  type="image/webp"
                />
                <img src="/imgs/theme/icons/icon-4.svg" alt="" />
              </picture>
              <div>
                <h5 className="mb-5">Wide assortment</h5>
                <p>Mega Discounts</p>
              </div>
            </div>
            <div className="banner banner--feature">
              <picture>
                <source
                  srcSet="/imgs/theme/icons/icon-5.svg"
                  type="image/webp"
                />
                <img src="/imgs/theme/icons/icon-5.svg" alt="" />
              </picture>
              <div>
                <h5 className="mb-5">Easy returns</h5>
                <p>Within 30 days</p>
              </div>
            </div>
            <div
              className="banner banner--feature show-900"
              style={{ display: 'none' }}
            >
              <picture>
                <source
                  srcSet="/imgs/theme/icons/icon-6.svg"
                  type="image/webp"
                />
                <img src="/imgs/theme/icons/icon-6.svg" alt="" />
              </picture>
              <div>
                <h5 className="mb-5">Safe delivery</h5>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-links">
        <div className="container">
          <div className="footer-links__wrap">
            <div className="footer-links__column">
              <div className="mb-15">
                <Link href="/">
                  <a>
                    <picture>
                      <source srcSet="/imgs/theme/logo.svg" type="image/webp" />
                      <img src="/imgs/theme/logo.svg" alt="Logo" />
                    </picture>
                  </a>
                </Link>
              </div>
              <p className="mb-30">Awesome grocery store website template</p>
              <ul>
                <li>
                  <picture>
                    <source
                      srcSet="/imgs/theme/icons/icon-location.svg"
                      type="image/webp"
                    />
                    <img
                      src="/imgs/theme/icons/icon-location.svg"
                      className="footer-links__icon"
                      alt=""
                    />
                  </picture>
                  <strong>Address: </strong>
                  <span>
                    5171 W Campbell Ave Kent, Utah 53127 United States
                  </span>
                </li>
                <li>
                  <picture>
                    <source
                      srcSet="/imgs/theme/icons/icon-contact.svg"
                      type="image/webp"
                    />
                    <img
                      src="/imgs/theme/icons/icon-contact.svg"
                      className="footer-links__icon"
                      alt=""
                    />
                  </picture>
                  <strong>Call Us: </strong>
                  <span>(+91) - 540-025-124553</span>
                </li>
                <li>
                  <picture>
                    <source
                      srcSet="/imgs/theme/icons/icon-email-2.svg"
                      type="image/webp"
                    />
                    <img
                      src="/imgs/theme/icons/icon-email-2.svg"
                      className="footer-links__icon"
                      alt=""
                    />
                  </picture>
                  <strong>Email: </strong>
                  <span>sale@Nest.com</span>
                </li>
                <li>
                  <picture>
                    <source
                      srcSet="/imgs/theme/icons/icon-clock.svg"
                      type="image/webp"
                    />
                    <img
                      src="/imgs/theme/icons/icon-clock.svg"
                      className="footer-links__icon"
                      alt=""
                    />
                  </picture>
                  <strong>Hours: </strong>
                  <span>10:00 - 18:00, Mon - Sat</span>
                </li>
              </ul>
            </div>
            <div className="footer-links__column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Delivery Information</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Terms &amp; Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Support Center</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Careers</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links__column">
              <h4>Account</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>Sign In</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>View Cart</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>My Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Track My Order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Help Ticket</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Shipping Details</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Compare products</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links__column">
              <h4>Corporate</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>Become a Vendor</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Affiliate Program</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Farm Business</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Farm Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Our Suppliers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Accessibility</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Promotions</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links__column">
              <h4>Popular</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>Milk &amp; Flavoured Milk</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Butter and Margarine</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Eggs Substitutes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Marmalades</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Sour Cream and Dips</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Tea &amp; Kombucha</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Cheese</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links__column">
              <h4>Install App</h4>
              <p>From App Store or Google Play</p>
              <div className="footer-links__download">
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/theme/app-store.jpg"
                        type="image/webp"
                      />
                      <img src="/imgs/theme/app-store.jpg" alt="Download app" />
                    </picture>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <picture>
                      <source
                        srcSet="/imgs/theme/google-play.jpg"
                        type="image/webp"
                      />
                      <img
                        src="/imgs/theme/google-play.jpg"
                        alt="Download app"
                      />
                    </picture>
                  </a>
                </Link>
              </div>
              <p className="mb-20">Secured Payment Gateways</p>
              <picture>
                <source
                  srcSet="/imgs/theme/payment-method.png"
                  type="image/webp"
                />
                <img
                  src="/imgs/theme/payment-method.png"
                  alt="Payment methods"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-bottom animate" data-animation-name="fadeInUp">
        <div className="container">
          <div className="footer-bottom__wrap">
            <div>
              <p>
                &copy; 2021, <strong>Nest</strong> - HTML Ecommerce Template
                <br />
                All rights reserved
              </p>
            </div>
            <div className="hide-800">
              <div className="hotline mr-30">
                <div className="hotline__icon hotline__icon--footer">
                  <Image
                    src="/imgs/theme/icons/phone-call.svg"
                    layout="responsive"
                    width={30}
                    height={38}
                    aria-hidden="true"
                    alt=""
                  />
                </div>
                <div className="hotline__text">
                  <p className="hotline__number">1900 - 666</p>
                  <p className="hotline__support">Working 8:00 - 22:00</p>
                </div>
              </div>
              <div className="hotline">
                <div className="hotline__icon hotline__icon--footer">
                  <Image
                    src="/imgs/theme/icons/phone-call.svg"
                    layout="responsive"
                    width={30}
                    height={38}
                    aria-hidden="true"
                    alt=""
                  />
                </div>
                <div className="hotline__text">
                  <p className="hotline__number">1900 - 888</p>
                  <p className="hotline__support">24/7 Support Center</p>
                </div>
              </div>
            </div>
            <div className="hide-500">
              <div className="social">
                <h6>Follow Us</h6>
                <div className="social__links">
                  <Link href="/">
                    <a className="social__btn">
                      <div className="social__icon">
                        <Image
                          src="/imgs/theme/icons/icon-facebook-white.svg"
                          layout="responsive"
                          width={16}
                          height={16}
                          alt="Facebook"
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="social__btn">
                      <div className="social__icon">
                        <Image
                          src="/imgs/theme/icons/icon-twitter-white.svg"
                          layout="responsive"
                          width={16}
                          height={16}
                          alt="Twitter"
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="social__btn">
                      <div className="social__icon">
                        <Image
                          src="/imgs/theme/icons/icon-instagram-white.svg"
                          layout="responsive"
                          width={16}
                          height={16}
                          alt="Instagram"
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="social__btn">
                      <div className="social__icon">
                        <Image
                          src="/imgs/theme/icons/icon-pinterest-white.svg"
                          layout="responsive"
                          width={16}
                          height={16}
                          alt="Pinterest"
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="social__btn">
                      <div className="social__icon">
                        <Image
                          src="/imgs/theme/icons/icon-youtube-white.svg"
                          layout="responsive"
                          width={16}
                          height={16}
                          alt="Youtube"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <p>Up to 15% discount on your first subscribe</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default MainFooter;
