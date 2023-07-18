import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// font
import localFont from "next/font/local";
//
import "@/app/globals.css";
// icomoon
import "../../public/fonts/icomoon/style.css";
// context
import { UserProvider } from "@/contexts/UserContext";

const fonts = localFont({
  src: [
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSans(FaNum).ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSans(FaNum)_UltraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSans(FaNum)_Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSans(FaNum)_Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/IranSans/fonts/ttf/IRANSans(FaNum)_Bold.ttf",
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
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </main>
  );
}
