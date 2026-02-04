"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../components/Loader.module.css";

export default function LoaderPage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Set persistence so main page knows we've loaded
    sessionStorage.setItem("hasLoaded", "true");

    // 5 seconds total duration
    // Trigger exit animation slightly before redirect
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4500); // Start fade out at 4.5s

    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000); // Redirect at 5s

    return () => {
        clearTimeout(exitTimer);
        clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "var(--background)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease",
        opacity: isExiting ? 0 : 1,
      }}
    >
        {/* SVG Filter Definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>

      <div style={{ marginBottom: "var(--space-8)" }}>
        <div className={styles.container}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      
      <h2
        style={{
          fontFamily: "var(--font-primary)",
          fontSize: "1rem",
          fontWeight: 400,
          letterSpacing: "0.05em",
          color: "var(--foreground)",
          opacity: 0.8,
        }}
      >
        Initializing systems
      </h2>
    </div>
  );
}
