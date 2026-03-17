import { Link } from "react-router-dom";
import OEimage from "../../../assets/SEAGUARDIAN/SGpagehead.png";
import Imagea from "../../../assets/Cruises/OE.PNG";
import Imageb from "../../../assets/Cruises/SD.PNG";
import Imagec from "../../../assets/Cruises/SG.PNG";
// FIX 1: Ensure SEsum is imported
import SG2 from "../../../assets/SEAGUARDIAN/SG2.jpg";
import SGsum from "../../../assets/SEAGUARDIAN/SGsum.png";
import SGicon from "../../../assets/SEAGUARDIAN/SGicon.png";
import SGimga from "../../../assets/SEAGUARDIAN/SGR3.jpg";
import SGimgb from "../../../assets/SEAGUARDIAN/SGR2.jpg";
import SGimgc from "../../../assets/SEAGUARDIAN/SGR1.jpg";
import SGfooter from "../../../assets/SEAGUARDIAN/SGfooter.png";

const SEAGUARDIAN = () => {
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
    <div style={{ width: "100%", backgroundColor: "#c0dfb1" }}>
      {/* SECTION 1: Hero Area */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <img
          src={OEimage}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            minHeight: "400px",
            objectFit: "cover",
          }}
          alt="Sea Guardian"
        />

        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            marginTop: "410px", // 1. Moves the entire block up by 400px
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
              style={btnStyle("#4caf50")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4caf42")} // Darker shade for Join Now
              onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
            >
              JOIN NOW
            </button>
            <button
              style={btnStyle("#c0dfb1")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4caf50")} // Darker shade for More Info
              onMouseOut={(e) => (e.target.style.backgroundColor = "#c0dfb1")}
            >
              MORE INFO
            </button>
          </div>
          {/* Logos Row */}
          {/* <div style={{ display: "flex", gap: "30px", alignItems: "center" }}> */}
          {/* <Link to="/Cruises/OCEANEXPLORER">
              <img
                src={Imagea}
                style={{
                  ...thumbStyle1,
                  width: "150px", // 3. Set image width
                  height: "150px", // 4. Set image height
                  border: "4px solid black",
                  backgroundColor: "white",
                }}
                alt="OE"
              />
            </Link> */}
          {/* <Link to="/Cruises/SEAGUARDIAN">
              <img
                src={Imagec}
                style={{ ...thumbStyle, width: "150px", height: "150px" }}
                alt="SG"
              />
            </Link> */}
          {/* <Link to="/Cruises/SERENITYDREAM">
              <img
                src={Imageb}
                style={{ ...thumbStyle, width: "150px", height: "150px" }}
                alt="SD"
              />
            </Link> */}
          {/* </div> */}
        </div>
        {/* Thumbs container */}
        <div
          style={{
            position: "absolute",
            bottom: "24%", // FIX 4: Used bottom instead of top 60% for better scaling
            left: "10%",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link to="/Cruises/OCEANEXPLORER">
            <img src={Imagea} style={thumbStyle1} alt="OE" />
          </Link>
          <Link to="/Cruises/SEAGUARDIAN">
            <img src={Imagec} style={thumbStyle} alt="SG" />
          </Link>
          <Link to="/Cruises/SERENITYDREAM">
            <img src={Imageb} style={thumbStyle1} alt="SD" />
          </Link>
        </div>
      </div>

      {/* SECTION 2: Difference Section */}
      <div
        style={{
          minHeight: "1100px",
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              color: "#000000",
              fontSize: "clamp(40px, 6vw, 85px)",
              fontFamily: "'Irish Grover', cursive",
              margin: "0",
              display: "inline-block",
              borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
              paddingBottom: "20px",
            }}
          >
            Experience the Sea Guardian Difference
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "60px",
            maxWidth: "1700px",
            flexWrap: "wrap", // Added for responsiveness
            justifyContent: "center",
          }}
        >
          <div style={{ flex: "0 0 auto" }}>
            <img
              src={SG2}
              alt="Diver"
              style={{
                width: "441px",
                height: "541px",
                objectFit: "cover",
                borderRadius: "40px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            />
          </div>

          <div style={{ color: "#000000", flex: "1", minWidth: "300px" }}>
            <p
              style={{ fontSize: "30px", lineHeight: "1.8", textAlign: "left" }}
            >
              Turn your vacation into a mission of hope aboard the SEA
              GUARDIAN—the volunteer-focused conservation cruise where every
              passenger becomes an ocean hero. More than a journey, this
              floating conservation hub invites you to roll up your sleeves and
              make a tangible impact: plant coral fragments to restore degraded
              reefs, assist in sea turtle nesting surveys and hatchling
              releases, and join coastal and underwater cleanup drives to rid
              our oceans of harmful debris—all guided by leading marine
              biologists and conservation experts. Alongside like-minded
              eco-warriors, you’ll attend eye-opening workshops, witness the
              fruits of your labor on before-and-after reef tours, and leave
              with not just memories, but the pride of knowing you’ve helped
              protect the planet’s most precious ecosystem for generations to
              come.
            </p>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* The Background Image */}
        <img
          style={{
            width: "100%",
            display: "block",
            minHeight: "600px",
            objectFit: "cover",
          }}
          src={SGsum}
          alt="Underwater Exploration"
        />
      </div>
      <div
        style={{
          backgroundColor: "#c0dfb1",
          padding: "140px 80px", // 200% Padding
          color: "Black",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header Section */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px", // 200% Gap
              // 200% Border thickness
              paddingBottom: "20px",
              marginBottom: "60px",
              maxWidth: "fit-content",
              margin: "0 auto 60px auto",
            }}
          >
            <img
              src={SGicon}
              alt="Icon"
              style={{ width: "200px", height: "auto" }} // 200% Icon size
            />
            <h1
              style={{
                color: "black",
                fontSize: "130px", // 200% Font size
                margin: 0,
                fontFamily: "sans-serif",
              }}
            >
              Sustainable, Purpose-Driven Dining
            </h1>
          </div>

          <p
            style={{
              fontSize: "36px",
              opacity: 0.9,
              marginBottom: "80px",
              textAlign: "left",
              padding: "15px",
            }}
          >
            {" "}
            {/* 200% Font size */}
            Indulge in eco-conscious fare at three mission-aligned venues:
          </p>
        </div>
        {/* Cards Grid Container */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            gap: "60px", // 200% Gap
            flexWrap: "wrap",
            maxWidth: "2400px", // 200% Container width
            margin: "0 auto",
          }}
        >
          {/* Floating Badge (Moved Further Right) */}
          <div
            style={{
              position: "absolute",
              top: "-170px", // Adjusted for zoom
              right: "-50px", // Moved further right
              maxWidth: "360px", // 200% Width
              transform: "rotate(15deg)",
              textAlign: "right",
              fontSize: "28px", // 200% Font size
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            Every meal honors the ocean—no single-use plastics, no overfished
            species, just delicious, purposeful dining.
          </div>

          {/* Reusable Card Style with 200% specs */}
          {[
            {
              img: SGimga,
              title: "Reef & Root",
              desc: "100% plant-forward and sustainable seafood dishes, using on-board herb garden greens, with compostable tableware",
            },
            {
              img: SGimgb,
              title: "Guardian Grind",
              desc: "Fair-trade coffee, vegan pastries, and “Volunteer Fuel Packs” for beach cleanups",
            },
            {
              img: SGimgc,
              title: "Coral Commons",
              desc: "A communal lounge for herbal teas and local vegan desserts, hosting conservation debriefs",
            },
          ].map((card, i) => (
            <div key={i} style={{ width: "700px", textAlign: "left" }}>
              {" "}
              {/* 200% Width */}
              <img
                src={card.img}
                style={{
                  width: "100%",
                  height: "440px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }} // 200% Height
                alt={card.title}
              />
              <h2 style={{ fontSize: "48px", margin: "40px 0 20px" }}>
                {card.title}
              </h2>{" "}
              {/* 200% spacing/font */}
              <p style={{ fontSize: "30px", lineHeight: "1.5", opacity: 0.8 }}>
                {card.desc}
              </p>{" "}
              {/* 200% font */}
            </div>
          ))}
        </div>
        {/* Footer Links */}
        <div style={{ marginTop: "150px" }}>
          <p
            style={{
              fontSize: "40px",
              fontStyle: "italic",
              marginBottom: "20px",
              display: "inline-block",
            }}
          >
            {" "}
            {/* 200% specs */}
            And more...
          </p>
          <p
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "32px",
              textAlign: "right",
              color: "#877E7E",
              position: "relative", // Required for 'right' to work
              right: "-920px",
            }}
          >
            [Explore Diving-Focused Menus]
          </p>
        </div>
      </div>
      <div>
        <img src={SGfooter} style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
};

export default SEAGUARDIAN;
