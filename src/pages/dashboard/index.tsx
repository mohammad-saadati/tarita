import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import Orders from "@/components/Orders";
import Card from "@/components/Card";
// store
import { store } from "@/store";
import { setCurrentUser, User } from "@/store/features/currentUser";

interface DashboardProps {}

const Dashboard: NextPageWithLayout<DashboardProps> = () => {
  const bookmarks = store.getState().currentUser.user.bookmarked;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-medium">سفارش ها</div>
        <div className="text-sm cursor-pointer">
          <Link href="/orders">مشاهده همه</Link>
        </div>
      </div>
      <Orders />
      <div className="flex justify-between items-center mb-6 mt-16">
        <div className="text-sm font-medium">علاقه مندی ها</div>
        <div className="text-sm cursor-pointer">
          <Link href="/orders">مشاهده همه</Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {bookmarks.map((item, index) => (
          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
            <Card item={item} isLieked={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

Dashboard.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export async function getServerSideProps() {
  return { props: {} };
}

export default Dashboard;
