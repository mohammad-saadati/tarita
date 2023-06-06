import Image from "next/image";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import Slider from "@/components/Slider";
//
import axios from "@/utils/axios";
//
import { SwiperSlide } from "swiper/react";

interface HomeProps {
  data: {
    banner: [];
    smallImg: { url: string; "mobile-url": string };
    categories: [];
  }; // Replace 'any' with the actual type of 'data' if known
}

const Home: NextPageWithLayout<HomeProps> = ({ data }) => {
  const renderBannerSlides = (slide: { url: string }, index: number) => {
    return (
      <SwiperSlide key={index}>
        <div className="relative h-[300px] rounded-[10px]">
          <Image
            priority={true}
            src={slide.url}
            fill={true}
            alt=""
            className={`object-cover rounded-[10px]`}
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
    );
  };
  // const renderCategories = (
  //   slide: { title: string; url: string },
  //   index: number
  // ) => {
  //   return (
  // <SwiperSlide key={index}>
  //   <div className="text-center">
  //     <div className="border border-[#F2F2F2] rounded-[10px] p-2.5 inline-block">
  //       <div className="relative h-[40px] w-[40px]">
  //         <Image src={slide.url} fill={true} alt={slide.title} />
  //       </div>
  //     </div>
  //     <div>{slide.title}</div>
  //   </div>
  // </SwiperSlide>;
  //   );
  // };

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9 lg:col-span-10 relative">
          <Slider slides={data.banner} renderSlides={renderBannerSlides} />
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-2 relative h-[300px]">
          <Image
            priority={true}
            src={data.smallImg.url}
            fill={true}
            alt=""
            className="hidden md:block rounded-[10px]"
          />
          <Image
            priority={true}
            src={data.smallImg["mobile-url"]}
            fill={true}
            alt=""
            className="block md:hidden rounded-[10px]"
          />
        </div>
      </div>
      <div className="flex justify-center my-[70px] overflow-x-auto overflow-y-hidden">
        {data.categories.map((slide, index) => (
          <div className="text-center mx-3 md:mx-6 cursor-pointer" key={index}>
            <div className="border border-[#F2F2F2] rounded-[10px] p-2.5 inline-block">
              <div className="relative h-[40px] w-[40px]">
                <Image src={slide.url} fill={true} alt={slide.title} />
              </div>
            </div>
            <div className="text-[14px] md:text-[16px]">{slide.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => identifier(page, LayoutTypes.default);

export async function getServerSideProps() {
  try {
    const res = await axios.get("/home");
    const { data } = res;
    console.log("****", data);
    return { props: { data } };
  } catch (error) {}

  return { props: { data: {} } };
}
export default Home;
