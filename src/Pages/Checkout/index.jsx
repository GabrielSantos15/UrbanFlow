import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Checkout.module.css";
import { FaTrash } from "react-icons/fa6";
import logo from "../../assets/images/logo.png"

export default function Checkout() {
  const { cart, increase, decrease, removeFromCart, clearCart, total } =
    useCart();
  const count = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;
  
  if (count <= 0) {
    return (
      <main className={styles.emptyCart}>
        <img src={logo} alt="Logo Urban Flow" />
        <h2>Seu carrinho está vazio</h2>
        <p>Parece que você ainda não escolheu seus produtos.</p>
        <NavLink to="/products" className={styles.primaryBtn}>
          Ir para a loja
        </NavLink>
      </main>
    );
  }

  return (
    <main className={styles.checkout}>
      <section className={styles.checkoutList}>
        <header>
          <div>
            <h2>Carrinho</h2>
            <p>Revise seus itens antes do checkout</p>
          </div>
          <button className={styles.clearBtn} onClick={() => clearCart()}>
            <FaTrash /> Limpar
          </button>
        </header>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} />

            <div className={styles.productItem}>
              <span className={styles.nameItem}>{item.name}</span>
              <span>R$ {item.price.toFixed(2)}</span>
            </div>

            <div className={styles.quantityItem}>
              <button
                onClick={
                  item.quantity > 1 ? () => decrease(item.id) : undefined
                }
                className={
                  item.quantity > 1
                    ? styles.quantityBtn
                    : styles.quantityDisabled
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className={styles.quantityBtn}
                onClick={() => increase(item.id)}
              >
                +
              </button>
            </div>

            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>

            <button
              className={styles.removeItem}
              onClick={() => removeFromCart(item.id)}
            >
              x
            </button>
          </div>
        ))}
      </section>

      <section className={styles.checkoutContainer}>
        <span>
          <p>Total:</p>
          <p className={styles.priceItem}>R$ {total.toFixed(2)}</p>
        </span>
        <button className={styles.primaryBtn}>Finalizar Compra</button>
        <NavLink to={"/products"} className={styles.secondaryBtn}>
          Ver produtos
        </NavLink>
      </section>
    </main>
  );
}
