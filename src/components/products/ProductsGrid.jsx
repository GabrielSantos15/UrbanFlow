import ProductCard from "../productCard";
import styles from "./ProductsGrid.module.css"

export default function ProductsGrid({ list }) {
  return (
    <section className={styles.gridContainer}>
      {list.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
}
