import Image from "../../assets/homePage/swimming_fish.gif";
import styles from "./RunningText.module.css";

const RunningText = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.movingTrack}
      style={{ animationDuration: `15s` }}
      >
        <div className={styles.textGroup}>
          <span className={styles.mainText}>
            Connect People With Nature
            </span>
          <span className={styles.subText}>
            讓你我融入大自然
            </span>
        </div>
        <img className={styles.image}
          src={Image}
          alt="icon"/>
      </div>
    </div>
  );
};

export default RunningText;
