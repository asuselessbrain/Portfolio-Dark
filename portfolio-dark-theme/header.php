<!DOCTYPE html>
<html <?php language_attributes(); ?> class="h-full scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              emerald: {
                400: '#34d399',
                500: '#10b981',
                600: '#059669',
              },
              slate: {
                800: '#1e293b',
                900: '#0f172a',
                950: '#020617',
              }
            }
          }
        }
      }
    </script>
</head>
<body <?php body_class('bg-[#0f172a] text-[#f8fafc] min-h-full flex flex-col font-sans transition-colors duration-200'); ?>>
<?php wp_body_open(); ?>

<!-- Sticky Glassmorphism Header -->
<header id="site-header" class="fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b bg-[#0f172a]/90 backdrop-blur-md py-3.5 border-slate-800/80 shadow-md">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <!-- Brand Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2 font-bold tracking-tight text-lg md:text-xl group">
            <i class="fa-solid fa-code text-emerald-500 text-lg"></i>
            <span class="text-slate-100 font-extrabold">
                Arfan<span class="text-emerald-400">.dev</span>
            </span>
        </a>

        <!-- Desktop Navigation Menu -->
        <div class="hidden md:flex items-center space-x-8">
            <nav class="flex items-center space-x-8">
                <?php
                $current_url = $_SERVER['REQUEST_URI'];
                $menu_items = array(
                    array('name' => 'Home', 'url' => home_url('/')),
                    array('name' => 'About', 'url' => home_url('/about/')),
                    array('name' => 'Projects', 'url' => home_url('/projects/')),
                    array('name' => 'Contact', 'url' => home_url('/contact/')),
                );

                foreach ($menu_items as $item) {
                    $is_active = (rtrim($current_url, '/') === rtrim(parse_url($item['url'], PHP_URL_PATH), '/'));
                    $active_class = $is_active ? 'text-emerald-400 font-semibold' : 'text-slate-400 hover:text-slate-100';
                    echo '<a href="' . esc_url($item['url']) . '" class="text-sm font-medium relative py-1 transition-colors ' . $active_class . '">';
                    echo esc_html($item['name']);
                    if ($is_active) {
                        echo '<span class="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 rounded-full"></span>';
                    }
                    echo '</a>';
                }
                ?>
            </nav>

            <!-- Resume Download CTA -->
            <div class="flex items-center border-l border-slate-800 pl-6">
                <a href="<?php echo esc_url(get_template_directory_uri() . '/assets/resume.pdf'); ?>" download="Arfan_Ahmed_Resume.pdf" class="px-4 py-2 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5">
                    <i class="fa-solid fa-download text-xs"></i>
                    <span>Resume</span>
                </a>
            </div>
        </div>

        <!-- Mobile Hamburger Trigger -->
        <div class="flex items-center md:hidden">
            <button id="mobile-menu-btn" type="button" class="p-2 text-slate-300 hover:text-white rounded-lg cursor-pointer" aria-label="Toggle Navigation">
                <i class="fa-solid fa-bars text-xl" id="menu-icon-open"></i>
                <i class="fa-solid fa-xmark text-xl hidden" id="menu-icon-close"></i>
            </button>
        </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <div id="mobile-menu-drawer" class="hidden fixed inset-0 top-[60px] bg-[#0f172a]/95 backdrop-blur-xl z-40 border-t border-slate-800 flex-col p-6 md:hidden">
        <nav class="flex flex-col space-y-4 mt-2">
            <?php
            foreach ($menu_items as $item) {
                $is_active = (rtrim($current_url, '/') === rtrim(parse_url($item['url'], PHP_URL_PATH), '/'));
                $active_class = $is_active ? 'text-emerald-400 font-bold' : 'text-slate-300 hover:text-white';
                echo '<a href="' . esc_url($item['url']) . '" class="text-base font-semibold border-b border-slate-800/60 pb-3 transition-colors ' . $active_class . '">';
                echo esc_html($item['name']);
                echo '</a>';
            }
            ?>
        </nav>
        <div class="mt-auto pt-6 border-t border-slate-800">
            <a href="<?php echo esc_url(get_template_directory_uri() . '/assets/resume.pdf'); ?>" download="Arfan_Ahmed_Resume.pdf" class="w-full py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs text-center uppercase tracking-wide flex items-center justify-center gap-2">
                <i class="fa-solid fa-download"></i>
                <span>Download Resume</span>
            </a>
        </div>
    </div>
</header>

<div class="pt-[72px]"></div>
