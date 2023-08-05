import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";

interface ContactUsProps {}

const ContactUs: NextPageWithLayout<ContactUsProps> = () => {
  return (
    <div>
      <div className="mb-20">
        <div className="font-bold text-xl mb-5">تماس با ما</div>
        <div className="text-sm">
          کاربر گرامی شما میتوانید از طریق روش های زیر با فروشگاه و تیم پشتیبانی
          ارتباط برقرار کنید.
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 text-sm">
          <div className="mb-10">
            <div className="font-bold mb-5">دفتر مرکزی</div>
            <div className="mb-2">آدرس</div>
            <div className="mb-2">شماره تماس</div>
            <div className="mb-2">پست الکترونیکی</div>
          </div>
          <div className="mb-10">
            <div className="font-bold mb-5">پشتیبانی</div>
            <div className="mb-2">شماره تماس</div>
            <div className="mb-2">پست الکترونیکی</div>
          </div>
          <div className="mb-10">
            <div className="font-bold mb-5">سفارشات</div>
            <div className="mb-2">شماره تماس</div>
            <div className="mb-2">پست الکترونیکی</div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="font-bold text-sm mb-5">ارسال پیام</div>
          <div className="text-sm mb-5">
            کاربر گرامی لطفا پیش از ارسال پیام حتما به بخش سوالات متداول مراجعه
            کنید. درصورتیکه پاسخ انرا پیدا نکرده اید سوال خود را ارسال فرمایید.
          </div>
          <form>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6">
                <div>
                  <input
                    className="p-2 border w-full rounded-[7px]"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div>
                  <input
                    className="p-2 border w-full rounded-[7px]"
                    type="text"
                    placeholder="ایمیل"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div>
                  <input
                    className="p-2 border w-full rounded-[7px]"
                    type="text"
                    placeholder="موضوع"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div>
                  <textarea
                    className="p-2 border w-full rounded-[7px]"
                    placeholder="متن پیام"
                    rows={8}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-10">
              <button className="text-white bg-[#333] p-3 rounded-[7px]">
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactUs.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.default);

export async function getServerSideProps() {
  return { props: {} };
}

export default ContactUs;
