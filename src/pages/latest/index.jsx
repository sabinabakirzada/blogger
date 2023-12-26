import React from "react";
import "./index.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";
const Latest = () => {
  return (
    <div className="latest">
      <div className="latestText">
        <h3>Latest News from all categories</h3>
        <p className="latest-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Latest;
