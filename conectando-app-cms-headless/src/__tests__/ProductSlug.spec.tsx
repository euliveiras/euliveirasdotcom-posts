import * as MockedCMService from "../services/CMService";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { getStaticPaths, getStaticProps } from "../pages/product/[slug]";
import { products } from "../utils/products";

jest.spyOn(MockedCMService, "ConnectToClient").mockImplementation(() => ({
  async getSingle(productId) {
    return {
      results: products.find((item) => item.url === productId),
    };
  },
  async getAll() {
    return { results: products };
  },
}));

describe("Product", () => {
  test("it should return product from the matched path parameter in getStaticProps", async () => {
    const product = products[0];
    const ctx = {
      params: { slug: product.url },
    } as GetStaticPropsContext;
    const { props }: any = await getStaticProps(ctx);
    expect(props).toEqual({ results: product });
  });
  test("it should return correctly path params from getStaticPaths in product/slug", async () => {
    const mockedProductsPaths = products.map((product) => ({
      params: { slug: product.url },
    }));
    const mockedGetStaticPathsReturnedValue = {
      paths: mockedProductsPaths,
      fallback: true,
    } as GetStaticPathsResult;
    const ctx = {};
    const getStaticPathsReturnedValue = await getStaticPaths(ctx);
    expect(mockedGetStaticPathsReturnedValue).toEqual(
      getStaticPathsReturnedValue
    );
  });
});
