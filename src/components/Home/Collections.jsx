import { NavLink } from "react-router-dom";
import fotoMoletom from "../../assets/images/skatista-moletom.png";
import produtosUrbanFlow from "../../assets/images/produtosUrbanFlow.png";

import styles from "./Collections.module.css";
import Button from "../Button";

export default function Collections() {
  return (
    <section className={styles.collectionsSection}>
      <div className={styles.collectionsContent}>
        <h2>O Arsenal Completo da Sua Expressão Urbana</h2>
        <p>
          Não vendemos só produtos. Entregamos atitude, identidade e as
          ferramentas pra você deixar sua marca na cidade.
        </p>
      </div>

      <div className={styles.bentoGrid}>
        <article className={`${styles.bentoElement} ${styles.bentoImage}`}>
          <NavLink to={"./products"}>
            <figure>
              <img src={produtosUrbanFlow} alt="" />
            </figure>
          </NavLink>
        </article>
        <article className={styles.bentoElement}>
          <h3>A rua é o seu palco</h3>
          <p>
            Cada peça carrega história, atitude e liberdade criativa. Se
            expressar não é seguir tendência. É criar a sua.
          </p>
          <Button
            to={"/products"}
            text="Ver Produtos"
            bgColor="#fff"
            txtColor="#000"
          />
        </article>
        <article className={styles.bentoElement}>
          <h3>Criado na rua. Usado por quem vive o street.</h3>
          <p>
            Nossos produtos nascem da cultura urbana real. Sem filtro. Sem
            padrão. Sem cópia. Aqui, estilo é linguagem e a rua é referência.
          </p>
          <Button
            to={"/about"}
            text="Saiba Mais"
            bgColor="#000"
            txtColor="#FFF"
          />
        </article>
        <article className={`${styles.bentoElement} ${styles.bentoImage}`}>
          <NavLink to={"./about"}>
            <figure>
              <img src={fotoMoletom} alt="" />
            </figure>
          </NavLink>
        </article>
      </div>
    </section>
  );
}
