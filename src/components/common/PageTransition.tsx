import React from "react";
import { motion } from "framer-motion";
import { PageTransitionProps } from "../../types/ui";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
