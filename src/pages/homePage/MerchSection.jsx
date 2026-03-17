import styles from "./MerchSection.css";
import ImgGrid from "./merchGrid/ImgGrid";

const MerchSection = () => {
  return (
    <section>
      <div className="title">
        <h2>Exclusive Merch</h2>
        <p>ONLY HERE ! OPHK CRUISE EDITION</p>
      </div>
      <ImgGrid />
    </section>
  );
};

export default MerchSection;
