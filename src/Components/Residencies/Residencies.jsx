import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../data/slider.json";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="r-container padding">
        <div className="r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <div className="swiper-wrapper">
          <Swiper slidesPerView={4} spaceBetween={50}>
            {data.map((card, idx) => {
              return (
                <SwiperSlide>
                  <img src={card.image} width={200} />
                </SwiperSlide>
              );
            })}
            <SlidButtons />
          </Swiper>
        </div>
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
