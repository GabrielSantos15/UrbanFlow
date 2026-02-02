import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.colorText}>Quem Somos</h1>
      <div className={styles.badgeContainer}>
        <svg viewBox="0 0 200 200" className={styles.badgeSvg}>
          <circle cx="100" cy="100" r="60" fill="#fff" strokeWidth="2" stroke="#000" />
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <path
            d="M100 65 L108 92 L135 100 L108 108 L100 135 L92 108 L65 100 L92 92 Z"
            
          />

          <g className={styles.rotatingText}>
            <text className={styles.badgeText}>
              <textPath href="#circlePath">
                URBANFLOW • ARTE • MOVIMENTO • ESTILO •
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
