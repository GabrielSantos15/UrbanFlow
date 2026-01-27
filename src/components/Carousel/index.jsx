import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Carousel({ children }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateControls = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  };

  const scroll = (direction) => {
    containerRef.current.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateControls();

    const el = containerRef.current;
    el.addEventListener("scroll", updateControls);
    window.addEventListener("resize", updateControls);

    return () => {
      el.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  return (
    <section className={styles.carousel}>
      {canScrollLeft && (
        <button
          className={`${styles.control} ${styles.controlLeft}`}
          onClick={() => scroll(-1)}
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>
      )}

      <div ref={containerRef} className={styles.track}>
        {children}
      </div>

      {canScrollRight && (
        <button
          className={`${styles.control} ${styles.controlRight}`}
          onClick={() => scroll(1)}
          aria-label="Próximo"
        >
          <FaChevronRight />
        </button>
      )}
    </section>
  );
}