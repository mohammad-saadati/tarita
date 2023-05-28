import type { ReactElement } from "react";

type layoutProps = {
  children: ReactElement;
};

const Dashboard = ({ children }: layoutProps) => {
  return (
    <>
      <div>dashboard layout</div>
      {children}
    </>
  );
};

export default Dashboard;
