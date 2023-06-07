import Image from "next/image";
import { FC } from "react";

type CardProps = {
  item: { url: string; title: string; price: number; rate: number };
};
const Card: FC<CardProps> = ({ item }) => {
  return (
    <div className="w-[215] h-[248px]">
      <i className="icon-like"></i>
      <div className="relative w-[160px] h-[150px]">
        <Image src={item.url} fill={true} alt={item.title} />
      </div>
      <div className="mt-[30px] text-[13px] font-medium">{item.title}</div>
      <div>{item.price}</div>
      <div className="flex ">
        <div>قیمت:</div>
        <div>
          {item.rate}
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
