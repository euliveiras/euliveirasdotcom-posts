import { GetStaticPaths, GetStaticProps } from "next";
import { products } from "../../utils/products";

type ProductProps = {
  name: string;
};

const Product: React.FC<ProductProps> = ({ name }) => {
  return <h1>{name}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { slug: "" } }], fallback: true };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string };
  const product = products.find((item) => item.url === slug);

  return { props: { ...product } };
};

export default Product;
