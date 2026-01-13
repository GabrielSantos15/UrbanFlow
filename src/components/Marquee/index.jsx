import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaHandSparkles } from "react-icons/fa6";
import styles from "./Marquee.module.css";

export default function Marquee() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const items = [
    "Arte Urbana",
    "Street Culture",
    "Edições Limitadas",
    "Expressão Autoral",
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "+=200%",
          scrub: 4,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <aside ref={sectionRef} className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <div ref={contentRef}>
          {[...items, ...items].map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className={styles.separador}>&#10022;</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}
