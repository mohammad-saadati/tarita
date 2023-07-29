import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import Sidebar from "@/components/Sidebar";
import Orders from "@/components/Orders";

interface DashboardProps {}

const Dashboard: NextPageWithLayout<DashboardProps> = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm">سفارش ها</div>
        <div className="text-sm cursor-pointer">
          <Link href="/orders">مشاهده همه</Link>
        </div>
      </div>
      <Orders />
    </div>
  );
};

Dashboard.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export async function getServerSideProps() {
  return { props: {} };
}

export default Dashboard;
