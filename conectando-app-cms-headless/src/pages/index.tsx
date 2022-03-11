import { GetStaticProps, NextPage } from "next";
import { Card } from "../components";
import { ConnectToClient } from "../services/CMService";

type HomeProps = {
  results: {
    name: string;
    description: string;
    image: string;
    price: number;
  }[];
};

const Home: NextPage<HomeProps> = ({ results }) => {
  return (
    <main>
      {results?.map((product) => (
        <Card key={product.name} data={product} />
      ))}
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const ApiClient = ConnectToClient();
  const { results } = await ApiClient.getAll();
  return { props: { results } };
};

export default Home;
