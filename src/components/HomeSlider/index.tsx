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
        spaceBetween={2}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        placeholder="blur"
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px] rounded-[10px]">
              <Image
                src={slide.url}
                fill={true}
                alt=""
                className={`object-cover rounded-[10px]`}
                onLoad={loadedHandler}
              />
              <div className="absolute right-0 bg-black bg-opacity-50 w-full md:w-1/2 lg:w-1/3 h-full rounded-[10px] md:rounded-tl-[0] md:rounded-bl-[0] text-white">
                <div className="p-12 px-16">
                  <div className="text-3xl mb-5">عنوان اول</div>
                  <div className="text-xl mb-10">توضیحات عنوان</div>
                  <a
                    className="bg-rose-900 text-center rounded p-3 w-[10rem] cursor-pointer"
                    href="#"
                  >
                    دانلود اپلیکیشن
                  </a>
                </div>
              </div>
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
