import { motion } from "framer-motion";

function FadeUp({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: false,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeUp;