import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import ProductThumbSwiper from "@/components/ProductThumbSwiper";
import axios from "@/utils/axios";

interface ProductProps {
  data: {
    id: number;
    title: string;
    mainImages: string[];
    thumbnails: [];
    cat: string;
    brand: string;
    stock: number;
    features: { title: string; value: number }[];
    colors: string[];
    sizes: { title: string; price: number }[];
  };
}

const Product: NextPageWithLayout<ProductProps> = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <ProductThumbSwiper
            images={data.mainImages}
            thumbs={data.thumbnails}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div>test</div>
        </div>
      </div>
    </div>
  );
};

Product.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.default);

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
