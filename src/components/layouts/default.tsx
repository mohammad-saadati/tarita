import type { ReactElement } from "react";

type layoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <div></div>
        <div class="container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
