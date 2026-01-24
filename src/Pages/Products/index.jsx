import Marquee from "../../components/Marquee";
import HeroProjects from "../../components/products/Hero";
import ProductsGrid from "../../components/products/ProductsGrid";
import productsList from "../../data/productsList";

export default function Products() {
  return (
    <main>
      <HeroProjects></HeroProjects>
      <ProductsGrid list={productsList}></ProductsGrid>
    </main>
  );
}
