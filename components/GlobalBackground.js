"use client";

import { useTheme } from "./ThemeProvider";
import Plasma from "./Plasma";

export default function GlobalBackground() {
  const { theme } = useTheme();

  // Define colors based on theme
  // Dark theme: vibrant purple (#8E84EB)
  // Light theme: dark navy/charcoal (#232B2F)
  const plasmaColor = theme === "dark" ? "#8E84EB" : "#232B2F";
  const opacity = theme === "dark" ? 0.45 : 0.12;

  return (
    <div style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      zIndex: -1,
      pointerEvents: "none",
      opacity: opacity,
      transition: "opacity 1s ease"
    }}>
      <Plasma 
        color={plasmaColor}
        speed={0.4}
        direction="forward"
        scale={2.80}
        opacity={1.0}
        mouseInteractive={true}
      />
    </div>
  );
}
