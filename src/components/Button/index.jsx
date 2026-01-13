import styles from "./Button.module.css";
import { FaArrowRightLong} from "react-icons/fa6";

export default function Button() {
  return (
    <button className={styles.button}>
      <p>Entrar no flow</p>
      <div className={styles.iconButton}>
        <FaArrowRightLong />
      </div>
    </button>
  );
}
