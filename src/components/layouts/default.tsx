import type { ReactElement } from "react";

type layoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <div></div>
        {children}
      </div>
    </>
  );
};

export default Layout;
