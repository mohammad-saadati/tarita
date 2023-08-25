import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import OrdersDetail from "@/components/OrdersDetail";
//
import axios from "@/utils/axios";
import { ReactElement } from "react";

interface OrdersProps {
  data: {
    id: number;
    url: string;
    title: string;
    price: number;
    rate: number;
    category: string;
  };
}

const Orders: NextPageWithLayout<OrdersProps> = ({}) => {
  return (
    <>
      <OrdersDetail />
    </>
  );
};

Orders.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export async function getServerSideProps() {
  return { props: { data: {} } };
}

export default Orders;
