import type { ReactElement } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/components/Providers/store";

type layoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <StoreProvider>
          <Header />
          <div className="container my-[70px] md:my-[100px]">{children}</div>
          <Footer />
        </StoreProvider>
      </div>
    </>
  );
};

export default Layout;
