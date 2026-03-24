import React from "react";
import styles from "./Dining.module.css";
// If using React Router, import { Link } from "react-router-dom";

import RestaurantImg from "../../assets/Whycruise/Rectangle40.png";
import CafeImg from "../../assets/Whycruise/Rectangle39.png";
import ShopImg from "../../assets/Whycruise/Rectangle41.png";

const DiningShop = () => {
  const categories = [
    { title: "Restaurant", img: RestaurantImg, link: "/Dining#Café" },
    { title: "Cafe", img: CafeImg, link: "/cafe" },
    { title: "Shop", img: ShopImg, link: "/shop" },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>
        Dining & <span className={styles.highlight}>Shop</span>
      </h2>

      <div className={styles.cardWrapper}>
        {categories.map((item, index) => (
          /* Use <Link to={item.link}> if using React Router */
          <a key={index} href={item.link} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.cardImg} />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DiningShop;
