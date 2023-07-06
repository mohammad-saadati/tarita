import Image from "next/image";
import { FC } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import star from "@/assets/images/star.svg";

type RatingsProps = {
  ratings: { title: string; value: number }[];
};

const Ratings: FC<RatingsProps> = ({ ratings }) => {
  const total = ratings.reduce((acc, curr) => acc + curr.value, 0) / 4;

  return (
    <div className="border p-5 rounded-[10px]">
      <div className="flex justify-between items-center mb-10">
        <div className="font-semibold">امتیاز کاربران</div>
        <div className="flex items-center">
          <div className="ml-2">{total}</div>
          <Image src={star} alt="" />
        </div>
      </div>
      {ratings.map((rate, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          <div>{rate.title}</div>
          <Rating
            className="max-w-[90px]"
            value={rate.value}
            readOnly
            itemStyles={{
              itemShapes: RoundedStar,
              activeFillColor: "#F2C94C",
              inactiveFillColor: "#E0E0E0",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Ratings;
