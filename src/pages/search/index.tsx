import Link from "next/link";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState, ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import noResult from "@/assets/images/no-search-result.svg";
import infoCircle from "@/assets/images/info-circle.svg";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import Rangetest from "@/components/Filters/Rangetest";
import Filters from "@/components/Filters/index";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
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
  const [showLikeModal, setShowLikeModal] = useState(false);
  const [reactiveProducts, setProducts] = useState(products);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
      return;
    }
    const fn = async () => await updateData();
    fn();
  }, [router.query]);

  const updateData = async () => {
    if (loading) return;

    const queryString = Object.keys(router.query)
      .map((key) => {
        if (router.query[key])
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            router.query[key] as string
          )}`;
      })
      .join("&");

    const endpoint = `products?${queryString}`;

    try {
      setLoading(true);

      const res = await axios.get(endpoint);
      const { data } = res;

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const modalToggler = () => {
    setShowLikeModal(!showLikeModal);
  };
  const resetFilters = (event: React.MouseEvent<HTMLElement>) => {
    router.push({
      pathname: "/search/",
    });
  };

  return (
    <>
      <div className="grid grid-cols-12 lg:gap-8">
        {reactiveProducts.length ? (
          <>
            <div className="col-span-12 lg:col-span-3 relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 relative">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-semibold">فیلتر ها</div>
                    <div
                      className="text-sm cursor-pointer"
                      onClick={resetFilters}
                    >
                      ریست کردن
                    </div>
                  </div>
                </div>
                <div className="col-span-12 relative">
                  <Filters
                    filters={filters.categories}
                    title="دسته بندی نتایج"
                  />
                </div>
                <div className="col-span-12 relative">
                  <Filters filters={filters.knotCount} title="تعداد شانه" />
                </div>
                <div className="col-span-12 relative">
                  <Filters filters={filters.brands} title="برند" />
                </div>
                <div className="col-span-12 relative">
                  <Rangetest />
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
                    <Card item={item} openLikeModal={modalToggler} />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-12 mx-auto">
            <Image src={noResult} alt="no result" />
            <div className="flex justify-center items-center text-[#F2994A] mt-8">
              <Image src={infoCircle} alt="no result" className="ml-2" />
              <div>هیچ محصولی مطابق با جست و جو {} یافت نشد.</div>
            </div>
          </div>
        )}
      </div>
      {showLikeModal && (
        <Modal close={modalToggler} showClose={true}>
          <>
            <div className="text-center">
              برای افزودن محصول به لیست علاقمندی ها ابتدا وارد شوید.
            </div>
            <div className="flex">
              <button className="bg-blue-700 text-white p-2 px-6 rounded mt-8 mx-auto">
                <Link href="/login">ورورد</Link>
              </button>
            </div>
          </>
        </Modal>
      )}
    </>
  );
};

Search.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.default);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;

  const queryString = Object.keys(query)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`
    )
    .join("&");

  try {
    const [products, filters] = await Promise.all([
      axios.get(`/products?_page=1&_limit=20&${queryString}`),
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
