import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {



  function priceFormatad(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  return (
    <Link to={`/product/${product.id}`} className={styles.productCard}>
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div>
        <h3>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.price}>{priceFormatad(product.price)}</p>
        {product.oldPrice && (
          <p className={styles.oldPrice}>{priceFormatad(product.oldPrice)}</p>
        )}
      </div>
          
    </Link>
  );
}
