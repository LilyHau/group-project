import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import RunningText from "../footer/RunningText";
import Footer from "../footer/Footer";

const Layout = ({ cartItems }) => {
  return (
    <>
      <header>
        <nav>
          <Navbar cartItems={cartItems} />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <RunningText />
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
