import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';

import MainHeader from '@/elements/MainHeader';
import Hero from '@/elements/Hero';
import Featured from '@/elements/Featured';
import Banners from '@/elements/Banners';
import Populars from '@/elements/Populars';
import Bestsells from '@/elements/Bestsells';
import Deals from '@/elements/Deals';
import Toplists from '@/elements/Toplists';
import MainFooter from '@/elements/MainFooter';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Nest</title>
        <meta
          name="description"
          content="Multipurpose eCommerce Template powered by NextJS "
        />
        <link rel="icon" href="/imgs/theme/favicon.svg" />
      </Head>
      <div className="overlay"></div>
      <div
        className="preloader hidden"
        style={{ transition: 'all 0.6s ease 0s' }}
      >
        <picture>
          <source srcSet="/imgs/theme/loading.gif" type="image/webp" />
          <img src="/imgs/theme/loading.gif" alt="" />
        </picture>
      </div>
      <MainHeader />
      <main>
        <Hero />
        <Featured />
        <Banners />
        <Populars />
        <Bestsells />
        <Deals />
        <Toplists />
      </main>
      <MainFooter />
    </Fragment>
  );
};

export default Home;
