import React, { FC, useState, ReactElement, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import plus from "@/assets/images/plus.svg";
import minus from "@/assets/images/minus.svg";
import styles from "./filters.module.scss";

type FiltersProps = {
  filters?: { title: string; value: string; cat: string }[];
  title: string;
  children?: ReactElement;
};

const Filters: FC<FiltersProps> = ({ filters, title, children }) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (Object.entries(router.query).length === 0) setActiveIndex(null);

    if (isFirstRender) {
      setIsFirstRender(false);
      const cat = filters?.[0].cat;

      const matchedIndex = filters?.findIndex(
        (filter) => filter.value === (cat && router.query?.[cat])
      );

      if (matchedIndex && matchedIndex != -1) setActiveIndex(matchedIndex);
    }
  }, [router.query]);

  const onFilterClick = (index: number) => {
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(router.query)) {
      if (Array.isArray(value)) {
        // If the value is an array, add each item separately
        for (const item of value) {
          queryParams.append(key, item);
        }
      } else {
        if (typeof value === "string") {
          queryParams.set(key, value);
        }
      }
    }
    if (filters?.[index]?.cat)
      queryParams.set(filters[index].cat, filters[index].value);

    router.push({
      pathname: router.pathname,
      search: queryParams.toString(),
    });

    setActiveIndex(index);
  };

  return (
    <div className="border border-[#E0E0E0] rounded-[10px] pt-[15px]">
      <div className="flex items-center justify-between text-sm font-semibold px-[15px] pb-[15px]">
        <div>{title}</div>
        <div
          className="cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <Image src={plus} alt="plus" width={20} height={20} />
          ) : (
            <Image src={minus} alt="minus" width={20} height={20} />
          )}
        </div>
      </div>
      <div
        className={`${styles.filtersWrapper} ${
          isCollapsed ? styles.isCollapsed : ""
        }`}
      >
        {children
          ? children
          : filters?.map((item, index) => (
              <div
                className={`flex justify-between items-center px-[15px] pb-[15px] ${
                  index === 0 ? "pt-[15px] border-t" : ""
                }`}
                key={index}
              >
                <div className="text-[13px]">{item.title}</div>
                <div
                  onClick={() => onFilterClick(index)}
                  className={`w-[15px] h-[15px] rounded border cursor-pointer ${
                    index === activeIndex
                      ? "bg-[#333333] border-[#333333]"
                      : "bg-[#F2F2F2] border-[#BDBDBD]"
                  }`}
                ></div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Filters;
