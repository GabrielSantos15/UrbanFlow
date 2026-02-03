import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./GraffitiTitle.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function GraffitiTitle({children}) {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    setTimeout(() => {
      const length = text.getTotalLength ? text.getTotalLength() : text.getComputedTextLength();

      gsap.set(text, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fill: "transparent",
        stroke: "#000000",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: "top 75%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.to(text, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "none",
      });

      tl.to(text, {
        fill: "var(--color-primary)",
        duration: 0.4,
      });

      tl.to(text, {
        filter: "drop-shadow(5px 5px 0px #06a4b9",
        duration: 0.3,
      });
    }, 0);
  }, []);

  return (
    <section className={styles.graffitiSection}>
      <svg viewBox="0 0 900 300" className={styles.graffitiSvg}>
        <text
          ref={textRef}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.graffitiText}
        >
          {children}
        </text>
      </svg>
    </section>
  );
}
