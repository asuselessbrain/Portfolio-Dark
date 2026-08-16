<?php
/**
 * Single Project Post Template
 * Author: Arfan Ahmed
 */

get_header();

if (have_posts()) : while (have_posts()) : the_post();
    $demo_url  = get_post_meta(get_the_ID(), 'demo_url', true);
    $git_url   = get_post_meta(get_the_ID(), 'git_url', true);
    $problem   = get_post_meta(get_the_ID(), 'problem', true);
    $solution  = get_post_meta(get_the_ID(), 'solution', true);
    $result    = get_post_meta(get_the_ID(), 'result', true);
?>

<main class="flex-1 py-16 max-w-5xl mx-auto px-6">
    <!-- Breadcrumb -->
    <a href="<?php echo esc_url(home_url('/projects/')); ?>" class="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-8">
        <i class="fa-solid fa-arrow-left"></i>
        <span>Back to All Projects</span>
    </a>

    <!-- Header Info -->
    <div class="space-y-4 mb-10">
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"><?php the_title(); ?></h1>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed"><?php echo get_the_excerpt(); ?></p>
        
        <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
            <?php if ($demo_url) : ?>
                <a href="<?php echo esc_url($demo_url); ?>" target="_blank" class="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition flex items-center gap-2">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>Live Preview</span>
                </a>
            <?php endif; ?>
            <?php if ($git_url) : ?>
                <a href="<?php echo esc_url($git_url); ?>" target="_blank" class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition flex items-center gap-2">
                    <i class="fa-brands fa-github"></i>
                    <span>GitHub Code</span>
                </a>
            <?php endif; ?>
        </div>
    </div>

    <!-- Featured Image -->
    <?php if (has_post_thumbnail()) : ?>
        <div class="rounded-2xl overflow-hidden border border-slate-800 mb-12 shadow-2xl">
            <?php the_post_thumbnail('full', array('class' => 'w-full h-auto object-cover')); ?>
        </div>
    <?php endif; ?>

    <!-- Project Deep-Dive Sections -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <?php if ($problem) : ?>
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 class="text-sm font-mono text-emerald-400 uppercase mb-2">01. The Problem</h3>
                <p class="text-slate-300 text-sm leading-relaxed"><?php echo esc_html($problem); ?></p>
            </div>
        <?php endif; ?>

        <?php if ($solution) : ?>
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 class="text-sm font-mono text-emerald-400 uppercase mb-2">02. Technical Solution</h3>
                <p class="text-slate-300 text-sm leading-relaxed"><?php echo esc_html($solution); ?></p>
            </div>
        <?php endif; ?>

        <?php if ($result) : ?>
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 class="text-sm font-mono text-emerald-400 uppercase mb-2">03. Key Results</h3>
                <p class="text-slate-300 text-sm leading-relaxed"><?php echo esc_html($result); ?></p>
            </div>
        <?php endif; ?>
    </div>

    <!-- Main Content -->
    <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6">
        <?php the_content(); ?>
    </div>
</main>

<?php 
endwhile; endif;
get_footer(); 
?>
