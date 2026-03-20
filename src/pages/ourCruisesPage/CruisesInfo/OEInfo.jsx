import styles from "./OEInfo.module.css";
import Overview from "../../../components/CruisesInfo/Overview";
import {oeOverview} from "../../../../data.js";
import Inclusion from "../../../components/CruisesInfo/Inclusion.jsx";
import {oeInclusion} from "../../../../data.js";
import Itinerary  from "../../../components/CruisesInfo/Itinerary";
import {oeItinerary} from "../../../../data.js";
import Details from "../../../components/CruisesInfo/Details.jsx";
import {oeDetails} from "../../../../data.js";
import { Link } from "react-router-dom";

const OEInfo = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.ovalEffect}>
          <h1>OCEAN EXPLORER</h1>
          <h2>海洋探索號</h2>
          <p>Dive into the Deep, Touch the Abyss</p>
        </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <section className={styles.overview}>
          <Overview {...oeOverview} key={oeOverview.id}/>
          <Link to="/CruiseBookingPageOE"><a>JOIN NOW</a></Link>
        </section>
        <section className={styles.inclusion}>
          <h2>What's Included in the Price of an Ocean Explorer Cruise</h2>
          {oeInclusion.map((item) => (
          <Inclusion key={item.id} point={item.point}
          />
        ))}
        </section>
        <section className={styles.itinerary}>
          <h2>Cruise Itinerary</h2>
          <Itinerary ship={oeItinerary}/>
        </section>
        <section className={styles.details}>
          <Details ship={oeDetails}/>
        </section>
      </div>
      <div className={styles.disclaimer}>
        <p>For assistance with your Ocean Explorer Cruise, please call +852 3923 2323</p>
        <p>Monday through Friday: 9:00 AM to 6:00 PM Hong Kong Time; Saturday and Sunday: 10:00 AM to 5:00 PM Hong Kong Time</p>
        <p>Guests under 18 years of age must have parent or guardian permission to call.</p>
      </div>
    </div>
  )
}

export default OEInfo