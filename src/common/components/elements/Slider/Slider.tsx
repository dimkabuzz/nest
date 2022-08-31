import SliderArrow from './SliderArrow';
import styles from './Slider.module.scss';
import heroStyles from '@/elements/Hero/HeroSlide.module.scss';

type Props = {
  variant: 'hero' | 'tab';
};

const Slider = ({ variant }: Props) => {
  const heroClass = variant === 'hero' ? heroStyles['hero-slide__arrows'] : '';

  return (
    <div className={`${heroClass} ${styles.slider__arrows}`}>
      <SliderArrow variant={variant} position="left" />
      <SliderArrow variant={variant} position="right" />
    </div>
  );
};

export default Slider;
