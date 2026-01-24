import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Button({
  to,
  text,
  bgColor = "var(--color-bg)",
  txtColor = "var(--color-primary)",
}) {
  return (

      <NavLink to={to}
        style={{ "--color-bg-btn": bgColor, "--color-text-btn": txtColor }}
        className={styles.button}
      >
        <p>{text}</p>
        <div className={styles.iconButton}>
          <FaArrowRightLong />
        </div>
      </NavLink>
  
  );
}
