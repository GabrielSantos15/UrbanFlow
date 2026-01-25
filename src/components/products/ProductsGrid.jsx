import ProductCard from "../productCard";
import styles from "./ProductsGrid.module.css"

export default function ProductsGrid({ list }) {
  return (
    <div className={styles.gridContainer}>
      {list.length  ?
      list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))  : <p>Sem produtos</p>
    }
    </div>
  );
}
