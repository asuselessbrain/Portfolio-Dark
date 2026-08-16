<?php
/**
 * Template Name: Projects Page
 * Author: Arfan Ahmed
 */

get_header();
?>

<main class="flex-1 py-16 md:py-24 max-w-7xl mx-auto px-6">
    <!-- Title Section -->
    <div class="max-w-3xl mb-12 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono">
            <i class="fa-solid fa-folder-open text-xs"></i>
            <span>Featured Portfolio Works</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production Applications & Custom Web Builds
        </h1>
        <p class="text-slate-400 text-base leading-relaxed">
            A showcase of full-stack web applications, custom WordPress themes, corporate portals, and client systems.
        </p>
    </div>

    <!-- Category Filter Tabs -->
    <div class="flex flex-wrap items-center gap-3 mb-10 border-b border-slate-800 pb-6" id="project-filters">
        <button data-filter="all" class="filter-btn px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs transition">All Works</button>
        <button data-filter="fullstack" class="filter-btn px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition">Full-Stack</button>
        <button data-filter="wordpress" class="filter-btn px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition">WordPress</button>
        <button data-filter="mern" class="filter-btn px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition">MERN Stack</button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
        <?php
        $all_projects = new WP_Query(array(
            'post_type'      => 'project',
            'posts_per_page' => -1,
            'orderby'        => 'date',
            'order'          => 'DESC'
        ));

        if ($all_projects->have_posts()) :
            while ($all_projects->have_posts()) : $all_projects->the_post();
                $category_terms = get_the_terms(get_the_ID(), 'project_category');
                $cat_slugs = array();
                if ($category_terms && !is_wp_error($category_terms)) {
                    foreach ($category_terms as $term) {
                        $cat_slugs[] = $term->slug;
                    }
                }
                $cat_class = !empty($cat_slugs) ? implode(' ', $cat_slugs) : 'fullstack';
                $demo_url  = get_post_meta(get_the_ID(), 'demo_url', true);
                $git_url   = get_post_meta(get_the_ID(), 'git_url', true);
                ?>
                <div class="project-card <?php echo esc_attr($cat_class); ?> bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col group">
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
                            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                <?php the_title(); ?>
                            </h3>
                            <p class="text-slate-400 text-sm line-clamp-3">
                                <?php echo get_the_excerpt(); ?>
                            </p>
                        </div>

                        <div class="flex items-center justify-between pt-4 border-t border-slate-800/80">
                            <a href="<?php the_permalink(); ?>" class="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                <span>View Details</span>
                                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                            </a>
                            <?php if ($demo_url) : ?>
                                <a href="<?php echo esc_url($demo_url); ?>" target="_blank" class="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1">
                                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                                    <span>Live Preview</span>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php
            endwhile;
            wp_reset_postdata();
        else : ?>
            <!-- Fallback Static Projects -->
            <div class="project-card wordpress bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition">
                <span class="text-xs text-emerald-400 font-mono">WordPress & Elementor Pro</span>
                <h3 class="text-xl font-bold text-white mt-2 mb-2">CALM ABA Therapy Website</h3>
                <p class="text-slate-400 text-sm mb-4">Modern healthcare website redesign for a Maryland-based therapy center with insurance intake flow.</p>
                <a href="https://calmllc.org/" target="_blank" class="text-xs font-bold text-emerald-400 hover:underline">Visit Site →</a>
            </div>

            <div class="project-card wordpress bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition">
                <span class="text-xs text-emerald-400 font-mono">Corporate B2B</span>
                <h3 class="text-xl font-bold text-white mt-2 mb-2">OMLI Trading Website</h3>
                <p class="text-slate-400 text-sm mb-4">Global minerals trading corporate platform featuring trade route maps and quote requests.</p>
                <a href="https://omlitrading.com/" target="_blank" class="text-xs font-bold text-emerald-400 hover:underline">Visit Site →</a>
            </div>

            <div class="project-card mern fullstack bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition">
                <span class="text-xs text-emerald-400 font-mono">Full-Stack MERN</span>
                <h3 class="text-xl font-bold text-white mt-2 mb-2">Multi-Tenant LMS Platform</h3>
                <p class="text-slate-400 text-sm mb-4">Educational ecosystem with course streaming, quiz engine, and automated certificate generation.</p>
                <span class="text-xs font-bold text-slate-400">Next.js & Node.js</span>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
