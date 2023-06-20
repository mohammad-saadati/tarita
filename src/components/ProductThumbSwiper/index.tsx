import React, { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
// styles
import "swiper/css/free-mode";
import "swiper/css/thumbs";

interface ProductThumbSwiperProps {
  images: string[];
  thumbs: string[];
}

const ProductThumbSwiper: FC<ProductThumbSwiperProps> = ({
  images,
  thumbs,
}) => {
  const renderImages = (slide: string, index: number) => {
    return (
      <div className="relative w-[370px] h-[510px]">
        <SwiperSlide>
          <Image src={slide} key={index} alt="" width={370} height={510} />
        </SwiperSlide>
      </div>
    );
  };

  return (
    <>
      <div>
        <Slider slides={images} renderSlides={renderImages} />
      </div>
    </>
  );
};

export default ProductThumbSwiper;
