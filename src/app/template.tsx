"use client";

import Container from "@/components/shared/container";
import { motion } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      className="flex-1 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="flex-1 flex flex-col">{children}</Container>
    </motion.main>
  );
};

export default Template;
