import React, { FC, useState } from "react";
import Image from "next/image";
import plus from "@/assets/images/plus.svg";
import minus from "@/assets/images/minus.svg";

type FiltersProps = {
  filters: { title: string; value: string }[];
  title: string;
};

const Filters: FC<FiltersProps> = ({ filters, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="border border-[#E0E0E0] rounded-[10px] py-[15px]">
      <div className="flex items-center justify-between text-sm font-semibold mb-[15px] border-b px-[15px] pb-[15px]">
        <div>{title}</div>
        <div>
          {isCollapsed ? (
            <Image src={plus} alt="plus" width={20} height={20} />
          ) : (
            <Image src={minus} alt="minus" width={20} height={20} />
          )}
        </div>
      </div>
      {filters.map((item, index) => (
        <div className="flex justify-between items-center px-[15px] pb-[15px]">
          <div className="text-[13px]">{item.title}</div>
          <div
            className={`w-[15px] h-[15px] rounded border ${
              index === activeIndex
                ? "bg-[#333333] border-[#333333]"
                : "bg-[#F2F2F2] border-[#BDBDBD]"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
