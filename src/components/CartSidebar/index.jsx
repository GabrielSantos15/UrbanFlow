import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useCartUI } from "../../context/CartUIContext";
import styles from "./CartSidebar.module.css";

export default function CartSidebar() {
  const { cart, increase, decrease, removeFromCart, total } = useCart();
  const { isOpen, closeCart } = useCartUI();
  const count = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
      onClick={closeCart}
    >
      <aside
        className={`${styles.cartSidebar} ${isOpen ? styles.cartSidebarVisible : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <p className={styles.countNumber}>{count}</p>
          <h2>Carrinho</h2>
          <button className={styles.closeCart} onClick={closeCart}>
            ✕
          </button>
        </header>
        {cart.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <>
            <div className={styles.listCart}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <figure>
                    <img src={item.image} alt="" />
                  </figure>
                  <div className={styles.infoItem}>
                    <span className={styles.nameItem}>{item.name}</span>
                    <span>R$ {item.price.toFixed(2)}</span>

                    <div className={styles.quantityItem}>
                      <button
                        onClick={
                          item.quantity > 1
                            ? () => decrease(item.id)
                            : undefined
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
                  </div>
                  <button
                    className={styles.removeItem}
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <footer>
              <span>
                <p>Subtotal:</p>
                <p className={styles.priceItem}>R$ {total.toFixed(2)}</p>
              </span>
              <NavLink to="/checkout" onClick={closeCart}>
                <button className={styles.checkoutBnt}>Revisar compra</button>
              </NavLink>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
