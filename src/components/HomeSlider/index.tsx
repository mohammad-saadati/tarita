import Image from "next/image";
//
import { useState, useEffect } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Navigation, Pagination } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "./navigation.css";
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
        className="relative"
        modules={[Navigation, Pagination]}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        placeholder="blur"
        loop={true}
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
        <div className="swiper-prev">
          <i className="icon-left-arrow"></i>
        </div>
        <div className="swiper-next">
          <i className="icon-right-arrow"></i>
        </div>

        {/* <div className="custom-pagination">
          {Array.from({ length: slides.length }, (_, index) => (
            <div
              className="swiper-pagination"
              style={{ left: `${index * 150}px` }}
            ></div>
          ))}
        </div> */}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
