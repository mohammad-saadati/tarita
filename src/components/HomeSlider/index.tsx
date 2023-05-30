import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeSlider = ({ slides }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
