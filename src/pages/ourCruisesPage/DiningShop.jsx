import React from "react";
import styles from "./Dining.module.css";

// Replace with your actual image paths
import RestaurantImg from "../../assets/Whycruise/Rectangle40.png";
import CafeImg from "../../assets/Whycruise/Rectangle39.png";
import ShopImg from "../../assets/Whycruise/Rectangle41.png";

const DiningShop = () => {
  const categories = [
    { title: "Restaurant", img: RestaurantImg },
    { title: "Cafe", img: CafeImg },
    { title: "Shop", img: ShopImg },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>
        Dining & <span className={styles.highlight}>Shop</span>
      </h2>

      <div className={styles.cardWrapper}>
        {categories.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.cardImg} />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiningShop;
