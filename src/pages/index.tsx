import type { NextPage } from 'next';
import { Fragment } from 'react';

import Metadata from '@/layouts/Metadata';
import Hero from '@/elements/Hero';
import Featured from '@/elements/Featured';
import Banners from '@/elements/Banners';
import Populars from '@/elements/Populars';
import Bestsells from '@/elements/Bestsells';
import Deals from '@/elements/Deals';
import Toplists from '@/elements/Toplists';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Metadata
        title="Nestt"
        description="Multipurpose eCommerce Template powered by NextJS"
      />
      <Hero />
      <Featured />
      <Banners />
      <Populars />
      <Bestsells />
      <Deals />
      <Toplists />
    </Fragment>
  );
};

export default Home;
