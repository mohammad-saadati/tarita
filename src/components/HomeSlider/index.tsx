import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = ({ slides }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination
        navigation
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
