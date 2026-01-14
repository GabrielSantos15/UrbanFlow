import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({
  value = 100,
  duration = 2,
  suffix = "",
  prefix = "",
}) {
  const numberRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;

    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: value,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          el.innerText = prefix + Math.floor(el.innerText) + suffix;
        },
      }
    );
  }, [value, duration, suffix]);

  return (
    <span ref={numberRef} className="counter">
      0{suffix}
    </span>
  );
}
