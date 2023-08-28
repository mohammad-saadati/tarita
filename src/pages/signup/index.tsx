import Link from "next/link";
import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import eye from "@/assets/images/eye.svg";

interface SignupProps {}

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Signup: NextPageWithLayout<SignupProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-[310px]">
      <div className="text-center text-2xl font-bold mb-8">ثبت نام</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="border p-2 my-3 w-full rounded-[7px]"
            placeholder="نام و نام خانوادگی"
            {...register("username", { required: "نام کاربری را وارد کنید" })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs">{errors.username.message}</p>
          )}
        </div>
        <div>
          <input
            className="border p-2 my-3 w-full rounded-[7px]"
            placeholder="ایمیل"
            {...register("email", { required: "ایمیل را وارد کنید" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="relative">
          <input
            className="border p-2 my-3 w-full rounded-[7px]"
            placeholder="رمز عبور"
            {...register("password", { required: "پسورد را وارد کنید" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
          <Image
            src={eye}
            width={20}
            height={20}
            alt="eye"
            className="absolute top-[1.5rem] left-2 cursor-pointer"
          />
        </div>
        <div className="flex items-center my-2">
          <input type="checkbox" />
          <div className="text-xs mr-2">
            اطلاعات من را برای ورود بعدی ذخیره کن.
          </div>
        </div>
        <div>
          <button
            className="text-sm text-white bg-[#333333] w-full p-2 my-3 rounded-[7px]"
            type="submit"
          >
            ورود
          </button>
        </div>
      </form>
      <div className="flex justify-center text-xs">
        <Link href="/forgot-password">فراموشی رمز عبور</Link>
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
