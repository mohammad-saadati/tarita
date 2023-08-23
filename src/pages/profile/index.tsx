import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import axios from "@/utils/axios";

interface AddressesProps {
  data: {};
}

const Addresses: NextPageWithLayout<AddressesProps> = ({ data }) => {
  return (
    <>
      <div className="mb-[20px] font-medium">اطلاعات کاربری</div>
      <form>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <input
              type="text"
              placeholder="دکتر باقری"
              className="border w-full p-3 rounded-[7px]"
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <input
              type="text"
              placeholder="09121238695"
              className="border w-full p-3 rounded-[7px]"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 md:mt-3">
            <input
              type="text"
              placeholder="parvizi.reza1993@gmail.com"
              className="border w-full p-3 rounded-[7px]"
            />
          </div>
          <div className="col-span-6"></div>
          <div className="col-span-12 lg:col-span-6 md:mt-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                placeholder="parvizi.reza1993@gmail.com"
                className="border p-3 rounded-[7px]"
              />
              <div className="text-sm mr-2">
                مایل به دریافت آخرین اخبار تخفیف ها و بروزرسانی می باشم.
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-[45px] font-medium">
            تنظیمات امنیتی
          </div>
          <div className="col-span-12 lg:col-span-6">
            <input
              type="text"
              placeholder="گذر واژه فعلی"
              className="border w-full p-3 rounded-[7px]"
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <input
              type="text"
              placeholder="گذر واژه جدید"
              className="border w-full p-3 rounded-[7px]"
            />
          </div>
        </div>
        <div className="flex justify-end items-center mt-5">
          <button className="text-[13px] font-medium mt-5 bg-[#F2F2F2] text-[#333] w-[100px] h-[48px] ml-4 rounded-[7px]">
            لغو
          </button>
          <button className="text-[13px] font-medium mt-5 bg-[#333] text-white w-[100px] h-[48px] rounded-[7px]">
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </>
  );
};

Addresses.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export default Addresses;
