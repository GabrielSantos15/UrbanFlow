import Concept from "../../components/about/Concept";
import Hero from "../../components/about/Hero";
import Mission from "../../components/about/Mission";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/productCard";

import products from "../../data/productsList";
import muralImage from "../../assets/images/logo.png";
import styles from "./About.module.css";

export default function About() {
  const getRecommendedProducts = () => {
    const qtdRecommendedProducts = 7;
    const shuffled = [...products].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, qtdRecommendedProducts);
  };

  const recommendedProducts = getRecommendedProducts();
  return (
    <main className={styles.aboutPage}>
      <Hero></Hero>
      <Concept></Concept>
      <Mission></Mission>
      <section className={styles.objectiveContainer}>
        <img src={muralImage} alt="" />
        <span>
          <h2>Experiência Digital</h2>
          <p>
            Este site é um projeto técnico desenvolvido com foco em simular um
            e-commerce moderno, explorando conceitos de UI, UX e animações para
            criar uma experiência imersiva.
          </p>
        </span>
      </section>
      <section className={styles.productsSection}>
        <h2>Arte que você usa</h2>
        <Carousel>
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </section>
    </main>
  );
}
