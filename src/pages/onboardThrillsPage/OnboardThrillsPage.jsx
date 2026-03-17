import styles from "./OnboardThrillsPage.module.css";

const OnboardThrillsPage = () => {
  return <div>
    <div className={styles.hero}>
      <h1>Onboard Activities</h1>
    </div>
    <div className={styles.info}>
      <div className={styles.infoDescription}>
        <h2>Connect with Nature, Sail into Wonder</h2>
        <p>When you set sail with Ocean Park HK Cruise Line, every voyage is a harmony of adventure, purpose, and relaxation—crafted to deepen your bond with the ocean.</p>
        <p>Whether you’re diving into scientific exploration, giving back through conservation, or unwinding with your loved ones, our three distinct ships offer experiences that let you embrace the sea your way, no compromises needed.</p>
        <ul className={styles.infoLinks}>
          <li><a href="">Find Your Perfect Cruise</a></li>
          <li><a href="">Book Your Voyage Now</a></li>
        </ul>
      </div>
      <div className={styles.infoImage}></div>
    </div>
    <div className="recreation"></div>
  </div>;
};

export default OnboardThrillsPage;
