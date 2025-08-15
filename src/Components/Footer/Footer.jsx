import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container padding">
        {/* Left Side  */}
        <div className="f-left">
          <img src="/logo2.png" alt="logo-img" />
          <span className="secondary-text">
            Our vision is to make all people <br /> the best place to live for
            them.
          </span>
        </div>

        {/* Right Side  */}
        <div className="f-right">
          <span className="primaryText">Information</span>
          <span className="secondary-text">
            © 2025 FAHADALI. All rights reserved
          </span>
          <div className="f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
