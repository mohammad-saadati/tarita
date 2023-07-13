import React, { FC, useState } from "react";

type FiltersProps = {
  filters: { title: string; value: string }[];
  title: string;
};

const Filters: FC<FiltersProps> = ({ filters }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      {filters.map((item, index) => (
        <div className="flex items-center">
          <div>{item.title}</div>
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
