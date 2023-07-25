import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState, ReactElement, useEffect } from "react";
import useSWR from "swr";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import Filters from "@/components/Filters";
import Range from "@/components/Filters/Range";
import Card from "@/components/Card";
import axios from "@/utils/axios";
import { getFetcher } from "@/utils/fetcher";
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
  const [reactiveProducts, setProducts] = useState(products);
  const router = useRouter();

  console.log(router.asPath);
  const { data, error, isValidating } = useSWR(`${router.asPath}`, getFetcher);

  console.log(data);

  useEffect(() => {
    // updateData();
    // setProducts(data);
    console.log(data);
  }, [router]);

  const updateData = () => {
    const { data, error, isLoading } = useSWR(
      `/products?${router.asPath}`,
      getFetcher
    );

    console.log("data", data);
  };

  const resetFilters = (event: React.MouseEvent<HTMLElement>) => {
    router.push({
      pathname: "/search/",
    });
  };

  return (
    <div className="grid grid-cols-12 lg:gap-8">
      <div className="col-span-12 lg:col-span-3 relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 relative">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">فیلتر ها</div>
              <div className="text-sm cursor-pointer" onClick={resetFilters}>
                ریست کردن
              </div>
            </div>
          </div>
          <div className="col-span-12 relative">
            <Filters filters={filters.categories} title="دسته بندی نتایج" />
          </div>
          <div className="col-span-12 relative">
            <Filters filters={filters.knotCount} title="تعداد شانه" />
          </div>
          <div className="col-span-12 relative">
            <Filters filters={filters.brands} title="برند" />
          </div>
          <div className="col-span-12 relative">
            <Range />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="grid grid-cols-12 sm:gap-8">
          {reactiveProducts.map((item, index) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 relative"
              key={index}
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
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

    console.log("***ddddd*", products, filters.data);
    return { props: { products: products.data, filters: filters.data } };
  } catch (error) {
    console.log(error);
  }
  return { props: { data: {} } };
}

export default Search;
