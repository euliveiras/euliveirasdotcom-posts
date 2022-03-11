import { products } from "../utils/products";

export const ConnectToClient = () => {
  return {
    async getAll() {
      return { results: products };
    },
  };
};
