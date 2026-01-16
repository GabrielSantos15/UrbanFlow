import styles from "./Button.module.css";
import { FaArrowRightLong} from "react-icons/fa6";

export default function Button({text, bgColor = "var(--color-bg)", txtColor = "var(--color-primary)"}) {
  return (
    <button style={{ "--color-bg-btn": bgColor,"--color-text-btn": txtColor,}} className={styles.button}>
      <p>{text}</p>
      <div className={styles.iconButton}>
        <FaArrowRightLong />
      </div>
    </button>
  );
}
