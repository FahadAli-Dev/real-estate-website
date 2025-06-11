import "./Hero.css";

let Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover
              <br /> Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="hero-description">
            <span>Find a variety of properties that suits your interest.</span>
            <span>Forget all difficulties in finding a residence for you.</span>
          </div>
          <div className="hero-search">search</div>
        </div>
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
