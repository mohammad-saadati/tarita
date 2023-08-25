import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import axios from "@/utils/axios";
// font
import localFont from "next/font/local";
//
import "@/app/globals.css";
// icomoon
import "../../public/fonts/icomoon/style.css";
// store
import { store } from "@/store";
import { setCurrentUser, User } from "@/store/features/currentUser";

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
  data: User;
};

export default function MyApp({
  Component,
  pageProps,
  data,
}: AppPropsWithLayout & AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  store.dispatch(setCurrentUser(data));

  return getLayout(
    <main className={fonts.className}>
      <Component {...pageProps} />
    </main>
  );
}

type AppOwnProps = { data: {} };

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  try {
    const res = await axios.get("/currentUser");
    const { data } = res;

    // console.log("custom app ****", data);

    return { ...ctx, data: data };
  } catch (error) {
    console.log(error);
  }

  return {
    ...ctx,
    data: {},
  };
};
