import { GetStaticPaths, GetStaticProps } from "next";
import { ConnectToClient } from "../../services/CMService";
import { products } from "../../utils/products";

type ProductProps = {
  name: string;
};

const Product: React.FC<ProductProps> = ({ name }) => {
  return <h1>{name}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ApiClient = ConnectToClient();
  const { results } = await ApiClient.getAll();
  const productsPaths = results.map((product) => ({
    params: { slug: product.url },
  }));
  return { paths: [...productsPaths], fallback: true };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string };
  const ApiClient = ConnectToClient();
  const { results } = await ApiClient.getSingle(slug);

  return { props: { results } };
};

export default Product;
