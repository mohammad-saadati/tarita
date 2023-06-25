type ProductDetailProps = {
  title: string;
  cat: string;
  brand: string;
  stock: number;
  features: { title: string; value: number }[];
  colors: string[];
  sizes: { title: string; price: number }[];
};
