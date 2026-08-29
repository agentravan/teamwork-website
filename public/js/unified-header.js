/**
 * UNIFIED HEAD LOADER
 * Injects a premium SaaS header into #global-header-container
 */
const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('/');
const headerHTML = '<div id="promo-strip-container"></div>' +
 '<header class="site-header home-mode">' +
 '    <div class="nav-container">' +
 '        <a href="/" class="logo">TeamWork <span>SOLUTIONS</span></a>' +
 '        <nav class="main-nav">' +
 '            <ul>' +
 '                <li><a href="/">Home</a></li>' +
 '                <li><a href="/global-hrx">Global HRX</a></li>' +
 '                <li class="dropdown">' +
 '                    <a href="/services" class="dropdown-trigger">Services v</a>' +
 '                    <div class="mega-menu">' +
 '                        <a href="/payroll-management" class="mega-link"><div class="mega-title">Payroll Management</div></a>' +
 '                        <a href="/compliance-outsourcing" class="mega-link"><div class="mega-title">Compliance Outsourcing</div></a>' +
 '                        <a href="/hr-policy-audit" class="mega-link"><div class="mega-title">HR Policy & Audit</div></a>' +
 '                        <a href="/recruitment-services" class="mega-link"><div class="mega-title">Recruitment Services</div></a>' +
 '                    </div>' +
 '                </li>' +
 '                <li><a href="/careers">Careers</a></li>' +
 '            </ul>' +
 '        </nav>' +
 '        <div class="nav-actions">' +
 '            <a href="/login-hrx" class="btn-login" style="margin-right: 8px;">Global HRX Login</a>' +
 '            <a href="/login-recruiter" class="btn-login" style="margin-right: 15px; color: #10B981;">Recruiter Login</a>' +
 '            <a href="/request-access" class="btn-request">Request Access</a>' +
 '        </div>' +
 '    </div>' +
 '</header>';
document.addEventListener('DOMContentLoaded', () => {
     const container = document.getElementById('global-header-container');
     if (container) container.innerHTML = headerHTML;
});
