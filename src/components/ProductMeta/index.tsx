import { FC } from "react";
import Image from "next/image";
import diagram from "@/assets/images/diagram.svg";
import share from "@/assets/images/share.svg";
import heart from "@/assets/images/heart.svg";

type ProductMetaProps = {};

const ProductMeta: FC<ProductMetaProps> = () => {
  return (
    <div>
      <Image className="cursr-pointer mb-" src={heart} alt="heart" />
      <Image className="cursr-pointer mb-" src={share} alt="share" />
      <Image className="cursr-pointer mb-" src={diagram} alt="diagram" />
    </div>
  );
};

export default ProductMeta;
