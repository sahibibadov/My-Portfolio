"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useState } from "react";

const TextRotate = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const id = useId();
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= words.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex w-[85px] sm:w-[142px]  items-center justify-center text-center">
      <AnimatePresence key={id}>
        <motion.p
          className="absolute text-[#0ea5e9] dark:text-[#0ea5e9]"
          key={index}
          initial={{ y: 40, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -40, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.9, type: "spring" }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default TextRotate;
