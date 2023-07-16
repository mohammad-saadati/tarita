import React, { FC } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./range.scss";

import Filters from "@/components/Filters";

type RangeProps = {
  // Define props here
};

const Range: FC<RangeProps> = () => {
  return (
    <div>
      <Filters title="محدوده قیمت">
        <div className="border-t py-8 px-5">
          <RangeSlider id="range-slider-input-component"/>
          <div className="flex flex-wrap justify-between items-center">
            <div className="border p-2 rounded-[7px] mt-8 text-sm">از</div>
          </div>
        </div>
      </Filters>
    </div>
  );
};

export default Range;
