import React, { FC } from "react";
import Image from "next/image";
import userIcon from "@/assets/images/user.svg";
import bagIcon from "@/assets/images/bag.svg";
import searchNormal from "@/assets/images/search-normal.svg";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <div className="bg-[#2B2B2B]">
      <div className="container flex justify-between items-center h-[60px]">
        <div className="text-white text-[10px] md:text-sm">فروشگاه آنلاین فرش</div>
        <div className="relative">
          <input className="bg-[#4A4A4A] rounded-[7px] h-[34px] text-[#D4D4D4] p-2 focus-visible:outline-none w-[150px] md:w-[400px]" />
          <div className="absolute left-2 top-2">
            <Image
              src={searchNormal}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={userIcon}
            alt="user"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={bagIcon}
            alt="user"
            width={20}
            height={20}
            className="mr-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
