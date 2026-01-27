import { useParams } from "react-router-dom";
import products from "../../data/productsList";
import { useCart } from "../../context/CartContext";
import { useCartUI } from "../../context/CartUIContext";

import styles from "./ProductDetail.module.css";
import { FiHeart, FiRotateCcw, FiTruck, FiShoppingCart } from "react-icons/fi";
import ProductCard from "../../components/productCard";
import Carousel from "../../components/Carousel";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleCart } = useCartUI();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Produto não encontrado</h2>;


  const getRecommendedProducts = () => {
    const qtdRecommendedProducts = 7
    // Filtra produtos da mesma categoria excluindo o produto atual
    const sameCategory = products.filter(
      (p) => p.id !== product.id && 
      p.category.some(cat => product.category.includes(cat))
    );

    // Se tiver produtos da mesma categoria, retorna até 5
    if (sameCategory.length >= qtdRecommendedProducts) {
      return sameCategory.slice(0, qtdRecommendedProducts);
    }

    // Se não tiver 5 da mesma categoria, preenche com outros produtos
    const otherProducts = products.filter(
      (p) => p.id !== product.id && 
      !sameCategory.includes(p)
    );

    const recommended = [...sameCategory, ...otherProducts].slice(0, qtdRecommendedProducts);
    return recommended;
  };

  const recommendedProducts = getRecommendedProducts();

  return (
    <main >
      <section className={styles.pdpContainer}>
        <figure className={styles.imageSection}>
          <img src={product.image} alt={product.name} />
        </figure>
        <article className={styles.infoSection}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>${product.price}</p>
          <p>{product.description}</p>

          <button
            className={styles.buyBtn}
            onClick={() => {
              addToCart(product);
              toggleCart();
            }}
          >
            <FiShoppingCart />
            Adicionar ao carrinho
          </button>
          <div className={styles.productTrustSection}>
            <p className={styles.deliveryDisclaimer}>
              Tempo de entrega estimado: 3-6 dias úteis. Devoluções aceitas em
              até 45 dias após a compra.
              <span className={styles.simulationNote}>
                *Este é um projeto de portfólio. Nenhuma transação real será
                realizada.
              </span>
            </p>

            <ul className={styles.benefitsList}>
              <li>
                <FiHeart /> 1 ano de garantia
              </li>
              <li>
                <FiRotateCcw /> Devolução de 30 dias
              </li>
              <li>
                <FiTruck /> Frete para todo o mundo
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className={styles.recommendedProducts}>
        <h2>Você também pode gostar</h2>
        <Carousel>
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </section>
    </main>
  );
}
