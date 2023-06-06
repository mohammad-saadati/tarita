import Image from "next/image";
import { FC } from "react";

type CardProps = {
  item: { image: string; title: string };
};
const Card: FC<CardProps> = ({ item }) => {
  return (
    <div>
      <i className="icon-like"></i>
      <Image src={item.image} fill={true} alt={item.title} />
      <div>{item.title}</div>
    </div>
  );
};

export default Card;
