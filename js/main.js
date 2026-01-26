document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(2, 6, 23, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Logic
    initMobileMenu();

    // Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Glass Panel Hover Effect (Mouse Move)
    const cards = document.querySelectorAll('.glass-panel');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

});

function initMobileMenu() {
    const nav = document.querySelector('.navbar');
    const container = document.querySelector('.nav-content');

    // Check if mobile elements exist, if not create them (Robustness for all pages)
    if (!document.querySelector('.mobile-toggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'mobile-toggle';
        toggleBtn.innerHTML = '<i class="ph-bold ph-list"></i>';
        toggleBtn.onclick = toggleMenu;

        // Insert before actions or at end
        const actions = document.querySelector('.nav-actions');
        if (actions) {
            container.insertBefore(toggleBtn, actions);
        } else {
            container.appendChild(toggleBtn);
        }
    }

    if (!document.querySelector('.mobile-menu-overlay')) {
        const menu = document.createElement('div');
        menu.className = 'mobile-menu-overlay';
        menu.id = 'mobileMenu';

        // Populate Menu
        menu.innerHTML = `
        menu.innerHTML = `
            <a href="index.html" class="mobile-nav-link">Home</a>
            <a href="global-hrx.html" class="mobile-nav-link">Global HRX</a>
            
            <div class="mobile-dropdown-group">
                <div class="mobile-nav-link" onclick="this.nextElementSibling.classList.toggle('active')">
                    Services <i class="ph-bold ph-caret-down"></i>
                </div>
                <div class="mobile-nav-sub">
                    <a href="services.html"><i class="ph-duotone ph-currency-dollar"></i> Payroll Management</a>
                    <a href="services.html"><i class="ph-duotone ph-shield-check"></i> Statutory Compliance</a>
                    <a href="services.html"><i class="ph-duotone ph-briefcase"></i> Recruitment</a>
                    <a href="services.html"><i class="ph-duotone ph-scroll"></i> Labour Licenses</a>
                </div>
            </div>

            <div class="mobile-dropdown-group">
                <div class="mobile-nav-link" onclick="this.nextElementSibling.classList.toggle('active')">
                    Calculators <i class="ph-bold ph-caret-down"></i>
                </div>
                <div class="mobile-nav-sub">
                    <a href="calculator-pf.html"><i class="ph-duotone ph-piggy-bank"></i> PF Calculator</a>
                    <a href="calculator-esic.html"><i class="ph-duotone ph-first-aid-kit"></i> ESIC Calculator</a>
                    <a href="calculator-tds.html"><i class="ph-duotone ph-receipt"></i> TDS Calculator</a>
                    <a href="calculator-gratuity.html"><i class="ph-duotone ph-coins"></i> Gratuity</a>
                </div>
            </div>

            <a href="careers.html" class="mobile-nav-link">Careers</a>
            <a href="pricing.html" class="mobile-nav-link">Pricing</a>
            <a href="about.html" class="mobile-nav-link">About</a>
            <a href="contact.html" class="mobile-nav-link">Contact</a>
            
            <div style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                <a href="login.html" class="btn btn-outline" style="width: 100%; text-align: center; margin-bottom: 10px;">Login</a>
                <a href="request-access.html" class="btn btn-primary" style="width: 100%; text-align: center;">Request Access</a>
            </div>
        `;

        document.body.appendChild(menu);
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.mobile-toggle i');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        btn.classList.remove('ph-x');
        btn.classList.add('ph-list');
        document.body.style.overflow = '';
    } else {
        menu.classList.add('active');
        btn.classList.remove('ph-list');
        btn.classList.add('ph-x');
        document.body.style.overflow = 'hidden';
    }
}
