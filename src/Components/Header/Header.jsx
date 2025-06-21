import { BiMenuAltRight } from "react-icons/bi";
import "./Header.css";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";

const Header = () => {
  let [openMenu, setOpenMenu] = useState(false);
  let [headerVisible, setHeaderVisibel] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      setHeaderVisibel(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`h-wrapper ${headerVisible ? "sticky-active" : ""}`}>
      <nav className="h-container">
        <img
          src="/logo.png"
          alt="logo"
          width={100}
          style={{ position: "relative", zIndex: 1 }}
        />

        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenMenu(false);
          }}
        >
          <div className={`menu ${openMenu ? "showMenu" : ""}`}>
            <Link to="residencies" smooth={true} duration={500}>
              Residencies
            </Link>
            <Link to="values" smooth={true} duration={600}>
              Our Values
            </Link>
            <Link to="getStarted" smooth={true} duration={800}>
              Get Started
            </Link>
            <Link to="contact" smooth={true} duration={700}>
              <button className="btn">Contact Us</button>
            </Link>
          </div>

          <div
            className="menu-icon"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <BiMenuAltRight size={30} color="white" />
          </div>
        </OutsideClickHandler>
      </nav>
    </header>
  );
};

export default Header;
