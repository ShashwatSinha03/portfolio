"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, subtitle, link, tabs }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <motion.div 
      className={styles.card} 
      onClick={handleToggle}
      whileHover={{ y: -2, borderColor: 'var(--accent)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className={styles.cardHeader}>
        <div>
          <span className={styles.subtitle}>{subtitle}</span>
          <h3 className={styles.title}>{title}</h3>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              View Live →
            </a>
          )}
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          style={{ fontSize: '1.5rem', opacity: 0.4 }}
        >
          +
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} 
            className={styles.expandedContent}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              className={styles.tabs}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {['Overview', 'Decisions', 'Impact', 'Gallery'].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            <motion.div
              key={activeTab}
              initial={{ x: 6, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={styles.tabContent}
            >
              {tabs[activeTab]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

  );
}
