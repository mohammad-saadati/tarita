import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";

import axios from "@/utils/axios";

interface ProductProps {
  data: {
    id: number;
    title: string;
  };
}

const Product: NextPageWithLayout<ProductProps> = ({ data }) => {
  return <div>{data.title}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const res = await axios.get(`/product/${context.params?.id}`);
    const { data } = res;
    console.log("***ddddd*", context.params?.id);
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }

  return { props: { data: {} } };
}

export default Product;
