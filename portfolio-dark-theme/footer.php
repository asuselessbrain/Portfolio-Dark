<!-- Footer Section -->
<footer class="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 mt-auto">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <!-- Brand Column -->
            <div class="md:col-span-2 space-y-4">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2 font-bold tracking-tight text-xl">
                    <i class="fa-solid fa-code text-emerald-500"></i>
                    <span class="text-slate-100 font-extrabold">
                        Arfan<span class="text-emerald-400">.dev</span>
                    </span>
                </a>
                <p class="text-slate-400 text-sm max-w-md leading-relaxed">
                    Full Stack Web Developer specializing in Next.js, React, TypeScript, Node.js, and custom WordPress engineering. Building fast, accessible, high-performance web applications.
                </p>
                <div class="flex items-center space-x-3 pt-2">
                    <a href="https://github.com/asuselessbrain" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all" aria-label="GitHub">
                        <i class="fa-brands fa-github text-base"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/arfan-ahmed40" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin-in text-base"></i>
                    </a>
                    <a href="https://www.facebook.com/arfan.arfanahmed.73" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all" aria-label="Facebook">
                        <i class="fa-brands fa-facebook-f text-base"></i>
                    </a>
                    <a href="https://wa.me/8801615391684" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all" aria-label="WhatsApp">
                        <i class="fa-brands fa-whatsapp text-base"></i>
                    </a>
                    <a href="mailto:arfan18@cse.pstu.ac.bd" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all" aria-label="Email">
                        <i class="fa-solid fa-envelope text-base"></i>
                    </a>
                </div>
            </div>

            <!-- Quick Navigation -->
            <div>
                <h3 class="text-slate-200 font-semibold text-sm tracking-wide uppercase mb-4">Navigation</h3>
                <ul class="space-y-2.5 text-sm text-slate-400">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-emerald-400 transition-colors">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about/')); ?>" class="hover:text-emerald-400 transition-colors">About Me</a></li>
                    <li><a href="<?php echo esc_url(home_url('/projects/')); ?>" class="hover:text-emerald-400 transition-colors">Featured Projects</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>" class="hover:text-emerald-400 transition-colors">Contact</a></li>
                </ul>
            </div>

            <!-- Contact & Status -->
            <div>
                <h3 class="text-slate-200 font-semibold text-sm tracking-wide uppercase mb-4">Availability</h3>
                <div class="space-y-3 text-sm text-slate-400">
                    <div class="flex items-center gap-2">
                        <span class="relative flex h-2.5 w-2.5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span class="text-emerald-400 font-medium">Available for Freelance & Contracts</span>
                    </div>
                    <p class="text-xs text-slate-500">Location: Dhaka, Bangladesh (Global Remote)</p>
                    <p class="text-xs text-slate-500">Response Time: &lt; 24 hours</p>
                </div>
            </div>
        </div>

        <div class="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; <?php echo date('Y'); ?> Arfan Ahmed. Built with WordPress & Tailwind CSS.</p>
            <p class="mt-2 md:mt-0 flex items-center gap-1">
                <span>Designed & Engineered by</span>
                <span class="text-emerald-400 font-semibold">Arfan Ahmed</span>
            </p>
        </div>
    </div>
</footer>

<!-- Interactive Project Detail Modal -->
<div id="project-modal" class="hidden fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button id="close-modal-btn" class="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition">
            <i class="fa-solid fa-xmark text-lg"></i>
        </button>
        <div id="modal-content">
            <!-- Dynamically populated via main.js -->
        </div>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
