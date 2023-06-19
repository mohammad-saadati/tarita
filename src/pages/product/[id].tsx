export default function Product () {
  return <div>product page</div>
}
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
