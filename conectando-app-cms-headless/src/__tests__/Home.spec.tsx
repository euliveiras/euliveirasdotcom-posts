import { render, screen } from "@testing-library/react";
import { GetStaticPropsResult } from "next";
import Home, { getStaticProps } from "../pages/index";
import * as MockedCMService from "../services/CMService";

const mockedProducts = [
  {
    name: "Mangá",
    description: "Gibi japones",
    price: 80,
    image: "path-to-image",
    url: "url-do-meu-produto",
  },
];

jest.spyOn(MockedCMService, "ConnectToClient").mockImplementation(() => ({
  async getAll() {
    return { results: mockedProducts };
  },
}));

describe("Home", () => {
  test("it should render Home component", () => {
    render(<Home results={mockedProducts} />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  test("function getStaticProps from Home component should return products from api", async () => {
    const ctx = {};
    const { props }: any = await getStaticProps(ctx);
    expect(props.results).toEqual(mockedProducts);
  });
});
