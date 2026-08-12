"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Briefcase, Award, GraduationCap, ChevronRight, CheckCircle2, TrendingUp, Layers, Database } from "lucide-react";
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

  const skillCategories: Record<string, SkillCategory> = {
    frontend: {
      title: "Frontend Stack",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
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
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-emerald-400" /> },
        { name: "Express.js", icon: <SiExpress className="w-5 h-5 text-slate-200" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-emerald-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-sky-400" /> },
        { name: "Mongoose", icon: <SiMongodb className="w-5 h-5 text-emerald-600" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="w-5 h-5 text-slate-200" /> },
        { name: "REST APIs", icon: <Cpu className="w-5 h-5 text-emerald-400" /> }
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      skills: [
        { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-amber-400" /> },
        { name: "Supabase", icon: <SiSupabase className="w-5 h-5 text-emerald-400" /> },
        { name: "VPS Deployment (Linux)", icon: <SiLinux className="w-5 h-5 text-yellow-500" /> },
        { name: "Vercel / Netlify", icon: <SiVercel className="w-5 h-5 text-slate-100" /> },
        { name: "Git / GitHub Actions", icon: <FaGithub className="w-5 h-5 text-slate-100" /> },
        { name: "Docker", icon: <SiDocker className="w-5 h-5 text-blue-400" /> }
      ],
    },
    cms: {
      title: "WordPress Architecture",
      icon: <FaWordpress className="w-4 h-4 text-emerald-400" />,
      skills: [
        { name: "WordPress (Custom Dev)", icon: <FaWordpress className="w-5 h-5 text-sky-400" /> },
        { name: "Webflow", icon: <SiWebflow className="w-5 h-5 text-blue-400" /> },
        { name: "Custom WP Theme Dev", icon: <FaWordpress className="w-5 h-5 text-sky-400" /> },
        { name: "Custom Plugin Dev", icon: <FaWordpress className="w-5 h-5 text-emerald-400" /> },
        { name: "WooCommerce", icon: <SiWoo className="w-5 h-5 text-purple-400" /> },
        { name: "Elementor Pro", icon: <SiElementor className="w-5 h-5 text-red-500" /> },
        { name: "REST API & Headless WP", icon: <FaWordpress className="w-5 h-5 text-cyan-400" /> },
        { name: "SEO & Speed Optimization", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
        { name: "JetEngine", icon: <Cpu className="w-5 h-5 text-amber-400" /> },
        { name: "ACF", icon: <Cpu className="w-5 h-5 text-blue-400" /> },
        { name: "JetSmartFilters", icon: <Cpu className="w-5 h-5 text-emerald-400" /> }
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
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18)_0%,rgba(16,185,129,0)_70%)] blur-[12px] pointer-events-none -z-10" />

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

            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#1e293b] border border-emerald-500/40 rounded-xl p-3.5 sm:p-4 shadow-2xl z-20 max-w-[210px] text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block leading-none">
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
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>About Me</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            About <span className="text-emerald-400">Me</span>
          </h1>

          <div className="space-y-3 font-sans text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am <strong className="text-emerald-400">Arfan Ahmed</strong>, a senior Full-Stack Developer &amp; WordPress Architect specializing in Next.js, React, TypeScript, Node.js, and custom WordPress engine architecture.
            </p>
            <p>
              My career began at the <strong className="text-slate-100">Centre for Data Science Research (CDSR)</strong> building data-intensive MERN applications. Currently at <strong className="text-emerald-400">Exprovia</strong>, I engineer high-speed enterprise frontends, custom WooCommerce plugins, and headless CMS integrations.
            </p>
            <p>
              I focus on writing clean, fully-typed code that drives real business growth, achieves top Lighthouse performance, and scales reliably long-term.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
            <div className="p-3.5 bg-[#1e293b] border border-slate-800 hover:border-emerald-500/40 rounded-xl flex items-center space-x-3 text-slate-200 shadow-md group transition-all">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-100 block">Full-Stack Engineer</span>
                <span className="text-[10px] text-slate-400 block font-medium">Next.js &amp; Node.js</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#1e293b] border border-slate-800 hover:border-emerald-500/40 rounded-xl flex items-center space-x-3 text-slate-200 shadow-md group transition-all">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-100 block">WordPress Architect</span>
                <span className="text-[10px] text-slate-400 block font-medium">Themes &amp; Plugins</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#1e293b] border border-slate-800 hover:border-emerald-500/40 rounded-xl flex items-center space-x-3 text-slate-200 shadow-md group transition-all">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
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
            <h2 className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
              Career Journey
            </h2>
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
              Work Experience
            </p>
          </div>

          <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-8 space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-emerald-500 flex items-center justify-center z-10 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>

                <div className="bg-[#1e293b] p-6 border border-slate-800 hover:border-emerald-500/40 rounded-2xl transition-all duration-200 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mt-0.5">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
          <h2 className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
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
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center gap-2 capitalize cursor-pointer ${
                activeTab === key
                  ? "border-emerald-500/60 text-emerald-400 bg-emerald-500/10"
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
                  className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition-all flex items-center justify-between gap-2 group"
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <div className="p-1.5 bg-slate-800/80 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-100 text-xs sm:text-sm group-hover:text-emerald-400 transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
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
          <h2 className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
            Academic Qualification
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-emerald-400 inline-block" />
            <span>Education</span>
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-8 space-y-8">
          {education.map((item, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-emerald-500 flex items-center justify-center z-10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </span>

              <div className="bg-[#1e293b] p-6 border border-slate-800 hover:border-emerald-500/40 rounded-2xl transition-all duration-200 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100">
                      {item.degree}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400/90 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2 border-t border-slate-800 pt-3">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
          <h2 className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
            GitHub Telemetry
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
            Open Source & Activity
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 border border-slate-800 rounded-2xl flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="relative w-full md:w-1/2 max-w-[495px] h-[195px] rounded-xl overflow-hidden bg-slate-900">
            <img
              src="https://github-stats-extended.vercel.app/api?username=asuselessbrain&show_icons=true&bg_color=0f172a&title_color=10b981&text_color=f8fafc&icon_color=10b981&border_color=334155&border_radius=8"
              alt="Arfan Ahmed's GitHub statistics"
              width={495}
              height={195}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative w-full md:w-1/2 max-w-[495px] h-[195px] rounded-xl overflow-hidden bg-slate-900">
            <img
              src="https://github-stats-extended.vercel.app/api/top-langs/?username=asuselessbrain&layout=compact&bg_color=0f172a&title_color=10b981&text_color=f8fafc&icon_color=10b981&border_color=334155&border_radius=8"
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
