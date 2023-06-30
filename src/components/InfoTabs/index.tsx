import React, { FC, useState } from "react";
import Features from "@/components/InfoTabs/Features";
import Descriptions from "@/components/InfoTabs/Descriptions";
import Comments from "@/components/InfoTabs/Comments";
import QandA from "@/components/InfoTabs/QandA";
import { set } from "cypress/types/lodash";

type InfoTabsProps = {};

type tab = {
  title: string;
  cmp: React.ComponentType<any>;
};
const tabs: tab[] = [
  { title: "ویژگی", cmp: Features },
  { title: "توضیحات", cmp: Descriptions },
  { title: "نظرات کاربران", cmp: Comments },
  { title: "پرسش و پاسخ", cmp: QandA },
];
const InfoTabs: FC<InfoTabsProps> = () => {
  const [activeTab, setActiveTab] = useState({});

  const changeActiveTab = (item: tab, index: number) => {
    setActiveTab({ index, cmp: item.cmp });
  };

  return (
    <div>
      <ul>
        {tabs.map((item, index) => (
          <li key={index} onClick={() => changeActiveTab(item, index)}>
            {item.title}
          </li>
        ))}
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default InfoTabs;
