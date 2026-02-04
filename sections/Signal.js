import { motion } from "motion/react";
import TrueFocus from "../components/TrueFocus";
import styles from "./Signal.module.css";

export default function Signal() {
  return (
    <section className={styles.signal}>
      <motion.div 
        className={styles.microcopy}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        Small detail. Noted.
      </motion.div>
      <div className={styles.container}>
        <TrueFocus 
          sentence="Shashwat Sinha"
          manualMode={true}
          blurAmount={5}
          borderColor="#8E8EB2"
          animationDuration={1.1}
          pauseBetweenAnimations={2}
        />
        <div className={styles.content}>
          <p className={styles.role}>Engineering & Design Systems</p>
          <p className={styles.bio}>
            Building high-performance interfaces and scalable systems with a focus on structural clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
