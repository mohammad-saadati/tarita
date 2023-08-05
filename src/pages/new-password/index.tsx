import Link from "next/link";
import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import { useState, ReactElement } from "react";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import eye from "@/assets/images/eye.svg";
import danger from "@/assets/images/danger.svg";

interface NewPasswordProps {}

const NewPassword: NextPageWithLayout<NewPasswordProps> = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="w-[310px]">
      {emailSent ? (
        <div>
          <div className="text-center text-2xl font-bold mb-8">
            بازیابی رمز عبور
          </div>
          <div className="text-center text-sm mb-8">
            کاربر گرامی لینک بازیابی رمز با موفقیت با ایمیل ارسال شد
            <div>example@yourdomain.com</div>
          </div>
          <div className="flex justify-center items-center text-center text-sm mb-8">
            <Image
              src={danger}
              width={20}
              height={20}
              alt="danger"
              className="cursor-pointer"
            />
            <div className="text-sm mr-2">مدت اعتبار لینک 1 ساعت است</div>
          </div>
          <Link className="flex justify-center" href="/">بازگشت به فروشگاه</Link>
        </div>
      ) : (
        <div>
          <div className="text-center text-2xl font-bold mb-8">
            ایجاد رمز جدید
          </div>
          <div className="text-center text-sm mb-8">
            کاربر گرامی لطفا رمز جدید را انتخاب کنید
          </div>
          <form>
            <div className="relative">
              <input
                className="border p-2 my-3 w-full rounded-[7px]"
                placeholder="گذر واژه جدید"
              />
              <Image
                src={eye}
                width={20}
                height={20}
                alt="eye"
                className="absolute top-[1.5rem] left-2 cursor-pointer"
              />
            </div>
            <div>
              <button
                className="text-sm text-white bg-[#333333] w-full p-2 my-3 rounded-[7px]"
                type="submit"
              >
                تغییر رمز
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

NewPassword.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.pure);

export async function getServerSideProps() {
  return { props: {} };
}

export default NewPassword;
