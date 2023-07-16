import React, { FC } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import Filters from "@/components/Filters";

type RangeProps = {
  // Define props here
};

const Range: FC<RangeProps> = () => {
  return (
    <div>
      <Filters title="محدوده قیمت">
        <div className="border-t py-8 px-5"><RangeSlider /></div>
      </Filters>
    </div>
  );
};

export default Range;
