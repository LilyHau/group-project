import React from "react";

// Updated Card Style: Removed white background and shadow to match image
const cardStyle = {
  flex: "1",
  minWidth: "250px",
  maxWidth: "350px",
  padding: "10px",
  backgroundColor: "transparent", // Matches the light blue background
  textAlign: "left",
};

const Whycruiseinfo = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "2300px",
        margin: "0 auto",
        padding: "80px 40px",
        backgroundColor: "#EDFAFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Header Section */}
      <div style={{ textAlign: "center", width: "100%", marginBottom: "60px" }}>
        <h1
          style={{
            fontFamily: '"Joti One", cursive',
            fontSize: "clamp(40px, 6vw, 70px)",
            margin: "0",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <span style={{ color: "#0077b6" }}>MORE</span>
          <span style={{ fontWeight: "300", fontSize: "0.7em", color: "#333" }}>
            than just sailing ship
          </span>
        </h1>

        <div style={{ maxWidth: "700px", margin: "40px auto 0 auto" }}>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              color: "#444",
            }}
          >
            “ We’re crafting voyages that blend adventure, purpose, and
            relaxation into one unforgettable experience, rooted in three core
            promises that set us apart ! ”
          </p>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <div style={cardStyle}>
          <h4 style={{ fontWeight: "bold", marginBottom: "15px" }}>
            No Compromise: Adventure and <br /> Sustainability Go Hand in Hand
          </h4>
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.5" }}>
            We don’t just talk about protecting the ocean—we live it. Our ships
            run on low-emission fuel, our shore excursions use plastic-free
            beaches.
          </p>
        </div>

        <div style={cardStyle}>
          <h4 style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Connect People With Nature
          </h4>
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.5" }}>
            Unlike generic cruise lines, every vessel in our fleet is designed
            for a specific way to engage with the sea—so you never have to
            choose between thrill, impact, or calm.
          </p>
        </div>

        <div style={cardStyle}>
          <h4 style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Small Groups, Big Connections—
            <br />
            With the Ocean and Each Other
          </h4>
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.5" }}>
            We keep our guest numbers small so you can skip the crowds and savor
            every moment: expert-led dives with max 15 people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whycruiseinfo;
