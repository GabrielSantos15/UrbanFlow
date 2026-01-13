// 1. Importar o objeto 'styles' do CSS Module
import Button from "../Button";
import styles from "./Hero.module.css";
import { FaStar, FaTag, FaClock } from "react-icons/fa6";

export default function Hero() {
  return (
    // 3. Usar styles.nomeDaClasse
    <section className={styles.heroSection}>
      <div className={styles.heroTitles}>
        <h1 className={styles.heroTitleLeft}>Urban</h1>
        <h1 className={styles.heroTitleRight}>Flow</h1>
      </div>
      <article className={styles.heroContent}>
        {/* <h2>A rua é o seu palco</h2> */}
        <h2>Arte que Anda com Você</h2>
        <p>
          A Urban Flow nasce do grafite, do traço livre e da cidade viva. Feito
          pra quem vê arte fora das paredes e entende estilo como linguagem.
        </p>
       <Button></Button>
      </article>
      <article className={styles.heroStats}>
        <span>
          <FaStar />
          <p>
            Desines <br /> Unicos
          </p>
        </span>
        <span>
          <FaTag />
          <p>
            Custo <br /> Beneficio
          </p>
        </span>
        <span>
          <FaClock />
          <p>
            Entrega <br /> Rapida
          </p>
        </span>
      </article>

      <figure className={styles.heroFigure}>
        <img
          src="./assets/images/urbanGirl.png"
          alt="Modelo usando moletom Urban Flow"
        />
      </figure>
    </section>
  );
}
