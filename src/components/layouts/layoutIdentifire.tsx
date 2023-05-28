import Layout from "@/components/layouts/default";
import Dashboard from "@/components/layouts/dashboard";
import { ReactElement } from "react";

export enum LayoutTypes {
  default = "default",
  dashboard = "dashboard",
}

export const identifier = (page: ReactElement, layoutType: LayoutTypes) => {
  switch (layoutType) {
    case "default":
      return <Layout>{page}</Layout>;
    case "dashboard":
      return <Dashboard>{page}</Dashboard>;
  }
};
