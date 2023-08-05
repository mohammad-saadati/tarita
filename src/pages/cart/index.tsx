import Image from "next/image";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import { store } from "@/store";
import { commaSeperator } from "@/utils/helpers";
import plusWhite from "@/assets/images/plus-white.svg";
import minusWhite from "@/assets/images/minusWhite.svg";
import removeCircle from "@/assets/images/removeCircle.svg";
import checkedCircle from "@/assets/images/checkedCircle.svg";
import certifiedMail from "@/assets/images/certified-mail.svg";
import cardToCard from "@/assets/images/card-to-card.svg";
import mellat from "@/assets/images/mellat.svg";
import saman from "@/assets/images/saman.svg";

interface CartProps {
  data: {};
}

const Cart: NextPageWithLayout<CartProps> = ({ data }) => {
  const cartItems = store.getState().currentUser.user.cartItems;
  const addresses = store.getState().currentUser.user.addresses;

  return (
    <>
      <div className="mb-10 text-lg font-bold">سبد خرید</div>
      <div
        className="grid grid-cols-12 gap-4"
        style={{ gridAutoFlow: "dense" }}
      >
        <div className="col-span-12 md:col-span-8 mb-10">
          <div className="grid grid-cols-12">
            {cartItems.map((item, index) => (
              <div className="col-span-12 md:col-span-12 mb-10">
                <div className="border rounded-[10px] py-5 px-2.5">
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      width={90}
                      height={120}
                      alt=""
                      className="max-h-[120px]"
                    />
                    <div className="flex flex-col border-b w-full pb-2">
                      <div className="flex justify-between font-medium">
                        {item.name}
                        <div>
                          <Image
                            src={removeCircle}
                            width={24}
                            height={24}
                            alt=""
                            className="cursor-pointer max-h-[120px]"
                          />
                        </div>
                      </div>
                      <div className="flex items-center text-sm my-1">
                        <div>رنگ : </div>
                        <div>{item.color}</div>
                      </div>
                      <div className="flex items-center text-sm my-1">
                        <div>اندازه : </div>
                        <div>{item.size}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mr-[90px] mt-5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center justify-center bg-[#333] w-[32px] h-[32px] rounded-[8px]">
                        <Image src={plusWhite} width={12} height={12} alt="" />
                      </div>
                      <div className="flex items-center justify-center mx-2 border rounded-[8px] w-[46px] h-[32px]">
                        {item.count}
                      </div>
                      <div className="flex items-center justify-center bg-[#333] w-[32px] h-[32px] rounded-[8px]">
                        <Image src={minusWhite} width={12} height={12} alt="" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="font-medium">
                        {commaSeperator(item.price)}
                      </div>
                      <div className="text-sm mr-1">تومان</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="border p-5">
            <div className="mb-1">
              <div className="flex justify-between items-center mb-5">
                <div className="font-medium">هزینه کالاها</div>
                <div className="flex items-center">
                  <div className="font-medium">{commaSeperator(18560000)}</div>
                  <div className="text-sm mr-1">تومان</div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="font-medium">هزینه ارسال</div>
                <div className="flex items-center">
                  <div className="font-medium">{commaSeperator(18560000)}</div>
                  <div className="text-sm mr-1">تومان</div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-5 border-y py-3">
                <input className="border p-1" placeholder="کد" />
                <button className="text-white text-sm bg-[#333] rounded-[8px] p-3">
                  اعمال کد
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-medium">هزینه نهایی</div>
                <div className="flex items-center">
                  <div className="font-medium">{commaSeperator(18560000)}</div>
                  <div className="text-sm mr-1">تومان</div>
                </div>
              </div>
            </div>
            <button className="text-white bg-[#333] rounded-[7px] w-full p-3 mt-10">
              پرداخت سفارش
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 border rounded-[7px] px-5 py-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold">آدرس تحویل سفارش</div>
            <div className="text-sm font-medium">ارسال به یک آدرس دیگر</div>
          </div>
          <div className="">
            {addresses.map((address, index) => (
              <div className="mt-10" key={index}>
                <div className="border-[#F2F2F2] border-[2px] p-3.5 rounded-[7px]">
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-sm">{address.name}</div>
                    {address.isActive ? (
                      <Image
                        src={checkedCircle}
                        width={20}
                        height={20}
                        alt=""
                      />
                    ) : null}
                  </div>
                  <div className="text-sm my-5">{address.location}</div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm">
                      <div>کدپستی: </div>
                      <div>{address.postalCode}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 border rounded-[7px] px-5 py-8">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-bold">انتخاب شیوه ارسال</div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <div className="border-[#F2F2F2] border-[2px] p-3.5 rounded-[7px]">
                <div className="flex items-center">
                  <Image
                    src={certifiedMail}
                    width={45}
                    height={45}
                    alt="certifiedMail"
                  />
                  <div className="flex flex-col w-full mr-2">
                    <div className="flex justify-between items-center w-full mb-3">
                      <div className="text-sm font-medium">پست پیشتاز</div>
                      {/* <Image
                        src={checkedCircle}
                        width={20}
                        height={20}
                        alt=""
                      /> */}
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="text-sm">3 تا 5 روز کاری</div>
                      <div className="flex justify-between items-center text-xs">
                        <div>{commaSeperator(25000)}</div>
                        <div>تومان</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="border-[#F2F2F2] border-[2px] p-3.5 rounded-[7px]">
                <div className="flex items-center">
                  <Image
                    src={certifiedMail}
                    width={45}
                    height={45}
                    alt="certifiedMail"
                  />
                  <div className="flex flex-col w-full mr-2">
                    <div className="flex justify-between items-center w-full mb-3">
                      <div className="text-sm font-medium">پست سفارشی</div>
                      <Image
                        src={checkedCircle}
                        width={20}
                        height={20}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="text-sm">3 تا 5 روز کاری</div>
                      <div className="flex justify-between items-center text-xs">
                        <div>{commaSeperator(25000)}</div>
                        <div>تومان</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 border rounded-[7px] px-5 py-8">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-bold">روش پرداخت سفارش</div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <div className="border-[#F2F2F2] border-[2px] p-3.5 rounded-[7px]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <Image src={mellat} width={45} height={45} alt="mellat" />
                    <div className="flex flex-col text-sm font-medium w-full mr-2">
                      پرداخت انلاین بانک ملت
                    </div>
                  </div>
                  <Image src={checkedCircle} width={20} height={20} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="border-[#F2F2F2] border-[2px] p-3.5 rounded-[7px]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <Image src={saman} width={45} height={45} alt="mellat" />
                    <div className="flex flex-col text-sm font-medium w-full mr-2">
                      پرداخت انلاین بانک ملت
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="border-[#F2F2F2] border-[2px] p-3.5 rounded-[7px]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <Image src={cardToCard} width={45} height={45} alt="mellat" />
                    <div className="flex flex-col text-sm font-medium w-full mr-2">
                      پرداخت انلاین بانک ملت
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Cart.getLayout = (page: ReactElement) => identifier(page, LayoutTypes.default);

export default Cart;
