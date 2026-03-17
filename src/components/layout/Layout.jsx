import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import RunningText from "../footer/RunningText";

const Layout = ({cartItems}) => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Navbar cartItems={cartItems}/>
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
        <p>© 2024 Your App</p>
      </footer>
    </>
  );
};

export default Layout;
