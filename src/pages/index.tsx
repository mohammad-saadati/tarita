import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import HomeSlider from "@/components/HomeSlider";
//
import axios from "@/utils/axios";

interface HomeProps {
  data?: { banner: []; smallImg: {} }; // Replace 'any' with the actual type of 'data' if known
}

const Home: NextPageWithLayout<HomeProps> = ({ data }) => {
  return (
    <div>
      <HomeSlider slides={data.banner} />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => identifier(page, LayoutTypes.default);

export async function getServerSideProps() {
  try {
    const res = await axios.get("/home");
    const { data } = res;
    console.log("****", data);
    return { props: { data } };
  } catch (error) {}

  return { props: { data: {} } };
}
export default Home;
