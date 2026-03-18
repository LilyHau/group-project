import ImgGrid from "./merchGrid/ImgGrid";
import styles from "./MerchSection.module.css";
import { Link } from "react-router-dom";

const MerchSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Exclusive Merch</h2>
        <p>ONLY HERE ! OPHK CRUISE EDITION</p>
      </div>
      <ImgGrid />
      <a href="">
        <Link to="/shop">shop now</Link>
      </a>
    </section>
  );
};

export default MerchSection;
