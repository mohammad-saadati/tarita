import React, { FC, useState } from "react";

type FiltersProps = {
  filters: { title: string; value: string }[];
  title: string;
};

const Filters: FC<FiltersProps> = ({ filters, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="border border-[#E0E0E0] rounded-[10px] py-[15px]">
      <div className="flex items-center justify-between text-sm font-semibold mb-[15px] border-b px-[15px] pb-[15px]">
        <div>{title}</div>
        <div>
          <span className="w-[11px] h-[1px] bg-[#404040]"><img src="@/assets/images/plus.svg"/></span>
          <span className="text-lg w-[]"><img src="@/assets/images/minus.svg"/></span>
        </div>
      </div>
      {filters.map((item, index) => (
        <div className="flex justify-between items-center px-[15px] pb-[15px]">
          <div className="text-[13px]">{item.title}</div>
          <div
            className={`w-[5px] h-[5px] ${
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
