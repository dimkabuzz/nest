import styles from './Subscriber.module.scss';

const Subscriber = () => {
  return (
    <form className={styles.subscriber}>
      <input
        type="email"
        className={styles.subscriber__input}
        placeholder="Your emaill address"
      />
      <button className="btn btn--subscribe" type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default Subscriber;
