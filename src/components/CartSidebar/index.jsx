import { useCart } from "../../context/CartContext"
import { useCartUI } from "../../context/CartUIContext"

const CartSidebar = () => {
  const { cart, increase, decrease, removeFromCart, total } = useCart()
  const { isOpen, closeCart } = useCartUI()

  if (!isOpen) return null

  return (
    <div className="overlay" onClick={closeCart}>
      <aside
        className="cart-sidebar"
        onClick={e => e.stopPropagation()}
      >
        <header>
          <h2>Carrinho</h2>
          <button onClick={closeCart}>✕</button>
        </header>

        {cart.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>

                <div>
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </div>
            ))}

            <footer>
              <strong>Total: R$ {total.toFixed(2)}</strong>
              <button>Finalizar compra</button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartSidebar
