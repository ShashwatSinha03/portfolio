"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import ShortcutOverlay from "@/components/ShortcutOverlay";
import Signal from "@/sections/Signal";
import SelectedSystems from "@/sections/SelectedSystems";
import Approach from "@/sections/Approach";
import Now from "@/sections/Now";



export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Console Easter egg
    console.log("// You started at the surface. That’s intentional.");

    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      router.push("/loader");
      return;
    } 
    
    setIsLoading(false);
  }, [router]);

  if (isLoading) return null;

  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <main style={{ padding: "0 var(--space-8)" }}>
      <ShortcutOverlay />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <motion.div variants={sectionVariants}><Signal /></motion.div>
        <motion.div variants={sectionVariants}><SelectedSystems /></motion.div>
        <motion.div variants={sectionVariants}><Approach /></motion.div>
        <motion.div variants={sectionVariants}><Now /></motion.div>
      </motion.div>
    </main>
  );
}


