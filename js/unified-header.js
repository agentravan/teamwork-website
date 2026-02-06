/**
 * UNIFIED HEAD LOADER
 * Injects a premium header into #global-header-container
 */

const headerHTML = `
<header class="site-header">
    <div class="nav-container">
        <!-- LOGO -->
        <a href="index.html" class="logo">
            TeamWork <span>SOLUTIONS</span>
        </a>

        <!-- MAIN NAVIGATION -->
        <nav class="main-nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="global-hrx.html">Global HRX</a></li>

                <!-- SERVICES MEGA DROPDOWN -->
                <li class="dropdown">
                    <a href="services.html" class="dropdown-trigger">Services ▾</a>
                    <div class="mega-menu">
                        <!-- Item 1 -->
                        <a href="services/payroll-management.html" class="mega-link">
                            <div class="mega-icon blue"><i class="ph-duotone ph-currency-dollar"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Payroll Management</div>
                                <div class="mega-desc">Automate salary processing & compliance.</div>
                            </div>
                        </a>
                        <!-- Item 2 -->
                        <a href="services/compliance-outsourcing.html" class="mega-link">
                            <div class="mega-icon green"><i class="ph-duotone ph-shield-check"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Compliance Outsourcing</div>
                                <div class="mega-desc">PF, ESIC, LWF, PT management.</div>
                            </div>
                        </a>
                        <!-- Item 3 -->
                        <a href="services/hr-policy-audit.html" class="mega-link">
                            <div class="mega-icon purple"><i class="ph-duotone ph-files"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">HR Policy & Audit</div>
                                <div class="mega-desc">Policies, labor audit & compliance.</div>
                            </div>
                        </a>
                        <!-- Item 4 -->
                        <a href="services/startup-registration.html" class="mega-link">
                            <div class="mega-icon orange"><i class="ph-duotone ph-rocket"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Startup Registration</div>
                                <div class="mega-desc">Company, labor & statutory setup.</div>
                            </div>
                        </a>
                    </div>
                </li>

                <!-- CALCULATORS MEGA DROPDOWN -->
                <li class="dropdown">
                    <a href="#" class="dropdown-trigger">Calculators ▾</a>
                    <div class="mega-menu calculators-grid">
                        <a href="calculator-pf.html" class="mega-link">
                            <div class="mega-icon orange"><i class="ph-duotone ph-piggy-bank"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">PF Calculator</div>
                            </div>
                        </a>
                        <a href="calculator-esic.html" class="mega-link">
                            <div class="mega-icon pink"><i class="ph-duotone ph-first-aid-kit"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">ESIC Calculator</div>
                            </div>
                        </a>
                        <a href="calculator-tds.html" class="mega-link">
                            <div class="mega-icon blue"><i class="ph-duotone ph-calculator"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">TDS Calculator</div>
                            </div>
                        </a>
                        <a href="calculator-gratuity.html" class="mega-link">
                            <div class="mega-icon green"><i class="ph-duotone ph-coins"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Gratuity</div>
                            </div>
                        </a>
                    </div>
                </li>

                <li><a href="careers.html">Careers</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                
                <!-- MOBILE CLONE TARGET (Will disappear on Desktop via CSS) -->
                <li class="mobile-only-actions" style="display:none; width: 100%; margin-top: 20px;">
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <a class="btn-ghost" href="login.html" style="justify-content: center;">Login</a>
                        <a class="btn-primary-header" href="request-access.html" style="text-align: center;">Request Access</a>
                    </div>
                </li>
            </ul>
        </nav>

        <!-- RIGHT SIDE ACTIONS -->
        <div class="nav-actions">
            <a class="btn-ghost" href="login.html">Log In</a>
            <a class="btn-primary-header" href="request-access.html">
                Request Access <i class="ph-bold ph-arrow-right"></i>
            </a>
        </div>

        <!-- MOBILE TOGGLE -->
        <div class="hamburger">
            <i class="ph-bold ph-list"></i>
        </div>
    </div>
</header>
`;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Header
    const container = document.getElementById('global-header-container');
    if (container) {
        container.innerHTML = headerHTML;
        initializeHeaderLogic();
    } else {
        console.warn('Integrated Header: #global-header-container not found.');
    }
});

function initializeHeaderLogic() {
    // 1. Highlight Active Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const hRef = link.getAttribute('href');
        // Exact match or sub-links (e.g. services.html matches services.html#payroll)
        if (hRef === currentPath || (hRef && hRef.startsWith(currentPath + '#'))) {
            // Check if it's not the logo
            if (!link.classList.contains('logo')) {
                link.classList.add('active');
                // Also highlight parent if it's a dropdown
                const parentLi = link.closest('li.dropdown');
                if (parentLi) {
                    const parentTrigger = parentLi.querySelector('.dropdown-trigger');
                    if (parentTrigger) parentTrigger.classList.add('active');
                }
            }
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const mobileActions = document.querySelector('.mobile-only-actions');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            const isExpanded = mainNav.classList.toggle('show');
            // Show mobile actions only when expanded
            if (mobileActions) {
                mobileActions.style.display = isExpanded ? 'block' : 'none';
            }

            // Toggle Icon
            const icon = hamburger.querySelector('i');
            if (isExpanded) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    }

    // 3. Scroll Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Ensure Phosphor Icons Scripts are loaded if not present
    if (!document.querySelector('script[src*="phosphor-icons"]')) {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@phosphor-icons/web";
        document.head.appendChild(script);
    }
}
