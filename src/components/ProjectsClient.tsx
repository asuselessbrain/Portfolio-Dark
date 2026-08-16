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
      id: "proj_07",
      image: "/images/projects/proj_07.webp",
      title: "CALM ABA Therapy — Healthcare Website Redesign",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "Elementor Pro", "SEO", "Responsive Design", "Google Forms Integration"],
      desc: "A full homepage redesign and layout modernization for a Maryland-based ABA (Applied Behavior Analysis) therapy center, built to feel modern, trustworthy, and healthcare-grade while keeping the existing content intact.",
      demoUrl: "https://calmllc.org/",
      gitUrl: "",
      problem: "The client's existing WordPress site had an outdated, cluttered layout that didn't reflect a professional healthcare brand, lacked clear conversion paths for parents seeking therapy, and had no structured services or local SEO presence for ABA therapy searches in Maryland.",
      solution: "Redesigned the entire homepage and core page structure (Home, Services, About, Career, Contact) using Elementor Pro on the Hello Elementor theme, modeled after a healthcare-grade reference design. Rebuilt the layout with improved spacing, typography, and imagery, added clear CTA sections (Schedule Consultation / Begin Your Journey), an insurance-aware services breakdown across five distinct service pages (In-Home ABA, Center-Based ABA, Behavior & Education Consultation, School Consultations, Respite Care, Transition & Life Skills), an intake form integrated with Google Forms, and on-page SEO (meta titles, descriptions, heading structure) targeting local ABA therapy searches.",
      result: "Delivered a fully responsive, professionally designed healthcare website with a clear service catalog, working lead-capture intake flow, and locally-optimized SEO structure, passing multi-round QC covering responsiveness, functional testing, and SEO best practices before client handover.",
      archDetails: {
        frontend: "Elementor Pro page builder on the Hello Elementor theme, with custom sections for hero, services grid, process steps, and footer built for consistent responsive behavior across desktop, tablet, and mobile.",
        backend: "WordPress core with Classic Editor and Elementor Pro plugin stack; custom off-canvas mobile navigation and SMTP-based contact/intake form delivery.",
        database: "Standard WordPress MySQL schema extended with Elementor page/template data and form submission handling via Google Forms integration.",
        detailsList: [
          "Full homepage and site-wide layout redesign following a modern, healthcare-grade reference style.",
          "Clear CTA sections (Schedule Consultation / Begin Your Journey) placed across key pages.",
          "Six-service breakdown structure with individual dedicated service pages.",
          "Google Forms-based intake inquiry integration for lead capture.",
          "Local SEO optimization — meta titles, descriptions, and heading structure for Maryland-based ABA therapy search.",
          "Fully responsive design refined across desktop, tablet, and mobile through multiple QC rounds."
        ]
      }
    },
    {
      id: "proj_08",
      image: "/images/projects/proj_08.webp",
      title: "OMLI Trading — Global Minerals Trading Website",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "Elementor Pro", "B2B", "SEO", "Corporate Website"],
      desc: "A corporate B2B website built for a U.S.-based international minerals trading company, designed to establish credibility, showcase global scale, and communicate their rock salt, rock phosphate, and sulfur trade operations to industrial buyers.",
      demoUrl: "https://omlitrading.com/",
      gitUrl: "",
      problem: "The client, an international commodity trading company, needed a website that immediately communicated scale and trust to industrial buyers, but lacked a clear value proposition on the homepage, had no company statistics or global operations visibility, weak product presentation, and a thin page structure that made the business feel smaller than it actually was.",
      solution: "Designed and built a full multi-page corporate site (Home, About Us, Products, Operations, Logistics, Growth Strategy, Vision & Mission, Contact Us) on WordPress with Elementor Pro. Added a strong hero headline with a clear one-line company positioning, key trust-building statistics (600,000+ MT exported annually, 15+ years in trade, 4 major markets, founding year), a dedicated products section for Rock Salt, Rock Phosphate, and Sulfur with industrial applications, an interactive global supply network map connecting Egypt operations to U.S./Canada/Brazil/India markets, a logistics & supply chain section, and a sustainability section — all refined across multiple revision rounds based on direct client feedback on copy accuracy, imagery, and layout.",
      result: "Delivered a professional, scale-communicating corporate website that positions the client as a credible global minerals supplier, with accurate company data, leadership profiles, a functioning contact/quote request flow, and a fully responsive layout across devices.",
      archDetails: {
        frontend: "Elementor Pro page builder on WordPress, with custom sections for hero stats, product cards, an interactive global operations map, and a sticky header navigation.",
        backend: "WordPress core with Elementor Pro plugin stack, structured multi-page architecture (8 core pages) for SEO and content scalability.",
        database: "Standard WordPress MySQL schema managing page content, media library assets, and contact form submissions.",
        detailsList: [
          "Homepage rebuilt around a clear one-sentence value proposition and strong CTAs (Request a Supply Quote, Download Company Profile).",
          "Key company statistics section (600,000+ MT exported, 15+ years, 4 major markets, founded 2008) for instant credibility.",
          "Dedicated product pages for Rock Salt, Rock Phosphate, and Sulfur with industrial use-case breakdowns.",
          "Global supply network map visualizing Egypt-to-USA/Canada/Brazil/India trade routes.",
          "Expanded site structure (About, Products, Operations, Logistics, Growth Strategy, Vision & Mission, Contact) to reflect true company scale.",
          "Multiple client revision rounds addressing copy accuracy, product imagery, leadership bios, and layout refinement."
        ]
      }
    },
    {
      id: "proj_09",
      image: "/images/projects/proj_09.webp",
      title: "Amilli Financial — Insurance Agency Website",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "GoHighLevel", "CRM Integration", "Insurance", "Lead Generation"],
      desc: "An 8-page independent insurance agency website built from a client-provided reference site, covering health, life, and annuity products, with lead forms integrated directly into GoHighLevel and Google Reviews for social proof.",
      demoUrl: "https://amillifinancial.com/",
      gitUrl: "",
      problem: "The client's existing site was hosted on a platform they had no access to, and they needed a fully owned, modern, professional insurance agency website modeled after an industry reference site — with reliable lead capture routed into their GoHighLevel CRM, a dedicated recruiting page for new agents, and trust signals like Google Reviews.",
      solution: "Built a fresh 8-page WordPress site on Elementor (Home, About, Our Carriers, Health Insurance, Life Insurance, Annuities, Join Our Team, Contact), matching and improving on the client's reference design. Carried over the existing brand logo and color palette, embedded quote-request forms integrated with GoHighLevel for automatic lead routing, added a dedicated 'Join Our Team' recruiting page outlining the agent onboarding process, displayed carrier logos and Google Reviews for credibility, and refined layout and spacing across desktop, tablet, and mobile through multiple QC and client revision rounds.",
      result: "Delivered a fully responsive, professional insurance agency website with working CRM-connected lead forms, a clear service breakdown across three insurance products, and a functioning agent-recruitment funnel, replacing a site the client previously couldn't access or control.",
      archDetails: {
        frontend: "Elementor page builder on WordPress, with custom sections for hero lead-capture forms, carrier logo carousels, testimonial sliders, and a multi-step 'Join Our Team' process table.",
        backend: "WordPress core with Elementor plugin stack, GoHighLevel (GHL) CRM webhook integration for form submissions, and SMTP configuration for backup email notifications.",
        database: "Standard WordPress MySQL schema for content and media, with lead data passed through to the external GoHighLevel CRM rather than stored locally.",
        detailsList: [
          "8-page site structure covering Home, About, Our Carriers, three Service pages, Join Our Team, and Contact.",
          "Lead capture forms integrated directly with GoHighLevel (GHL) CRM for automatic routing.",
          "Dedicated 'Join Our Team' recruiting page with a step-by-step agent onboarding process table.",
          "Google Reviews and client testimonials displayed for trust and credibility.",
          "Carrier logo showcase including Aetna, UnitedHealthcare, Mutual of Omaha, Transamerica, and others.",
          "Multiple QC and revision rounds fixing responsive spacing issues across mobile, tablet, and desktop."
        ]
      }
    },
    {
      id: "proj_10",
      image: "/images/projects/proj_10.webp",
      title: "Nature Sunnah — Holistic Wellness & Adventure Booking Platform",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "WooCommerce", "Kit.com Integration", "Booking System", "E-commerce", "Multi-vendor Adventure"],
      desc: "A complete redesign of a Dutch holistic wellness e-commerce site, combining a WooCommerce webshop for raw honey, black seed oil, and natural supplements with a dynamic adventure-booking system for ice bath workshops, Morocco horse-riding trips, and Ardennes camping experiences.",
      demoUrl: "https://naturesunnah.nl/",
      gitUrl: "",
      problem: "The client's existing site was slow, converting poorly, and structurally confusing — the product grid only displayed two products, the mobile homepage buttons didn't work, and there was no system for managing adventure trips with or without confirmed dates. The client also wanted their WhatsApp-only support replaced with an AI chatbot and needed a dedicated, on-site charity donation page instead of redirecting elsewhere.",
      solution: "Restructured the entire navigation into five focused menus (Adventure, Webshop, Honey, About Us, Contact) and rebuilt the homepage around a 7-category adventure grid. Built dynamic pricing and date fields for each trip, and integrated Kit.com so trips without a confirmed date automatically show a 'Join Waitlist' form instead of 'Book Now.' Fixed the WooCommerce product grid bug limiting visible products, added 9 new webshop categories, and implemented an order-bump feature at checkout (e.g., suggesting a wooden honey spoon with honey purchases). Created a dedicated TIPS-model (Tempt, Influence, Persuade, Sell) sales page for the ice bath workshop with direct checkout, replaced the WhatsApp button with an AI chatbot, and resolved mobile responsiveness and site-speed issues so core ordering worked reliably on phones on day one.",
      result: "Delivered a fully responsive, high-converting wellness and adventure platform where customers can browse and purchase natural products or book adventure experiences seamlessly, with an automated waitlist-to-booking flow, a working multi-product shop grid, and restored critical mobile ordering functionality within the client's first-day deadline.",
      archDetails: {
        frontend: "Elementor page builder on WordPress, with custom sections for the adventure category grid, dynamic trip cards (price + date fields), TIPS-model sales page, and an AI chatbot widget replacing the previous WhatsApp button.",
        backend: "WordPress core with WooCommerce for the webshop, Elementor plugin stack, Kit.com integration for waitlist/registration forms, and conditional booking logic (Book Now vs. Join Waitlist based on trip date availability).",
        database: "Standard WordPress/WooCommerce MySQL schema for products, orders, and trip data, with waitlist submissions routed through Kit.com forms.",
        detailsList: [
          "Menu restructured from category-heavy navigation to 5 focused sections: Adventure, Webshop, Honey, About Us, Contact.",
          "7-category adventure grid on homepage (ice bath, Morocco horse riding, Ardennes camping, Thailand trip, etc.) with dynamic price/date fields.",
          "Kit.com-powered waitlist/registration logic: undated trips show 'Join Waitlist' instead of 'Book Now.'",
          "Dedicated TIPS-model sales page for ice bath workshops with direct checkout.",
          "9 new webshop categories added; fixed a bug limiting the product grid to only 2 visible products.",
          "Order Bump feature at checkout (e.g., wooden honey spoon suggested with honey purchases).",
          "WhatsApp button replaced with an AI chatbot; on-site charity/donation page added.",
          "Mobile homepage button fixes and site-speed optimization to restore core ordering on phones.",
          "Entire site content and UX built exclusively in Dutch per client requirement."
        ]
      }
    },
    {
      id: "proj_11",
      image: "/images/projects/proj_11.webp",
      title: "Storage Shelter Solutions — Industrial Storage Website Rebuild",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "Industrie Theme", "Phased Delivery", "Staging Workflow", "Industrial Services"],
      desc: "A phased WordPress rebuild for a UK-based industrial storage shelter company, recreating their existing site with a purchased premium theme (Industrie) matched to a client-approved demo, expanding from four core pages into a full multi-category product and project showcase.",
      demoUrl: "https://storagesheltersolutions.com/",
      gitUrl: "",
      problem: "The client had already purchased the Industrie theme from ThemeForest and wanted their existing site — covering tents, carports, container canopies, and steel buildings — rebuilt on it to match a specific reference demo, without losing their existing branding, content, or SEO structure. They preferred a phased rollout, starting with 4 priority pages before expanding to the rest of the site, and needed a safe staging-to-production workflow so their team could review changes before going live.",
      solution: "Delivered Phase 1 with 4 core pages (Home, About Us, Container Canopies, Contact Us) built on the Industrie theme and matched to the client's chosen demo reference. Iterated through multiple rounds of client feedback — simplifying the homepage back toward the original video-hero layout, removing unwanted hover effects, adjusting the About Us typography hierarchy, and swapping header/product photos to match each shelter type. Restructured the navigation into a mega-menu with nested Temporary Buildings (Container Canopies, Storage Tents, Carports, Livestock Shelters) and Steel Buildings (Insulated, Non-Insulated, Round Storage) categories, plus Projects, Industries, and Portfolio sections. Set up a staging environment so the client could review and approve changes before pushing to production, and expanded the build well beyond the original 4 pages into a full product catalog, project case studies, and blog.",
      result: "Delivered a fully rebuilt, phased WordPress site that preserved the client's existing content and SEO value while modernizing the design on their purchased theme, with a nested mega-menu for easy product navigation, a working staging-to-production workflow, and a growing library of project case studies and blog content the client can manage independently.",
      archDetails: {
        frontend: "Elementor page builder on the Industrie (ThemeForest) theme, with a custom nested mega-menu (Temporary Buildings / Steel Buildings sub-categories), video hero section, and portfolio/case-study templates for recent installations.",
        backend: "WordPress core with the Industrie theme and Elementor plugin stack, staging-to-production deployment workflow, and SEO essentials configured per client requirements.",
        database: "Standard WordPress MySQL schema for pages, products, portfolio/case-study posts, and blog content, migrated forward from the client's original site.",
        detailsList: [
          "Phase 1 delivery of 4 priority pages (Home, About Us, Container Canopies, Contact Us) matched to a client-provided theme demo.",
          "Multi-round revision cycles covering homepage simplification, hover-effect removal, and About Us typography adjustments.",
          "Mega-menu navigation with nested Temporary Buildings and Steel Buildings product categories.",
          "Staging environment set up for client review before production deployment.",
          "Header and product photos matched individually to each shelter type per client request.",
          "Expanded scope beyond initial 4 pages into a full product catalog, Projects/Portfolio section, Industries page, and blog.",
          "Content and SEO structure carried over from the client's original site to preserve existing rankings."
        ]
      }
    },
    {
      id: "proj_12",
      image: "/images/projects/proj_12_copy.webp",
      title: "Kimoto NYC — Southeast Asian Rooftop Restaurant Website",
      category: "wordpress",
      tags: ["WordPress", "Elementor", "Figma to WordPress", "Custom Animation", "Restaurant Website", "Coming Soon Page"],
      desc: "A full website redesign for Kimoto, a Southeast Asian-inspired rooftop restaurant and bar in Brooklyn, built from a Figma design and reference-site animations, including a custom off-canvas menu, animated hero and reserve interactions, and a branded 'Coming Soon' email-capture landing page for the pre-launch phase.",
      demoUrl: "https://kimotonyc.com/",
      gitUrl: "",
      problem: "The client needed their existing Figma design translated into a fully functioning WordPress/Elementor site with a distinct Southeast Asian visual identity, custom typography (Montserrat/Lato, later Cridea headings), and specific interaction patterns copied from a reference restaurant site (Monkey Bar) — including hero animations, an off-canvas mobile menu, a zoom-in menu page, and an animated reserve button. The project went through several rounds of design pivots (multiple Lovable design links, evolving mood boards and font choices) and revision rounds based on detailed client documents, screenshots, and voice/video notes, while the site also needed a temporary 'Coming Soon' page live for early email signups during the rebuild.",
      solution: "Converted the Figma design (Kimoto-Website-Design) into a responsive WordPress site built on Elementor, matching brand fonts and a brown/woody color palette pulled directly from client photography. Rebuilt the header into an off-canvas hamburger menu, added a centered-logo hero animation that shifts to the header on scroll, replicated a zoom-in menu-page animation and an animated 'Reserve a Table' button from the Monkey Bar reference site, removed a repeated CTA/newsletter block across pages, redesigned the footer layout after removing a redundant menu column, and built a standalone About page following the reference site's layout and color theme. Delivered and iterated a separate 'Coming Soon' landing page (with Kimoto branding, a full-image cover carousel from client-supplied restaurant photos, and an email subscribe form) to run live on kimotonyc.com ahead of the full site launch, fixing caching issues and responsive section-height problems flagged in later revision rounds.",
      result: "Launched a live 'Coming Soon' page on kimotonyc.com capturing early email signups for the Fall 2026 opening, while the full Southeast Asian-themed restaurant site — with custom animations, a rebuilt off-canvas menu, matching typography, and a client-reference-matched About page — moved through multiple QC and revision cycles toward final delivery.",
      archDetails: {
        frontend: "Elementor page builder on WordPress, with custom off-canvas hamburger menu, hero logo-to-header scroll animation, zoom-in menu page animation, animated reserve button, and an image-carousel 'Coming Soon' landing page.",
        backend: "WordPress core with Elementor plugin stack, hosted on a managed WordPress server, with email subscription handling for the pre-launch 'Coming Soon' page.",
        database: "Standard WordPress MySQL schema for pages, media, and site content; subscriber emails captured through the coming-soon signup form.",
        detailsList: [
          "Figma design (Kimoto Website Design) translated into a responsive multi-page WordPress/Elementor build.",
          "Off-canvas hamburger navigation replacing the standard header menu, modeled on a reference restaurant site.",
          "Hero section animation: centered logo that animates to the header's corner on scroll.",
          "Zoom-in animation on the menu page and animated 'Reserve a Table' CTA, matched to client reference site.",
          "Custom About page built to match reference-site layout and color theme.",
          "Footer redesigned after removing a duplicate menu column, cleaned up for visual balance.",
          "Standalone 'Coming Soon' page with full-image cover carousel and email subscribe form for early access.",
          "Multiple design pivots (Figma → Lovable prototypes) and revision rounds driven by detailed client documents, screenshots, and video notes.",
          "Cache and responsive-height bug fixes across laptop, tablet, and mobile breakpoints."
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
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all uppercase tracking-wide cursor-pointer ${filter === cat.value
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

