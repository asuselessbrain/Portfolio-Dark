<?php
/**
 * Template Name: Front Page
 * Author: Arfan Ahmed
 */

get_header();
?>

<main class="flex-1 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-[calc(100vh-72px)] flex items-center py-16 md:py-24 border-b border-slate-800/60">
        <!-- Background Accent Gradients -->
        <div class="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <!-- Left Column: Bio & CTA -->
            <div class="lg:col-span-7 space-y-6">
                <!-- Status Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Available for Full-Stack & WordPress Contracts</span>
                </div>

                <!-- Main Title & Typing Text -->
                <div class="space-y-3">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                        Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Arfan Ahmed</span>
                    </h1>
                    <div class="text-xl sm:text-2xl font-semibold text-slate-300 h-8 flex items-center gap-2">
                        <span id="typing-text-target" class="text-emerald-400">Full Stack Web Developer</span>
                        <span class="animate-pulse text-emerald-400">|</span>
                    </div>
                </div>

                <!-- Short Bio -->
                <p class="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                    Specializing in <strong class="text-slate-200">Next.js, React, TypeScript, Node.js</strong> and custom <strong class="text-slate-200">WordPress</strong> architecture — building high-performance, accessible, production-grade web applications.
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-wrap items-center gap-4 pt-2">
                    <a href="<?php echo esc_url(home_url('/projects/')); ?>" class="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                        <span>View Projects</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2">
                        <i class="fa-solid fa-paper-plane text-xs text-emerald-400"></i>
                        <span>Contact Me</span>
                    </a>
                </div>

                <!-- Social Proof & Quick Stats -->
                <div class="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
                    <div>
                        <p class="text-2xl font-extrabold text-white">3+ Years</p>
                        <p class="text-xs text-slate-400">Experience</p>
                    </div>
                    <div>
                        <p class="text-2xl font-extrabold text-white">15+ Apps</p>
                        <p class="text-xs text-slate-400">Built & Shipped</p>
                    </div>
                    <div>
                        <p class="text-2xl font-extrabold text-white">100%</p>
                        <p class="text-xs text-slate-400">Client Satisfaction</p>
                    </div>
                </div>
            </div>

            <!-- Right Column: Interactive Terminal Widget -->
            <div class="lg:col-span-5">
                <div class="cyber-panel overflow-hidden shadow-2xl bg-slate-950 border border-slate-800">
                    <div class="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                        </div>
                        <span class="text-xs font-mono text-slate-400">arfan@dev-terminal:~</span>
                        <i class="fa-solid fa-terminal text-slate-500 text-xs"></i>
                    </div>
                    <div class="p-5 font-mono text-xs space-y-3 text-slate-300">
                        <p class="text-slate-500">$ cat developer_profile.json</p>
                        <div class="text-emerald-400 pl-2">
                            {<br>
                            &nbsp;&nbsp;<span class="text-cyan-400">"name"</span>: <span class="text-amber-300">"Arfan Ahmed"</span>,<br>
                            &nbsp;&nbsp;<span class="text-cyan-400">"role"</span>: <span class="text-amber-300">"Full Stack & WordPress Developer"</span>,<br>
                            &nbsp;&nbsp;<span class="text-cyan-400">"location"</span>: <span class="text-amber-300">"Dhaka, BD"</span>,<br>
                            &nbsp;&nbsp;<span class="text-cyan-400">"status"</span>: <span class="text-emerald-300">"Building high-scale apps"</span>,<br>
                            &nbsp;&nbsp;<span class="text-cyan-400">"stack"</span>: [<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">"Next.js"</span>, <span class="text-amber-300">"React"</span>, <span class="text-amber-300">"TypeScript"</span>,<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">"Node.js"</span>, <span class="text-amber-300">"WordPress"</span>, <span class="text-amber-300">"Tailwind"</span><br>
                            &nbsp;&nbsp;]<br>
                            }
                        </div>
                        <p class="text-slate-500 pt-2">$ git status</p>
                        <p class="text-emerald-400">On branch main. Your branch is up to date with 'origin/main'.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Marquee Section -->
    <section class="py-12 border-b border-slate-800/60 bg-slate-950/50 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 mb-6 text-center">
            <p class="text-xs font-semibold tracking-widest text-slate-400 uppercase">Core Technologies & Tools</p>
        </div>
        <div class="flex overflow-hidden whitespace-nowrap pause-on-hover relative">
            <div class="flex space-x-8 animate-marquee-left">
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-brands fa-react text-cyan-400"></i> React
                </span>
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-solid fa-n text-white"></i> Next.js
                </span>
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-brands fa-js text-yellow-400"></i> TypeScript
                </span>
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-brands fa-node-js text-emerald-400"></i> Node.js
                </span>
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-brands fa-wordpress text-sky-400"></i> WordPress
                </span>
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-solid fa-database text-emerald-500"></i> PostgreSQL
                </span>
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-solid fa-leaf text-emerald-400"></i> MongoDB
                </span>
                <span class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i class="fa-solid fa-wind text-cyan-400"></i> Tailwind CSS
                </span>
            </div>
        </div>
    </section>

    <!-- Services & Capabilities -->
    <section class="py-20 max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 class="text-xs font-extrabold tracking-widest text-emerald-400 uppercase">Capabilities</h2>
            <h3 class="text-3xl sm:text-4xl font-extrabold text-white">Engineered for Performance & Scale</h3>
            <p class="text-slate-400 text-sm md:text-base">End-to-end web engineering solutions tailored for startups, businesses, and digital agencies.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Service 1 -->
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition">
                    <i class="fa-solid fa-server text-xl"></i>
                </div>
                <h4 class="text-xl font-bold text-white mb-2">Full-Stack Applications</h4>
                <p class="text-xs font-mono text-emerald-400 mb-4">Next.js App Router & Node.js Architecture</p>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Architecting high-performance digital systems leveraging Next.js, React, TypeScript, Node.js, and Express with type-safe REST & GraphQL endpoints.
                </p>
                <ul class="space-y-2 text-xs text-slate-300">
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Server-Side Rendering (SSR) & ISR</li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> 100% Type-Safe Contracts</li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Lighthouse Score 95+</li>
                </ul>
            </div>

            <!-- Service 2 -->
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition">
                    <i class="fa-solid fa-database text-xl"></i>
                </div>
                <h4 class="text-xl font-bold text-white mb-2">Database Architecture</h4>
                <p class="text-xs font-mono text-emerald-400 mb-4">Relational & NoSQL Engineering</p>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Designing secure, relational, and non-relational database schemas using PostgreSQL, MongoDB, Prisma ORM, Mongoose, and connection pooling.
                </p>
                <ul class="space-y-2 text-xs text-slate-300">
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Normalized Schema Design</li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Type-Safe ORM Access</li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Connection Pooling & Indexing</li>
                </ul>
            </div>

            <!-- Service 3 -->
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition">
                    <i class="fa-brands fa-wordpress text-xl"></i>
                </div>
                <h4 class="text-xl font-bold text-white mb-2">Custom WordPress Themes</h4>
                <p class="text-xs font-mono text-emerald-400 mb-4">Bespoke Themes & ACF Architecture</p>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Building corporate-grade WordPress architectures, custom ACF themes, WooCommerce setups, and Headless WordPress REST APIs without bloat page builders.
                </p>
                <ul class="space-y-2 text-xs text-slate-300">
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Bespoke Themes From Scratch</li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> ACF Pro Custom Fields & CPT</li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Headless WP REST API</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Featured Projects Grid Section -->
    <section class="py-20 border-t border-slate-800/60 bg-slate-950/40">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <h2 class="text-xs font-extrabold tracking-widest text-emerald-400 uppercase mb-2">Portfolio</h2>
                    <h3 class="text-3xl font-extrabold text-white">Featured Projects</h3>
                </div>
                <a href="<?php echo esc_url(home_url('/projects/')); ?>" class="mt-4 md:mt-0 text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5">
                    <span>Explore All Projects</span>
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $projects_query = new WP_Query(array(
                    'post_type'      => 'project',
                    'posts_per_page' => 6,
                    'orderby'        => 'date',
                    'order'          => 'DESC'
                ));

                if ($projects_query->have_posts()) :
                    while ($projects_query->have_posts()) : $projects_query->the_post();
                        $demo_url = get_post_meta(get_the_ID(), 'demo_url', true);
                        $git_url  = get_post_meta(get_the_ID(), 'git_url', true);
                        ?>
                        <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col group">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="h-48 overflow-hidden relative">
                                    <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500')); ?>
                                </div>
                            <?php else : ?>
                                <div class="h-48 bg-slate-800 flex items-center justify-center text-slate-600">
                                    <i class="fa-solid fa-code text-4xl"></i>
                                </div>
                            <?php endif; ?>

                            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h4 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        <?php the_title(); ?>
                                    </h4>
                                    <p class="text-slate-400 text-sm line-clamp-3">
                                        <?php echo get_the_excerpt(); ?>
                                    </p>
                                </div>

                                <div class="flex items-center justify-between pt-4 border-t border-slate-800/80">
                                    <a href="<?php the_permalink(); ?>" class="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                        <span>Details</span>
                                        <i class="fa-solid fa-chevron-right text-[10px]"></i>
                                    </a>
                                    <?php if ($demo_url) : ?>
                                        <a href="<?php echo esc_url($demo_url); ?>" target="_blank" class="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1">
                                            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                                            <span>Live Site</span>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <!-- Default Static Project Fallback Cards -->
                    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition">
                        <span class="text-xs text-emerald-400 font-mono">WordPress & Elementor Pro</span>
                        <h4 class="text-xl font-bold text-white mt-2 mb-2">CALM ABA Therapy Website</h4>
                        <p class="text-slate-400 text-sm mb-4">Modern healthcare website redesign for a Maryland-based therapy center with insurance intake flow.</p>
                        <a href="https://calmllc.org/" target="_blank" class="text-xs font-bold text-emerald-400 hover:underline">Visit Site →</a>
                    </div>
                    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition">
                        <span class="text-xs text-emerald-400 font-mono">Corporate & B2B</span>
                        <h4 class="text-xl font-bold text-white mt-2 mb-2">OMLI Trading Website</h4>
                        <p class="text-slate-400 text-sm mb-4">Global minerals trading corporate platform featuring trade route maps and quote requests.</p>
                        <a href="https://omlitrading.com/" target="_blank" class="text-xs font-bold text-emerald-400 hover:underline">Visit Site →</a>
                    </div>
                    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition">
                        <span class="text-xs text-emerald-400 font-mono">Full-Stack MERN</span>
                        <h4 class="text-xl font-bold text-white mt-2 mb-2">E-Commerce Ecosystem</h4>
                        <p class="text-slate-400 text-sm mb-4">High-scale e-commerce platform with real-time inventory and Stripe payment integration.</p>
                        <span class="text-xs font-bold text-slate-400">MERN Stack</span>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Work Experience & Career Timeline -->
    <section class="py-20 max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 class="text-xs font-extrabold tracking-widest text-emerald-400 uppercase">Career History</h2>
            <h3 class="text-3xl font-extrabold text-white">Experience & Education</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-800">
            <!-- Item 1 -->
            <div class="relative flex items-start gap-6 pl-16 group">
                <div class="absolute left-6 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 group-hover:scale-125 transition"></div>
                <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 class="text-lg font-bold text-white">Full Stack Web Developer</h4>
                        <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full w-fit">Exprovia (2023 - Present)</span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Leading full-stack web development projects utilizing Next.js, React, Node.js, and custom WordPress architectures. Delivering client platforms with high performance scores and robust type safety.
                    </p>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="relative flex items-start gap-6 pl-16 group">
                <div class="absolute left-6 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950 group-hover:scale-125 transition"></div>
                <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 class="text-lg font-bold text-white">B.Sc in Computer Science & Engineering</h4>
                        <span class="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full w-fit">Patuakhali Science & Tech University</span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Graduated with strong foundations in Data Structures, Algorithms, Software Engineering, Object-Oriented Programming, and Database Systems.
                    </p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
