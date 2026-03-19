import { Link } from "react-router-dom";
import Image from "../../assets/Cruises/cruisesum.png";
import Image1 from "../../assets/Cruises/OE.PNG";
import Image2 from "../../assets/Cruises/SD.PNG";
import Image3 from "../../assets/Cruises/SG.PNG";
import Line from "../../assets/Cruises/Line.png";
import Accommodations from "../ourCruisesPage/Accommodations";
import styles from "./OurCruisesPage.module.css"

const OurCruisesPage = () => {

  return (
    <div>
      <div  className={styles.heroContainer}>
        {/* 1. Main Hero Image */}
        <img
          src={Image}
          className={styles.heroImage}
          alt="Cruise Hero"
        />

        {/* 2. Join Now Button - Exactly Centred */}
        <button
        className={styles.joinButton}
        >
          Join Now
        </button>

        {/* 3. Bottom Images - Centred horizontally at the bottom of the hero */}
        <div
        className={styles.thumbWrapper}
        >
          {/* Item 1 */}
          <div
          className={styles.thumbItem}
          >
            <Link to="/OCEANEXPLORER">
              <img src={Image1} className={styles.thumbImage} alt="Ocean Explorer" />
              <p className={styles.thumbText}>
                Ocean Explorer
              </p>
            </Link>
          </div>

          {/* Item 2 */}
          <div
          className={styles.thumbItem}>
            <Link to="/SEAGUARDIAN">
              <img src={Image3} className={styles.thumbImage} alt="Sea Guardian" />
              <p className={styles.thumbText}>
                Sea Guardian
              </p>
            </Link>
          </div>

          {/* Item 3 */}
          <div
          className={styles.thumbItem}>
            <Link to="/SERENITYDREAM">
              <img src={Image2} className={styles.thumbImage} alt="Serenity Dream" />
              <p
              className={styles.thumbText}>
                Serenity Dream
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
        className={styles.dividerLine}
        src={Line} alt="" />
      </div>
      <Accommodations />
    </div>
  );
};

export default OurCruisesPage;
