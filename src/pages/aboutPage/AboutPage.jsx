import React from "react";
import Abouthero from "../../components/Abouthero";
import Ourstory from "../../components/Ourstory/Ourstory";
import Whycruise from "../../components/Whycruise/Whycruise";
import Whycruiseinfo from "../../components/Whycruiseinfo";

const AboutPage = () => {
  return (
    <div>
      <Abouthero />
      <Whycruise />
      <Whycruiseinfo />
      <Ourstory />
    </div>
  );
};

export default AboutPage;
