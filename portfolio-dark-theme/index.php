<?php
/**
 * Main Index Template Fallback
 * Author: Arfan Ahmed
 */

get_header();
?>

<main class="flex-1 py-16 max-w-7xl mx-auto px-6">
    <h1 class="text-3xl font-bold text-white mb-8">Latest Updates</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition">
                <h2 class="text-xl font-bold text-white mb-2">
                    <a href="<?php the_permalink(); ?>" class="hover:text-emerald-400"><?php the_title(); ?></a>
                </h2>
                <p class="text-slate-400 text-sm mb-4"><?php echo get_the_excerpt(); ?></p>
                <a href="<?php the_permalink(); ?>" class="text-xs font-bold text-emerald-400 hover:underline">Read More →</a>
            </article>
        <?php endwhile; else : ?>
            <p class="text-slate-400">No posts found.</p>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
