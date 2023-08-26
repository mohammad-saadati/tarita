import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";

interface PrivacyProps {}

const Privacy: NextPageWithLayout<PrivacyProps> = () => {
  return (
    <div>
      <div>
        <div className="text-xl font-bold mb-2">سیاست و حریم خصوصی</div>
        <div className="text-[#4F4F4F] text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </div>
      </div>
      <div>
        <div className="font-medium mb-2 mt-8">ما کی هستیم</div>
        <div className="text-[#4F4F4F] text-sm">
          حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
          شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد.
        </div>
      </div>
      <div>
        <div className="font-medium mb-2 mt-8">اطلاعات مورد نیاز</div>
        <div className="text-[#4F4F4F] text-sm">
          حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
          شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد.
        </div>
      </div>
      <div>
        <div className="font-medium mb-2 mt-8">انتقادات و پیشنهادات</div>
        <div className="text-[#4F4F4F] text-sm">
          حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
          شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد.
        </div>
      </div>
      <div>
        <div className="font-medium mb-2 mt-8">ارتباط با آراستا</div>
        <div className="flex text-xs mb-1">
          <div>آدرس</div>
          <div></div>
        </div>
        <div className="flex text-xs mb-1">
          <div>شماره تماس</div>
          <div></div>
        </div>
        <div className="flex text-xs mb-1">
          <div>پست الکترونیکی</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

Privacy.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.default);

export default Privacy;
