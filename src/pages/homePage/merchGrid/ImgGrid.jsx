import { useState, useEffect } from "react";
import styles from "./ImgGrid.module.css";

const images = [
  {
    id: "tshirt",
    src: "../src/assets/shopPage/紀念品水手上衣3.jpg",
    alt: "T-shirt",
  },
  {
    id: "turtle",
    src: "../src/assets/shopPage/紀念品水手衣服海龜.jpg",
    alt: "Turtle",
  },
  { id: "cap", src: "../src/assets/shopPage/紀念品水手帽.jpg", alt: "Cap" },
  { id: "coffee", src: "../src/assets/shopPage/紀念品杯.jpg", alt: "Coffee" },
  {
    id: "keychain",
    src: "../src/assets/homePage/海洋公園郵輪限定紀念品鑰匙扣.jpg",
    alt: "Keychain",
  },
  {
    id: "bear",
    src: "../src/assets/shopPage/紀念品水手衣服動物公仔.jpg",
    alt: "Bear",
  },
  {
    id: "ship",
    src: "../src/assets/homePage/海洋公園郵輪限定紀念品冰箱貼.jpg",
    alt: "Cruise Ship",
  },
];

const ImgGrid = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // 當圖片放大時，禁止背景捲動
  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "auto";
  }, [selectedImg]);

  return (
    <div className={styles.container}>
      {/* 網格圖片列表 */}
      <div className={styles.grid}>
        {images.map((img) => (
          <div
            key={img.id}
            className={`${styles.item} ${styles[img.id]}`}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* 放大後的彈窗 (Lightbox) */}
      {selectedImg && (
        <div className={styles.overlay} onClick={() => setSelectedImg(null)}>
          <div className={styles.modal}>
            <img src={selectedImg.src} alt={selectedImg.alt} />
            <span className={styles.close}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgGrid;
