import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import oeLogo from "../../assets/Cruises/OE-Logo.png";
import sgLogo from "../../assets/Cruises/SG-Logo.png";
import sdLogo from "../../assets/Cruises/SD-Logo.png";
import { Link, useNavigate } from "react-router-dom";

const sections = [
  {
    title: "Booking & Reservation Inquiries",
    content:
      "FOR GENERAL CRUISE BOOKINGS, STATEROOM UPGRADES, OR PRE-CRUISE QUESTIONS:",
    details: [
      "PHONE: +852 3923 2323",
      "EMAIL: BOOKINGS@OCEANPARKCRUISE.COM.HK",
      "RESPONSE TIME: WITHIN 24 BUSINESS HOURS (MONDAY - SUNDAY)",
      "BOOKING HOURS: 9:00 AM - 6:00 PM (HONG KONG TIME) | SATURDAY & SUNDAY: 10:00 AM - 5:00 PM",
    ],
  },
  {
    title: "Onboard Guest Services",
    content:
      "FOR ASSISTANCE DURING YOUR CRUISE (STATEROOM ISSUES, ACTIVITY BOOKINGS, DINING REQUESTS):",
    details: [
      'STATEROOM PHONE: DIAL "0" FOR THE GUEST SERVICES DESK',
      "ONBOARD EMAIL: GUESTSERVICES@OCEANPARKCRUISE.COM.HK (VIA SHIPBOARD WI-FI)",
      "CUSTOMER CARE LINE: +852 3923 2323 (COLLECT CALL AVAILABLE)",
    ],
  },
  {
    title: "Dive Academy & Scientific Support",
    content:
      "FOR PADI CERTIFICATION COURSES, BLUE HOLE EXPLORATION, OR CITIZEN SCIENCE MISSION QUESTIONS:",
    details: [
      "PHONE: +852 3923 2324",
      "EMAIL: DIVEACADEMY@OCEANPARKCRUISE.COM.HK",
      "INSTRUCTORS ONBOARD: AVAILABLE FOR PRE-DIVE BRIEFINGS AND SAFETY CONSULTATIONS",
    ],
  },
  {
    title: "Volunteer World & Conservation",
    content:
      "FOR QUESTIONS ABOUT THE SEA GUARDIAN CRUISE, VOLUNTEER ACTIVITIES, OR CERTIFICATION:",
    details: [
      "PHONE: +852 3923 2325",
      "EMAIL: CONSERVATION@OCEANPARKCRUISE.COM.HK",
      "PARTNER INQUIRIES: FOR VOLUNTEER WORLD COLLABORATION, CONTACT PARTNERSHIPS@VOLUNTEERWORLD.ORG",
    ],
  },
  {
    title: "Corporate & Media Inquiries",
    content:
      "FOR BUSINESS PARTNERSHIPS, PRESS RELEASES, OR BRAND COLLABORATION:",
    details: [
      "EMAIL: CORPORATE@OCEANPARKCRUISE.COM.HK",
      "ADDRESS: OCEAN PARK HK CRUISE LINE HEADQUARTERS, 101 OCEAN PARK ROAD, HONG KONG",
    ],
  },
  {
    title: "Feedback & Complaints",
    content:
      "WE STRIVE TO PROVIDE EXCEPTIONAL SERVICE. IF YOU WISH TO SHARE FEEDBACK OR FILE A COMPLAINT:",
    details: [
      "ONLINE FORM: SUBMIT VIA OUR WEBSITE FEEDBACK PORTAL (BELOW)",
      "EMAIL: FEEDBACK@OCEANPARKCRUISE.COM.HK",
      "RESPONSE COMMITMENT: WE WILL ACKNOWLEDGE YOUR COMPLAINT WITHIN 48 HOURS AND PROVIDE A RESOLUTION WITHIN 7 BUSINESS DAYS.",
    ],
  },
];

const Contact = () => {
  const navigate = useNavigate(); // Hook must be inside the component
  const [hoveredLogo, setHoveredLogo] = useState(null);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Contact Us</h1>
          <p className={styles.subtitle}>
            We have sales representatives who are available to assist customers
            before, during and after the book of our cruise. Customer service
            representatives offer complete cruise line information and ordering
            service. They assist with employee training, consult regarding
            production efficiency, and response to any issues in the application
            of products.
          </p>
        </header>
        <nav className={styles.buttonContainer}>
          <p>Book Now</p>
          <ul>
            <li>
              <Link to="/CruiseBookingPageOE">
                <img src={oeLogo} />
              </Link>
            </li>
            <li>
              <Link to="/SEAGUARDIAN">
                <img src={sgLogo} />
              </Link>
            </li>
            <li>
              <Link to="/SERENITYDREAM">
                <img src={sdLogo} />
              </Link>
            </li>
          </ul>
        </nav>
        {/* Grid of Contact Cards */}
        <div className={styles.contactGrid}>
          {sections.map((item, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <div className={styles.divider}></div>
              <p className={styles.cardContent}>{item.content}</p>
              <ul className={styles.detailsList}>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <h3 className={styles.footerTitle}>Need More Help?</h3>
          <button
            className={styles.ctaButton}
            onClick={() => navigate("/Help")}
          >
            Click here to send us message directly
          </button>
        </footer>

        {/* Map Section */}
        <div className={styles.location}>
          <h2>Our Headquarters Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14772.073523831765!2d114.16144065247951!3d22.239381375683937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3406aa98def2cb65%3A0x8e5233851dfbf1a4!2z5rW35rSL5YWs5ZyS!5e0!3m2!1szh-TW!2shk!4v1774256642152!5m2!1szh-TW!2shk"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
