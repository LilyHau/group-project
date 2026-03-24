import Image from "../../assets/Whycruise/SPECIALOFFER.webp";
import { Link } from "react-router-dom";
const Abouthero = () => {
  return (
    // Added return here
    <div>
      <Link to="/cruises"><img src={Image} alt="Special Offer" style={{ width: "100%" }} /></Link>
    </div>
  );
};

export default Abouthero;
