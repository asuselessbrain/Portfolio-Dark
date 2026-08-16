<?php
/**
 * 404 Page Template
 * Author: Arfan Ahmed
 */

get_header();
?>

<main class="flex-1 flex flex-col items-center justify-center py-24 text-center px-6">
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-red-400 font-mono mb-6">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>Error 404</span>
    </div>
    <h1 class="text-6xl font-extrabold text-white mb-4">Page Not Found</h1>
    <p class="text-slate-400 text-base max-w-md mb-8">
        The requested page URL does not exist or has been moved.
    </p>
    <a href="<?php echo esc_url(home_url('/')); ?>" class="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-emerald-500/20">
        Return to Home Page
    </a>
</main>

<?php get_footer(); ?>
