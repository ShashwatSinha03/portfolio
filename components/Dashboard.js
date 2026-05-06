"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard({ isOpen, onClose }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills = ["All", "Design Systems", "WebGL", "React", "Next.js", "Performance"];
  
  const stats = [
    { label: "Active Systems", value: "12" },
    { label: "Deployment Health", value: "99.8%" },
    { label: "Resource Efficiency", value: "0.4s" }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.dashboard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>System Management</h1>
          <button onClick={onClose} className={styles.closeButton}>
            [ Close ]
          </button>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Skills & Stats */}
          <div className={styles.skillsSection}>
            <div>
              <p className={styles.label}>Skills Filter</p>
              <div className={styles.filterList}>
                {skills.map(skill => (
                  <button
                    key={skill}
                    onClick={() => setActiveFilter(skill)}
                    className={`${styles.filterTag} ${activeFilter === skill ? styles.filterTagActive : ""}`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.managementSection}>
              <p className={styles.label}>Performance Metrics</p>
              <div className={styles.statsGrid}>
                {stats.map(stat => (
                  <div key={stat.label} className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Showcase Panel */}
          <div className={styles.showcasePanel}>
            <p className={styles.label}>Active Showcase Panel</p>
            <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed var(--border)", borderRadius: "8px", opacity: 0.3 }}>
              <p style={{ fontFamily: "var(--font-secondary)", fontSize: "0.875rem" }}>
                Select a project in the main view to manage assets here.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
