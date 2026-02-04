import { useEffect, useState, useCallback } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useCartUI } from "../../context/CartUIContext";
import Logo from "../../assets/images/simpleLogo.png";
import styles from "./Header.module.css";

const SCROLL_THRESHOLD = 50;

function CartButton({ onClose }) {
  const { cart } = useCart();
  const { toggleCart } = useCartUI();

  const handleClick = () => {
    toggleCart();
    onClose?.();
  };

  const count = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

  return (
    <button
      className={styles.btnCart}
      onClick={handleClick}
      aria-label={`Carrinho (${count} produtos)`}
      type="button"
    >
      <FaCartShopping className={styles.iconButton} aria-hidden="true" />
      <p>{count} Produtos</p>
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = useCallback(() => {
    const current = window.scrollY;

    if (current < SCROLL_THRESHOLD) {
      setVisible(true);
    } else if (current < lastScroll) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setLastScroll(current);
  }, [lastScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <header
      className={`${styles.siteHeader} ${visible ? styles.show : styles.hide} ${
        menuOpen ? styles.open : ""
      }`}
    >
      <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/products">Produtos</NavLink>
      </nav>

      <NavLink to="/" className={styles.logo}>
        <img src={Logo} width={50} alt="Logo UrbanFlow" />
      </NavLink>

      <div className={styles.cartDesktop}>
        <CartButton />
      </div>

      <div className={styles.headerActions}>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          role="presentation"
        />
      )}

      <aside className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <nav className={styles.navMobile}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            Sobre
          </NavLink>
          <NavLink to="/products" onClick={closeMenu}>
            Produtos
          </NavLink>
          <CartButton onClose={closeMenu} />
        </nav>
      </aside>
    </header>
  );
}
