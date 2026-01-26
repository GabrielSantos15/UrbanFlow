import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Button({
  to,
  onClick,
  type = "button",
  text,
  icon = <FaArrowRightLong />,
  iconPosition = "right",
  bgColor = "var(--color-bg)",
  txtColor = "var(--color-primary)",
  disabled = false,
}) {
  const commonProps = {
    style: {
      "--color-bg-btn": bgColor,
      "--color-text-btn": txtColor,
    },
    className: styles.button,
  };

  const content = (
    <>
      <p>{text}</p>
      <div className={styles.iconButton}>
        {icon}
      </div>
    </>
  );

  // Navegação
  if (to) {
    return (
      <NavLink to={to} {...commonProps}>
        {content}
      </NavLink>
    );
  }

  // Evento
  return (
    <button {...commonProps} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
