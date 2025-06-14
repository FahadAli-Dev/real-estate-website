import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container padding">
        {/* Left side */}
        <div className="hero-left">
          <div className="orange-circle" />
          <div className="hero-title">
            <h1>
              Discover
              <br /> Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="hero-description secondary-text">
            <span>Find a variety of properties that suits your interest.</span>
            <br />
            <span>Forget all difficulties in finding a residence for you.</span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="btn">Search</button>
          </div>
          <div className="stats">
            <div className="stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondary-text">Premium Products</span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondary-text">Happy Customers</span>
            </div>
            <div className="stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondary-text">Award Winning</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="hero-right">
          <div className="img-container">
            <img src="hero-image.png" alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
