import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// font
import localFont from "next/font/local";
//
import "@/app/globals.css";
// icomoon
import "../../public/fonts/icomoon/style.css";

const fonts = localFont({
  src: [
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSansWeb.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSansWeb_UltraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSansWeb_Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSansWeb_Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSansWeb_Bold.ttf",
      weight: "700",
    },
  ],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <main className={fonts.className}>
      <Component {...pageProps} />
    </main>
  );
}
