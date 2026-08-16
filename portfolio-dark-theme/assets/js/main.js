/**
 * Main Theme JavaScript
 * Author: Arfan Ahmed
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuDrawer = document.getElementById('mobile-menu-drawer');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    if (menuBtn && menuDrawer) {
        menuBtn.addEventListener('click', function () {
            menuDrawer.classList.toggle('hidden');
            menuDrawer.classList.toggle('flex');
            iconOpen.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });
    }

    // 2. Typing Text Effect
    const typingTarget = document.getElementById('typing-text-target');
    if (typingTarget) {
        const phrases = [
            'Full Stack Web Developer',
            'Next.js & React Specialist',
            'WordPress Theme Architect',
            'MERN Stack Engineer'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeLoop() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                typingTarget.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingTarget.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 400;
            }

            setTimeout(typeLoop, typeSpeed);
        }

        typeLoop();
    }

    // 3. Category Filter Buttons (Projects Page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                filterButtons.forEach(b => {
                    b.classList.remove('bg-emerald-500', 'text-slate-950', 'font-bold');
                    b.classList.add('bg-slate-900', 'text-slate-300');
                });
                this.classList.remove('bg-slate-900', 'text-slate-300');
                this.classList.add('bg-emerald-500', 'text-slate-950', 'font-bold');

                const filter = this.getAttribute('data-filter');
                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 4. AJAX Contact Form Submission
    const contactForm = document.getElementById('portfolio-contact-form');
    const alertBox = document.getElementById('contact-alert');

    if (contactForm && alertBox) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i> Sending...';

            alertBox.classList.add('hidden');
            alertBox.className = 'hidden mb-6 p-4 rounded-xl text-sm font-semibold';

            const formData = new FormData(contactForm);
            formData.append('action', 'portfolio_contact');
            formData.append('nonce', portfolioData.nonce);

            fetch(portfolioData.ajax_url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alertBox.classList.remove('hidden');
                    alertBox.classList.add('bg-emerald-500/10', 'border', 'border-emerald-500/30', 'text-emerald-400');
                    alertBox.textContent = data.data.message;
                    contactForm.reset();
                } else {
                    alertBox.classList.remove('hidden');
                    alertBox.classList.add('bg-red-500/10', 'border', 'border-red-500/30', 'text-red-400');
                    alertBox.textContent = data.data.message || 'Error sending message.';
                }
            })
            .catch(() => {
                alertBox.classList.remove('hidden');
                alertBox.classList.add('bg-red-500/10', 'border', 'border-red-500/30', 'text-red-400');
                alertBox.textContent = 'Network error. Please try again.';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
        });
    }
});
