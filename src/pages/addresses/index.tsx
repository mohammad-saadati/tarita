import Image from "next/image";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import { store } from "@/store";
import plusWhite from "@/assets/images/plus-white.svg";
import starFilled from "@/assets/images/starFilled.svg";
import starEmpty from "@/assets/images/starEmpty.svg";
import deleteRounded from "@/assets/images/deleteRounded.svg";
import pencilRounded from "@/assets/images/pencilRounded.svg";

interface AddressesProps {
  data: {};
}

const Addresses: NextPageWithLayout<AddressesProps> = () => {
  const addresses = store.getState().currentUser.user.addresses || [];

  console.log(
    "store.getState().currentUser.user.addresses",
    store.getState().currentUser.user.addresses
  );

  return (
    <>
      <div className="flex justify-end">
        <button className="flex justify-center items-center text-white text-[10px] bg-[#333] rounded-[7px] w-[135px] h-[40px]">
          <Image src={plusWhite} width={12} height={12} alt="" />
          <div className="mr-2">افزودن آدرس جدید</div>
        </button>
      </div>
      <div className="grid grid-cols-12">
        {addresses.length ?
          addresses.map((address, index) => (
            <div className="col-span-12 mt-10" key={index}>
              <div className="border-[#F2F2F2] border-[2px] p-3.5 rounded-[7px]">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-sm">{address.name}</div>
                  {address.isActive ? (
                    <Image src={starFilled} width={20} height={20} alt="" />
                  ) : (
                    <Image src={starEmpty} width={20} height={20} alt="" />
                  )}
                </div>
                <div className="text-sm my-5">{address.location}</div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">{address.postalCode} کدپستی:</div>
                  <div className="flex items-center">
                    <Image
                      src={pencilRounded}
                      width={34}
                      height={34}
                      alt="edit-address"
                    />
                    <Image
                      src={deleteRounded}
                      width={34}
                      height={34}
                      alt="remove-address"
                    />
                  </div>
                </div>
              </div>
            </div>
          )) : ''}
      </div>
    </>
  );
};

Addresses.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export default Addresses;
