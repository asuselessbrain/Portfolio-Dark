"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import ThreeBackground with ssr: false to prevent Next.js hydration issues
const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#05050a] flex items-center justify-center pointer-events-none">
      <div className="text-[11px] font-mono text-cyber-cyan/50 tracking-widest animate-pulse-slow">
        INITIALIZING_GRAPHICS_ENGINE...
      </div>
    </div>
  ),
});

interface CanvasBackgroundProps {
  enabled: boolean;
}

export default function CanvasBackground({ enabled }: CanvasBackgroundProps) {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported by the browser
    if (typeof window !== "undefined") {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setTimeout(() => {
          setWebGLSupported(false);
        }, 0);
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[var(--background)] overflow-hidden pointer-events-none">
      {/* CSS Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Dot Matrix Grid */}
      <div className="absolute inset-0 cyber-grid-dots opacity-[0.05]" />

      {/* Cyber ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/4 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-cyan/4 rounded-full blur-[140px] mix-blend-screen animate-pulse-slow [animation-delay:2s]" />

      {/* R3F Canvas - render only if enabled and WebGL is supported */}
      {enabled && webGLSupported && (
        <div className="absolute inset-0 z-0">
          <ThreeBackground />
        </div>
      )}

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 scanlines opacity-[0.06] pointer-events-none z-10" />

      {/* CRT Vignette shadow */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none z-10" />
    </div>
  );
}
