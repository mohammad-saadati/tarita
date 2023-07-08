import type { ReactElement } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type layoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <Header />
        <div className="container my-[70px] md:my-[100px]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
