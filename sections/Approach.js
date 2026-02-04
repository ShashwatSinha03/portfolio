"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Section.module.css';

const principles = [
  {
    title: "Build for clarity first",
    content: "Complexity is often a shield for uncertainty. I prioritize architectural transparency and legible code, ensuring systems remain maintainable long after the initial ship."
  },
  {
    title: "Ship, then refine",
    content: "Perfect is the enemy of the working. I believe in launching functional foundations and using real-world telemetry to drive iterative, data-backed improvements."
  },
  {
    title: "Prefer boring solutions that last",
    content: "Innovation should be spent on the problem, not the plumbing. I lean on proven, well-understood technologies unless a novel approach provides a clear, defensible advantage."
  }
];

export default function Approach() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isEasterEggVisible, setIsEasterEggVisible] = useState(false);
  const hoverTimer = useRef(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const startHover = () => {
    hoverTimer.current = setTimeout(() => {
      setIsEasterEggVisible(true);
    }, 3000);
  };

  const stopHover = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
    setIsEasterEggVisible(false);
  };

  return (
    <section className={styles.section} id="approach">
      <h2 className={styles.title}>Approach</h2>
      
      <div className={styles.principlesList}>
        {principles.map((principle, index) => (
          <motion.div 
            key={index} 
            className={styles.principleItem}
            initial="initial"
            whileHover="hover"
          >
            <button 
              className={styles.principleHeader} 
              onClick={() => handleToggle(index)}
              aria-expanded={expandedIndex === index}
            >
              <div className={styles.principleTitleWrapper}>
                <span className={styles.principleTitle}>{principle.title}</span>
                <motion.div 
                  className={styles.underline}
                  variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1 }
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
              <motion.span 
                animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                className={styles.plus}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className={styles.principleContent}
                >
                  <motion.p
                    initial={{ y: 6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {principle.content}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>


      <div 
        className={styles.dividerWrapper}
        onMouseEnter={startHover}
        onMouseLeave={stopHover}
      >
        <div className={styles.divider}></div>
        <AnimatePresence>
          {isEasterEggVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={styles.easterEgg}
            >
              This page is opinionated. That’s intentional.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
