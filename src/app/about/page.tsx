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
    <header className="section-padding" style={{'paddingTop': '180px', 'textAlign': 'center'}}>
        <div className="container">
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>About <span className="text-gradient">TeamWork Solutions</span>
            </h1>
            <p className="fade-up"
                style={{'color': 'var(--text-secondary)', 'maxWidth': '800px', 'margin': '0 auto', 'fontSize': '1.25rem'}}>
                Making HR, payroll, and compliance simple, structured, and stress-free.
            </p>
        </div>
    </header>

    {/* WHO WE ARE & MISSION */}
    <section className="section-padding">
        <div className="container">
            <div className="glass-panel" style={{'padding': '60px'}}>
                <div style={{'maxWidth': '900px', 'margin': '0 auto', 'textAlign': 'center'}}>
                    <h2 style={{'marginBottom': '30px'}}>Who We Are</h2>
                    <p style={{'fontSize': '1.1rem', 'lineHeight': '1.8', 'color': 'var(--text-secondary)', 'marginBottom': '40px'}}>
                        TeamWork Solutions was founded with a clear vision — to make HR, payroll, and compliance simple,
                        structured, and stress-free for businesses. With deep expertise in statutory compliance and
                        payroll operations, we partner with organizations to ensure accuracy, transparency, and
                        regulatory confidence.
                    </p>

                    <h2 style={{'marginBottom': '30px'}}>Our Mission</h2>
                    <p style={{'fontSize': '1.1rem', 'lineHeight': '1.8', 'color': 'var(--text-secondary)', 'marginBottom': '40px'}}>
                        To empower businesses with reliable HR and compliance solutions that reduce operational risk and
                        improve efficiency.
                    </p>

                    <h2 style={{'marginBottom': '30px'}}>Our Vision</h2>
                    <p style={{'fontSize': '1.1rem', 'lineHeight': '1.8', 'color': 'var(--text-secondary)'}}>
                        To become a trusted HR technology and compliance partner for organizations across India and
                        globally.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* VALUES */}
    <section className="section-padding">
        <div className="container">
            <h2 style={{'textAlign': 'center', 'marginBottom': '60px'}}>Our Values</h2>
            <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(250px, 1fr))', 'gap': '30px'}}>
                <div className="glass-panel" style={{'padding': '40px', 'textAlign': 'center'}}>
                    <i className="ph-duotone ph-handshake"
                        style={{'fontSize': '40px', 'color': 'var(--primary)', 'marginBottom': '20px'}}></i>
                    <h4>Integrity & Transparency</h4>
                    <p style={{'color': 'var(--text-secondary)', 'marginTop': '10px'}}>We believe in honest partnerships and
                        clear communication.</p>
                </div>
                <div className="glass-panel" style={{'padding': '40px', 'textAlign': 'center'}}>
                    <i className="ph-duotone ph-seal-check"
                        style={{'fontSize': '40px', 'color': 'var(--service)', 'marginBottom': '20px'}}></i>
                    <h4>Compliance Excellence</h4>
                    <p style={{'color': 'var(--text-secondary)', 'marginTop': '10px'}}>Zero tolerance for errors in statutory
                        compliance.</p>
                </div>
                <div className="glass-panel" style={{'padding': '40px', 'textAlign': 'center'}}>
                    <i className="ph-duotone ph-heart"
                        style={{'fontSize': '40px', 'color': 'var(--accent)', 'marginBottom': '20px'}}></i>
                    <h4>Client-First Approach</h4>
                    <p style={{'color': 'var(--text-secondary)', 'marginTop': '10px'}}>Your business goals are our priority.</p>
                </div>
                <div className="glass-panel" style={{'padding': '40px', 'textAlign': 'center'}}>
                    <i className="ph-duotone ph-trend-up" style={{'fontSize': '40px', 'color': '#ec4899', 'marginBottom': '20px'}}></i>
                    <h4>Continuous Improvement</h4>
                    <p style={{'color': 'var(--text-secondary)', 'marginTop': '10px'}}>Always evolving with technology and laws.
                    </p>
                </div>
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
