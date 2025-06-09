import "./Header.css";

const Header = () => {
  return (
    <header className="h-wrapper">
      <nav className="h-container">
        <img src="logo.png" alt="logo" width={100} />
        <div className="menu">
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
