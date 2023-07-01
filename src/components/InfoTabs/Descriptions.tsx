import { FC } from "react";
import Image from "next/image";

type DescriptionProps = {
  description: { text: string; image: string };
};

const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <div>
      <div className="text-sm leading-7">{description.text}</div>
      <Image
        className="float-right"
        src={description.image}
        alt=""
        width={414}
        height={310}
        sizes="max-width(640px): 315px, 236px"
      />
    </div>
  );
};

export default Description;
