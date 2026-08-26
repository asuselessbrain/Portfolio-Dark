"use client";

import { motion } from "framer-motion";
import { X, ExternalLink, Database, Cpu, Code2, CheckCircle2 } from "lucide-react";
import { Project } from "./ProjectCard";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  if (!project || !mounted) return null;

  const imageSrc = project.image || `/images/projects/${project.id}.webp`;

  return createPortal(
    <div className="fixed inset-0 z-[9990] flex items-start justify-center p-4 pt-8 md:pt-16">
      {/* Overlay background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="w-full max-w-3xl bg-[#1e293b] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-50 max-h-[85vh] flex flex-col relative"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-[#1e293b] flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold px-2.5 py-0.5 bg-[#023644]/70 text-cyan-400 border border-[#126972]/60 rounded-md capitalize">
              {project.category}
            </span>
            <h2 className="text-xl font-extrabold text-slate-100 leading-tight mt-1.5">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {/* Featured Image Preview */}
          <div className="w-full h-60 sm:h-80 rounded-xl overflow-hidden mb-2 relative border border-slate-800 bg-slate-900">
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover card-img-hover-scroll modal-img-hover"
            />
          </div>

          {/* Project Summary */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Project Overview
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.desc}
              </p>
            </div>

            {(project.problem || project.solution || project.result) && (
              <div className="grid grid-cols-1 gap-3.5 border-t border-slate-800 pt-4">
                {project.problem && (
                  <div className="space-y-1 bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      Challenge / Problem
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="space-y-1 bg-[#023644]/40 border border-[#126972]/40 p-4 rounded-xl">
                    <span className="text-xs font-bold text-[#22a0ad] uppercase tracking-wider block">
                      Technical Solution
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}

                {project.result && (
                  <div className="space-y-1 bg-teal-500/10 border border-teal-500/20 p-4 rounded-xl">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                      Impact & Results
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Architecture Columns */}
          {project.archDetails && (project.archDetails.frontend || project.archDetails.backend || project.archDetails.database) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 border-t border-b border-slate-800 py-5">
              {project.archDetails.frontend && (
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-[#22a0ad]">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Frontend</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {project.archDetails.frontend}
                  </p>
                </div>
              )}

              {project.archDetails.backend && (
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-[#22a0ad]">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Backend</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {project.archDetails.backend}
                  </p>
                </div>
              )}

              {project.archDetails.database && (
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-[#22a0ad]">
                    <Database className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Database</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {project.archDetails.database}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Key Features & Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.archDetails.detailsList.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22a0ad] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 bg-[#1e293b] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 bg-slate-900/60 border border-slate-800 text-slate-300 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-slate-700 hover:border-slate-500 bg-slate-900 text-slate-200 font-semibold rounded-lg text-xs tracking-wide uppercase transition-all flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-[#126972] to-[#22a0ad] hover:from-[#18838f] hover:to-[#2bc0d0] text-white font-bold rounded-lg text-xs tracking-wide uppercase transition-all flex items-center gap-2 shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Site</span>
              </a>
            )}
          </div>
        </div>

      </motion.div>
    </div>,
    document.body
  );
}

