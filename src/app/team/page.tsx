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
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Our Strength Is Our People</h1>
            <p className="fade-up" style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '0 auto'}}>
                Expertise led by seasoned professionals.
            </p>
        </div>
    </header>

    <main>
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(280px, 1fr))', 'gap': '40px'}}>

                    {/* Harshit */}
                    <div className="glass-panel fade-up" style={{'padding': '30px', 'textAlign': 'center'}}>
                        <div
                            style={{'width': '100px', 'height': '100px', 'background': 'rgba(255,255,255,0.1)', 'borderRadius': '50%', 'margin': '0 auto 20px', 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
                            <i className="ph-fill ph-user" style={{'fontSize': '40px'}}></i>
                        </div>
                        <h3 style={{'fontSize': '1.25rem'}}>Harshit Bhardwaj</h3>
                        <p style={{'color': 'var(--service)', 'fontSize': '0.9rem', 'marginBottom': '10px', 'fontWeight': '600'}}>
                            Founder & HR Compliance Architect</p>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem'}}>
                            Seasoned professional with deep expertise in payroll governance and statutory compliance.
                            Known for building systems that withstand audits.
                        </p>
                    </div>

                    {/* Shaksham */}
                    <div className="glass-panel fade-up" style={{'padding': '30px', 'textAlign': 'center'}}>
                        <div
                            style={{'width': '100px', 'height': '100px', 'background': 'rgba(255,255,255,0.1)', 'borderRadius': '50%', 'margin': '0 auto 20px', 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
                            <i className="ph-fill ph-user" style={{'fontSize': '40px'}}></i>
                        </div>
                        <h3 style={{'fontSize': '1.25rem'}}>Shaksham Chug</h3>
                        <p style={{'color': 'var(--primary)', 'fontSize': '0.9rem', 'marginBottom': '10px', 'fontWeight': '600'}}>
                            Finance & Compliance Strategy</p>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem'}}>
                            Specialist in financial controls, statutory alignment, and compliance risk assessment.
                        </p>
                    </div>

                    {/* Vikas */}
                    <div className="glass-panel fade-up" style={{'padding': '30px', 'textAlign': 'center'}}>
                        <div
                            style={{'width': '100px', 'height': '100px', 'background': 'rgba(255,255,255,0.1)', 'borderRadius': '50%', 'margin': '0 auto 20px', 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
                            <i className="ph-fill ph-user" style={{'fontSize': '40px'}}></i>
                        </div>
                        <h3 style={{'fontSize': '1.25rem'}}>Vikas Sharma</h3>
                        <p style={{'color': 'var(--service)', 'fontSize': '0.9rem', 'marginBottom': '10px', 'fontWeight': '600'}}>
                            Operations & Outsourcing</p>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem'}}>
                            Expert in large-scale payroll execution and workforce operations.
                        </p>
                    </div>

                    {/* Ashu */}
                    <div className="glass-panel fade-up" style={{'padding': '30px', 'textAlign': 'center'}}>
                        <div
                            style={{'width': '100px', 'height': '100px', 'background': 'rgba(255,255,255,0.1)', 'borderRadius': '50%', 'margin': '0 auto 20px', 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
                            <i className="ph-fill ph-user" style={{'fontSize': '40px'}}></i>
                        </div>
                        <h3 style={{'fontSize': '1.25rem'}}>Ashu Verma</h3>
                        <p style={{'color': 'var(--accent)', 'fontSize': '0.9rem', 'marginBottom': '10px', 'fontWeight': '600'}}>
                            Marketing & Growth</p>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem'}}>
                            Focuses on brand strategy, client communication, and market positioning.
                        </p>
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
