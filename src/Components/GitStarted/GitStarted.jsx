import "./GitStarted.css";

const GitStarted = () => {
  return (
    <section id="getStarted" className="gitStarted-section">
      <div className="g-container padding">
        <div className="innerG-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondary-text">
            Subscribe and find super attractive price quotes from us. <br />{" "}
            Find your residence soon
          </span>

          <button className="btn">
            <a href="mailto:fa6084904@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GitStarted;
