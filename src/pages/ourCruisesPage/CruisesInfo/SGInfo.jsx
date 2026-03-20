import styles from "./SGInfo.module.css";
import Overview from "../../../components/CruisesInfo/Overview";
import {sgOverview} from "../../../../data.js";
import Inclusion from "../../../components/CruisesInfo/Inclusion.jsx";
import {sgInclusion} from "../../../../data.js";
import Itinerary  from "../../../components/CruisesInfo/Itinerary";
import {sgItinerary} from "../../../../data.js";
import Details from "../../../components/CruisesInfo/Details.jsx";
import {sgDetails} from "../../../../data.js";
import { Link } from "react-router-dom";

const SGInfo = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.ovalEffect}>
          <h1>SEA GUARDIAN</h1>
          <h2>海洋保育號</h2>
          <p>A Covenant of Coexistence Between Humans and the Sea</p>
        </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <section className={styles.overview}>
          <Overview {...sgOverview} key={sgOverview.id}/>
          <Link to="/CruiseBookingPageOE"><a>JOIN NOW</a></Link>
        </section>
        <section className={styles.inclusion}>
          <h2>What's Included in the Price of an Sea Guardian Cruise</h2>
          {sgInclusion.map((item) => (
          <Inclusion key={item.id} point={item.point}
          />
        ))}
        </section>
        <section className={styles.itinerary}>
          <h2>Cruise Itinerary</h2>
          <Itinerary ship={sgItinerary}/>
        </section>
        <section className={styles.details}>
          <Details ship={sgDetails}/>
        </section>
      </div>
      <div className={styles.disclaimer}>
        <p>For assistance with your Sea Guardian Cruise, please call +852 3923 2323</p>
        <p>Monday through Friday: 9:00 AM to 6:00 PM Hong Kong Time; Saturday and Sunday: 10:00 AM to 5:00 PM Hong Kong Time</p>
        <p>Guests under 18 years of age must have parent or guardian permission to call.</p>
      </div>
    </div>
  )
}

export default SGInfo