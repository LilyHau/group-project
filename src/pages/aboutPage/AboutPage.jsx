import React from "react";
import Abouthero from "./Abouthero";
import Ourstory from "./Ourstory/Ourstory";
import Whycruise from "./Whycruise/Whycruise";
import Whycruiseinfo from "./Whycruiseinfo";

const AboutPage = () => {
  return (
    <div
      style={{ backgroundColor: "#edfaff", minHeight: "100vh", width: "100%" }}
    >
      <Abouthero />
      <Whycruise />
      <Whycruiseinfo />
      <Ourstory />
    </div>
  );
};

export default AboutPage;
