import { FaStar } from "react-icons/fa";
import styles from "./TestimonyCard.module.css";

export default function TestimonyCard({ name, text, stars }) {
  return (
    <article className={styles.testimonyCard}>
      <div className={styles.userInfo}>
        <figure className={styles.userPicture}>
          <img
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`}
            alt={`Avatar de ${name}`}
          />
        </figure>
        <div>
          <h4>{name}</h4>
          <span className={styles.star}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < stars ? styles.starActive : styles.starInactive
                }
              />
            ))}
          </span>
        </div>
      </div>
      <p className={styles.testimonyText}>{text}</p>
    </article>
  );
}
