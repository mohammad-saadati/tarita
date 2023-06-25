import { FC } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

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

const ProductDetail: FC<ProductDetailProps> = (data) => {
  return (
    <div>
      <div className="text-lg md:text-2xl font-medium mb-5">{data.title}</div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            <div className="text-sm text-[#4F4F4F]">دسته بندی:</div>
            <div className="text-[#333333] text-sm font-medium mr-1">
              {data.cat}
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="text-sm text-[#4F4F4F]">برند:</div>
            <div className="text-[#333333] text-sm font-medium mr-1">
              {data.brand}
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="text-sm text-[#4F4F4F]">وضعیت کالا:</div>
            <div>
              {data.stock > 0 ? (
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
            value={data.rate}
            readOnly
            itemStyles={{
              itemShapes: RoundedStar,
              activeFillColor: "#F2C94C",
              inactiveFillColor: "#E0E0E0",
            }}
          />
        </div>
      </div>
      {data.features.map((item, index) => (
        <div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
