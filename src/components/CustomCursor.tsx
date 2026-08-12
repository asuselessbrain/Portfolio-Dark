"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { playHoverSound } from "@/utils/audio";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!visible) setVisible(true);
  }, [cursorX, cursorY, visible]);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  const handleMouseDown = useCallback(() => setClicked(true), []);
  const handleMouseUp = useCallback(() => setClicked(false), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add("custom-cursor-active");

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Event listener for hover targets
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, select, textarea, [role='button'], .interactive"
      );

      interactiveElements.forEach((el) => {
        // Prevent adding multiple listeners
        if (el.getAttribute("data-cursor-bound")) return;
        el.setAttribute("data-cursor-bound", "true");

        el.addEventListener("mouseenter", () => {
          setHovered(true);
          playHoverSound();
        });
        el.addEventListener("mouseleave", () => {
          setHovered(false);
        });
      });
    };

    // Run initially
    addHoverListeners();

    // Set up a MutationObserver to bind listeners to dynamically loaded content (e.g. modals, tabs)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseDown, handleMouseUp]);

  if (typeof window === "undefined" || !visible) return null;

  return (
    <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none z-[9999]">
      {/* Outer Glow Ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          borderColor: hovered ? "#00ff87" : "#00f2fe", // green on hover, cyan default
          boxShadow: hovered 
            ? "0 0 14px rgba(0, 255, 135, 0.6)" 
            : "0 0 10px rgba(0, 242, 254, 0.4)",
        }}
        className="w-8 h-8 rounded-full border-2 border-cyber-cyan absolute top-0 left-0 transition-colors duration-200"
      />
      {/* Inner Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.6 : hovered ? 1.2 : 1,
          backgroundColor: hovered ? "#00ff87" : "#9b51e0", // green on hover, purple default
        }}
        className="w-2 h-2 bg-neon-purple rounded-full absolute top-0 left-0 transition-colors duration-200"
      />
    </div>
  );
}
