import Carousel from "../Carousel";
import TestimonyCard from "../TestimonyCard";
import styles from "./Testimonials.module.css";
import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.sectionHeader}>
        <h2>Depoimentos </h2>
        <p>Quem vive o flow fala por nós.</p>
      </div>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <TestimonyCard key={index} {...testimonial} />
        ))}
      </Carousel>
    </section>
  );
}
