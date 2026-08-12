"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Play } from "lucide-react";
import { playClickSound, playHoverSound } from "@/utils/audio";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "success";
}

export default function TerminalWidget() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "INITIALIZING_SECURE_SHELL_V1.2.6...", type: "success" },
    { text: "WELCOME, VISITOR. ENTER 'help' TO VIEW COMMAND LIST.", type: "output" },
  ]);
  const consoleRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of the console container without scrolling the main window
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTo({
        top: consoleRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Play terminal keyboard click sound
    if (e.key.length === 1 || e.key === "Backspace") {
      playHoverSound();
    }

    if (e.key === "Enter") {
      playClickSound();
      const command = input.trim().toLowerCase();
      const newHistory = [...history, { text: `guest@arfan.dev:~$ ${input}`, type: "input" as const }];

      if (command) {
        processCommand(command, newHistory);
      } else {
        setHistory(newHistory);
      }
      setInput("");
    }
  };

  const processCommand = (cmd: string, currentHistory: TerminalLine[]) => {
    const parts = cmd.split(" ");
    const mainCommand = parts[0];

    switch (mainCommand) {
      case "help":
        setHistory([
          ...currentHistory,
          { text: "AVAILABLE UTILITIES:", type: "success" },
          { text: "  whoami     - Display background details on Arfan Ahmed.", type: "output" },
          { text: "  skills     - Index of technical framework masteries.", type: "output" },
          { text: "  projects   - Summary of signature active portfolio files.", type: "output" },
          { text: "  contact    - Retrieve social endpoints.", type: "output" },
          { text: "  clear      - Wipe terminal history logs.", type: "output" },
          { text: "  help       - Display this assistance matrix.", type: "output" },
        ]);
        break;

      case "about":
      case "whoami":
        setHistory([
          ...currentHistory,
          { text: "ARFAN AHMED // FULL-STACK & WORDPRESS ARCHITECT", type: "success" },
          { text: "  Role: Senior-level developer. Bridges Next.js and custom WordPress developments.", type: "output" },
          { text: "  Philosophy: Code clean. Speed matters. Build it right.", type: "output" },
        ]);
        break;

      case "skills":
        setHistory([
          ...currentHistory,
          { text: "SKILLS_MATRIX_INDEX:", type: "success" },
          { text: "  FRONTEND : Next.js, React, TypeScript, Redux, Tailwind CSS, Framer Motion", type: "output" },
          { text: "  BACKEND  : Node.js, Express.js, REST APIs, GraphQL", type: "output" },
          { text: "  DATABASE : MongoDB, PostgreSQL, Mongoose, Prisma ORM", type: "output" },
          { text: "  CMS_CORE : WordPress (Custom Themes/Plugins), WooCommerce", type: "output" },
        ]);
        break;

      case "projects":
        setHistory([
          ...currentHistory,
          { text: "SIGNATURE_PROJECT_ARCHIVE:", type: "success" },
          { text: "  proj_01: Exprovia Corporate Hub [WordPress Theme/Plugin sync engine]", type: "output" },
          { text: "  proj_02: Cyberpunk Terminal Portfolio [Next.js + 3D Fiber + Web Audio]", type: "output" },
          { text: "  proj_03: Headless E-Commerce Matrix [Next.js + WooCommerce + GraphQL]", type: "output" },
          { text: "  proj_04: Real-time CRM Sync Middleware [Node.js + Express + Telemetry]", type: "output" },
          { text: "  proj_05: Cyber Canvas Design Engine [React + Canvas 2D + WebSockets]", type: "output" },
          { text: "  proj_06: Secure WP Auth Plugin [PHP + WebAuthn + Telemetry]", type: "output" },
          { text: "  Type 'projects' or enter Archive page for full case studies.", type: "output" },
        ]);
        break;

      case "contact":
        setHistory([
          ...currentHistory,
          { text: "COMMUNICATION_UPLINKS:", type: "success" },
          { text: "  EMAIL    : contact@arfan.dev", type: "output" },
          { text: "  LINKEDIN : linkedin.com/in/arfan", type: "output" },
          { text: "  GITHUB   : github.com/asuselessbrain", type: "output" },
          { text: "  WHATSAPP : +880 1700-000000", type: "output" },
        ]);
        break;

      case "clear":
        setHistory([]);
        break;

      default:
        setHistory([
          ...currentHistory,
          { text: `SHELL ERROR: Command '${cmd}' not recognized.`, type: "error" },
          { text: "Command not found, type 'help' for available instruction keys.", type: "output" },
        ]);
        break;
    }
  };

  return (
    <div 
      onClick={handleTerminalClick}
      className="w-full bg-[#05050f]/90 border border-cyber-cyan/30 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,242,254,0.05)] cursor-text flex flex-col min-h-[300px] h-[340px]"
    >
      {/* Terminal Title Bar */}
      <div className="bg-[#0e0e1a] border-b border-white/5 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-cyber-cyan" />
          <span className="font-mono text-xs text-gray-400 tracking-wider">
            GUEST_SHELL // SYS_CONNECT
          </span>
        </div>
        
        {/* Mock window buttons */}
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
        </div>
      </div>

      {/* Terminal Log Console */}
      <div 
        ref={consoleRef} 
        className="p-4 overflow-y-auto flex-grow font-mono text-xs space-y-1.5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        {history.map((line, idx) => (
          <div 
            key={idx} 
            className={`whitespace-pre-wrap ${
              line.type === "input" 
                ? "text-white" 
                : line.type === "error" 
                ? "text-red-400 font-bold" 
                : line.type === "success" 
                ? "text-matrix-green font-bold" 
                : "text-gray-400"
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Prompt input field */}
      <div className="bg-[#030308] border-t border-white/5 px-4 py-2.5 flex items-center gap-1.5">
        <span className="font-mono text-xs text-cyber-cyan">guest@arfan.dev:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent outline-none border-none text-xs text-white font-mono placeholder:text-gray-700"
          placeholder="type help..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <Play className="w-3 h-3 text-gray-600 animate-pulse" />
      </div>
    </div>
  );
}
