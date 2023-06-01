import Image from "next/image";
//
import { useState, useEffect } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Navigation, Pagination } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = ({ slides }) => {
  const [loading, setLoading] = useState(true);
  const [loadedImageNumber, setloadedImageNumber] = useState(0);

  const loadedHandler = () => {
    console.log("test");
    setloadedImageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImageNumber == slides.length) setLoading(false);
  });

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination
        navigation
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        placeholder="blur"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px] w-[1078px]">
              <Image
                src={slide.url}
                fill={true}
                alt=""
                className={`object-cover rounded-[10px]`}
                onLoad={loadedHandler}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
