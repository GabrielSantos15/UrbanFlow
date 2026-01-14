import Counter from "../../components/Counter";
import styles from "./Stats.module.css";
import image from "../../assets/images/logo.png";

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <article>
        <div>
          <h2>
            O flow se constrói na rua <br /> e nos números
          </h2>
          <p>
            Da criação à entrega, cada detalhe importa. Nossa comunidade cresce,
            os pedidos circulam e a arte urbana ganha espaço, sempre com
            autenticidade e propósito.
          </p>
        </div>
        <dl className={styles.statsContainer}>
          <span className={styles.statCard}>
            <dt className={styles.statValue}>
              <Counter prefix={"+"} value={5} suffix={"K"} />
            </dt>
            <dd className={styles.statLabel}>pessoas no flow</dd>
          </span>
          <span className={`${styles.statCard} ${styles.featured}`}>
            <dt className={styles.statValue}>
              <Counter prefix={"+"} value={15} suffix={"k"} />
            </dt>
            <dd className={styles.statLabel}>pedidos entregues</dd>
          </span>
          <span className={styles.statCard}>
            <dt className={styles.statValue}>
              <Counter value={120} />
            </dt>
            <dd className={styles.statLabel}>Artes exclusivas</dd>
          </span>
          <span className={styles.statCard}>
            <dt className={styles.statValue}>
              <Counter value={98} suffix={"%"} />
            </dt>
            <dd className={styles.statLabel}>clientes satisfeitos</dd>
          </span>
        </dl>
      </article>
      <figure className={styles.paternFigure}>
        <img src={image} alt="" />
      </figure>
    </section>
  );
}
