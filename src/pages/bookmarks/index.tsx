import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
//
import Card from "@/components/Card";
// store
import { store } from "@/store";
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

const Orders: NextPageWithLayout<OrdersProps> = () => {
  const bookmarks = store.getState().currentUser.user.bookmarkeds;
  console.log(bookmarks.length);
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {bookmarks.map((item, index) => (
          <div
            className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3"
            key={index}
          >
            <Card item={item} isLiked={true} />
          </div>
        ))}
      </div>
    </>
  );
};

Orders.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.dashboard);

// export async function getServerSideProps() {
//   try {
//     const res = await axios.get("/orders");
//     const { data } = res;
//     console.log("***ddddd*", data);
//     return { props: { data } };
//   } catch (error) {
//     console.log(error);
//   }

//   return { props: { data: {} } };
// }

export default Orders;
