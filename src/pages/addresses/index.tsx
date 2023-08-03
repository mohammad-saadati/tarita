import Image from "next/image";
import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import plusWhite from "@/assets/images/plus-white.svg";

interface AddressesProps {
  data: {};
}

const Addresses: NextPageWithLayout<AddressesProps> = ({ data }) => {
  return (
    <>
      <div className="flex justify-end">
        <button className="flex justify-center items-center text-white text-[10px] bg-[#333] rounded-[7px] w-[135px] h-[40px]">
          <Image src={plusWhite} width={12} height={12} alt="" />
          <div className="mr-2">افزودن آدرس جدید</div>
        </button>
      </div>
      <div className="grid grid-cols-12 gap-4">
        
        <div className="col-span-12">

        </div>
      </div>
    </>
  );
};

Addresses.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export default Addresses;
