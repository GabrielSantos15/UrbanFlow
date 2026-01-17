import styles from "./Footer.module.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaLongArrowAltRight } from "react-icons/fa";
import logo from "../../assets/images/simpleLogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.linksContainer}>
          <ul>
            <li className={styles.title}>Institucional</li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Sustentabilidade</a>
            </li>
            <li>
              <a href="#">Trabalhe conosco</a>
            </li>
          </ul>

          <ul>
            <li className={styles.title}>Ajuda</li>
            <li>
              <a href="#">Trocas e devoluções</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
            <li>
              <a href="#">Termos de uso</a>
            </li>
          </ul>

          <ul>
            <li className={styles.title}>Coleções</li>
            <li>
              <a href="#">Lançamentos</a>
            </li>
            <li>
              <a href="#">Edições limitadas</a>
            </li>
            <li>
              <a href="#">Moletom</a>
            </li>
          </ul>
        </nav>

        <form>
          <h3 className={styles.title}>Newsletter</h3>
          <label htmlFor="email">Receba novidades</label>
          <span>
            <input id="email" type="email" placeholder="Seu email" />
            <button type="submit"><FaLongArrowAltRight/></button>
          </span>
        </form>
      </div>

      <div className={styles.bottom}>
        <span>© {currentYear} UrbanFlow</span>
        <div className={styles.brandContainer}>
          <img src={logo} alt="UrbanFlow" />
          <h2>Urban Flow</h2>
        </div>

        <p>Este e-commerce é um projeto fictício para fins educacionais.</p>

      </div>
    </footer>
  );
}
