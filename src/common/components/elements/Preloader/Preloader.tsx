import styles from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div
      className={`${styles.preloader} hidden`}
      style={{ transition: 'all 0.6s ease 0s' }}
    >
      <picture>
        <source srcSet="/imgs/theme/loading.gif" type="image/webp" />
        <img src="/imgs/theme/loading.gif" alt="" />
      </picture>
    </div>
  );
};

export default Preloader;
