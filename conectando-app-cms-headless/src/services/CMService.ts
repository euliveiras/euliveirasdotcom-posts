import { products } from "../utils/products";

export const ConnectToClient = () => {
  return {
    async getAll() {
      return { results: products };
    },
    async getSingle(id: string) {
      return { results: products.find((item) => id === item.url) };
    },
  };
};
