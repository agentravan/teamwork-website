/**
 * UNIFIED FOOTER LOADER
 */

const footerHTML = `
<footer style="background: var(--bg-dark); border-top: 1px solid var(--border-subtle);">
    <div class="container" style="padding: 80px 20px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px;">
            <!-- COMPANY -->
            <div>
                <h3 style="color: white; font-size: 1.1rem; margin-bottom: 20px;">Company</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><a href="/about.html" style="color: var(--text-muted); text-decoration: none;">About Us</a></li>
                    <li style="margin-bottom: 10px;"><a href="/services.html" style="color: var(--text-muted); text-decoration: none;">Services</a></li>
                    <li style="margin-bottom: 10px;"><a href="/careers.html" style="color: var(--text-muted); text-decoration: none;">Careers</a></li>
                    <li style="margin-bottom: 10px;"><a href="/contact.html" style="color: var(--text-muted); text-decoration: none;">Contact</a></li>
                </ul>
            </div>

            <!-- SOLUTIONS -->
            <div>
                <h3 style="color: white; font-size: 1.1rem; margin-bottom: 20px;">Global HRX</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><a href="/services/payroll-management.html" style="color: var(--text-muted); text-decoration: none;">Payroll Management</a></li>
                    <li style="margin-bottom: 10px;"><a href="/services/compliance-outsourcing.html" style="color: var(--text-muted); text-decoration: none;">Compliance Outsourcing</a></li>
                    <li style="margin-bottom: 10px;"><a href="/services/global-hrx-hrms.html" style="color: var(--text-muted); text-decoration: none;">HRMS Software</a></li>
                    <li style="margin-bottom: 10px;"><a href="/services/hr-policy-audit.html" style="color: var(--text-muted); text-decoration: none;">HR Policy & Audit</a></li>
                </ul>
            </div>

            <!-- RESOURCES -->
            <div>
                <h3 style="color: white; font-size: 1.1rem; margin-bottom: 20px;">Resources</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><a href="/calculators/hr-salary-calculator.html" style="color: var(--text-muted); text-decoration: none;">Salary Calculator</a></li>
                    <li style="margin-bottom: 10px;"><a href="javascript:void(0)" onclick="openLeadModal()" style="color: var(--text-muted); text-decoration: none;">HR Reports</a></li>
                    <li style="margin-bottom: 10px;"><a href="/blog.html" style="color: var(--text-muted); text-decoration: none;">Blogs</a></li>
                </ul>
            </div>

            <!-- LEGAL -->
            <div>
                <h3 style="color: white; font-size: 1.1rem; margin-bottom: 20px;">Legal</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><a href="/privacy-policy.html" style="color: var(--text-muted); text-decoration: none;">Privacy Policy</a></li>
                    <li style="margin-bottom: 10px;"><a href="/terms-of-use.html" style="color: var(--text-muted); text-decoration: none;">Terms of Use</a></li>
                </ul>
            </div>
        </div>

        <div style="text-align: center; margin-top: 60px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-tertiary);">
            &copy; 2026 TeamWork Solutions. All rights reserved.
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Footer
    const container = document.getElementById('global-footer-container');
    if (container) {
        container.innerHTML = footerHTML;
    }
});
