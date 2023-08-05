import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import StoreProvider from "@/components/Providers/store";
import arrowLeft from "@/assets/images/arrow-left.svg";

type layoutProps = {
  children: ReactElement;
};

const Pure = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <StoreProvider>
          <div className="container my-[70px] md:my-[100px]">
            <div className="grid grid-cols-12 gap-4 relative">
              <div className="col-span-12 mx-auto">
                <Link href="/" className="flex mb-20">
                  <Image
                    src={arrowLeft}
                    width={24}
                    height={24}
                    alt="arrowLeft"
                  />
                  <div className="text-sm font-bold mr-2">بازگشت به سایت</div>
                </Link>
                {children}
              </div>
            </div>
          </div>
        </StoreProvider>
      </div>
    </>
  );
};

export default Pure;
