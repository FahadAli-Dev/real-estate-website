import { BiMenuAltRight } from "react-icons/bi";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  let [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="h-wrapper">
      <nav className="h-container">
        <img src="logo.png" alt="logo" width={100} />
        <div
          className="menu-icon"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <BiMenuAltRight size={30} color="white" />
        </div>

        <div className={`menu ${openMenu ? "showMenu" : ""}`}>
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Get Started</a>
          <button>Contact Us</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
