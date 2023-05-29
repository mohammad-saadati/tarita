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

Home.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export default Home;
