import React, { FC, useState } from "react";
import Features from "@/components/InfoTabs/Features";
import Descriptions from "@/components/InfoTabs/Descriptions";
import Comments from "@/components/InfoTabs/Comments";
import QandA from "@/components/InfoTabs/QandA";
import { set } from "cypress/types/lodash";

type InfoTabsProps = {};

type tab = {
  title?: string;
  cmp?: React.ComponentType<any>;
};
type activeTab = {
  index?: number;
  cmp?: React.ComponentType<any>;
};
const tabs: tab[] = [
  { title: "ویژگی", cmp: Features },
  { title: "توضیحات", cmp: Descriptions },
  { title: "نظرات کاربران", cmp: Comments },
  { title: "پرسش و پاسخ", cmp: QandA },
];
const InfoTabs: FC<InfoTabsProps> = () => {
  const [activeTab, setActiveTab] = useState<activeTab>({
    index: 0,
    cmp: tabs[0].cmp,
  });

  const changeActiveTab = (item: tab, idx: number) => {
    setActiveTab({ index: idx, cmp: item.cmp });
  };

  return (
    <div>
      <ul className="flex items-center border-b border-[#E0E0E0]">
        {tabs.map((item, index) => (
          <li
            style={{
              borderBottom: `1px solid ${
                index === activeTab.index ? "#333333" : "transparent"
              } `,
            }}
            key={index}
            onClick={() => changeActiveTab(item, index)}
            className="ml-5 pb-3 cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
      {activeTab?.cmp ? <activeTab.cmp /> : null}
    </div>
  );
};

export default InfoTabs;
