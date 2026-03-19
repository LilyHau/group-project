import Image from "../../assets/homePage/swimming_fish.gif";
import styles from "./RunningText.module.css";

const RunningText = ({
  text = "Connect People With Nature",
  text1 = "讓你我融入大自然",
  imgUrl = Image,
  speed = 15,
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.movingTrack}
      style={{ animationDuration: `${speed}s` }}
      >
        <div className={styles.textGroup}>
          <span className={styles.mainText}>
            {text}
            </span>
          <span className={styles.subText}>
            {text1}
            </span>
        </div>
        <img className={styles.image}
          src={imgUrl}
          alt="icon"/>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <RunningText
      text="Connect People With Nature"
      text1="讓你我融入大自然"
      imgUrl={Image}
      speed={12}
    />
  );
}
