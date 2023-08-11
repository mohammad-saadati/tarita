import Image from "next/image";
import Link from "next/link";
import Image404 from "@/assets/images/404Image.svg";

export default function Custom404() {
  return (
    <div class="flex justify-center items-center h-screen">
      <Image src={Image404} width={153} height={153} alt="404-image" />
      <div>
        <div>404</div>
        <div>صفحه ی مورد نظر یافت نشد.</div>
        <div>
          این صفحه پس از
          <span>10 ثانیه</span>
          بسته خواهد شد.
        </div>
        <Link href="/" className="text-white bg-[#333333]">رفتن به صفحه ی اصلی</Link>
      </div>
    </div>
  );
}
