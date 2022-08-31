import { ReactElement } from 'react';

import Subscriber from '@/elements/Subscriber';
import styles from './HeroSlide.module.scss';

type Props = {
  heading: string | ReactElement;
  description: string;
  background: string;
};

const HeroSlide = (props: Props) => {
  return (
    <div
      className={styles['hero-slide']}
      style={{
        backgroundImage: `url('/imgs/slider/${props.background}')`,
      }}
    >
      <h1 className={styles['hero-slide__heading']}>{props.heading}</h1>
      <p className={styles['hero-slide__desc']}>{props.description}</p>
      <Subscriber />
    </div>
  );
};

export default HeroSlide;
