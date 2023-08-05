import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import avatar from "@/assets/images/avatar.svg";
import left from "@/assets/images/sidebar/left.svg";
import dashboard from "@/assets/images/sidebar/dashboard.svg";
import dashboardFilled from "@/assets/images/sidebar/dashboardFilled.svg";
import orders from "@/assets/images/sidebar/orders.svg";
import ordersFilled from "@/assets/images/sidebar/ordersFilled.svg";
import like from "@/assets/images/sidebar/like.svg";
import likeFilled from "@/assets/images/sidebar/likeFilled.svg";
import location from "@/assets/images/sidebar/location.svg";
import locationFilled from "@/assets/images/sidebar/locationFilled.svg";
import user from "@/assets/images/sidebar/user.svg";
import userFilled from "@/assets/images/sidebar/userFilled.svg";
import logout from "@/assets/images/sidebar/logout.svg";

const profilePages = [
  {
    title: "داشبورد",
    link: "/dashboard",
    activeIcon: dashboard,
    inactiveIcon: dashboardFilled,
  },
  {
    title: "سفارش",
    link: "/orders",
    activeIcon: orders,
    inactiveIcon: ordersFilled,
  },
  {
    title: "علاقه مندی ها",
    link: "/bookmarks",
    activeIcon: like,
    inactiveIcon: likeFilled,
  },
  {
    title: "آدرس ها",
    link: "/addresses",
    activeIcon: location,
    inactiveIcon: locationFilled,
  },
  {
    title: "حساب کاربری",
    link: "/profile",
    activeIcon: user,
    inactiveIcon: userFilled,
  },
  {
    title: "خروج",
    link: "login",
    activeIcon: logout,
    inactiveIcon: null,
  },
];

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center border rounded pt-[60px] px-5 sticky top-5">
      <Image
        src={avatar}
        width={90}
        height={90}
        className="rounded"
        alt="avatar"
      />
      <div className="mt-5 font-medium border-b pb-10 w-full text-center mb-[30px]">
        احمد پرویزی
      </div>
      <ul className="w-full">
        {profilePages.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className={`flex justify-between items-center  ${
                index === profilePages.length - 2 ? "mb-10" : "mb-5"
              }`}
            >
              <div className="flex justify-between items-center">
                {router.pathname === item.link ? (
                  <Image
                    src={item.inactiveIcon}
                    alt=""
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image src={item.activeIcon} alt="" width={20} height={20} />
                )}

                <div
                  className={`text-sm mr-[15px] ${
                    router.pathname === item.link ? "font-bold" : ""
                  }`}
                >
                  {item.title}
                </div>
              </div>
              <Image src={left} alt="" width={20} height={20} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
