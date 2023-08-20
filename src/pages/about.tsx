import dynamic from "next/dynamic";
import Test from "@/components/test";
import { useState } from "react";
// import Chart from "react-apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <div>loading</div>,
  ssr: false,
});
const About = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Peter",
      data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
    },
    {
      name: "Johnny",
      data: [
        10,
        15,
        null,
        12,
        null,
        10,
        12,
        15,
        null,
        null,
        12,
        null,
        14,
        null,
        null,
        null,
      ],
    },
    {
      name: "David",
      data: [
        null,
        null,
        null,
        null,
        3,
        4,
        1,
        3,
        4,
        6,
        7,
        9,
        5,
        null,
        null,
        null,
      ],
    },
  ]);

  return (
    <div>
      <Chart options={options} series={series} type="line" width="500" />
    </div>
  );
};

export default About;
