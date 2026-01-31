import { useState } from "react";
import styles from "./PaymentForm.module.css";
import chipImage from "../../assets/images/card/chip.png";

import { useNavigate, NavLink } from "react-router-dom";
import Swal from "sweetalert2";


import visaLogo from "../../assets/images/card/visaLogo.png";
import mastercardLogo from "../../assets/images/card/mastercardLogo.png";
import eloLogo from "../../assets/images/card/eloLogo.png";
import amexLogo from "../../assets/images/card/amexLogo.png";
import urbanLogo from "../../assets/images/simpleLogo.png";
import { useCart } from "../../context/CartContext";

const brandLogos = {
  visa: visaLogo,
  mastercard: mastercardLogo,
  elo: eloLogo,
  amex: amexLogo,
  default: urbanLogo,
};

export default function PaymentForm() {
  const [turnCard, setTurnCard] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardBrand, setCardBrand] = useState("default");

const { clearCart } = useCart();
  const navigate = useNavigate();

    const handleCheckout = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "Pagamento Confirmado!",
      text: "Sua arte urbana está a caminho.",
      icon: "success",
      confirmButtonColor: "var(--color-primary)", 
      timer: 3000
    }).then(() => {
      clearCart();
      navigate("/");
    });
  };

  const getCardBrand = (value) => {
    const digits = value.replace(/\D/g, "");
    if (/^4/.test(digits)) return "visa";
    if (/^5[1-5]/.test(digits) || /^2[2-7]/.test(digits)) return "mastercard";
    if (/^3[47]/.test(digits)) return "amex";
    if (
      /^(6062|6370|6374|6375|6376|6504|6505|6507|6509|6516|6550)/.test(digits)
    )
      return "elo";
    return "default";
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);

    setCardBrand(getCardBrand(cleaned));
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  const getMaskedCardNumber = (value) => {
    const digits = value.replace(/\s/g, "");
    if (!digits) return "0000 0000 0000 0000";

    return digits
      .split("")
      .map((char, index) => {
        if (index < 4 || (index >= digits.length - 4 && index >= 12)) {
          return char;
        }
        return "•";
      })
      .join("")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    const month = digits.slice(0, 2);
    const year = digits.slice(2, 4);
    return year ? `${month}/${year}` : month;
  };

  return (
    <section className={styles.paymentSection}>
      <h2>Checkout</h2>
      <form className={styles.paymentForm} onSubmit={handleCheckout}>
        <div
          className={`${styles.creditCard} ${turnCard ? styles.turn : ""}`}
          data-brand={cardBrand}
        >
          <div className={styles.frontCard}>
            <img
              className={styles.chip}
              width={50}
              src={chipImage}
              alt="chip"
              aria-hidden="true"
            />
            <img
              width={50}
              className={styles.brandLogo}
              src={brandLogos[cardBrand]}
              alt={cardBrand}
            />

            <p className={styles.cardNumber}>
              {getMaskedCardNumber(cardNumber)}
            </p>
            <p className={styles.expiry}>{expiry || "MM/AA"}</p>
            <p className={styles.cardName}>{cardName || "NOME COMPLETO"}</p>
          </div>

          <article className={styles.backCard}>
            <header className={styles.grayStrip}></header>
            <footer className={styles.cardCvv}>
              <label>CVV</label>
              <output>{cvv || "---"}</output>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia eum, eum quia cumque delectus itaque tenetur quisquam quae!</p>
            </footer>
          </article>
        </div>

        {/* INPUTS ABAIXO */}
        <div className={styles.formField}>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            id="cardName"
            type="text"
            maxLength={22}
            value={cardName}
            onChange={(e) => setCardName(e.target.value.toUpperCase())}
            required
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            id="cardNumber"
            type="text"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            required
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="expiry">Validade</label>
            <input
              id="expiry"
              type="text"
              placeholder="MM/AA"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="password"
              value={cvv}
              onFocus={() => setTurnCard(true)}
              onBlur={() => setTurnCard(false)}
              onChange={(e) =>
                setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
              }
              required
            />
          </div>
        </div>
        <p className={styles.securityInfo}>
          Sistema de pagamento fictício para fins de simulação e estudo de
          UI/UX.
        </p>
        <button type="submit" className={styles.checkoutBtn}>
          Finalizar pagamento
        </button>
        <NavLink to="/products" className={styles.productsBtn}>Continuar Comprando</NavLink>
      </form>
    </section>
  );
}
