"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Temporarily disable smooth scrolling to instantly jump to top
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    // Re-enable smooth scrolling after the jump
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <motion.div key={pathname} className="relative min-h-screen">
      {/* Cyber Slide Overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full h-full bg-neon-purple origin-top z-[999] pointer-events-none"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full h-full bg-cyber-cyan origin-top z-[998] pointer-events-none"
      />

      {/* Content Fade */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
