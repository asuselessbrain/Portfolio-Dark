<?php
/**
 * Template Name: Contact Page
 * Author: Arfan Ahmed
 */

get_header();
?>

<main class="flex-1 py-16 md:py-24 max-w-7xl mx-auto px-6">
    <!-- Page Header -->
    <div class="max-w-3xl mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono">
            <i class="fa-solid fa-paper-plane text-xs"></i>
            <span>Get In Touch</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional Together
        </h1>
        <p class="text-slate-400 text-base md:text-lg leading-relaxed">
            Have a full-stack project, custom WordPress build, or technical consultation in mind? Reach out directly via the form or my social channels.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Left: Direct Channels & Cards -->
        <div class="lg:col-span-5 space-y-6">
            <!-- Channel 1: Email -->
            <a href="mailto:arfan18@cse.pstu.ac.bd" class="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-emerald-500/50 transition group block">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition">
                    <i class="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                    <h3 class="text-xs font-mono text-slate-400 uppercase">Direct Email</h3>
                    <p class="text-white font-bold text-base mt-1">arfan18@cse.pstu.ac.bd</p>
                    <p class="text-xs text-slate-500 mt-1">Typical response within 12 hours</p>
                </div>
            </a>

            <!-- Channel 2: WhatsApp -->
            <a href="https://wa.me/8801615391684" target="_blank" class="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-emerald-500/50 transition group block">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition">
                    <i class="fa-brands fa-whatsapp text-2xl"></i>
                </div>
                <div>
                    <h3 class="text-xs font-mono text-slate-400 uppercase">WhatsApp Instant</h3>
                    <p class="text-white font-bold text-base mt-1">+880 1615-391684</p>
                    <p class="text-xs text-slate-500 mt-1">Available for quick queries & chat</p>
                </div>
            </a>

            <!-- Channel 3: LinkedIn -->
            <a href="https://www.linkedin.com/in/arfan-ahmed40" target="_blank" class="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-emerald-500/50 transition group block">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition">
                    <i class="fa-brands fa-linkedin-in text-2xl"></i>
                </div>
                <div>
                    <h3 class="text-xs font-mono text-slate-400 uppercase">LinkedIn Profile</h3>
                    <p class="text-white font-bold text-base mt-1">arfan-ahmed40</p>
                    <p class="text-xs text-slate-500 mt-1">Professional networking & history</p>
                </div>
            </a>
        </div>

        <!-- Right: Interactive Contact Form -->
        <div class="lg:col-span-7">
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <h3 class="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p class="text-slate-400 text-sm mb-6">Fill out the form below and I will get back to you promptly.</p>

                <div id="contact-alert" class="hidden mb-6 p-4 rounded-xl text-sm font-semibold"></div>

                <form id="portfolio-contact-form" class="space-y-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label class="block text-xs font-mono text-slate-300 uppercase mb-2">Your Name *</label>
                            <input type="text" name="name" required placeholder="e.g. John Doe" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition">
                        </div>
                        <div>
                            <label class="block text-xs font-mono text-slate-300 uppercase mb-2">Your Email *</label>
                            <input type="email" name="email" required placeholder="e.g. john@example.com" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition">
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-mono text-slate-300 uppercase mb-2">Subject</label>
                        <select name="subject" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-sm transition">
                            <option value="Full-Stack Application">Full-Stack Web Application (Next.js / MERN)</option>
                            <option value="Custom WordPress Theme">Custom WordPress Theme / WooCommerce</option>
                            <option value="Technical Consultation">Technical Consultation & Code Review</option>
                            <option value="Other Project Inquiry">Other Project Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-xs font-mono text-slate-300 uppercase mb-2">Project Details / Message *</label>
                        <textarea name="message" rows="5" required placeholder="Describe your project goals, timelines, or requirements..." class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition"></textarea>
                    </div>

                    <button type="submit" id="submit-btn" class="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-paper-plane"></i>
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
