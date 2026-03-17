import { Link } from "react-router-dom";
import OEimage from "../../../assets/SERENITYDREAM/SDpagehead.png";
import Imagea from "../../../assets/Cruises/OE.PNG";
import Imageb from "../../../assets/Cruises/SD.PNG";
import Imagec from "../../../assets/Cruises/SG.PNG";
import SDsum from "../../../assets/SERENITYDREAM/SD2.jpg";
import SDsum1 from "../../../assets/SERENITYDREAM/SDsum1.png";
import SDsum2 from "../../../assets/SERENITYDREAM/SDsum2.png";
import SDfooter from "../../../assets/SERENITYDREAM/SDfooter.png";

const SERENITYDREAM = () => {
  const thumbStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
    padding: "-5px",
  };
  const btnStyle = (bg) => ({
    padding: "27px 55px",
    marginTop: "100px",
    fontSize: "30px",
    backgroundColor: bg,
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "0.3s",
  });

  const thumbStyle1 = {
    width: "130px",
    height: "130px",
    objectFit: "contain",

    padding: "5px",
  };
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Hero Image */}
      <div style={{ width: "100%" }}>
        <img
          src={OEimage}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            minHeight: "400px", // Ensures section doesn't collapse if image loads slowly
            objectFit: "cover",
          }}
          alt="Ocean Explorer"
        />
      </div>

      {/* Join Now Button */}
      <div>
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            marginTop: "-450px", // 1. Moves the entire block up by 400px
            color: "white",
            zIndex: 10,
            fontFamily: "sans-serif",
          }}
        >
          {/* Buttons Row */}
          <div
            style={{
              display: "flex",
              gap: "40px", // 2. Increased gap for the zoom look
              marginBottom: "80px",
            }}
          >
            <button
              style={btnStyle("#d28d8d")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d28d76")} // Darker shade for Join Now
              onMouseOut={(e) => (e.target.style.backgroundColor = "#d28d8d")}
            >
              JOIN NOW
            </button>
            <button
              style={btnStyle("#f7d77e")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d28d8d")} // Darker shade for More Info
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f7d77e")}
            >
              MORE INFO
            </button>
          </div>
        </div>
        {/* Thumbs container */}
        <div
          style={{
            position: "absolute",
            bottom: "85%", // FIX 4: Used bottom instead of top 60% for better scaling
            left: "10%",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link to="/Cruises/OCEANEXPLORER">
            <img src={Imagea} style={thumbStyle1} alt="OE" />
          </Link>
          <Link to="/Cruises/SEAGUARDIAN">
            <img src={Imagec} style={thumbStyle1} alt="SG" />
          </Link>
          <Link to="/Cruises/SERENITYDREAM">
            <img src={Imageb} style={thumbStyle} alt="SD" />
          </Link>
        </div>
      </div>

      <div
        style={{
          minHeight: "1100px",
          backgroundColor: "#f7d77e",
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers the header and content block
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              color: "Black",
              fontSize: "85px",
              fontFamily: "'Irish Grover', cursive",
              margin: "0",
              display: "inline-block",
              borderBottom: "2px solid rgb(0, 0, 0)", // The underline from your image
              paddingBottom: "20px",
            }}
          >
            Experience the Serenity Dream Difference
          </h2>
        </div>

        {/* Content Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // Vertically centers image and text
            gap: "60px", // Professional spacing between image and text
            maxWidth: "1700px",
          }}
        >
          {/* Image Container */}
          <div style={{ flex: "0 0 441px" }}>
            <img
              src={SDsum}
              alt="Diver underwater"
              style={{
                width: "441px", // Fixed width
                height: "541px", // Fixed height
                objectFit: "cover", // 1. Prevents stretching, crops to fit instead
                borderRadius: "40px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                display: "block", // 2. Removes any small gap below the image
              }}
            />
          </div>

          {/* Text Container */}
          <div style={{ color: "black" }}>
            <p
              style={{
                fontSize: "30px",
                lineHeight: "1.8", // Matches the spacious text in the screenshot
                fontWeight: "1200px",
                textAlign: "left",
              }}
            >
              Escape the chaos of everyday life and sail into tranquility aboard
              the SERENITY DREAM—the family-friendly cruise designed for slow,
              sunny days and peaceful nights by the sea. This idyllic vessel is
              a haven for those who crave connection: whether you’re dining in
              the one-of-a-kind underwater restaurant, watching tropical fish
              glide past as you savor local gourmet fare, stargazing under a
              blanket of stars with guided astronomy sessions, or building
              sandcastles on secluded, crowd-free beaches. For kids, there are
              gentle snorkeling lessons and marine-themed craft workshops; for
              adults, quiet lounges with sea views and sunset beach bonfires
              with local folk music. Here, the pace slows down, the ocean takes
              center stage, and every moment is a chance to create warm, lasting
              memories with the ones you love.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={SDsum1} style={{ width: "100%" }} alt="" />
      </div>
      <div>
        <img src={SDsum2} style={{ width: "100%" }} alt="" />
      </div>
      <div>
        <img src={SDfooter} style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
};

export default SERENITYDREAM;
