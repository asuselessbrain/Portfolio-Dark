<?php
/**
 * Portfolio Dark Theme Functions & Definitions
 * Author: Arfan Ahmed
 * URI: https://arfanahmed.tech
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * 1. Theme Setup
 */
function portfolio_dark_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'portfolio-dark'),
        'footer'  => __('Footer Menu', 'portfolio-dark'),
    ));
}
add_action('after_setup_theme', 'portfolio_dark_setup');

/**
 * 2. Enqueue Styles & Scripts
 */
function portfolio_dark_scripts() {
    // Tailwind CSS CDN
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    
    // Google Fonts (Inter)
    wp_enqueue_style('google-fonts-inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null);
    
    // FontAwesome 6 & Lucide Icons
    wp_enqueue_style('fontawesome-cdn', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', array(), '6.5.1');

    // Theme Main Stylesheet
    wp_enqueue_style('portfolio-theme-style', get_stylesheet_uri(), array(), '1.0.0');

    // Theme Main JS
    wp_enqueue_script('portfolio-main-js', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);

    // Pass AJAX URL to JS
    wp_localize_script('portfolio-main-js', 'portfolioData', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('portfolio_contact_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'portfolio_dark_scripts');

/**
 * 3. Register Custom Post Type: Projects
 */
function portfolio_register_projects_cpt() {
    $labels = array(
        'name'               => _x('Projects', 'post type general name', 'portfolio-dark'),
        'singular_name'      => _x('Project', 'post type singular name', 'portfolio-dark'),
        'menu_name'          => _x('Projects', 'admin menu', 'portfolio-dark'),
        'name_admin_bar'     => _x('Project', 'add new on admin bar', 'portfolio-dark'),
        'add_new'            => _x('Add New', 'project', 'portfolio-dark'),
        'add_new_item'       => __('Add New Project', 'portfolio-dark'),
        'new_item'           => __('New Project', 'portfolio-dark'),
        'edit_item'          => __('Edit Project', 'portfolio-dark'),
        'view_item'          => __('View Project', 'portfolio-dark'),
        'all_items'          => __('All Projects', 'portfolio-dark'),
        'search_items'       => __('Search Projects', 'portfolio-dark'),
        'not_found'          => __('No projects found.', 'portfolio-dark'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'projects'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-portfolio',
        'show_in_rest'       => true,
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
    );

    register_post_type('project', $args);

    // Register Category Taxonomy for Projects
    register_taxonomy('project_category', array('project'), array(
        'hierarchical'      => true,
        'labels'            => array(
            'name'              => _x('Project Categories', 'taxonomy general name', 'portfolio-dark'),
            'singular_name'     => _x('Project Category', 'taxonomy singular name', 'portfolio-dark'),
            'search_items'      => __('Search Categories', 'portfolio-dark'),
            'all_items'         => __('All Categories', 'portfolio-dark'),
            'edit_item'         => __('Edit Category', 'portfolio-dark'),
            'update_item'       => __('Update Category', 'portfolio-dark'),
            'add_new_item'      => __('Add New Category', 'portfolio-dark'),
            'new_item_name'     => __('New Category Name', 'portfolio-dark'),
            'menu_name'         => __('Categories', 'portfolio-dark'),
        ),
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'project-category'),
    ));
}
add_action('init', 'portfolio_register_projects_cpt');

/**
 * 4. AJAX Contact Form Handler
 */
function portfolio_handle_contact_submission() {
    check_ajax_referer('portfolio_contact_nonce', 'nonce');

    $name    = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
    $email   = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? sanitize_text_field($_POST['subject']) : 'Portfolio Inquiry';
    $message = isset($_POST['message']) ? sanitize_textarea_field($_POST['message']) : '';

    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(array('message' => 'Please fill in all required fields.'));
    }

    $to      = get_option('admin_email');
    $body    = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8', "Reply-To: $name <$email>");

    $sent = wp_mail($to, "Portfolio Contact: $subject", $body, $headers);

    if ($sent) {
        wp_send_json_success(array('message' => 'Thank you! Your message has been sent successfully.'));
    } else {
        wp_send_json_error(array('message' => 'Could not send email. Please try again later.'));
    }
}
add_action('wp_ajax_portfolio_contact', 'portfolio_handle_contact_submission');
add_action('wp_ajax_nopriv_portfolio_contact', 'portfolio_handle_contact_submission');
