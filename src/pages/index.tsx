import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";

const Home: NextPageWithLayout = () => {
  return <div>home</div>;
};

Home.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export default Home;
