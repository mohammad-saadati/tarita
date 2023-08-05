import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import linkedin from "@/assets/images/linkedin.svg";
import twitter from "@/assets/images/twitter.svg";
import enamad from "@/assets/images/enamad.svg";
import samandehi from "@/assets/images/samandehi.svg";

type FooterProps = {
  // Define props here
};

const Footer: FC<FooterProps> = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="py-[30px] container">
        <div>
          <div className="text-2xl font-bold">فروشگاه آنلاین</div>
          <div>
            <div className="text-sm text-[#4F4F4F] mt-5 max-w-[450px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </div>
            <div className="md:flex justify-between border-b mt-[30px] pb-4 mb-4">
              <div className="flex flex-col ml-3 mb-5">
                <div className="text-xs font-bold mb-4 whitespace-nowrap">
                  اطلاعات تماس
                </div>
                <div className="mb-2">
                  <div className="text-xs">آدرس:</div>
                  <div></div>
                </div>
                <div className="mb-2">
                  <div className="text-xs">شماره تماس:</div>
                  <div></div>
                </div>
                <div className="mb-2">
                  <div className="text-xs">پست الکترونیکی:</div>
                  <div></div>
                </div>
                <div className="flex items-center">
                  <a
                    className="ml-2"
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      width={14}
                      height={14}
                      alt="linkedin"
                    />
                  </a>
                  <a
                    className="ml-2"
                    href="https://www.twitter.com"
                    target="_blank"
                  >
                    <Image src={twitter} width={14} height={14} alt="twitter" />
                  </a>
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <div className="flex flex-col ml-12">
                  <p className="text-xs font-bold mb-4">لینک های مفید</p>
                  <ul className="text-xs">
                    <li>
                      <Link href="/contact-us">تماس با ما</Link>
                    </li>
                    <li>حریم خصوصی</li>
                  </ul>
                </div>
                <div className="flex flex-col ml-12">
                  <p className="text-xs font-bold mb-4">کاربر</p>
                  <ul className="text-xs">
                    <li>حساب کاربری</li>
                    <li>سبد خرید</li>
                    <li>لیست مورد علاقه</li>
                    <li>پیگیری سفارش</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold mb-4">مجوز ها</p>
                  <ul className="flex">
                    <li>
                      <a href="#">
                        <Image
                          src={enamad}
                          width={58}
                          height={96}
                          alt="enamad"
                        />
                      </a>
                    </li>
                    <li className="mr-6">
                      <a href="#">
                        <Image
                          src={samandehi}
                          width={58}
                          height={76}
                          alt="samandehi"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-[#4F4F4F] text-xs">
            تمامی حقوق مادی و معنوی این وب سایت محفوظ میباشد.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
