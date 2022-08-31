import { Fragment } from 'react';

import MainHeader from '@/elements/MainHeader';
import MainFooter from '@/elements/MainFooter';
import Overlay from '@/elements/Overlay';
import Preloader from '@/elements/Preloader';

type Props = {
  children?: React.ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <Fragment>
      <Overlay />
      <Preloader />
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </Fragment>
  );
};

export default Default;
