import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../data/slider.json";
import sliderSettings from "../../data/common";

const Residencies = () => {
  return (
    <section id="residencies" className="r-wrapper">
      <div className="r-container padding">
        <div className="r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          {data.map((card, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="r-card">
                  <img src={card.image} />
                  <span className="secondary-text r-price">
                    <span>₹</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondary-text">{card.detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
          <SlidButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

let SlidButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="r-buttons">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};
