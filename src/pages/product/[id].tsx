import Image from "next/image";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import ProductThumbSwiper from "@/components/ProductThumbSwiper";
import ProductDetail from "@/components/ProductDetail";
import ProductMeta from "@/components/ProductMeta";
import Slider from "@/components/Slider";
import Card from "@/components/Card";
import Ratings from "@/components/Ratings";
import InfoTabs from "@/components/InfoTabs";
import { SwiperSlide } from "swiper/react";
import axios from "@/utils/axios";
import garantiePrice from "@/assets/images/garantie-price.svg";
import garantieOriginality from "@/assets/images/garantie-originality.svg";
import safeShipping from "@/assets/images/safe-shipping.png";
import fastSending from "@/assets/images/fast-sending.png";

interface ProductProps {
  data: {
    id: number;
    title: string;
    mainImages: string[];
    thumbnails: [];
    cat: string;
    brand: string;
    stock: number;
    features: { title: string; value: number }[];
    colors: string[];
    sizes: { title: string; price: number }[];
    relateds: { url: url; title: string; price: number; rate: number }[];
    rate: number;
    detail: {
      features: { title: string; value: string }[];
    };
  };
}

const Product: NextPageWithLayout<ProductProps> = ({ data }) => {
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
    <div>
      <div className="grid grid-cols-12 gap-4 md:gap-16">
        <div className="col-span-12 md:col-span-7 relative">
          <ProductMeta />
          <ProductThumbSwiper
            images={data.mainImages}
            thumbs={data.thumbnails}
          />
          <div className="flex flex-wrap md:justify-between items-center mt-14 border border-[#E0E0E0] rounded-[5px] p-3">
            <div className="flex justify-between items-center my-2">
              <Image src={garantiePrice} alt="" />
              <div className="text-xs mr-2 ml-4 md:ml-0">تضمین بهترین قیمت</div>
            </div>
            <div className="flex justify-between items-center my-2">
              <Image src={garantieOriginality} alt="" />
              <div className="text-xs mr-2">ضمانت اصالت محصول</div>
            </div>
            <div className="flex justify-between items-center my-2">
              <Image src={safeShipping} alt="" />
              <div className="text-xs mr-2 ml-4 md:ml-0">ارسال مطمئن</div>
            </div>
            <div className="flex justify-between items-center my-2">
              <Image src={fastSending} alt="" />
              <div className="text-xs mr-2">ارسال سریع</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <ProductDetail
            title={data.title}
            cat={data.cat}
            brand={data.brand}
            stock={data.stock}
            features={data.features}
            sizes={data.sizes}
            colors={data.colors}
            rate={data.rate}
          />
        </div>
        <div className="col-span-12 md:col-span-12 mt-12">
          <div className="flex justify-between">
            <div className="font-bold mb-[40px]">محصولات پرطرفدار</div>
            <Link href="#" className="text-[12px]">
              مشاهده همه محصولات
            </Link>
          </div>
          <Slider
            slides={data.relateds}
            renderSlides={renderCards}
            options={{
              slidesPerView: 2,
              breakpoints: {
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              },
              autoplay: false,
              spaceBetween: 15,
            }}
            hasNavigation={true}
          />
        </div>
        <div className="col-span-12 md:col-span-8 mt-12">
          <InfoTabs features={data.detail.features} description={data.detail.description}/>
        </div>
        <div className="col-span-12 md:col-span-4 mt-12">
          <Ratings />
        </div>
      </div>
    </div>
  );
};

Product.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.default);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const res = await axios.get(`/product/${context.params?.id}`);
    const { data } = res;
    console.log("***ddddd*", context.params?.id);
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }

  return { props: { data: {} } };
}

export default Product;
