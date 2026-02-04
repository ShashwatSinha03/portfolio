"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.css";
import { usePathname } from "next/navigation";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  if (pathname === "/loader") return null;

  return (
    <label className={styles.switch} aria-label="Toggle Theme">
      <input 
        type="checkbox" 
        checked={theme === "dark"} 
        onChange={toggleTheme} 
      />
      <span className={styles.slider}></span>
    </label>
  );
}