import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Our Brand (ECO Paper)"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />

      <Section title="Other Top Selling Products" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
