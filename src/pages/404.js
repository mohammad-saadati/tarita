import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image404 from "@/assets/images/404Image.svg";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 6000);

    return () => {
      console.log("cleared....................");
      clearTimeout(timer);
    };
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-start">
        <Image src={Image404} width={153} height={153} alt="404-image" />
        <div>
          <div className="text-5xl font-bold">404</div>
          <div className="text-lg font-bold my-3">
            صفحه ی مورد نظر یافت نشد.
          </div>
          <div className="text-[#828282] text-sm my-3">
            این صفحه پس از
            <span className="text-black">6 ثانیه </span>
            بسته خواهد شد.
          </div>
          <Link
            href="/"
            className="flex justify-center items-center font-medium text-white text-xs bg-[#333333] w-[166px] h-[48px] rounded-[7px] mt-20"
          >
            رفتن به صفحه ی اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}
