"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { Project } from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { FolderGit2 } from "lucide-react";

export default function ProjectsClient() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "proj_01",
      image: "/images/projects/proj_01.webp",
      title: "Exprovia Corporate Hub",
      category: "wordpress",
      tags: ["WordPress", "PHP", "Tailwind CSS", "REST API", "JS"],
      desc: "An enterprise-level corporate web application utilizing custom themes and bespoke plugins to orchestrate real-time inventory management across legacy ERP systems.",
      demoUrl: "https://exprovia.de",
      gitUrl: "",
      problem: "Legacy inventory database queries were lagging behind client checkouts, causing order discrepancies and inventory mismatches.",
      solution: "Developed a custom WooCommerce plugin and sync engine that batches queries using direct MySQL indices and a REST API cron trigger.",
      result: "Database response times dropped by 40%, order errors reached 0%, and Mobile PageSpeed score climbed to 98%.",
      archDetails: {
        frontend: "Bespoke custom WordPress theme built using PHP, Tailwind CSS, and vanilla JS web components.",
        backend: "Custom plugins handling sync pipelines via WordPress REST APIs and cron engines.",
        database: "MySQL core engine featuring customized indices and high-speed search lookup tables.",
        detailsList: [
          "Optimized Core Web Vitals to score 98% on Mobile PageSpeed.",
          "Secured endpoints using strict JWT authentications and nonce checking.",
          "Custom WooCommerce extensions built for specialized corporate clients.",
          "Integrated automated backups and self-healing error logging systems."
        ]
      }
    },
    {
      id: "proj_02",
      image: "/images/projects/proj_02.webp",
      title: "Developer Portfolio & Interactive Shell",
      category: "frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      desc: "A hyper-interactive developer portfolio designed with fast server-side rendering, accessible SaaS component primitives, and responsive layout grids.",
      demoUrl: "https://arfan.dev",
      gitUrl: "https://github.com/asuselessbrain",
      problem: "Traditional developer portfolios feel static and struggle to demonstrate deep technical mastery of complex modern stacks.",
      solution: "Designed a clean, dark SaaS environment built with Next.js App Router, TypeScript, and Framer Motion.",
      result: "Interaction latency dropped below 100ms, with zero layout shift and 100/100 Lighthouse performance scores.",
      archDetails: {
        frontend: "Next.js App Router, TypeScript, Framer Motion, and Tailwind CSS 4.",
        backend: "Dynamic Next.js server components running high-speed static builds.",
        database: "LocalStorage state management for user preferences.",
        detailsList: [
          "Zero layout shifts achieved through precise container aspect ratios.",
          "Dynamic metadata API injection ensuring complete SEO coverage.",
          "High contrast dark mode compliant with WCAG AAA accessibility."
        ]
      }
    },
    {
      id: "proj_03",
      image: "/images/projects/proj_03.webp",
      title: "Headless E-Commerce Digital Store",
      category: "fullstack",
      tags: ["Next.js", "WooCommerce", "GraphQL", "Tailwind CSS", "Prisma"],
      desc: "A decoupled full-stack digital storefront syncing dynamic WordPress WooCommerce products into a blazing fast Next.js static layout via Apollo GraphQL.",
      demoUrl: "https://demo-shop.arfan.dev",
      gitUrl: "https://github.com/asuselessbrain",
      problem: "Monolithic WordPress e-commerce websites suffered from slow page loads, poor mobile performance, and high security risks.",
      solution: "Decoupled the architecture completely, building a Next.js static storefront pulling WooCommerce data via Apollo GraphQL.",
      result: "Server response latency plummeted to 150ms globally, while fully securing payment channels using Stripe webhooks.",
      archDetails: {
        frontend: "Next.js static site regeneration (ISR) fetching endpoints periodically.",
        backend: "Apollo GraphQL gateway mapping WordPress WPGraphQL payloads.",
        database: "PostgreSQL caching order pipelines, synchronizing with WooCommerce API core.",
        detailsList: [
          "ISR pipelines yielding 150ms server responses globally.",
          "Fully automated custom cart state managed using local persistent storage.",
          "Stripe Webhook microservices securing checkout routes.",
          "Bespoke schema structures handling digital product downloads secure links."
        ]
      }
    },
    {
      id: "proj_04",
      image: "/images/projects/proj_04.webp",
      title: "Real-time CRM Sync Middleware Engine",
      category: "fullstack",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Prisma", "PostgreSQL"],
      desc: "A high-performance secure microservice syncing incoming WordPress lead generation forms to enterprise CRM APIs in real-time with automatic failure retry logs.",
      demoUrl: "",
      gitUrl: "https://github.com/asuselessbrain",
      problem: "Candidate leads captured on frontends were dropping due to target CRM API outages and lack of payload telemetry.",
      solution: "Engineered a Node.js middleware sync engine utilizing a rate-limited retry queue, AES-256 database encryption, and automatic fallbacks.",
      result: "Successfully synchronizes 5,000+ candidate leads daily with 0% data loss under API outage simulations.",
      archDetails: {
        frontend: "Admin reporting dashboard built in React displaying latency curves.",
        backend: "Node.js cluster with Express APIs handling rate limiters and payload validations.",
        database: "MongoDB storing event telemetry logs, PostgreSQL caching CRM mapping indexes.",
        detailsList: [
          "Processes 5,000+ hook payloads daily with zero dropouts.",
          "Automated fallback routes executing retry loops if target API crashes.",
          "AES-256 field level encryptions protecting candidate PII details.",
          "Dockerized deployment pipelines deployed across AWS clusters."
        ]
      }
    },
    {
      id: "proj_05",
      image: "/images/projects/proj_05.webp",
      title: "Interactive Canvas Vector Engine",
      category: "frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Redux", "Canvas API"],
      desc: "A rich drawing vector canvas web app enabling users to sketch custom architectural diagrams and export them directly to standard formats.",
      demoUrl: "https://canvas.arfan.dev",
      gitUrl: "https://github.com/asuselessbrain",
      problem: "Retina displays faced heavy visual lag when rendering complex vector shapes, while saving shapes required bulky local files.",
      solution: "Developed an infinite offset pan & zoom drawing library on pure Canvas 2D and integrated WebSocket sync.",
      result: "Maintained a consistent 60fps rendering frame rate even under heavy shape counts, with instant cloud sync.",
      archDetails: {
        frontend: "React, TypeScript, Redux Toolkit, and pure Canvas 2D render loops.",
        backend: "Serverless Vercel endpoints handling metadata conversion pipelines.",
        database: "Supabase storage storing sketch raw JSON arrays and PNG mockups.",
        detailsList: [
          "Optimized canvas render calls to retain smooth 60fps on retina displays.",
          "Infinite canvas offset pan & zoom math libraries.",
          "Custom JSON import / export structures with schema validation checks.",
          "Integrated collaborative multiplayer sessions using WebSockets."
        ]
      }
    },
    {
      id: "proj_06",
      image: "/images/projects/proj_06.webp",
      title: "Secure Two-Factor WP Auth Plugin",
      category: "wordpress",
      tags: ["WordPress", "PHP", "WordPress APIs", "Security", "REST API"],
      desc: "A security WordPress plugin enforcing custom two-factor OTP validations, hardware security key support, and advanced login request telemetry.",
      demoUrl: "",
      gitUrl: "https://github.com/asuselessbrain",
      problem: "WordPress login panels are vulnerable to brute-force credential stuffing loops and lack native hardware key authentication.",
      solution: "Authored a strict security plugin that integrates Google Authenticator, Twilio SMS OTP gateways, and WebAuthn specs.",
      result: "Blocks 99.9% of automated credential stuffing loops with detailed real-time diagnostic telemetry.",
      archDetails: {
        frontend: "React-based admin settings dashboards compiled into WP plugins panels.",
        backend: "PHP core leveraging WordPress login hooks, salt hashes, and OTP checks.",
        database: "Bespoke database tables registering login attempts and blacklisted IPs.",
        detailsList: [
          "Blockades 99.9% of automated brute-force credential stuffing loops.",
          "Integrated Google Authenticator / Twilio SMS OTP gateways.",
          "Detailed diagnostics reports showing maps of login attempts.",
          "Fully documented code complying with WordPress VIP standards."
        ]
      }
    },
    {
      id: "proj_07",
      image: "/images/projects/proj_07.webp",
      title: "CALM ABA Therapy — Healthcare Website Redesign",
      category: "wordpress",
      tags: ["WordPress", "Elementor Pro", "SEO", "Responsive Design", "Intake Flow"],
      desc: "A full homepage redesign and layout modernization for a Maryland-based ABA therapy center, built to feel modern, trustworthy, and healthcare-grade.",
      demoUrl: "https://calmllc.org/",
      gitUrl: "",
      problem: "The client's existing WordPress site had an outdated layout, lacked clear conversion paths for parents seeking therapy, and had no structured local SEO presence.",
      solution: "Redesigned core pages using Elementor Pro, added clear CTA sections, an insurance-aware service breakdown across 6 pages, and Google Forms intake integration.",
      result: "Delivered a fully responsive healthcare website with a clear service catalog, working lead-capture flow, and locally optimized SEO structure.",
      archDetails: {
        frontend: "Elementor Pro page builder on Hello Elementor theme with custom responsive sections.",
        backend: "WordPress core with Elementor Pro stack and Google Forms intake handling.",
        database: "Standard WordPress MySQL schema extended with Elementor template data.",
        detailsList: [
          "Full homepage redesign following a modern healthcare reference style.",
          "Six dedicated service pages with insurance guidance.",
          "Google Forms-based intake flow for lead capture.",
          "Local SEO optimization for Maryland-based ABA therapy searches."
        ]
      }
    },
    {
      id: "proj_08",
      image: "/images/projects/proj_08.webp",
      title: "OMLI Trading — Global Minerals Trading Website",
      category: "wordpress",
      tags: ["WordPress", "Elementor Pro", "B2B", "SEO", "Corporate"],
      desc: "Corporate B2B website built for a U.S.-based international minerals trading company, featuring trust statistics, product pages, and a global supply network map.",
      demoUrl: "https://omlitrading.com/",
      gitUrl: "",
      problem: "The client needed a website that communicated global scale to industrial buyers, but lacked clear company positioning, statistics, or product details.",
      solution: "Designed an 8-page corporate site on WordPress with Elementor Pro, adding key trust statistics (600k+ MT exported), product pages, and a global trade map.",
      result: "Delivered a professional corporate website positioning the client as a credible global supplier with working quote request flows.",
      archDetails: {
        frontend: "Elementor Pro on WordPress with custom sections for hero stats and trade routes map.",
        backend: "WordPress multi-page architecture structured for B2B search visibility.",
        database: "Standard WordPress MySQL schema managing page content and quote requests.",
        detailsList: [
          "Homepage rebuilt around a clear one-sentence value proposition.",
          "Key company stats (600,000+ MT exported, 15+ years experience).",
          "Product pages for Rock Salt, Rock Phosphate, and Sulfur.",
          "Global supply network map showing Egypt-to-Americas trade routes."
        ]
      }
    },
    {
      id: "proj_09",
      image: "/images/projects/proj_09.webp",
      title: "Amilli Financial — Insurance Agency Website",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "GoHighLevel", "CRM Integration", "Lead Generation"],
      desc: "An 8-page independent insurance agency website built from a client reference site, with lead forms integrated directly into GoHighLevel CRM.",
      demoUrl: "https://amillifinancial.com/",
      gitUrl: "",
      problem: "The client needed a modern, fully owned website with reliable lead capture routed to their GoHighLevel CRM and an agent recruitment funnel.",
      solution: "Built an 8-page WordPress site with Elementor, integrated GoHighLevel CRM webhooks for form submissions, and added carrier showcases and reviews.",
      result: "Delivered a professional insurance agency site with working CRM lead routing and an agent recruitment section.",
      archDetails: {
        frontend: "Elementor page builder with custom lead capture forms and carrier logo carousels.",
        backend: "WordPress core with GoHighLevel CRM webhook integration.",
        database: "WordPress MySQL schema with external CRM payload forwarding.",
        detailsList: [
          "8-page site covering Health, Life, and Annuity products.",
          "Direct GoHighLevel CRM integration for lead capture.",
          "Dedicated 'Join Our Team' agent recruiting funnel.",
          "Google Reviews and carrier logo trust indicators."
        ]
      }
    },
    {
      id: "proj_10",
      image: "/images/projects/proj_10.webp",
      title: "Nature Sunnah — Holistic Wellness & Adventure Platform",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "WooCommerce", "Kit.com Integration", "Booking"],
      desc: "A complete redesign of a Dutch holistic wellness e-commerce site, combining a WooCommerce webshop for natural products with an adventure booking system.",
      demoUrl: "https://naturesunnah.nl/",
      gitUrl: "",
      problem: "The previous site had a broken product grid, non-functional mobile buttons, and lacked waitlist logic for undated adventure workshops.",
      solution: "Restructured navigation into 5 sections, built dynamic adventure booking cards with Kit.com waitlist logic, and fixed shop grid display bugs.",
      result: "Delivered a high-converting platform with automated waitlists, multi-category shop, and AI chatbot support.",
      archDetails: {
        frontend: "Elementor page builder with 7-category adventure grid and dynamic pricing fields.",
        backend: "WordPress + WooCommerce core with Kit.com waitlist integration.",
        database: "WooCommerce MySQL schema for products, orders, and waitlist routing.",
        detailsList: [
          "7-category adventure grid with dynamic price/date fields.",
          "Kit.com waitlist forms for undated adventure trips.",
          "Order bump feature at checkout for complementary products.",
          "Entire site UX built in Dutch per client specification."
        ]
      }
    },
    {
      id: "proj_11",
      image: "/images/projects/proj_11.webp",
      title: "Storage Shelter Solutions — Industrial Website Rebuild",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "Industrie Theme", "Staging Workflow", "B2B"],
      desc: "A phased WordPress rebuild for a UK industrial storage shelter company, recreating their site with a purchased premium theme matched to a client demo.",
      demoUrl: "https://storagesheltersolutions.com/",
      gitUrl: "",
      problem: "The client wanted their site rebuilt on the Industrie theme without losing existing content or SEO rankings, using a phased rollout.",
      solution: "Delivered Phase 1 core pages, built a mega-menu for shelter sub-categories, and established a staging workflow for review.",
      result: "Delivered a modern B2B site preserving content and rankings, with an expanded project showcase and case studies.",
      archDetails: {
        frontend: "Elementor on Industrie theme with nested mega-menu navigation.",
        backend: "WordPress core with staging-to-production deployment workflow.",
        database: "WordPress MySQL schema preserving original post assets and rankings.",
        detailsList: [
          "Phased delivery starting with 4 core priority pages.",
          "Nested mega-menu for Temporary Buildings & Steel Buildings.",
          "Staging workflow configured for client review before production.",
          "Preserved existing SEO rankings and URL structures."
        ]
      }
    },
    {
      id: "proj_12",
      image: "/images/projects/proj_12_copy.webp",
      title: "Kimoto NYC — Southeast Asian Rooftop Restaurant",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "Figma to WP", "Custom Animation", "Coming Soon"],
      desc: "A full website redesign for Kimoto rooftop restaurant in Brooklyn, converted from Figma with custom animations and a live Coming Soon page.",
      demoUrl: "https://kimotonyc.com/",
      gitUrl: "",
      problem: "The client needed a Figma design converted into a WordPress site with custom off-canvas navigation and scroll animations.",
      solution: "Built a custom Elementor theme with off-canvas menu, hero scroll logo animation, and a pre-launch Coming Soon subscribe page.",
      result: "Launched a live Coming Soon page capturing early signups while completing the full restaurant website build.",
      archDetails: {
        frontend: "Elementor with off-canvas hamburger navigation and scroll animations.",
        backend: "WordPress core with subscriber email capture.",
        database: "WordPress MySQL schema managing restaurant menus and pre-launch emails.",
        detailsList: [
          "Figma design translated into a responsive WordPress build.",
          "Off-canvas hamburger navigation replacing standard header.",
          "Hero logo scroll animation shifting to header on scroll.",
          "Live Coming Soon page with email signup carousel."
        ]
      }
    }
  ];

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Full-Stack", value: "fullstack" },
    { label: "Frontend", value: "frontend" },
    { label: "WordPress", value: "wordpress" }
  ];

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
  };

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <article className="space-y-10">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Portfolio Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Projects & Case Studies
        </h1>
        <p className="text-slate-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
          Explore client builds and production full-stack systems. Filter by technology layer below to inspect architecture breakdowns and live demos.
        </p>
      </motion.section>

      {/* Filter Menu Bar */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-2 border-b border-slate-800 pb-5"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => handleFilterChange(cat.value)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all uppercase tracking-wide cursor-pointer ${
              filter === cat.value
                ? "border-emerald-500/60 text-emerald-400 bg-emerald-500/10 font-bold"
                : "border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <section className="text-center py-20 border border-dashed border-slate-800 rounded-2xl">
          <FolderGit2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-400">No projects found in this category.</p>
        </section>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </article>
  );
}

