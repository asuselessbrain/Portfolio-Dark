"use client";

import { useEffect, useState } from "react";

const words = [
  "Full-Stack Developer.",
  "Next.js Specialist.",
  "WordPress Expert."
];

export default function TypingText() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  // Seed with the primary role so it is present in the server-rendered HTML
  // (crawlable entity signal) and avoids an empty first paint.
  const [currentText, setCurrentText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const word = words[currentWordIdx];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === word) {
          setIsDeleting(false);
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <div className="space-y-1 sm:space-y-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
        Hi, I&apos;m Arfan Ahmed
      </h1>
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
        <span className="text-slate-100">a&nbsp;</span>
        <span className="text-[#22a0ad] border-r-2 border-[#126972] animate-pulse pr-1">
          {currentText || "\u00A0"}
        </span>
      </div>
    </div>
  );
}


