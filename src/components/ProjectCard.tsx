"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import * as analytics from "@/utils/analytics";
import { FaGithub } from "react-icons/fa";

export interface Project {
  id: string;
  title: string;
  category: string;
  image?: string;
  tags: string[];
  desc: string;
  demoUrl: string;
  gitUrl: string;
  problem?: string;
  solution?: string;
  result?: string;
  archDetails: {
    frontend: string;
    backend: string;
    database: string;
    detailsList: string[];
  };
}

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleCardClick = () => {
    analytics.trackProjectClick(project.id, project.title);
    onSelect(project);
  };

  const imageSrc = project.image || `/images/projects/${project.id}.webp`;

  return (
    <div
      onClick={handleCardClick}
      className="bg-[#1e293b] border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer h-full"
    >
      <div>
        {/* TOP SCREENSHOT THUMBNAIL (Fixed 16:9 aspect ratio with zoom on hover) */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-900 border-b border-slate-800">
          <Image
            src={imageSrc}
            alt={`${project.title} Screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover animate-img-scroll"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-30" />
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          {/* Category Tag Pill */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md capitalize">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {project.desc}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2 py-0.5 bg-slate-900/60 text-slate-300 border border-slate-800 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between mt-auto">
        <span className="text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1">
          View Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>

        <div className="flex items-center space-x-3">
          {project.gitUrl && (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
              title="View GitHub Repository"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
              title="View Live Site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

