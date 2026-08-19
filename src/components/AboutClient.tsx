"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Briefcase, Award, GraduationCap, ChevronRight, CheckCircle2, TrendingUp, Layers, Database, Sparkles, Quote, Compass, Rocket, Code2, HeartHandshake, Milestone, Terminal } from "lucide-react";
import { FaWordpress, FaNodeJs, FaReact, FaHtml5, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiWebflow,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiRedux,
  SiFramer,
  SiBootstrap,
  SiShadcnui,
  SiAntdesign,
  SiReactquery,
  SiWoo,
  SiElementor,
  SiLinux
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const [expandedCommitIndex, setExpandedCommitIndex] = useState<number | null>(0);

  const gitCommits = [
    {
      hash: "e5f0a12",
      branch: "main",
      type: "init:",
      summary: "laid academic & core programming foundations",
      heading: "WHERE CURIOSITY MET CODE",
      year: "2022",
      subtitle: "B.Sc in Computer Science & Engineering @ PSTU",
      desc: "Enrolled in CSE at Patuakhali Science and Technology University. Mastered C/C++, Data Structures, Algorithms, Object-Oriented Programming, and web development fundamentals.",
      tags: ["C/C++", "Data Structures", "Algorithms", "OOP", "HTML5", "CSS3"],
      result: "Built initial software applications, algorithm solvers, and web layouts from scratch.",
      isHead: false,
      icon: <GraduationCap className="w-3.5 h-3.5 text-[#22a0ad]" />
    },
    {
      hash: "9c4db83",
      branch: "feat/fullstack-expansion",
      type: "feat:",
      summary: "mastered MERN stack & custom WordPress engines",
      heading: "FULL-STACK & CMS ARCHITECTURE",
      year: "2023 - 2024",
      subtitle: "Full-Stack Systems & Custom CMS Engineering",
      desc: "Deep-dived into modern web engineering. Built 25+ dynamic applications using React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and custom WordPress theme/plugin architectures.",
      tags: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "WordPress", "Tailwind CSS"],
      result: "Built reusable UI systems, REST APIs, and bespoke WordPress plugins.",
      isHead: false,
      icon: <Code2 className="w-3.5 h-3.5 text-[#22a0ad]" />
    },
    {
      hash: "61bea77",
      branch: "feat/research-dev",
      type: "feat:",
      summary: "engineered data-intensive research platforms",
      heading: "DATA SCIENCE & ENTERPRISE REST APIS",
      year: "Dec 2025 - Jan 2026",
      subtitle: "Full-Stack Developer @ Centre for Data Science Research (CDSR)",
      desc: "Joined CDSR remotely. Architected data-intensive MERN platforms, designed normalized PostgreSQL database schemas, connection pooling, and type-safe REST APIs.",
      tags: ["PostgreSQL", "Prisma", "Express.js", "React", "Node.js", "REST APIs"],
      result: "Shipped scalable research web platforms and optimized query pipelines.",
      isHead: false,
      icon: <Briefcase className="w-3.5 h-3.5 text-[#22a0ad]" />
    },
    {
      hash: "d0c4e75",
      branch: "release/production",
      type: "release:",
      summary: "architecting enterprise web apps & custom plugins",
      heading: "ENTERPRISE FRONTENDS & HEADLESS CMS",
      year: "Feb 2026 - Present",
      subtitle: "Web Developer @ Exprovia & Consultant",
      desc: "Engineering high-speed enterprise frontends, custom WooCommerce plugins, global state management architectures, and headless CMS integrations with 100% type safety.",
      tags: ["Next.js (App Router)", "TypeScript", "WordPress Plugins", "WooCommerce", "State Management", "Lighthouse 95+"],
      result: "Delivering enterprise-grade web applications with top Lighthouse performance.",
      isHead: true,
      icon: <Rocket className="w-3.5 h-3.5 text-[#22a0ad]" />
    }
  ];

  const skillCategories: Record<string, SkillCategory> = {
    frontend: {
      title: "Frontend Stack",
      icon: <Cpu className="w-4 h-4 text-[#22a0ad]" />,
      skills: [
        { name: "React", icon: <FaReact className="w-5 h-5 text-cyan-400" /> },
        { name: "Next.js (App Router)", icon: <SiNextdotjs className="w-5 h-5 text-slate-100" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-400" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
        { name: "Redux / Toolkit", icon: <SiRedux className="w-5 h-5 text-purple-400" /> },
        { name: "HTML5 / CSS3", icon: <FaHtml5 className="w-5 h-5 text-orange-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" /> },
        { name: "Webflow (No-Code)", icon: <SiWebflow className="w-5 h-5 text-blue-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="w-5 h-5 text-pink-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-5 h-5 text-indigo-400" /> },
        { name: "Shadcn UI", icon: <SiShadcnui className="w-5 h-5 text-slate-100" /> },
        { name: "AntDesign", icon: <SiAntdesign className="w-5 h-5 text-red-400" /> },
        { name: "TanStack Query", icon: <SiReactquery className="w-5 h-5 text-rose-400" /> }
      ],
    },
    backend: {
      title: "Backend & Databases",
      icon: <Database className="w-4 h-4 text-[#22a0ad]" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-[#22a0ad]" /> },
        { name: "Express.js", icon: <SiExpress className="w-5 h-5 text-slate-200" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-emerald-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-sky-400" /> },
        { name: "Mongoose", icon: <SiMongodb className="w-5 h-5 text-emerald-600" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="w-5 h-5 text-slate-200" /> },
        { name: "REST APIs", icon: <Cpu className="w-5 h-5 text-[#22a0ad]" /> }
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: <Layers className="w-4 h-4 text-[#22a0ad]" />,
      skills: [
        { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-amber-400" /> },
        { name: "Supabase", icon: <SiSupabase className="w-5 h-5 text-[#22a0ad]" /> },
        { name: "VPS Deployment (Linux)", icon: <SiLinux className="w-5 h-5 text-yellow-500" /> },
        { name: "Vercel / Netlify", icon: <SiVercel className="w-5 h-5 text-slate-100" /> },
        { name: "Git / GitHub Actions", icon: <FaGithub className="w-5 h-5 text-slate-100" /> },
        { name: "Docker", icon: <SiDocker className="w-5 h-5 text-blue-400" /> }
      ],
    },
    cms: {
      title: "WordPress Architecture",
      icon: <FaWordpress className="w-4 h-4 text-[#22a0ad]" />,
      skills: [
        { name: "WordPress (Custom Dev)", icon: <FaWordpress className="w-5 h-5 text-sky-400" /> },
        { name: "Webflow", icon: <SiWebflow className="w-5 h-5 text-blue-400" /> },
        { name: "Custom WP Theme Dev", icon: <FaWordpress className="w-5 h-5 text-sky-400" /> },
        { name: "Custom Plugin Dev", icon: <FaWordpress className="w-5 h-5 text-[#22a0ad]" /> },
        { name: "WooCommerce", icon: <SiWoo className="w-5 h-5 text-purple-400" /> },
        { name: "Elementor Pro", icon: <SiElementor className="w-5 h-5 text-red-500" /> },
        { name: "REST API & Headless WP", icon: <FaWordpress className="w-5 h-5 text-cyan-400" /> },
        { name: "SEO & Speed Optimization", icon: <TrendingUp className="w-5 h-5 text-[#22a0ad]" /> },
        { name: "JetEngine", icon: <Cpu className="w-5 h-5 text-amber-400" /> },
        { name: "ACF", icon: <Cpu className="w-5 h-5 text-blue-400" /> },
        { name: "JetSmartFilters", icon: <Cpu className="w-5 h-5 text-[#22a0ad]" /> }
      ],
    },
  };

  const experience = [
    {
      role: "Web Developer",
      company: "Exprovia",
      period: "Feb 2026 - Present",
      desc: "Optimizing enterprise web applications, implementing robust state management, and developing high-speed custom themes and plugins.",
      details: [
        "Optimized client web apps to reduce hydration latency and server responses.",
        "Authored custom WordPress themes from scratch and developed bespoke sync plugins.",
        "Engineered global state management nodes and decoupled API integrations."
      ],
      tags: ["Next.js", "WordPress", "Webflow", "Custom Plugins", "PostgreSQL", "State Management", "MongoDB", "Supabase"]
    },
    {
      role: "Full-Stack Developer",
      company: "Centre for Data Science Research (CDSR)",
      period: "Dec 2025 - Jan 2026 (Remote)",
      desc: "Built robust, data-driven applications using the MERN stack, focusing on scalable backend architecture and efficient data pipelines.",
      details: [
        "Developed and maintained full-stack features across the MERN ecosystem for research-focused platforms.",
        "Designed efficient PostgreSQL schemas and RESTful APIs to handle data-intensive workloads.",
        "Collaborated remotely with a distributed team to ship reliable, well-tested features on schedule."
      ],
      tags: ["PostgreSQL", "Express.js", "React", "Node.js", "Prisma", "REST APIs"]
    }
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering (CSE)",
      institution: "Patuakhali Science and Technology University (PSTU)",
      period: "2022 - 2026",
      desc: "Undergraduate degree in Computer Science and Engineering focusing on core CS fundamentals, Software Architecture, Database Systems, Data Structures & Algorithms, and Enterprise Web Technologies.",
      details: [
        "Major in Computer Science & Engineering (CSE)",
        "Specialized in Modern Web Architecture, Full-Stack Systems & WordPress Engineering",
        "Participated in hands-on data science research and software optimization initiatives"
      ],
      tags: ["Computer Science", "Software Engineering", "Data Structures", "Database Systems", "Web Architecture"]
    }
  ];

  return (
    <article className="space-y-20 md:space-y-28">
      {/* SECTION 1: PROFILE SUMMARY */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
      >
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative py-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(18,105,114,0.25)_0%,rgba(18,105,114,0)_70%)] blur-[12px] pointer-events-none -z-10" />

            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[330px] sm:h-[370px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#1e293b]">
              <Image
                src="/arfan-ahmed.jpg"
                alt="Arfan Ahmed — Full Stack Web Developer"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#1e293b] border border-[#126972]/50 rounded-xl p-3.5 sm:p-4 shadow-2xl z-20 max-w-[210px] text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#22a0ad] block leading-none">
                10+
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-100 uppercase tracking-wider block mt-1 leading-tight">
                Months Experience
              </span>
              <span className="text-[9px] text-slate-400 block font-sans mt-0.5">
                Corporate Software &amp; WP Dev
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
          <div className="inline-flex items-center space-x-2 bg-[#023644]/50 border border-[#126972]/40 text-[#22a0ad] px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#126972] animate-pulse" />
            <span>About Me</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            About <span className="text-[#22a0ad]">Me</span>
          </h1>

          <div className="space-y-3 font-sans text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am <strong className="text-[#22a0ad]">Arfan Ahmed</strong>, a senior Full-Stack Developer &amp; WordPress Architect specializing in Next.js, React, TypeScript, Node.js, and custom WordPress engine architecture.
            </p>
            <p>
              My career began at the <strong className="text-slate-100">Centre for Data Science Research (CDSR)</strong> building data-intensive MERN applications. Currently at <strong className="text-[#22a0ad]">Exprovia</strong>, I engineer high-speed enterprise frontends, custom WooCommerce plugins, and headless CMS integrations.
            </p>
            <p>
              I focus on writing clean, fully-typed code that drives real business growth, achieves top Lighthouse performance, and scales reliably long-term.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
            <div className="p-3.5 bg-[#1e293b] border border-slate-800 hover:border-[#126972]/50 rounded-xl flex items-center space-x-3 text-slate-200 shadow-md group transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#023644]/50 border border-[#126972]/40 flex items-center justify-center text-[#22a0ad] group-hover:scale-110 transition-transform shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-100 block">Full-Stack Engineer</span>
                <span className="text-[10px] text-slate-400 block font-medium">Next.js &amp; Node.js</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#1e293b] border border-slate-800 hover:border-[#126972]/50 rounded-xl flex items-center space-x-3 text-slate-200 shadow-md group transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#023644]/50 border border-[#126972]/40 flex items-center justify-center text-[#22a0ad] group-hover:scale-110 transition-transform shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-100 block">WordPress Architect</span>
                <span className="text-[10px] text-slate-400 block font-medium">Themes &amp; Plugins</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#1e293b] border border-slate-800 hover:border-[#126972]/50 rounded-xl flex items-center space-x-3 text-slate-200 shadow-md group transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#023644]/50 border border-[#126972]/40 flex items-center justify-center text-[#22a0ad] group-hover:scale-110 transition-transform shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-100 block">Performance Core</span>
                <span className="text-[10px] text-slate-400 block font-medium">100% Type-Safe Code</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: PERSONAL STORY & MOTIVATION */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="bg-[#1e293b] p-6 sm:p-10 border border-slate-800 rounded-3xl shadow-xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(18,105,114,0.18)_0%,rgba(18,105,114,0)_70%)] blur-[20px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="inline-flex items-center space-x-2 bg-[#023644]/60 border border-[#126972]/40 text-[#22a0ad] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#22a0ad]" />
              <span>Personal Story &amp; Motivation</span>
            </div>
            <Quote className="w-6 h-6 text-[#126972] opacity-60" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Driven by Curiosity, Powered by <span className="text-[#22a0ad]">Code</span>
            </h2>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
              <p>
                My journey into software engineering started with a simple question: <em className="text-[#22a0ad] not-italic font-semibold">&ldquo;How do complex web applications deliver instant, seamless experiences to millions of users?&rdquo;</em> As a Computer Science &amp; Engineering student at Patuakhali Science and Technology University (PSTU), I began exploring C/C++, algorithms, and backend architectures.
              </p>
              <p>
                What began as academic curiosity quickly transformed into a lifelong passion for full-stack engineering and custom WordPress ecosystem design. I thrive on bridging technical complexity with intuitive user interfaces — whether architecting 100% type-safe REST APIs, writing custom WordPress sync plugins from scratch, or building Next.js applications optimized for zero hydration latency.
              </p>
              <p>
                My core philosophy centers on <strong className="text-slate-100 font-bold">relentless craftsmanship, continuous learning, and measurable business impact</strong>. Software is not just about writing code; it&apos;s about creating resilient digital assets that empower real businesses to grow.
              </p>
            </div>
          </div>

          {/* 3 Core Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-800">
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-1.5 hover:border-[#126972]/50 transition-all">
              <div className="flex items-center space-x-2 text-[#22a0ad]">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Continuous Learning</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Constantly mastering Next.js 15, TypeScript, and modern headless CMS architecture.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-1.5 hover:border-[#126972]/50 transition-all">
              <div className="flex items-center space-x-2 text-[#22a0ad]">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Performance First</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Obsessed with Core Web Vitals, 95+ Lighthouse scores, and zero-bloat code.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-1.5 hover:border-[#126972]/50 transition-all">
              <div className="flex items-center space-x-2 text-[#22a0ad]">
                <HeartHandshake className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Client Commitment</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Translating complex business requirements into elegant, high-impact digital tools.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: THE PATH - DEVELOPER JOURNEY (GIT LOG TERMINAL) */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="space-y-6 z-10 relative"
      >
        {/* Standard Section Header (matching all other sections, NO pill badge) */}
        <div className="text-left space-y-2">
          <h2 className="text-xs font-bold text-[#22a0ad] tracking-wider uppercase">
            The Path
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
            Developer <span className="text-[#22a0ad]">Journey</span>
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Interactive git-commit log tracking key milestones, skill expansions, and software engineering growth phases.
          </p>
        </div>

        {/* macOS Terminal Console Window */}
        <div className="bg-[#0b1329] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl font-mono">
          {/* Terminal Window Header Bar */}
          <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#126972] inline-block" />
            </div>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#22a0ad]" />
              <span>arfan-ahmed — ~/journey</span>
            </span>
            <span className="text-[10px] text-[#22a0ad] bg-[#023644]/50 px-2 py-0.5 rounded border border-[#126972]/40 hidden sm:inline-block">
              git log --graph
            </span>
          </div>

          {/* Terminal Prompt Bar */}
          <div className="p-4 sm:p-6 bg-[#070d1e] space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 pb-3 border-b border-slate-800/80">
              <span className="text-[#22a0ad] font-bold">$</span>
              <span className="text-slate-100 font-mono">git log --graph --oneline --reverse</span>
              <span className="w-2 h-4 bg-[#22a0ad] animate-pulse inline-block" />
              <span className="text-[11px] text-slate-500 ml-auto hidden md:inline">
                (click a commit to <span className="text-cyan-300">git show</span> full story)
              </span>
            </div>

            {/* Git Commit History List with Vertical Graph Axis Line */}
            <div className="relative pl-6 sm:pl-8 space-y-4">
              {/* Glowing Ocean-Teal Vertical Git Branch Graph Axis */}
              <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#126972] via-[#22a0ad] to-[#126972]" />

              {gitCommits.map((item, idx) => {
                const isExpanded = expandedCommitIndex === idx;
                return (
                  <div key={idx} className="relative group">
                    {/* Graph Circular Node Dot */}
                    <div className="absolute -left-[27px] sm:-left-[31px] top-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0b1329] border-2 border-[#126972] group-hover:border-[#22a0ad] flex items-center justify-center text-[#22a0ad] z-10 transition-all shadow-[0_0_12px_rgba(34,160,173,0.3)]">
                      {item.icon}
                    </div>

                    {/* Commit Row Header Card */}
                    <div
                      onClick={() => setExpandedCommitIndex(isExpanded ? null : idx)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer font-mono text-xs ${
                        isExpanded
                          ? "bg-[#1e293b] border-[#126972] shadow-lg"
                          : "bg-slate-900/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#1e293b]/70"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 overflow-hidden">
                          {/* Commit Hash */}
                          <span className="text-amber-400 font-bold shrink-0">{item.hash}</span>

                          {/* Branch Label */}
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#023644]/80 text-[#22a0ad] border border-[#126972]/40 shrink-0">
                            ● {item.branch}
                          </span>

                          {/* HEAD Badge if latest */}
                          {item.isHead && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 bg-[#126972] text-white rounded shrink-0">
                              HEAD
                            </span>
                          )}

                          {/* Commit Message */}
                          <span className="font-sans text-slate-200 truncate">
                            <strong className="text-[#22a0ad] font-mono mr-1">{item.type}</strong>
                            {item.summary}
                          </span>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isExpanded ? "rotate-90 text-[#22a0ad]" : ""
                          }`}
                        />
                      </div>

                      {/* Expanded Drawer View */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 pt-4 border-t border-slate-800 space-y-4 font-sans text-slate-300 overflow-hidden"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div>
                                <span className="text-[10px] font-mono uppercase text-[#22a0ad] font-bold tracking-wider block">
                                  {item.heading}
                                </span>
                                <h3 className="text-sm sm:text-base font-bold text-slate-100 mt-0.5">
                                  {item.subtitle}
                                </h3>
                              </div>
                              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300 rounded-lg">
                                {item.year}
                              </span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                              {item.desc}
                            </p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {item.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 bg-slate-950/80 text-slate-300 border border-slate-800 rounded-md"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Key Takeaway Bullet */}
                            <div className="p-3 bg-[#023644]/40 border border-[#126972]/40 rounded-xl text-xs text-[#22a0ad] flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#22a0ad]" />
                              <span className="font-medium text-slate-200">{item.result}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: EXPERIENCE */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="space-y-12"
      >
        <div className="space-y-6">
          <div className="text-left space-y-2">
            <h2 className="text-xs font-bold text-[#22a0ad] tracking-wider uppercase">
              Career Journey
            </h2>
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
              Work Experience
            </p>
          </div>

          <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-8 space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-[#126972] flex items-center justify-center z-10 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#126972]" />
                </span>

                <div className="bg-[#1e293b] p-6 border border-slate-800 hover:border-[#126972]/50 rounded-2xl transition-all duration-200 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold text-[#22a0ad] uppercase tracking-wide mt-0.5">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 border-t border-slate-800 pt-3">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22a0ad] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-800 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: SKILLS INVENTORY */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="text-left space-y-2">
          <h2 className="text-xs font-bold text-[#22a0ad] tracking-wider uppercase">
            Technical Matrix
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
            Skills Inventory
          </p>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          {Object.entries(skillCategories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center gap-2 capitalize cursor-pointer ${activeTab === key
                ? "border-[#126972]/80 text-[#22a0ad] bg-[#023644]/60"
                : "border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
            >
              {value.icon}
              <span>{key}</span>
            </button>
          ))}
        </div>

        <div className="bg-[#1e293b] p-6 border border-slate-800 rounded-2xl min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5"
            >
              {skillCategories[activeTab].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-[#126972]/50 transition-all flex items-center justify-between gap-2 group"
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <div className="p-1.5 bg-slate-800/80 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-100 text-xs sm:text-sm group-hover:text-[#22a0ad] transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0 group-hover:text-[#22a0ad] group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* SECTION 4: EDUCATION */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="space-y-6 pt-4"
      >
        <div className="text-left space-y-2">
          <h2 className="text-xs font-bold text-[#22a0ad] tracking-wider uppercase">
            Academic Qualification
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-[#22a0ad] inline-block" />
            <span>Education</span>
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-8 space-y-8">
          {education.map((item, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-[#126972] flex items-center justify-center z-10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#126972]" />
              </span>

              <div className="bg-[#1e293b] p-6 border border-slate-800 hover:border-[#126972]/50 rounded-2xl transition-all duration-200 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100">
                      {item.degree}
                    </h3>
                    <p className="text-xs font-semibold text-[#22a0ad] uppercase tracking-wide mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#22a0ad] bg-[#023644]/50 px-3 py-1 rounded-full border border-[#126972]/40 uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2 border-t border-slate-800 pt-3">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22a0ad] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-800 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 5: GITHUB ACTIVITY */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="space-y-6 z-10 relative"
      >
        <div className="text-left space-y-2">
          <h2 className="text-xs font-bold text-[#22a0ad] tracking-wider uppercase">
            GitHub Telemetry
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
            Open Source & Activity
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 border border-slate-800 rounded-2xl flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="relative w-full md:w-1/2 max-w-[495px] h-[195px] rounded-xl overflow-hidden">
            <img
              src="https://github-readme-stats-fast.vercel.app/api?username=asuselessbrain&show_icons=true&bg_color=0f172a&title_color=126972&text_color=f8fafc&icon_color=126972&border_color=334155&border_radius=8"
              alt="Arfan Ahmed's GitHub statistics"
              width={495}
              height={195}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative w-full md:w-1/2 max-w-[495px] h-[195px] rounded-xl overflow-hidden">
            <img
              src="https://github-readme-stats-fast.vercel.app/api/streak?username=asuselessbrain&show_icons=true&bg_color=0f172a&title_color=126972&text_color=f8fafc&icon_color=126972&border_color=334155&border_radius=8"
              alt="Arfan Ahmed's GitHub statistics"
              width={495}
              height={195}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative w-full md:w-1/2 max-w-[495px] h-[195px] rounded-xl overflow-hidden">
            <img
              src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=asuselessbrain&layout=compact&bg_color=0f172a&title_color=126972&text_color=f8fafc&icon_color=126972&border_color=334155&border_radius=8"
              alt="Arfan Ahmed's most-used programming languages on GitHub"
              width={495}
              height={195}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.section>
    </article>
  );
}
