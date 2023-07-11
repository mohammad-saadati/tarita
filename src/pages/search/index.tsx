import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import Filters from "@/components/Filters";
import Card from "@/components/Card";
import axios from "@/utils/axios";

interface SearchProps {
  products: {
    id: number;
    url: string;
    title: string;
    price: number;
    rate: number;
  }[];
  filters: { categories: []; knotCount: []; brands: [] };
}

const Search: NextPageWithLayout<SearchProps> = ({ products, filters }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9 lg:col-span-2 relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-9 lg:col-span-2 relative">
            <Filters filters={filters.categories} />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-2 relative">
            <Filters filters={filters.knotCount} />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-2 relative">
            <Filters filters={filters.brands} />
          </div>
        </div>
      </div>
      {products.map((item, index) => (
        <div
          className="col-span-12 md:col-span-9 lg:col-span-2 relative"
          key={index}
        >
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

Search.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.default);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const [products, filters] = await Promise.all([
      axios.get(`/products?_page=1&_limit=20`),
      axios.get(`/filters`),
    ]);

    console.log("***ddddd*", products, filters);
    return { props: { products: products.data, filters: filters.data } };
  } catch (error) {
    console.log(error);
  }
  return { props: { data: {} } };
}

export default Search;
