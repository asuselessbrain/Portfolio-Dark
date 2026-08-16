<?php
/**
 * Template Name: About Page
 * Author: Arfan Ahmed
 */

get_header();
?>

<main class="flex-1 py-16 md:py-24 max-w-7xl mx-auto px-6">
    <!-- Header Title -->
    <div class="max-w-3xl mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono">
            <i class="fa-solid fa-user text-xs"></i>
            <span>About Arfan Ahmed</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Fast, Scalable & Accessible Web Applications
        </h1>
        <p class="text-slate-400 text-base md:text-lg leading-relaxed">
            Full Stack Web Developer & MERN Engineer based in Dhaka, Bangladesh with expertise in modern JavaScript frameworks and WordPress development.
        </p>
    </div>

    <!-- Grid Bio & Skills -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <!-- Left: Bio Story -->
        <div class="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
            <h2 class="text-2xl font-bold text-white mb-4">My Background & Journey</h2>
            <p>
                Hello! I'm <strong class="text-emerald-400">Arfan Ahmed</strong>, a Full Stack Developer passionate about solving complex technical problems through clean architecture, performance optimization, and intuitive user experiences.
            </p>
            <p>
                Having graduated with a degree in Computer Science and Engineering from Patuakhali Science and Technology University, I've honed my skills across both frontend interactive experiences (React, Next.js, Tailwind CSS) and backend server infrastructure (Node.js, Express, PostgreSQL, MongoDB).
            </p>
            <p>
                In addition to modern React frameworks, I specialize in <strong class="text-slate-100">Bespoke WordPress Theme Development</strong>. I create custom WordPress sites from scratch using Advanced Custom Fields (ACF) and Custom Post Types (CPT) — giving non-technical clients complete content management power without the bloat or security risks of generic page builders.
            </p>

            <div class="pt-4 flex flex-wrap gap-4">
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-emerald-500/20">
                    Let's Work Together
                </a>
                <a href="<?php echo esc_url(get_template_directory_uri() . '/assets/resume.pdf'); ?>" download class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:border-slate-700 transition">
                    Download Resume
                </a>
            </div>
        </div>

        <!-- Right: Technical Principles Panel -->
        <div class="lg:col-span-5 space-y-6">
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">Engineering Principles</h3>
                <ul class="space-y-4 text-xs md:text-sm text-slate-300">
                    <li class="flex items-start gap-3">
                        <i class="fa-solid fa-bolt text-emerald-400 mt-1"></i>
                        <div>
                            <strong class="text-white block">Performance First</strong>
                            Optimizing Core Web Vitals, code-splitting, and minimal JavaScript payloads.
                        </div>
                    </li>
                    <li class="flex items-start gap-3">
                        <i class="fa-solid fa-shield-halved text-emerald-400 mt-1"></i>
                        <div>
                            <strong class="text-white block">Type Safety & Integrity</strong>
                            Leveraging strict TypeScript interfaces, input validation, and database constraints.
                        </div>
                    </li>
                    <li class="flex items-start gap-3">
                        <i class="fa-solid fa-code text-emerald-400 mt-1"></i>
                        <div>
                            <strong class="text-white block">Clean Modular Code</strong>
                            Writing maintainable, reusable components following DRY and SOLID principles.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
