import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import HomeSlider from "@/components/HomeSlider";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HomeSlider />
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
