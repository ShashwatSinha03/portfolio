"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './ShortcutOverlay.module.css';

export default function ShortcutOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '?') {
        setIsVisible((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={styles.overlay}
        >
          <div className={styles.content}>
            <p className={styles.label}>[System Shortcuts]</p>
            <ul className={styles.list}>
              <li><span>?</span> <span>Toggle this list</span></li>
              <li><span>D</span> <span>Toggle Dashboard</span></li>
              <li><span>ESC</span> <span>Close</span></li>
            </ul>
            <p className={styles.note}>This list is for reference. Use it or ignore it.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
