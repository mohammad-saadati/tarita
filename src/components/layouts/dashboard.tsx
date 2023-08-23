import type { ReactElement } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StoreProvider from "@/components/Providers/store";

type layoutProps = {
  children: ReactElement;
};

const Dashboard = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <StoreProvider>
          <Header />
          <div className="container px-5 my-[70px] md:my-[100px]">
            <div className="grid grid-cols-12 gap-4 relative">
              <div className="col-span-12 md:col-span-9 lg:col-span-3 lg:sticky lg:top-[1rem]">
                <Sidebar />
              </div>
              <div className="col-span-12 md:col-span-9 lg:col-span-9">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </StoreProvider>
      </div>
    </>
  );
};

export default Dashboard;
