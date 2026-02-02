import skateManobra from "../../assets/images/skateManobra.jpg";
import styles from "./Concept.module.css";

export default function Concept() {
  return (
    <section className={styles.conceptSection}>
      <article>
        <h2>
          UrbanFlow é movimento
        </h2>
        <p>
          UrbanFlow nasce da união entre cultura urbana, skate e arte de rua,
          traduzindo esse universo em uma experiência digital moderna
        </p>
      </article>
      <figure>
        <img
          src={skateManobra}
          alt="Skatista no ar realizando uma manobra em uma pista de skate"
        />
      </figure>
    </section>
  );
}
