import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./TextAnimation.css";

/* Shoutout Hyperplexed https://www.youtube.com/watch?v=owpaafxvkjU */

const TextAnimation: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rand = (min: number, max: number): number =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const enhanceText = (element: HTMLElement | null) => {
      if (!element) return;

      const text = element.innerText.split("");
      element.innerText = "";

      text.forEach((value, index) => {
        const outer = document.createElement("span");
        outer.className = "outer";

        const inner = document.createElement("span");
        inner.className = "inner";
        inner.style.animationDelay = `${rand(-2000, 0)}ms`;

        const letter = document.createElement("span");
        letter.className = "letter";
        letter.innerText = value;
        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);
        outer.appendChild(inner);
        element.appendChild(outer);
      });
    };

    enhanceText(elementRef.current);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <motion.div
        style={{ cursor: "pointer", marginTop: "8rem" }}
        ref={elementRef}
        className="word fancy"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        ChampionChats
      </motion.div>
    </div>
  );
};

export default TextAnimation;
