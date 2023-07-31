import Link from "next/link";
import React, { FC } from "react";
import { commaSeperator } from "@/utils/helpers";

type OrdersProps = {
  // Define props here
};

const Orders: FC<OrdersProps> = () => {
  return (
    <>
      <table className="w-full rounded-lg">
        <thead className="bg-[#F2F2F2] rounded-lg">
          <tr className="p-1">
            <th className="text-right p-3">شماره سفارش</th>
            <th className="text-right p-3">تاریخ</th>
            <th className="text-right p-3">مبلغ</th>
            <th className="text-right p-3">وضعیت</th>
            <th className="text-right p-3">جزییات سفارش</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold p-3">256985475126</td>
            <td className="p-3">1400/05/21</td>
            <td className="p-3">{commaSeperator(25500200)}</td>
            <td className="p-3 text-[#F2994A]">در حال پردازش</td>
            <td className="p-3">
              <Link href="/orders/1">مشاهده جزییات</Link>
            </td>
          </tr>
          <tr>
            <td className="font-bold p-3">256985475126</td>
            <td className="p-3">1400/05/21</td>
            <td className="p-3">{commaSeperator(25500200)}</td>
            <td className="p-3 text-[#27AE60]">تحویل داده شده</td>
            <td className="p-3">
              <Link href="/orders/1">مشاهده جزییات</Link>
            </td>
          </tr>
          <tr>
            <td className="font-bold p-3">256985475126</td>
            <td className="p-3">1400/05/21</td>
            <td className="p-3">{commaSeperator(25500200)}</td>
            <td className="p-3">ارسال شده</td>
            <td className="p-3">
              <Link href="/orders/1">مشاهده جزییات</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Orders;
