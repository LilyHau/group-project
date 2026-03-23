import React from "react";
import styles from "./Activities.module.css";

// Asset imports (replace with your paths)
import RollerCoaster from "../../assets/OnboardThrills/roller.webp";
import Divers from "../../assets/OnboardThrills/coral.webp";
import Turtle from "../../assets/OnboardThrills/turtle.png";

const Onboardactivities = () => {
  return (
    <section className={styles.activitiesSection}>
      {/* Decorative background blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <h2 className={styles.sectionTitle}>
        Onboard <span className={styles.highlight}>Activities</span>
      </h2>

      <div className={styles.gridContainer}>
        {/* Left Column: Tall Image */}
        <div className={styles.tallImageCard}>
          <img src={RollerCoaster} alt="Roller Coaster" />
        </div>

        {/* Middle Column: Text for Roller Coaster */}
        <div className={styles.textColumn}>
          <h3 className={styles.blueSubtitle}>
            On-Board
            <br />
            Roller
            <br />
            Coaster
          </h3>
        </div>

        {/* Right Column: Conservation Content */}
        <div className={styles.conservationColumn}>
          <div className={styles.conservationHeader}>
            <img src={Divers} alt="Divers" className={styles.diversImg} />
            <h3 className={styles.sideTitle}>
              CONSERVAT
              <br />
              ION & IMPACT
            </h3>
          </div>

          <div className={styles.turtleContainer}>
            <img
              src={Turtle}
              alt="Turtle Rescue"
              className={styles.turtleImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboardactivities;
