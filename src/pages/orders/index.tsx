import { NextPageWithLayout } from "./_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import OrdersTable from "@/components/Orders";
//
import axios from "@/utils/axios";

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

const Orders: NextPageWithLayout<OrdersProps> = ({ data }) => {
  return (
    <>
      <OrdersTable />
    </>
  );
};

Orders.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

export async function getServerSideProps() {
  try {
    const res = await axios.get("/orders");
    const { data } = res;
    console.log("***ddddd*", data);
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }

  return { props: { data: {} } };
}

export default Orders;