import type { Variants } from "framer-motion";

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
