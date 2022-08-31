import Container from '@/layouts/Container';
import HeroSlide from './HeroSlide';
import Slider from '@/elements/Slider';
import SliderDots from '@/elements/Slider/SliderDots';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__wrap}>
          <HeroSlide
            heading={
              <>
                Dont miss amazing <br /> grocery deals
              </>
            }
            description="Sign up for the daily newsletter"
            background="slider-1.png"
          />

          <HeroSlide
            heading={
              <>
                Fresh Vegetables <br /> Big discount
              </>
            }
            description="Save up to 50% off on your first order"
            background="slider-2.png"
          />

          <Slider variant="hero" />
          <SliderDots />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
