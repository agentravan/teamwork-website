/**
 * UNIFIED HEAD LOADER
 * Injects a premium SaaS header into #global-header-container
 * Logic: One component, conditional styling for Dropdowns (Home vs Inner)
 */

const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

const headerHTML = `
<!-- PROMO STRIP (Injected via JS on Home only) -->
<div id="promo-strip-container"></div>

<!-- Force HOME MODE globally as per user request -->
<header class="site-header home-mode">
    <div class="nav-container">
        <!-- LOGO -->
        <a href="/index.html" class="logo">
            TeamWork <span>SOLUTIONS</span>
        </a>

        <!-- MAIN NAVIGATION -->
        <nav class="main-nav">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/global-hrx.html">Global HRX</a></li>

                <!-- SERVICES MEGA DROPDOWN -->
                <li class="dropdown">
                    <a href="/services.html" class="dropdown-trigger">Services ▾</a>
                    <div class="mega-menu">
                        <a href="/service-details.html?id=payroll" class="mega-link">
                            <div class="mega-icon blue"><i class="ph-duotone ph-currency-dollar"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Payroll Management</div>
                                <div class="mega-desc">Automate salary processing & compliance.</div>
                            </div>
                        </a>
                        <a href="/service-details.html?id=compliance" class="mega-link">
                            <div class="mega-icon green"><i class="ph-duotone ph-shield-check"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Compliance Outsourcing</div>
                                <div class="mega-desc">PF, ESIC, LWF, PT management.</div>
                            </div>
                        </a>
                        <a href="/service-details.html?id=policy" class="mega-link">
                            <div class="mega-icon purple"><i class="ph-duotone ph-files"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">HR Policy & Audit</div>
                                <div class="mega-desc">Policies, labor audit & compliance.</div>
                            </div>
                        </a>
                        <a href="/recruitment-services.html" class="mega-link">
                            <div class="mega-icon orange"><i class="ph-duotone ph-users-three"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Recruitment Services</div>
                                <div class="mega-desc">End-to-end talent acquisition.</div>
                            </div>
                        </a>
                        <a href="/service-details.html?id=hrms" class="mega-link">
                            <div class="mega-icon blue"><i class="ph-duotone ph-desktop"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">GlobalHRX HRMS</div>
                                <div class="mega-desc">Digital HR transformation & automated.</div>
                            </div>
                        </a>
                    </div>
                </li>

                <!-- CALCULATORS DROPDOWN -->
                <li class="dropdown">
                    <a href="#" class="dropdown-trigger">Calculators ▾</a>
                    <div class="mega-menu calculators-grid">
                         <a href="/calculators/hr-salary-calculator.html" class="mega-link">
                            <div class="mega-icon blue"><i class="ph-duotone ph-calculator"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">HR Salary Calculator</div>
                                <div class="mega-desc">Market benchmarking tool.</div>
                            </div>
                        </a>
                        <a href="/calculator-pf.html" class="mega-link">
                            <div class="mega-icon orange"><i class="ph-duotone ph-piggy-bank"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">PF Calculator</div>
                            </div>
                        </a>
                        <a href="/calculator-esic.html" class="mega-link">
                            <div class="mega-icon pink"><i class="ph-duotone ph-first-aid-kit"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">ESIC Calculator</div>
                            </div>
                        </a>
                        <a href="/calculator-tds.html" class="mega-link">
                            <div class="mega-icon blue"><i class="ph-duotone ph-calculator"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">TDS Calculator</div>
                            </div>
                        </a>
                        <a href="/calculator-gratuity.html" class="mega-link">
                            <div class="mega-icon green"><i class="ph-duotone ph-coins"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Gratuity</div>
                            </div>
                        </a>
                    </div>
                </li>

                <!-- RESOURCES DROPDOWN -->
                <li class="dropdown">
                    <a href="#" class="dropdown-trigger">Resources ▾</a>
                    <div class="mega-menu calculators-grid" style="grid-template-columns: 1fr;">
                        <a href="/calculators/hr-salary-calculator.html" class="mega-link">
                            <div class="mega-icon blue"><i class="ph-duotone ph-chart-bar"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">Salary Benchmark Report</div>
                                <div class="mega-desc">Download 2025-26 India HR Report.</div>
                            </div>
                        </a>
                         <a href="/blog.html" class="mega-link">
                            <div class="mega-icon purple"><i class="ph-duotone ph-newspaper"></i></div>
                            <div class="mega-content">
                                <div class="mega-title">HR Blogs</div>
                                <div class="mega-desc">Latest trends and compliance updates.</div>
                            </div>
                        </a>
                    </div>
                </li>

                <li><a href="/careers.html">Careers</a></li>
                
                <!-- MOBILE CLONE TARGET -->
                <li class="mobile-only-actions" style="display:none; width: 100%; margin-top: 20px;">
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <a class="btn-ghost" href="/login.html" style="justify-content: center;">Login</a>
                        <a class="btn-primary-header" href="/request-access.html" style="text-align: center;">Request Access</a>
                    </div>
                </li>
            </ul>
        </nav>

        <!-- RIGHT SIDE ACTIONS (SaaS Style) -->
        <div class="nav-actions">
            <!-- Ghost Button for Login -->
            <a href="/login.html" class="btn-ghost-header">Login</a>
            <!-- Primary Action -->
            <a href="/request-access.html" class="btn-primary-header">
                Request Access <i class="ph-bold ph-arrow-right"></i>
            </a>
        </div>

        <!-- MOBILE TOGGLE -->
        <div class="hamburger">
            <i class="ph-bold ph-list"></i>
        </div>
    </div>
</header>

<!-- LEAD CAPTURE MODAL -->
<div id="lead-modal" class="modal-overlay" style="display:none;">
    <div class="modal-content">
        <button class="close-modal">&times;</button>
        <div style="text-align: center; margin-bottom: 20px;">
             <i class="ph-duotone ph-file-pdf" style="font-size: 48px; color: var(--primary);"></i>
             <h3>Download 2025-26 Report</h3>
             <p style="font-size: 0.9rem; color: var(--text-secondary);">Enter your details to get the full benchmarking report.</p>
        </div>
        <form id="lead-form" onsubmit="handleLeadSubmit(event)">
            <div class="form-group">
                <input type="text" placeholder="Full Name" required class="form-input">
            </div>
            <div class="form-group">
                <input type="email" placeholder="Work Email" required class="form-input">
            </div>
             <div class="form-group">
                <input type="text" placeholder="Company Name" required class="form-input">
            </div>
             <div class="form-group">
                <input type="text" placeholder="Designation" required class="form-input">
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Download Now</button>
        </form>
    </div>
</div>

<style>
/* Header CSS Variables Override based on mode */
.home-mode .mega-menu {
    /* Home Mode: Minimal, Soft */
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
.home-mode .mega-link {
    background: transparent;
    border: none;
    padding: 10px 15px;
}
.home-mode .mega-link:hover {
    background: rgba(0,0,0,0.03);
    transform: none; /* No lift on home */
    border-color: transparent;
}
.home-mode .mega-title {
    color: #0f172a;
    font-weight: 600;
}
.home-mode .mega-desc {
    color: #64748b;
}

/* Inner Mode: Card/Pill Style (Already Default in CSS, but reinforcing) */
.inner-mode .mega-menu {
    background: rgba(15, 23, 42, 0.95); /* Darker, Enterprise feel */
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
.inner-mode .mega-link {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px; /* Pill/Card shape */
    margin-bottom: 8px;
}
.inner-mode .mega-link:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--primary);
    transform: translateX(5px);
}


/* Header Specific Styles */
.btn-ghost-header {
    background: transparent;
    color: var(--text-muted);
    padding: 8px 16px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s;
}
.btn-ghost-header:hover {
    border-color: white;
    color: white;
}

/* Modal Styles */
.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8); z-index: 20000;
    backdrop-filter: blur(5px);
    display: flex; align-items: center; justify-content: center;
}
.modal-content {
    background: #1e293b; border: 1px solid rgba(255,255,255,0.1);
    padding: 30px; border-radius: 12px; width: 90%; max-width: 400px;
    position: relative;
}
.close-modal {
    position: absolute; top: 10px; right: 15px; background: none; border: none;
    color: white; font-size: 24px; cursor: pointer;
}
.form-input {
    width: 100%; padding: 10px; margin-bottom: 10px;
    background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1);
    color: white; border-radius: 6px;
}

/* Promo Strip */
.promo-strip {
    background: linear-gradient(90deg, #2563eb, #1e40af);
    color: white; text-align: center; padding: 10px;
    font-size: 0.9rem; font-weight: 500;
    display: flex; justify-content: center; align-items: center; gap: 20px;
}
.promo-btn {
    background: white; color: #2563eb; padding: 4px 12px;
    border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 0.8rem;
}
</style>
`;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Header
    const container = document.getElementById('global-header-container');
    if (container) {
        container.innerHTML = headerHTML;
        initializeHeaderLogic();
    }

    // 2. Inject Promo Strip on Home Page Only
    if (isHome) {
        const promoContainer = document.getElementById('promo-strip-container');
        if (promoContainer) {
            promoContainer.innerHTML = `
                <div class="promo-strip">
                    <span>📊 Explore India’s HR Salary Benchmarking Report 2025–26</span>
                    <div style="display: flex; gap: 10px;">
                        <button onclick="openLeadModal()" class="promo-btn" style="border:none; cursor:pointer;">Download Free Report</button>
                        <a href="/calculators/hr-salary-calculator.html" class="promo-btn" style="background: rgba(255,255,255,0.2); color: white;">Open Salary Calculator</a>
                    </div>
                </div>
            `;
            // Adjust header top if promo is present (optional, usually absolute header needs top offset)
            // But if header is fixed, promo should push it down or overlay.
            // Assuming fixed header, let's just make promo part of the flow or push header.
            // For now, simple injection.
        }
    }

    // 3. Modal Logic
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-modal')) {
            document.getElementById('lead-modal').style.display = 'none';
        }
        if (e.target.classList.contains('modal-overlay')) {
            document.getElementById('lead-modal').style.display = 'none';
        }
    });
});

