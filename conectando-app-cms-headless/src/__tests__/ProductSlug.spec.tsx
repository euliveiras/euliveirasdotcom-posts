import { screen, render } from "@testing-library/react";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { getStaticPaths, getStaticProps } from "../pages/product/[slug]";
import { products } from "../utils/products";

describe("Product", () => {
  test("it should return product from the matched path parameter in getStaticProps", async () => {
    const product = products[0];
    const ctx = { params: { slug: product.url } } as GetStaticPropsContext;
    const { props }: any = await getStaticProps(ctx);
    expect(props).toEqual(product);
  });
  test("it should return correctly path params from getStaticPaths in product/slug", async () => {
    const mockedProductsPaths = products
      .slice(1)
      .map((product) => ({ params: { slug: product.url } }));
    const mockedGetStaticPathsReturnedValue = {
      paths: mockedProductsPaths,
      fallback: true,
    } as GetStaticPathsResult;
    const ctx = {};
    const getStaticPathsReturnedValue = await getStaticPaths(ctx);
    expect(mockedGetStaticPathsReturnedValue).toEqual(getStaticPathsReturnedValue);
  });
});
