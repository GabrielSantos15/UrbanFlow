import { useEffect, useState } from "react";
import { FaMoon, FaCircle, FaCode } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/simpleLogo.png"
import "./Header.estilos.css";

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
      className={`site-header ${visible ? "show" : "hide"} ${
        menuOpen ? "open" : ""
      }`}
    >
      <div className={menuOpen ? "overlay" : ""} onClick={closeMenu}>
        <div className="menu" onClick={(e) => e.stopPropagation()}>
          <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
          </nav>
        </div>
      </div>

      <figure className="logo">
        <img src={Logo} width={50} alt="Logo UrbanFlow" />
      </figure>
      
      <div className="header-actions">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
