import Link from "next/link";
import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import eye from "@/assets/images/eye.svg";

interface SignupProps {}

const Signup: NextPageWithLayout<SignupProps> = () => {
  return (
    <div className="w-[310px]">
      <div className="text-center text-2xl font-bold mb-8">
        فراموشی رمز عبور
      </div>
      <form>
        <div>
          <input
            className="border p-2 my-3 w-full rounded-[7px]"
            placeholder="ایمیل"
          />
        </div>
        <div>
          <button
            className="text-sm text-white bg-[#333333] w-full p-2 my-3 rounded-[7px]"
            type="submit"
          >
            ارسال لینک بازیابی رمز
          </button>
        </div>
      </form>
      <div className="flex justify-center text-xs">
        <Link href="/signup">ثبت نام</Link>
        <div className="mx-3">|</div>
        <Link href="/login">ورود</Link>
      </div>
    </div>
  );
};

Signup.getLayout = (page: ReactElement) => identifier(page, LayoutTypes.pure);

export async function getServerSideProps() {
  return { props: {} };
}

export default Signup;
