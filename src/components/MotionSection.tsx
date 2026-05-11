import { motion } from "framer-motion";
import type { HTMLMotionProps, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: {
    opacity: 1,
    y: 28,
    scale: 0.98,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

type MotionSectionProps = HTMLMotionProps<"section">;

const MotionSection = ({ children, ...props }: MotionSectionProps) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22, margin: "-80px" }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
