import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Map from "react-map-gl";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";

interface ContactUsProps {}

type Inputs = {
  username: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs: NextPageWithLayout<ContactUsProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6">
                <div>
                  <input
                    className="p-2 border w-full rounded-[7px] mb-2"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    {...register("username", {
                      required: "نام و نام خانوادگی را وارد کنید",
                    })}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div>
                  <input
                    className="p-2 border w-full rounded-[7px] mb-2"
                    type="text"
                    placeholder="ایمیل"
                    {...register("email", { required: "ایمیل را وارد کنید" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-12">
                <div>
                  <input
                    className="p-2 border w-full rounded-[7px] mb-2"
                    type="text"
                    placeholder="موضوع"
                    {...register("subject", { required: "موضوع را وارد کنید" })}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-12">
                <div>
                  <textarea
                    className="p-2 border w-full rounded-[7px]"
                    placeholder="متن پیام"
                    rows={8}
                    {...register("message", {
                      required: "متن پیام را وارد کنید",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">
                      {errors.message.message}
                    </p>
                  )}
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
      <div className="w-full mt-[100px]">
        <Map
          mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWQtc2FhZGF0aSIsImEiOiJja2NkcjZjNWcwMTkyMnFvMHBlcDZ4ZDB0In0.FO-SV4qJdDw2lcLaMTgr1A"
          initialViewState={{
            longitude: 51.338716380180486,
            latitude: 35.69937638748445,
            zoom: 14,
          }}
          style={{ width: "100%", height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          attributionControl={false}
        />
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
