import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useCartUI } from "../../context/CartUIContext";
import Logo from "../../assets/images/simpleLogo.png";
import styles from "./Header.module.css";

function CartButton() {
  const { cart } = useCart();
  const { toggleCart } = useCartUI();

  const count = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

  return (
         <div className={styles.btnCart} onClick={toggleCart}>
            <FaCartShopping className={styles.iconButton}></FaCartShopping>
           <p>{count} Produtos</p>
         </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 50) {
        setVisible(true);
      } else if (current < lastScroll) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.siteHeader} ${visible ? styles.show : styles.hide} ${
        menuOpen ? styles.open : ""
      }`}
    >
      <div className={styles.overlay} onClick={closeMenu}>
        <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
          <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/products">Produtos</NavLink>
          </nav>
        </div>
      </div>

      <figure className={styles.logo}>
        <img src={Logo} width={50} alt="Logo UrbanFlow" />
      </figure>
      <CartButton></CartButton>
      <div className={styles.headerActions}>
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
