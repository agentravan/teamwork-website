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



    {/* HEADER */}
    <header className="section-padding" style={{'paddingTop': '180px', 'textAlign': 'center'}}>
        <div className="container">
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Let's Simplify Your <span className="text-gradient">HR
                    Journey</span></h1>
            <p className="fade-up" style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '0 auto'}}>
                Whether you are a startup, a growing business, or an enterprise—we are ready to engage.
            </p>
        </div>
    </header>

    <main>
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '60px'}}>

                    {/* Contact Info */}
                    <div className="glass-panel fade-up" style={{'padding': '60px', 'textAlign': 'left'}}>
                        <h3 style={{'marginBottom': '30px'}}>Contact Details</h3>

                        <div style={{'marginBottom': '40px', 'display': 'flex', 'gap': '20px', 'alignItems': 'start'}}>
                            <i className="ph-fill ph-phone" style={{'fontSize': '32px', 'color': 'var(--primary)'}}></i>
                            <div>
                                <h4 style={{'color': 'var(--text-primary)', 'marginBottom': '5px'}}>Phone</h4>
                                <p style={{'fontSize': '1.1rem', 'color': 'white'}}>+91 95188 42774</p>
                                <p style={{'fontSize': '0.9rem', 'color': 'var(--text-secondary)'}}>(WhatsApp Available)</p>
                            </div>
                        </div>

                        <div style={{'marginBottom': '40px', 'display': 'flex', 'gap': '20px', 'alignItems': 'start'}}>
                            <i className="ph-fill ph-envelope" style={{'fontSize': '32px', 'color': 'var(--primary)'}}></i>
                            <div>
                                <h4 style={{'color': 'var(--text-primary)', 'marginBottom': '5px'}}>Email</h4>
                                <p style={{'fontSize': '1.1rem', 'color': 'white'}}>teamwork.hrsolution@zohomail.in</p>
                            </div>
                        </div>

                        <div style={{'marginBottom': '40px', 'display': 'flex', 'gap': '20px', 'alignItems': 'start'}}>
                            <i className="ph-fill ph-map-pin" style={{'fontSize': '32px', 'color': 'var(--primary)'}}></i>
                            <div>
                                <h4 style={{'color': 'var(--text-primary)', 'marginBottom': '5px'}}>Location</h4>
                                <p style={{'fontSize': '1.1rem', 'color': 'white'}}>Jind, Haryana</p>
                                <p style={{'fontSize': '0.9rem', 'color': 'var(--text-secondary)'}}>(Serving Clients Across
                                    India)</p>
                            </div>
                        </div>

                        <div style={{'marginTop': '40px'}}>
                            <h4 style={{'marginBottom': '16px'}}>Engagement Options</h4>
                            <ul style={{'display': 'grid', 'gap': '10px', 'color': 'var(--text-secondary)'}}>
                                <li>• Free compliance discussion</li>
                                <li>• Payroll assessment</li>
                                <li>• HRMS demo</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form (Zoho) */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <h3 style={{'marginBottom': '24px'}}>Start a Conversation</h3>

                        <form id="zohoContactForm"
                            /* action="https://forms.zoho.in/teamworkhrsolutionzoho1/form/TeamWorkContactUs" */ method="POST"
                            target="hiddenContactFrame" onSubmit={(e) => { e.preventDefault(); }}>
                            <div className="form-group" style={{'marginBottom': '16px'}}>
                                <label style={{'display': 'block', 'marginBottom': '8px', 'fontSize': '0.9rem'}}>Full Name
                                    *</label>
                                <input type="text" name="Name_First" required
                                    style={{'width': '100%', 'padding': '12px', 'background': 'rgba(255,255,255,0.05)', 'border': '1px solid var(--border-subtle)', 'color': 'white', 'borderRadius': '8px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '16px'}}>
                                <label style={{'display': 'block', 'marginBottom': '8px', 'fontSize': '0.9rem'}}>Company *</label>
                                <input type="text" name="SingleLine" required
                                    style={{'width': '100%', 'padding': '12px', 'background': 'rgba(255,255,255,0.05)', 'border': '1px solid var(--border-subtle)', 'color': 'white', 'borderRadius': '8px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '16px'}}>
                                <label style={{'display': 'block', 'marginBottom': '8px', 'fontSize': '0.9rem'}}>Email *</label>
                                <input type="email" name="Email" required
                                    style={{'width': '100%', 'padding': '12px', 'background': 'rgba(255,255,255,0.05)', 'border': '1px solid var(--border-subtle)', 'color': 'white', 'borderRadius': '8px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '16px'}}>
                                <label style={{'display': 'block', 'marginBottom': '8px', 'fontSize': '0.9rem'}}>Phone *</label>
                                <input type="text" name="PhoneNumber" required
                                    style={{'width': '100%', 'padding': '12px', 'background': 'rgba(255,255,255,0.05)', 'border': '1px solid var(--border-subtle)', 'color': 'white', 'borderRadius': '8px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '24px'}}>
                                <label style={{'display': 'block', 'marginBottom': '8px', 'fontSize': '0.9rem'}}>Message</label>
                                <textarea name="MultiLine" rows="4"
                                    style={{'width': '100%', 'padding': '12px', 'background': 'rgba(255,255,255,0.05)', 'border': '1px solid var(--border-subtle)', 'color': 'white', 'borderRadius': '8px'}}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{'width': '100%'}}>Send Message</button>
                        </form>

                        <iframe name="hiddenContactFrame" style={{'display': 'none'}}
                            onload="handleContactFrameLoad()"></iframe>

                        <div id="contactSuccessMessage"
                            style={{'display': 'none', 'textAlign': 'center', 'marginTop': '20px', 'color': 'var(--service)'}}>
                            <i className="ph-fill ph-check-circle" style={{'fontSize': '40px', 'marginBottom': '10px'}}></i>
                            <h3>Message Sent!</h3>
                            <p>We will get back to you shortly.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>

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
