export type IProduct = {
  name: string;
  price: number;
  description: string;
  image: string;
  url: string;
};

export const products: IProduct[] = [
  {
    name: "Aspirador de pó",
    price: 800,
    description: "Você aperta um botãozinho e voilá, ele liga e aspira pó",
    image: "",
    url: "aspirador",
  },
  {
    name: "Fone de ouvido",
    price: 200,
    description: "Para ouvir música",
    image: "",
    url: "fone",
  },
  {
    name: "Computador",
    price: 3000,
    description: "Para você jogar League of Legends",
    image: "",
    url: "computador",
  },
];
