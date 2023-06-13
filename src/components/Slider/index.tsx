import Image from "next/image";
import { useState, useEffect } from "react";
// swiper core
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Navigation, Pagination, Autoplay, SwiperOptions } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// custom style
import "./navigation.css";

type SliderProps = {
  slides: Array<any>; // Update the type of slides as per your data structure
  options?: SwiperOptions;
  renderSlides: (slide: any, index: number) => React.ReactNode; // Update the type of slide as per your data structure
};

const Slider: React.FC<SliderProps> = ({ slides, renderSlides, options }) => {
  let swiperProps: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    pagination: {
      type: "bullets",
      clickable: true,
    },
    navigation: { nextEl: ".swiper-prev", prevEl: ".swiper-next" },
    autoplay: { delay: 5000 },
    spaceBetween: 2,
    slidesPerView: 1,
    loop: true,
    ...options,
  };

  return (
    <div>
      <Swiper {...swiperProps}>
        {slides.map((slide, index) => renderSlides(slide, index))}
        <div className="swiper-prev">
          <i className="icon-left-arrow"></i>
        </div>
        <div className="swiper-next">
          <i className="icon-right-arrow"></i>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
