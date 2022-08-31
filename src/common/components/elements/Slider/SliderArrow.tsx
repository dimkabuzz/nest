import styles from './SliderArrow.module.scss';

type Props = {
  variant: 'hero' | 'tab';
  position: 'left' | 'right';
};

const SliderArrow = ({ variant, position }: Props) => {
  return (
    <button
      className={`${styles.slider__arrow} ${
        styles[`slider__arrow--${variant}`]
      }`}
      data-position={position}
    >
      <i className={`fi-rs-angle-${position}`}></i>
    </button>
  );
};

export default SliderArrow;
