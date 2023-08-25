import { FC } from "react";
import Image from "next/image";
import diagram from "@/assets/images/diagram.svg";
import share from "@/assets/images/share.svg";
import heart from "@/assets/images/heart.svg";

type ProductMetaProps = {};

const ProductMeta: FC<ProductMetaProps> = () => {
  return (
    <div className="absolute flex md:block z-10">
      <Image className="cursor-pointer mb-5 ml-4" src={heart} alt="heart" />
      <Image className="cursor-pointer mb-5 ml-4" src={share} alt="share" />
      <Image className="cursor-pointer mb-5 ml-4" src={diagram} alt="diagram" />
    </div>
  );
};

export default ProductMeta;
