import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import arrowRight from "@/assets/images/arrow-right.svg";
import carpet from "@/assets/images/carpet.svg";
import { commaSeperator } from "@/utils/helpers";

type OrdersDetailProps = {
  // Define props here
};

const OrdersDetail: FC<OrdersDetailProps> = () => {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.back()}
        className="inline-flex items-center cursor-pointer mb-10"
      >
        <Image src={arrowRight} alt="" width={24} height={24} />
        <div className="font-bold text-sm mr-3">جزییات سفارش</div>
      </div>
      <div>
        <div className="mb-6">شماره سفارش</div>
        <div className="flex items-center">
          <div className="font-bold ml-16">25654845412</div>
          <div className="ml-16">تاریخ 1400/05/21</div>
          <div className="flex items-center ml-16">
            <div className="ml-2">وضعیت :</div>
            <div className="text-[#F2994A]">در حال پردازش</div>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="font-bold mb-6">محصولات</div>
        <div className="border rounded p-5">
          <div className="flex justify-between items-start">
            <div className="flex">
              <Image src={carpet} width={63} height={86} alt="" />
              <div className="mr-3">
                <div className="font-medium mb-2">
                  فرش دستباف ابریشمی 2200 شانه
                </div>
                <div className="flex items-center text-sm mb-1">
                  <div>رنگ:</div>
                  <div>لاکی</div>
                </div>
                <div className="flex items-center text-sm">
                  <div>اندازه:</div>
                  <div>12 متری</div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="font-bold ml-1">{commaSeperator(18550000)}</div>
              <div className="text-[10px]">تومان</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold mb-6 mt-12">آدرس تحویل</div>
        <div className="flex items-center p-5 border rounded">
          <div className="ml-16 text-sm">تهران،تهران،پاسداران</div>
          <div className="text-sm">کدپستی: 371114548</div>
        </div>
      </div>
      <div>
        <div className="font-bold mb-6 mt-12">اطلاعات پرداخت</div>
        <div className="flex justify-between items-center text-sm p-5 border rounded">
          <div className="flex flex-col">
            <div className="mb-2">درگاه پرداخت</div>
            <div className="font-medium">به پرداخت ملت</div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">درگاه پرداخت</div>
            <div className="font-medium">1400/05/21 - 22:13</div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">شماره مرجع</div>
            <div className="font-medium">5246821654</div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">شماره تراکنش</div>
            <div className="font-medium">5246821654</div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">وضعیت انجام</div>
            <div className="text-[#27AE60]">موفق</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersDetail;
