import { FC, useState } from "react";
import Image from "next/image";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { commaSeperator } from "@/utils/helpers";
import bag from "@/assets/images/bag.svg";

type ProductDetailProps = {
  title: string;
  cat: string;
  brand: string;
  stock: number;
  features: { title: string; value: number }[];
  colors: string[];
  sizes: { title: string; price: number }[];
  rate: number;
};

const ProductDetail: FC<ProductDetailProps> = ({
  title,
  cat,
  brand,
  stock,
  features,
  rate,
  colors,
  sizes,
}) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);

  return (
    <div>
      <div className="text-base md:text-2xl font-medium mt-5 mb-5">{title}</div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            <div className="text-sm text-[#4F4F4F]">دسته بندی:</div>
            <div className="text-[#333333] text-sm font-medium mr-1">{cat}</div>
          </div>
          <div className="flex items-center mb-1">
            <div className="text-sm text-[#4F4F4F]">برند:</div>
            <div className="text-[#333333] text-sm font-medium mr-1">
              {brand}
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="text-sm text-[#4F4F4F]">وضعیت کالا:</div>
            <div>
              {stock > 0 ? (
                <span className="text-[#27AE60] text-sm font-medium mr-1">
                  موجود
                </span>
              ) : (
                <span className="text-[#DA0000] text-sm font-medium mr-1">
                  ناموجود
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-1">امتیاز:</div>
          <Rating
            className="max-w-[85px] md:max-w-[100px]"
            value={rate}
            readOnly
            itemStyles={{
              itemShapes: RoundedStar,
              activeFillColor: "#F2C94C",
              inactiveFillColor: "#E0E0E0",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col mt-[35px]">
        <p className="font-medium mb-2.5">ویژگی ها</p>
        {features.map((item, index) => (
          <div className="flex items-start mb-1" key={index}>
            <div className="text-[#4F4F4F] text-sm">{item.title}:</div>
            <div className="text-[#4F4F4F] text-sm mr-1">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-10 mb-5">
        <div className="text-[#4F4F4F] text-sm">رنگ:</div>
        <div className="flex items-center">
          {colors.map((item, index) => (
            <div
              onClick={() => setActiveColorIndex(index)}
              className="outline outline-1 outline-offset-4 w-[20px] h-[20px] rounded-[2px] mr-4"
              style={{
                backgroundColor: item,
                outlineColor:
                  index === activeColorIndex ? "#333333" : "#E0E0E0",
              }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 mb-8">
        <div className="text-[#4F4F4F] text-sm">اندازه:</div>
        <div className="flex items-center mt-5 md:mt-0">
          {sizes.map((item, index) => (
            <div
              onClick={() => setActiveSizeIndex(index)}
              className="outline outline-1 outline-offset-4 rounded-[2px] text-[10px] md:text-sm ml-4 md:ml-0 md:mr-4 p-1 cursor-pointer"
              style={{
                outlineColor: index === activeSizeIndex ? "#333333" : "#E0E0E0",
              }}
              key={index}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#E0E0E0] pt-8">
        <div>قیمت</div>
        <div>
          <span className="text-lg font-bold">
            {commaSeperator(sizes[activeSizeIndex].price)}
          </span>
          تومان
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#333333] text-white rounded-[10px] mt-10 p-4 cursor-pointer">
        <div className="text-sm ml-5">افزودن سبد خرید</div>
        <Image src={bag} alt="bag" />
      </div>
    </div>
  );
};

export default ProductDetail;
