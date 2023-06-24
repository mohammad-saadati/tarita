import React, { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
// styles
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Autoplay } from "swiper";

interface photo {
  url: string;
  title: string;
  width: number;
  height: number;
}
interface ProductThumbSwiperProps {
  images: string[];
  thumbs: photo[];
}

const ProductThumbSwiper: FC<ProductThumbSwiperProps> = ({
  images,
  thumbs,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderImages = (slide: string, index: number) => {
    return (
      <div>
        <SwiperSlide>
          <div className="relative w-[340px] h-[320px] md:w-[370px] md:h-[370px] mx-auto">
            <Image
              src={slide}
              key={index}
              alt=""
              fill={true}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      </div>
    );
  };
  const renderThumbs = (slide: photo, index: number) => {
    return (
      <div className="flex justify-center items-center">
        <SwiperSlide className="thumbs-slide border-[1px] border-[#E0E0E0] rounded-[10px]">
          <div className="flex justify-center items-center">
            <Image
              src={slide.url}
              key={index}
              alt=""
              width={slide.width}
              height={slide.height}
            />
          </div>
        </SwiperSlide>
      </div>
    );
  };

  return (
    <>
      <div>
        <Slider
          slides={images}
          renderSlides={renderImages}
          options={{
            autoplay: false,
            spaceBetween: 10,
            centeredSlides: true,
            loop: false,
            thumbs: { swiper: thumbsSwiper },
          }}
        />
        <Slider
          slides={thumbs}
          renderSlides={renderThumbs}
          onSwiper={setThumbsSwiper}
          options={{
            autoplay: false,
            freeMode: true,
            slidesPerView: 6,
            loop: false,
            spaceBetween: 15,
            centerInsufficientSlides: true,
          }}
        />
      </div>
    </>
  );
};

export default ProductThumbSwiper;
