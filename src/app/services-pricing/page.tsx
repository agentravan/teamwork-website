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



    <header className="section-padding" style={{'paddingTop': '160px', 'textAlign': 'center'}}>
        <div className="container">
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Service Engagement Models</h1>
            <p className="fade-up" style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '0 auto'}}>
                Transparent pricing for Payroll, Compliance, and HR Operations.
            </p>
        </div>
    </header>

    <main>
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(300px, 1fr))', 'gap': '30px'}}>

                    {/* Model 1: Payroll Only */}
                    <div className="glass-panel fade-up" style={{'padding': '30px'}}>
                        <h3 style={{'marginBottom': '10px'}}>Model 1: Payroll Only</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>
                            For organizations with in-house HR.</p>
                        <ul style={{'display': 'grid', 'gap': '10px', 'fontSize': '0.9rem', 'color': 'var(--text-secondary)'}}>
                            <li>• Monthly Salary Compilations</li>
                            <li>• Payslip Generation</li>
                            <li>• Bank Bank Disbursement Files</li>
                        </ul>
                        <a href="https://wa.me/919518842774" className="btn btn-outline"
                            style={{'width': '100%', 'marginTop': '20px'}}>Get Quote</a>
                    </div>

                    {/* Model 2: Payroll + Compliance */}
                    <div className="glass-panel fade-up" style={{'padding': '30px', 'borderColor': 'var(--service)'}}>
                        <div
                            style={{'background': 'var(--service)', 'color': 'white', 'padding': '4px 12px', 'borderRadius': '4px', 'fontSize': '0.75rem', 'width': 'fit-content', 'marginBottom': '10px'}}>
                            POPULAR</div>
                        <h3 style={{'marginBottom': '10px'}}>Model 2: Payroll + Compliance</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>
                            For growing organizations needing risk protection.</p>
                        <ul style={{'display': 'grid', 'gap': '10px', 'fontSize': '0.9rem', 'color': 'var(--text-secondary)'}}>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--service)'}}></i> Everything in Model 1
                            </li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--service)'}}></i> PF & ESIC Filing</li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--service)'}}></i> Tax Returns (TDS)</li>
                        </ul>
                        <a href="https://wa.me/919518842774" className="btn btn-service"
                            style={{'width': '100%', 'marginTop': '20px'}}>Start Engagement</a>
                    </div>

                    {/* Model 3: Outsourcing */}
                    <div className="glass-panel fade-up" style={{'padding': '30px'}}>
                        <h3 style={{'marginBottom': '10px'}}>Model 3: HR Ops Outsourcing</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>
                            For lean teams needing full support.</p>
                        <ul style={{'display': 'grid', 'gap': '10px', 'fontSize': '0.9rem', 'color': 'var(--text-secondary)'}}>
                            <li>• Attendance Management</li>
                            <li>• Employee Letter Generation</li>
                            <li>• Query Handling</li>
                        </ul>
                        <a href="https://wa.me/919518842774" className="btn btn-outline"
                            style={{'width': '100%', 'marginTop': '20px'}}>Get Quote</a>
                    </div>

                </div>
            </div>
        </section>

        <section className="section-padding" style={{'background': 'rgba(255,255,255,0.02)'}}>
            <div className="container">
                <h4 style={{'textAlign': 'center', 'marginBottom': '40px'}}>Specialized Services</h4>
                <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '30px'}}>
                    <div className="glass-panel"
                        style={{'padding': '30px', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
                        <div>
                            <h5>Recruitment (Flat Fee)</h5>
                            <p style={{'fontSize': '0.9rem', 'color': 'var(--text-secondary)'}}>Bulk & Niche Hiring</p>
                        </div>
                        <div style={{'fontWeight': '700', 'color': 'var(--accent)'}}>Custom</div>
                    </div>
                    <div className="glass-panel"
                        style={{'padding': '30px', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
                        <div>
                            <h5>One-Time Audit</h5>
                            <p style={{'fontSize': '0.9rem', 'color': 'var(--text-secondary)'}}>Statutory Risk Check</p>
                        </div>
                        <div style={{'fontWeight': '700', 'color': 'var(--accent)'}}>₹15,000+</div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    {/* Unified Footer */}
    <footer>
        <div className="container">
            <div style={{'display': 'grid', 'gridTemplateColumns': '1.5fr 1fr 1fr', 'gap': '60px', 'marginBottom': '40px'}}>
                <div>
                    <a href="#" className="logo" style={{'marginBottom': '20px'}}>
                        <i className="ph-fill ph-hexagon" style={{'color': 'var(--primary)'}}></i> TeamWork<span>Solutions</span>
                    </a>
                    <p style={{'marginBottom': '20px', 'color': 'var(--text-secondary)'}}>
                        TeamWork Solutions & Global HRX.<br />
                        Your trusted partner for HR Technology, Outsourcing, and Compliance.
                    </p>
                    <p style={{'marginBottom': '8px'}}><i className="ph-fill ph-envelope"></i> teamwork.hrsolution@zohomail.in
                    </p>
                    <p><i className="ph-fill ph-phone"></i> +91 9518842774</p>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Key Services</h4>
                    <ul>
                        <li><a href="global-hrx.html">Global HRX Software</a></li>
                        <li><a href="services.html">Payroll Outsourcing</a></li>
                        <li><a href="services.html">Compliance Audit</a></li>
                        <li><a href="services.html">Manpower Solutions</a></li>
                    </ul>
                </div>
            </div>
            <div style={{'textAlign': 'center', 'borderTop': '1px solid var(--border-subtle)', 'paddingTop': '20px'}}>
                &copy; 2026 TeamWork Solutions. Made with ❤️ in India.
            </div>
        </div>
    </footer>

    <a href="https://wa.me/919518842774" className="whatsapp-float" target="_blank"><i
            className="ph-fill ph-whatsapp-logo"></i></a>
    
    

    

    </>
  );
}
