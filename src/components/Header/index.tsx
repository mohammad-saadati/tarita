import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import userIcon from "@/assets/images/user.svg";
import bagIcon from "@/assets/images/bag.svg";
import searchNormal from "@/assets/images/search-normal.svg";
// import { store } from "@/store";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setSearch } from "@/store/features/search";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  // const dispatch = useAppDispatch();
  const [searchVal, setSearchVal] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (Object.entries(router.query).length === 0) setSearchVal(null);
  }, [router.query]);

  const handleSearch = (event: any) => {
    if (
      (event.type === "keydown" && event.key !== "Enter") || // Check for Enter key press
      (event.type === "click" && event.button !== 0) // Check for left mouse click
    ) {
      return;
    }

    const queryParams = new URLSearchParams();

    queryParams.set("q", searchVal);

    router.replace({
      pathname: "/search/",
      search: queryParams.toString(),
    });
  };
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchVal(event.target.value);
  };

  return (
    <div className="bg-[#2B2B2B]">
      <div className="container flex justify-between items-center h-[60px]">
        <div className="text-white font-bold text-[10px] md:text-sm">
          <Link href="/" className="text-[12px]">
            {/* {store.getState().currentUser.user.id} */}
            فروشگاه آنلاین فرش
          </Link>
        </div>
        <div className="relative">
          <input
            onChange={handleSearchInputChange}
            onKeyDown={handleSearch}
            className="bg-[#4A4A4A] rounded-[7px] h-[34px] text-[#D4D4D4] p-2 focus-visible:outline-none w-[150px] md:w-[400px]"
          />
          <div className="absolute left-2 top-2">
            <Image
              src={searchNormal}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={handleSearch}
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
