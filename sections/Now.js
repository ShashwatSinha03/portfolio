"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Section.module.css';

const nowData = {
  Building: [
    { title: "Personal Systems", detail: "Refining this portfolio's architectural constraints and aesthetic discipline." },
    { title: "Automation Frameworks", detail: "Exploring modular agentic workflows for scalable engineering tasks." },
    { title: "Design Systems", detail: "Standardizing component patterns for cross-platform reliability." }
  ],
  Learning: [
    { title: "Advanced Motion", detail: "Deepening knowledge of physics-based transitions and micro-interactions." },
    { title: "System Resilience", detail: "Studying error-boundary patterns in large-scale distributed applications." },
    { title: "TypeScript Mastery", detail: "Pushing type-safety boundaries in complex React architectures." }
  ],
  Exploring: [
    { title: "Minimalist Ergonomics", detail: "Researching physical workspace designs that foster focus." },
    { title: "Generative Art", detail: "Experimenting with mathematical patterns in visual design." },
    { title: "High-Performance Compute", detail: "Understanding the trade-offs of edge vs. centralized computing." }
  ]
};

const NowItem = ({ title, detail }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={styles.nowItem} 
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <motion.div 
        animate={{ x: isOpen ? 5 : 0 }}
        className={styles.nowItemHeader}
      >
        <span className={styles.nowTick}>↳</span>
        <span className={styles.nowItemTitle}>{title}</span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 0.6 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={styles.nowItemDetail}
          >
            {detail}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Now() {
  return (
    <section className={styles.section} id="now">
      <h2 className={styles.title}>Now</h2>
      
      <div className={styles.nowGrid}>
        {Object.entries(nowData).map(([category, items]) => (
          <div key={category} className={styles.nowColumn}>
            <h3 className={styles.nowCategory}>{category}</h3>
            <motion.div 
              className={styles.nowItemsList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -5 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <NowItem {...item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>


      <div className={styles.ctaWrapper}>
        <p className={styles.ctaText}>If this resonates, let’s talk.</p>
        <a href="mailto:shashwat@example.com" className={styles.ctaLink}>shashwat@example.com</a>
        <div className={styles.ctaSocial}>
          <a href="https://linkedin.com/in/shashwat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
