import { screen, render } from "@testing-library/react";
import { GetStaticPropsContext } from "next";
import { getStaticProps } from "../pages/product/[slug]";
import { products } from "../utils/products";

describe("Product", () => {
  test("it should return product from the matched path parameter in getStaticProps", async () => {
    const product = products[0];
    const ctx = { params: { slug: product.url } } as GetStaticPropsContext;
    const { props }: any = await getStaticProps(ctx);
    expect(props).toEqual(product);
  });
});
