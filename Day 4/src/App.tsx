import React, { useEffect, useRef } from "react";
import "./App.css";
import {
  useScroll,
  motion,
  useTransform,
  MotionValue,
  delay,
  transform,
} from "framer-motion";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit autem asperiores earum quos, nulla vitae animi distinctio sunt
  deserunt doloremque at? Voluptas iusto expedita reiciendis? Non autem
  eius ad alias, officia eum voluptas cum eveniet iusto at aliquid,
  repudiandae suscipit amet laborum quas quo, sunt nobis? Provident
  ullam a reiciendis.`;
  const chars = text.split("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    //if no container is explicitly mentioned, framer will use window object as container
    offset: ["start 0.3", "start start"],
  });

  return (
    <>
      <div className="main-container">
        <div className="padder"></div>
        <div ref={containerRef} className="container">
          {chars.map((char, idx) => {
            const start = idx / chars.length;
            const end = start + 1 / chars.length;
            console.log([start, end]);
            return (
              <Character
                key={idx}
                range={[start, end]}
                progress={scrollYProgress}
              >
                {char}
              </Character>
            );
          })}
        </div>
        <div className="padder"></div>
      </div>
    </>
  );
}

type CharProps = {
  range: number[];
  children: React.ReactNode;
  progress: MotionValue<number>;
};

const Character: React.FC<CharProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return (
    <motion.span className="hero-text" style={{ opacity }}>
      {children}
    </motion.span>
  );
};

export default App;