function initializeHeaderLogic() {
    // ... (Existing logic for active links, mobile toggle, scroll) ...
    // ... kept same as before but abbreviated here for clarity when rewriting ...
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const hRef = link.getAttribute('href');
        if (hRef === currentPath || (hRef && hRef.startsWith(currentPath + '#'))) {
            if (!link.classList.contains('logo') && !link.classList.contains('btn-ghost-header')) {
                link.classList.add('active');
                const parentLi = link.closest('li.dropdown');
                if (parentLi) {
                    const parentTrigger = parentLi.querySelector('.dropdown-trigger');
                    if (parentTrigger) parentTrigger.classList.add('active');
                }
            }
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const mobileActions = document.querySelector('.mobile-only-actions');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            // Toggle logic
            const isExpanded = mainNav.classList.toggle('show');
            if (mobileActions) mobileActions.style.display = isExpanded ? 'block' : 'none';
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

    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (!document.querySelector('script[src*="phosphor-icons"]')) {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@phosphor-icons/web";
        document.head.appendChild(script);
    }
}

// Global functions for Lead Form
function openLeadModal() {
    document.getElementById('lead-modal').style.display = 'flex';
}

function handleLeadSubmit(e) {
    e.preventDefault();
    // Simulate API call
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'Processing...';

    setTimeout(() => {
        // Trigger Download
        const link = document.createElement('a');
        link.href = '/assets/downloads/India-HR-Salary-Benchmarking-Report-2025-26.pdf';
        link.download = 'India-HR-Salary-Benchmarking-Report-2025-26.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset
        btn.innerText = 'Download Started!';
        setTimeout(() => {
            document.getElementById('lead-modal').style.display = 'none';
            btn.innerText = originalText;
            e.target.reset();
        }, 1500);
    }, 1000);
}
