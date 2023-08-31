import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { commaSeperator } from "@/utils/helpers";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import heartFilled from "@/assets/images/heartFilled.svg";

type CardProps = {
  item: { id: number; url: string; title: string; price: number; rate: number };
  isLiked?: boolean;
  openLikeModal?: () => void;
};
const Card: FC<CardProps> = ({ item, isLiked, openLikeModal }) => {
  const [rating, setRating] = useState(2);

  return (
    <div>
      <div>
        {isLiked ? (
          <Image alt="" width={20} height={20} src={heartFilled} />
        ) : (
          <i onClick={openLikeModal} className="icon-like cursor-pointer"></i>
        )}

        <div className="flex justify-center items-center">
          <Image
            src={item.url}
            alt={item.title}
            className="w-[160px] h-[150px] object-cover"
            width={160}
            height={150}
          />
        </div>
        <div className="mt-[30px] text-[13px] font-medium">
          <Link
            className="inline-block whitespace-nowrap text-ellipsis w-44 overflow-hidden"
            href={`/product/${item.id}/`}
          >
            {item.title}
          </Link>
        </div>
        <div className="my-2">
          <Rating
            className="max-w-[65px]"
            onChange={setRating}
            value={item.rate}
            readOnly
            itemStyles={{
              itemShapes: RoundedStar,
              activeFillColor: "#F2C94C",
              inactiveFillColor: "#E0E0E0",
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xs">قیمت:</div>
          <div className="flex justify-between items-center">
            <div className="ml-2">{commaSeperator(item.price)}</div>
            <div className="text-[10px]">تومان</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
