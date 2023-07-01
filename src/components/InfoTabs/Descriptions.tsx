import { FC } from "react";
import Image from "next/image";

type DescriptionProps = {
  description: { text: string; image: string };
};

const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <div>
      <div className="text-sm leading-7 text-justify mb-5">{description.text}</div>
      <Image
        className="float-left mr-8 my-2"
        src={description.image}
        alt=""
        width={414}
        height={310}
        sizes="max-width(640px): 315px, 236px"
      />
      <div className="text-sm leading-7 text-justify md:pl-55">{description.text}</div>
    </div>
  );
};

export default Description;
