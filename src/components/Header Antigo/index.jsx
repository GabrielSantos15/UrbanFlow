import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.estilos.css";
import Logo from "../../assets/images/simpleLogo.png"
import MobileMenu from "../MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img width={25} src={Logo} alt="" />

        {/* Desktop nav */}
        <nav className="nav-desktop">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Sobre</NavLink>
        </nav>

        {/* Mobile button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
