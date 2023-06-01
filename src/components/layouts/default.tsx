import type { ReactElement } from "react";

type layoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <div></div>
        <div className="container my-[100px]">{children}</div>
      </div>
    </>
  );
};

export default Layout;
