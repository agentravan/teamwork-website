'use client';

import React from 'react';

export default function Page() {
  return (
    <>
      
    {/* PRELOADER (Brand Logo) */}
    <div id="page-loader">
        <div className="loader-brand">
            <div className="brand-icon-loader"><i className="ph-fill ph-users-three"></i></div>
            <div className="brand-logo-text">TeamWork</div>
            <div className="brand-tagline">together we can do so much</div>
        </div>
    </div>
    <div id="global-header-container"></div>



    {/* INTRO */}
    <header className="section-padding"
        style={{'paddingTop': '180px', 'textAlign': 'center', 'minHeight': '70vh', 'display': 'flex', 'alignItems': 'center'}}>
        <div className="container">
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Global HRX – <span className="text-gradient">Enterprise-Grade
                    HRMS Platform</span></h1>
            <p className="fade-up"
                style={{'color': 'var(--text-secondary)', 'maxWidth': '800px', 'margin': '0 auto', 'marginBottom': '40px', 'fontSize': '1.25rem'}}>
                Global HRX is an advanced, scalable, and compliance-ready HRMS designed for modern enterprises,
                startups, and global organizations. It combines HR operations, payroll, compliance, analytics, and
                automation into one powerful platform.
            </p>
            <div className="fade-up" style={{'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                <a href="request-access.html" className="btn btn-primary">Request Access</a>
                <a href="contact.html" className="btn btn-outline">Book a Demo</a>
            </div>
        </div>
    </header>

    {/* WHAT GLOBAL HRX CAN DO */}
    <section className="section-padding">
        <div className="container">
            <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
                <h2 style={{'marginBottom': '16px'}}>Core Capabilities</h2>
                <p style={{'color': 'var(--text-secondary)'}}>Everything you need to manage your workforce.</p>
            </div>

            <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(300px, 1fr))', 'gap': '30px'}}>
                {/* Capability 1 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-users-three"
                        style={{'fontSize': '40px', 'color': 'var(--primary)', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>Employee Lifecycle Management</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>Hire to Exit management with seamless transitions.</p>
                </div>
                {/* Capability 2 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-currency-dollar"
                        style={{'fontSize': '40px', 'color': 'var(--service)', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>Payroll Automation</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>Salary processing, reimbursements, and payslips.</p>
                </div>
                {/* Capability 3 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-clock"
                        style={{'fontSize': '40px', 'color': 'var(--accent)', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>Attendance & Leave</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>Real-time tracking and leave management.</p>
                </div>
                {/* Capability 4 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-shield-check"
                        style={{'fontSize': '40px', 'color': '#ec4899', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>Statutory Compliance</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>PF, ESIC, PT, LWF, TDS Tracking.</p>
                </div>
                {/* Capability 5 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-user-plus"
                        style={{'fontSize': '40px', 'color': '#8b5cf6', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>Recruitment & Onboarding</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>Automated workflows for new hires.</p>
                </div>
                {/* Capability 6 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-chart-bar"
                        style={{'fontSize': '40px', 'color': '#14b8a6', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>HR Analytics</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>Insightful dashboards for decision making.</p>
                </div>
                {/* Capability 7 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-lock-key" style={{'fontSize': '40px', 'color': '#f43f5e', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>RBAC Security</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>Role-Based Access Control for data security.</p>
                </div>
                {/* Capability 8 */}
                <div className="glass-panel" style={{'padding': '40px'}}>
                    <i className="ph-duotone ph-globe" style={{'fontSize': '40px', 'color': '#3b82f6', 'marginBottom': '20px'}}></i>
                    <h3 style={{'marginBottom': '10px', 'fontSize': '1.3rem'}}>Multi-Entity Support</h3>
                    <p style={{'color': 'var(--text-secondary)'}}>Manage multiple locations and entities.</p>
                </div>
            </div>
        </div>
    </section>

    {/* WHY GLOBAL HRX */}
    <section className="section-padding" style={{'background': 'rgba(15, 23, 42, 0.5)'}}>
        <div className="container">
            <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
                <h2 style={{'marginBottom': '16px'}}>Built for Future-Ready Organizations</h2>
            </div>

            <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(280px, 1fr))', 'gap': '30px'}}>
                <div className="glass-panel" style={{'padding': '30px', 'borderLeft': '4px solid var(--primary)'}}>
                    <h4 style={{'marginBottom': '10px'}}>For All Sizes</h4>
                    <p style={{'color': 'var(--text-secondary)'}}>Designed for SMEs, Enterprises & HR Consultancies.</p>
                </div>
                <div className="glass-panel" style={{'padding': '30px', 'borderLeft': '4px solid var(--service)'}}>
                    <h4 style={{'marginBottom': '10px'}}>Compliance-First</h4>
                    <p style={{'color': 'var(--text-secondary)'}}>Architecture built around statutory regulations.</p>
                </div>
                <div className="glass-panel" style={{'padding': '30px', 'borderLeft': '4px solid var(--accent)'}}>
                    <h4 style={{'marginBottom': '10px'}}>Secure & Scalable</h4>
                    <p style={{'color': 'var(--text-secondary)'}}>Audit-ready security for growing teams.</p>
                </div>
                <div className="glass-panel" style={{'padding': '30px', 'borderLeft': '4px solid #ec4899'}}>
                    <h4 style={{'marginBottom': '10px'}}>Customizable</h4>
                    <p style={{'color': 'var(--text-secondary)'}}>Flexible workflows and policy configurations.</p>
                </div>
                <div className="glass-panel" style={{'padding': '30px', 'borderLeft': '4px solid #8b5cf6'}}>
                    <h4 style={{'marginBottom': '10px'}}>India-Ready</h4>
                    <p style={{'color': 'var(--text-secondary)'}}>Specific features for Indian statutory compliance.</p>
                </div>
            </div>

            <div style={{'marginTop': '60px', 'textAlign': 'center'}}>
                <a href="request-access.html" className="btn btn-primary" style={{'marginRight': '20px'}}>Request Access</a>
                <a href="contact.html" className="btn btn-outline">Book a Demo</a>
            </div>
        </div>
    </section>

    {/* FOOTER */}
    <footer>
        <div className="container">
            <div
                style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(250px, 1fr))', 'gap': '50px', 'marginBottom': '60px'}}>
                <div className="footer-col">
                    <h4 style={{'marginBottom': '24px'}}>Let's Simplify Your HR Journey</h4>
                    <ul style={{'gap': '16px'}}>
                        <li style={{'display': 'flex', 'gap': '12px', 'alignItems': 'flex-start', 'color': 'var(--text-secondary)'}}>
                            <i className="ph-fill ph-phone"
                                style={{'color': 'var(--primary)', 'fontSize': '1.2rem', 'marginTop': '2px'}}></i>
                            <div>
                                <span style={{'display': 'block', 'color': 'white'}}>+91 95188 42774</span>
                                <span style={{'fontSize': '0.85rem'}}>(WhatsApp Available)</span>
                            </div>
                        </li>
                        <li style={{'display': 'flex', 'gap': '12px', 'alignItems': 'flex-start', 'color': 'var(--text-secondary)'}}>
                            <i className="ph-fill ph-envelope"
                                style={{'color': 'var(--primary)', 'fontSize': '1.2rem', 'marginTop': '2px'}}></i>
                            <div>
                                <span style={{'display': 'block', 'color': 'white'}}>teamwork.hrsolution@zohomail.in</span>
                            </div>
                        </li>
                        <li style={{'display': 'flex', 'gap': '12px', 'alignItems': 'flex-start', 'color': 'var(--text-secondary)'}}>
                            <i className="ph-fill ph-map-pin"
                                style={{'color': 'var(--primary)', 'fontSize': '1.2rem', 'marginTop': '2px'}}></i>
                            <div>
                                <span style={{'display': 'block', 'color': 'white'}}>Jind, Haryana</span>
                                <span style={{'fontSize': '0.85rem'}}>(Serving Clients Across India)</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 style={{'marginBottom': '24px'}}>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="global-hrx.html">Global HRX</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col"
                    style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'textAlign': 'center'}}>
                    <div>
                        <div
                            style={{'fontFamily': '\'Space Grotesk\'', 'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'marginBottom': '10px'}}>
                            TeamWork Solutions</div>
                        <p style={{'fontStyle': 'italic', 'color': 'var(--text-tertiary)'}}>Together, We Can Do So Much.</p>
                    </div>
                </div>
            </div>

            <div
                style={{'textAlign': 'center', 'paddingTop': '40px', 'borderTop': '1px solid var(--border-subtle)', 'color': 'var(--text-tertiary)', 'fontSize': '0.9rem'}}>
                &copy; 2026 TeamWork Solutions. All Rights Reserved.
            </div>
        </div>
    </footer>

    
    
    

    </>
  );
}
