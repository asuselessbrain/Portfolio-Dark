# Portfolio Dark — WordPress Custom Theme

**Author:** Arfan Ahmed  
**Website:** https://arfanahmed.tech  
**Version:** 1.0.0  

This is a premium, custom WordPress Theme built directly from the React/Next.js 16 Portfolio codebase. It provides native dark mode, fast performance, responsive navigation, typing text animations, custom project filtering, and AJAX contact forms.

---

## 📁 Theme Directory Structure

```text
portfolio-dark-theme/
├── style.css             # Theme Metadata Header & Base CSS Variables
├── functions.php         # Enqueues Scripts, Registers 'project' CPT & AJAX Handler
├── header.php            # Head, Responsive Glassmorphism Navbar & Mobile Drawer
├── footer.php            # Footer Links, Social Icons, Modal Overlay & wp_footer()
├── front-page.php        # Homepage Template (Hero, Marquee, Capabilities, Works, Timeline)
├── page-about.php        # About Page Template
├── page-projects.php     # Projects Page Template with Category Filtering
├── page-contact.php      # Contact Page Template with Working AJAX Form
├── single-project.php    # Single Project Detail View
├── index.php             # Required Fallback Index Template
├── 404.php               # Custom 404 Page Not Found Template
└── assets/
    └── js/
        └── main.js       # Mobile Nav, Typing Text, Filters, AJAX Handler
```

---

## 🛠️ How to Install & Activate in WordPress

1. **Compress Theme Folder:**
   Compress the entire `portfolio-dark-theme` folder into a ZIP file named `portfolio-dark-theme.zip`.

2. **Upload to WordPress Admin:**
   - Log into your WordPress Dashboard (`/wp-admin`).
   - Go to **Appearance -> Themes -> Add New -> Upload Theme**.
   - Choose `portfolio-dark-theme.zip` and click **Install Now**.
   - Click **Activate**.

3. **Set Up Core Pages in WordPress:**
   Go to **Pages -> Add New** in WordPress and create 4 pages:
   - **Home**: Select Template -> **Front Page** (or set as Static Homepage in *Settings -> Reading*).
   - **About**: Title: `About`, Permalink: `/about/`, Select Template -> **About Page**.
   - **Projects**: Title: `Projects`, Permalink: `/projects/`, Select Template -> **Projects Page**.
   - **Contact**: Title: `Contact`, Permalink: `/contact/`, Select Template -> **Contact Page**.

4. **Add Projects via WordPress Dashboard:**
   - Go to **Projects -> Add New** on the WordPress sidebar.
   - Enter Title, Description, Featured Image, Excerpt.
   - Add Custom Fields (`demo_url`, `git_url`, `problem`, `solution`, `result`).
   - Assign categories (e.g. `WordPress`, `Full-Stack`, `MERN`).

---

## 📩 Contact Form
The contact form uses WordPress AJAX and emails submissions directly to the Site Admin Email set in **Settings -> General** in WordPress.
