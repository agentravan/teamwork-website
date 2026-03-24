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
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Built for <span className="text-gradient">Every Scale</span>
            </h1>
            <p className="fade-up" style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '0 auto'}}>
                Specialized HR solutions for Manufacturing, IT, Healthcare, and Retail sectors.
            </p>
        </div>
    </header>

    <main>
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(2, 1fr)', 'gap': '40px'}}>

                    {/* Manufacturing */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <i className="ph-duotone ph-factory"
                            style={{'fontSize': '48px', 'color': 'var(--accent)', 'marginBottom': '20px'}}></i>
                        <h3 style={{'marginBottom': '16px'}}>Manufacturing</h3>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '20px'}}>
                            Manage complex shift rosters, overtime calculations, and Factory Act compliance with zero
                            errors.
                        </p>
                        <ul style={{'color': 'var(--text-tertiary)', 'fontSize': '0.9rem', 'marginTop': '20px'}}>
                            <li>• Shift Scheduling</li>
                            <li>• Gate Pass Integration</li>
                            <li>• Contract Labour Mgmt</li>
                        </ul>
                    </div>

                    {/* IT & SaaS */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <i className="ph-duotone ph-laptop"
                            style={{'fontSize': '48px', 'color': 'var(--primary)', 'marginBottom': '20px'}}></i>
                        <h3 style={{'marginBottom': '16px'}}>IT & Startups</h3>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '20px'}}>
                            Streamline onboarding, asset management, and remote attendance for the digital workforce.
                        </p>
                        <ul style={{'color': 'var(--text-tertiary)', 'fontSize': '0.9rem', 'marginTop': '20px'}}>
                            <li>• Remote Geo-fencing</li>
                            <li>• Asset Tracking</li>
                            <li>• Project Timesheets</li>
                        </ul>
                    </div>

                    {/* Healthcare */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <i className="ph-duotone ph-first-aid"
                            style={{'fontSize': '48px', 'color': '#ec4899', 'marginBottom': '20px'}}></i>
                        <h3 style={{'marginBottom': '16px'}}>Healthcare</h3>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '20px'}}>
                            Handle 24/7 staff rotation, nurse specialized payroll, and compliance for hospitals.
                        </p>
                    </div>

                    {/* Logistics */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <i className="ph-duotone ph-truck"
                            style={{'fontSize': '48px', 'color': 'var(--service)', 'marginBottom': '20px'}}></i>
                        <h3 style={{'marginBottom': '16px'}}>Logistics & Retail</h3>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '20px'}}>
                            Manage distributed field force with mobile-first attendance and expense claims.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </main>

    {/* Standard Footer */}
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
