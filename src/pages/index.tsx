import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import Slider from "@/components/Slider";
import Card from "@/components/Card";
//
import axios from "@/utils/axios";
//
import { SwiperSlide } from "swiper/react";

interface HomeProps {
  data: {
    banner: [];
    smallImg: { url: string; "mobile-url": string };
    categories: { title: string; url: string }[];
    popularProducts: [];
    festivals: { url: string }[];
    festivel2: { url: string }[];
    bigBanner: { url: string };
    brands: { title: string; url: string }[];
    posts: { url: string; title: string; description: string }[];
  };
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
  const renderCards = (
    slide: { url: string; title: string; price: number; rate: number },
    index: number
  ) => {
    return (
      <SwiperSlide key={index} className="w-auto">
        <Card item={slide} />
      </SwiperSlide>
    );
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9 lg:col-span-10 relative">
          <Slider slides={data.banner} renderSlides={renderBannerSlides} />
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-2 relative h-[300px]">
          <Image
            priority={true}
            src={data.smallImg?.url}
            fill={true}
            alt=""
            className="hidden md:block rounded-[10px]"
          />
          <Image
            priority={true}
            src={data.smallImg ? data.smallImg["mobile-url"] : ""}
            fill={true}
            alt=""
            className="block md:hidden rounded-[10px] object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center my-[70px] overflow-x-auto overflow-y-hidden">
        {data.categories &&
          data.categories.map(
            (slide: { url: string; title: string }, index: number) => (
              <div
                className="text-center mx-3 md:mx-6 cursor-pointer"
                key={slide.title}
              >
                <div className="border border-[#F2F2F2] rounded-[10px] p-2.5 inline-block">
                  <div className="relative h-[40px] w-[40px]">
                    <Image src={slide.url} fill={true} alt={slide.title} />
                  </div>
                </div>
                <div className="text-[14px] md:text-[16px]">{slide.title}</div>
              </div>
            )
          )}
      </div>
      <div>
        <div className="flex justify-between">
          <div className="font-bold mb-[40px]">محصولات پرطرفدار</div>
          <Link href="#" className="text-[12px]">
            مشاهده همه محصولات
          </Link>
        </div>
        <Slider
          slides={data.popularProducts}
          renderSlides={renderCards}
          options={{ slidesPerView: 5 }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 my-[70px]">
        <div className="relative h-[190px]">
          <Image
            priority={true}
            src={data.festivals[0]?.url}
            fill={true}
            alt=""
            className="hidden md:block rounded-[10px]"
          />
        </div>
        <div className="relative h-[190px]">
          <Image
            priority={true}
            src={data.festivals[1]?.url}
            fill={true}
            alt=""
            className="hidden md:block rounded-[10px]"
          />
        </div>
        <div className="relative h-[190px]">
          <Image
            priority={true}
            src={data.festivals[2]?.url}
            fill={true}
            alt=""
            className="hidden md:block rounded-[10px]"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-[40px]">
          <div className="font-bold">جدیدترین محصولات</div>
          <Link href="#" className="text-[12px]">
            مشاهده همه محصولات
          </Link>
        </div>
        <Slider
          slides={data.popularProducts}
          renderSlides={renderCards}
          options={{ slidesPerView: 5 }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 my-[70px]">
        <div className="relative h-[200px]">
          <Image
            src={data.festivel2[0]?.url}
            fill={true}
            alt=""
            className="hidden md:block rounded-[10px]"
          />
        </div>
        <div className="relative h-[200px]">
          <Image
            src={data.festivel2[1]?.url}
            fill={true}
            alt=""
            className="hidden md:block rounded-[10px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 my-[70px]">
        <div className="relative h-[200px]">
          <Image
            src={data.bigBanner.url}
            fill={true}
            alt=""
            className="rounded-[10px]"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="font-bold mb-[40px]">محصولات پرطرفدار</div>
          <Link href="#" className="text-[12px]">
            مشاهده همه محصولات
          </Link>
        </div>
        <Slider
          slides={data.popularProducts}
          renderSlides={renderCards}
          options={{ slidesPerView: 5 }}
        />
      </div>
      <div className="my-[70px]">
        <p className="font-bold">محبوب ترین برند ها</p>
        <div className="flex justify-center mb-[70px] mt-4 overflow-y-hidden overflow-x-auto border border-[#F2F2F2] rounded-[10px] p-8">
          {data?.brands?.map((brand, index) => (
            <div className="relative flex flex-col justify-between items-center text-center mx-8 ">
              <div className="over-flow-x" key={index}>
                <Image
                  src={brand?.url}
                  width={brand.width}
                  height={brand.height}
                  alt={brand.title}
                />
              </div>
              <div className="text-sm mt-2 whitespace-nowrap">
                {brand.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-[40px]">
          <p className="font-bold">جدید ترین مطالب</p>
          <Link href="" className="text-xs">
            مشاهده همه مطالب
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {data.posts.map((post, index) => (
            <div
              className="col-span-12 md:col-span-4 relative border border-[#F2F2F2] rounded-[10px]"
              key={index}
            >
              <div className="relative h-[240px]">
                <Image
                  className=""
                  src={post?.url}
                  fill={true}
                  alt={post.title}
                />
              </div>
              <div className="py-3.5 mx-5">
                <p className="text-sm font-bold">{post.title}</p>
                <p className="text-xs text-[#828282] mt-4">
                  {post.description}
                </p>
              </div>
              <div className="flex border-t border-[#F2F2F2] py-3.5 mx-5">
                <div className="flex items-center text-xs ml-5">
                  <i className="icon-comment text-sm"></i>
                  <div className="mr-2">21</div>
                </div>
                <div className="flex items-center text-xs">
                  <i className="icon-liked text-sm"></i>
                  <div className="mr-2">172</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => identifier(page, LayoutTypes.default);

export async function getServerSideProps() {
  try {
    const res = await axios.get("/home");
    const { data } = res;
    console.log("***ddddd*", data);
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }

  return { props: { data: {} } };
}
export default Home;
