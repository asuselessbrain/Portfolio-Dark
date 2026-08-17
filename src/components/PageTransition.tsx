"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const NAME = "Arfan Ahmed";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Jump to top instantly on page change
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    const scrollTimeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);

    // Trigger loader reveal sequence
    setIsLoading(true);

    // Ultra-fast responsive human handwriting pace: ~0.5s total writing + 0.25s hold = ~0.75s
    const hideTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);
    };
  }, [pathname]);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Ultra-fast ~40ms per character
        delayChildren: 0.02,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 2,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Fullscreen Realistic Human Handwriting Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="human-handwriting-loader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-[#0f172a] flex items-center justify-center overflow-hidden pointer-events-none select-none"
          >
            {/* Ambient Background Emerald Glow */}
            <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex items-center justify-center px-6">
              {/* Human Letter-by-Letter Handwriting Container */}
              <div className="relative inline-block py-4 px-6 overflow-visible">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl ${scriptFont.className} italic font-normal tracking-wider flex items-center whitespace-nowrap overflow-visible`}
                >
                  {NAME.split("").map((char, index) => {
                    const isFirstWord = index < 5; // "Arfan"
                    const isSpace = char === " ";

                    if (isSpace) {
                      return (
                        <motion.span
                          key={index}
                          variants={letterVariants}
                          className="inline-block w-3 sm:w-5 md:w-6"
                        />
                      );
                    }

                    return (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className={`inline-block overflow-visible px-[0.04em] ${isFirstWord
                          ? "text-slate-100 drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
                          : "text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                          }`}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content Fade */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}




