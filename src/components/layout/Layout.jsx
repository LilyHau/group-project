import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import RunningText from "../footer/RunningText";
import Footer from "../footer/Footer";

const Layout = ({ cartItems }) => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Navbar cartItems={cartItems} />
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/cruises">Our Cruises</a>
          <a href="/onboard">OnboardThrills</a>
          <a href="/exclusive">ExclusiveMerch</a>
          <a href="/FAQSection">FAQSection</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <RunningText />
        <Footer />
        <p>© 2026 Ocean Park</p>
      </footer>
    </>
  );
};

export default Layout;
