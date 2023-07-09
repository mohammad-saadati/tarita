import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";
import { identifier, LayoutTypes } from "@/components/layouts/layoutIdentifire";
import axios from "@/utils/axios";

interface SearchProps {}

const Search: NextPageWithLayout<SearchProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9 lg:col-span-10 relative">
        
      </div>
    </div>
  );
};

Search.getLayout = (page: ReactElement) =>
  identifier(page, LayoutTypes.default);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const res = await axios.get(`/products?_page=1&_limit=20`);
    const { data } = res;
    console.log("***ddddd*", data, context.params?.id);
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
  return { props: { data: {} } };
}

export default Search;
