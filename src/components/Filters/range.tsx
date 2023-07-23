import React, { FC, useState } from "react";
// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./range.scss";

import Filters from "@/components/Filters";
import { commaSeperator } from "@/utils/helpers";
import { useRouter } from "next/router";

type RangeProps = {
  // Define props here
};

const Range: FC<RangeProps> = () => {
  const [min, setMin] = useState(1000000);
  const [max, setMax] = useState(1000000000);
  const router = useRouter();

  const handleRangeUpdate = (value: [number, number]) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const activePriceRange = () => {
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(router.query)) {
      if (Array.isArray(value)) {
        for (const item of value) {
          queryParams.append(key, item);
        }
      } else {
        if (typeof value === "string") {
          queryParams.set(key, value);
        }
      }
    }

    queryParams.set("min", min.toString());
    queryParams.set("max", max.toString());

    console.log(queryParams);
    router.push({
      pathname: router.pathname,
      search: queryParams.toString(),
    });
  };

  return (
    <div>
      <Filters title="محدوده قیمت">
        <div className="border-t py-8 px-5">
          <RangeSlider
            id="range-slider-input-component"
            min={10000000}
            max={1000000000}
            defaultValue={[200000000, 800000000]}
            step={10000000}
            onInput={handleRangeUpdate}
            rangeSlideDisabled={true}
          />
          <div className="flex flex-wrap justify-between items-center mt-8 text-sm">
            <div className="flex flex-wrap justify-between items-center text-[10px] border border-[#E0E0E0] rounded-[7px] p-2">
              <div className="ml-3">تا</div>
              <div>{commaSeperator(max)}</div>
              <div className="mr-1">تومان</div>
            </div>
            <div className="flex flex-wrap justify-between items-center text-[10px] border border-[#E0E0E0] rounded-[7px] p-2">
              <div className="ml-3">از</div>
              <div>{commaSeperator(min)}</div>
              <div className="mr-1">تومان</div>
            </div>
          </div>
          <div
            onClick={activePriceRange}
            className="bg-[#333333] text-white text-center text-sm rounded-[5px] py-2 mt-6 cursor-pointer"
          >
            اعمال قیمت
          </div>
        </div>
      </Filters>
    </div>
  );
};

export default Range;
