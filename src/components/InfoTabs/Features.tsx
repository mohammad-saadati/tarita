import { FC } from "react";

type FeaturesProps = {
  features: { title: string; value?: string; values?: string[] }[];
};

const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <ul className="flex">
      <li className="flex flex-col ml-16 md:ml-32">
        {features.map((item, index) => (
          <div className="text-[#828282] mb-10 md:mb-5 whitespace-nowrap">{item.title}</div>
        ))}
      </li>
      <li className="flex flex-col">
        {features.map((item, index) => {
          {
            if (item.value) {
              return <div className="text-[#333333] mb-10 md:mb-5">{item.value}</div>;
            } else if (item.values) {
              return item.values.map((val, idx) => <div className="mb-2" key={idx}>{val}</div>);
            }
          }
        })}
      </li>
    </ul>
  );
};

export default Features;
