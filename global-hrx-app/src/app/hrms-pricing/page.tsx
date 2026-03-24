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
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Global HRX <span className="text-gradient">Licenses</span></h1>
            <p className="fade-up" style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '0 auto'}}>
                Flexible pricing based on manpower size, complexity, and deployment model.
            </p>
        </div>
    </header>

    <main>
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(300px, 1fr))', 'gap': '30px'}}>

                    {/* Licence Model 1 */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <h3>SaaS License</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>Software-only
                            deployment.</p>
                        <div style={{'fontSize': '3rem', 'fontWeight': '700', 'color': 'white'}}>Custom Note</div>
                        <ul style={{'margin': '30px 0', 'display': 'grid', 'gap': '10px', 'color': 'var(--text-secondary)'}}>
                            <li>• Cloud Hosting (AWS)</li>
                            <li>• Core HR & Leave</li>
                            <li>• Annual Maintenance Included</li>
                        </ul>
                        <a href="request-access.html" className="btn btn-outline" style={{'width': '100%'}}>Request Quote</a>
                    </div>

                    {/* Licence Model 2 */}
                    <div className="glass-panel fade-up" style={{'padding': '40px', 'borderColor': 'var(--primary)'}}>
                        <div
                            style={{'background': 'var(--primary)', 'color': 'white', 'padding': '4px 12px', 'borderRadius': '4px', 'fontSize': '0.75rem', 'width': 'fit-content', 'marginBottom': '10px'}}>
                            RECOMMENDED</div>
                        <h3>HRX + Managed Services</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>Technology +
                            Execution.</p>
                        <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white'}}>Hybrid Model</div>
                        <ul style={{'margin': '30px 0', 'display': 'grid', 'gap': '10px', 'color': 'var(--text-secondary)'}}>
                            <li>• Full Global HRX Access</li>
                            <li>• Dedicated Payroll Manager</li>
                            <li>• Compliance Liability Protection</li>
                        </ul>
                        <a href="request-access.html" className="btn btn-primary" style={{'width': '100%'}}>Talk to Expert</a>
                    </div>

                    {/* Licence Model 3 */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <h3>Enterprise Governance</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>For
                            Multi-Entity Orgs.</p>
                        <div style={{'fontSize': '3rem', 'fontWeight': '700', 'color': 'white'}}>On Premise</div>
                        <ul style={{'margin': '30px 0', 'display': 'grid', 'gap': '10px', 'color': 'var(--text-secondary)'}}>
                            <li>• Private Server Setup</li>
                            <li>• Custom Integrations (SAP/Oracle)</li>
                            <li>• White Labeling</li>
                        </ul>
                        <a href="request-access.html" className="btn btn-outline" style={{'width': '100%'}}>Contact Sales</a>
                    </div>

                </div>

                <div style={{'textAlign': 'center', 'marginTop': '40px'}}>
                    <p style={{'color': 'var(--text-secondary)'}}>We do not believe in one-price-fits-all. <a
                            href="contact.html" style={{'color': 'var(--service)'}}>Schedule an Assessment</a>.</p>
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
