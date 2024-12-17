import "./introduction.scss";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.div
      className="introduction"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="intro-container"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="intro-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to the Future
        </motion.h1>
        <motion.p
          className="intro-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Dive into a realm where innovation meets imagination. Experience a symphony of technology and creativity.
        </motion.p>
      </motion.div>
      <motion.div
        className="intro-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="grid-effect"></div>
        <motion.div
          className="neon-lines"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
