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
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Scalable Solutions for <br /> <span
                    className="text-gradient">Every Growth Stage</span></h1>
            <p className="fade-up"
                style={{'color': 'var(--text-secondary)', 'fontSize': '1.25rem', 'maxWidth': '600px', 'margin': '0 auto'}}>
                Whether you're a team of 10 or 10,000, we have a tailored HR roadmap for you.
            </p>
        </div>
    </header>

    <main>
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '40px'}}>

                    {/* Startup Card */}
                    <div className="glass-panel fade-up" style={{'padding': '40px'}}>
                        <i className="ph-duotone ph-rocket-launch"
                            style={{'fontSize': '48px', 'color': 'var(--accent)', 'marginBottom': '24px'}}></i>
                        <h2 style={{'marginBottom': '16px'}}>For High-Growth Startups</h2>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '32px', 'minHeight': '60px'}}>
                            Move fast without breaking things. Get a lightweight HR stack that sets up compliance
                            foundations from Day 1.
                        </p>
                        <ul style={{'marginBottom': '32px', 'display': 'grid', 'gap': '12px', 'color': 'var(--text-primary)'}}>
                            <li style={{'display': 'flex', 'gap': '12px'}}><i className="ph-fill ph-check"
                                    style={{'color': 'var(--accent)'}}></i> Self-service onboarding for new hires</li>
                            <li style={{'display': 'flex', 'gap': '12px'}}><i className="ph-fill ph-check"
                                    style={{'color': 'var(--accent)'}}></i> Automated offer letter generation</li>
                            <li style={{'display': 'flex', 'gap': '12px'}}><i className="ph-fill ph-check"
                                    style={{'color': 'var(--accent)'}}></i> Plug-and-play payroll</li>
                        </ul>
                        <a href="pricing.html" className="btn btn-outline" style={{'width': '100%'}}>View Startup Plans</a>
                    </div>

                    {/* Enterprise Card */}
                    <div className="glass-panel fade-up" style={{'padding': '40px', 'borderColor': 'var(--primary-glow)'}}>
                        <i className="ph-duotone ph-buildings"
                            style={{'fontSize': '48px', 'color': 'var(--purple)', 'marginBottom': '24px'}}></i>
                        <h2 style={{'marginBottom': '16px'}}>For Global Enterprises</h2>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '32px', 'minHeight': '60px'}}>
                            Unify disparate systems across regions. Robust governance, audit trails, and custom ERP
                            integrations.
                        </p>
                        <ul style={{'marginBottom': '32px', 'display': 'grid', 'gap': '12px', 'color': 'var(--text-primary)'}}>
                            <li style={{'display': 'flex', 'gap': '12px'}}><i className="ph-fill ph-check"
                                    style={{'color': 'var(--purple)'}}></i> Multi-country localization</li>
                            <li style={{'display': 'flex', 'gap': '12px'}}><i className="ph-fill ph-check"
                                    style={{'color': 'var(--purple)'}}></i> Dedicated Success Manager</li>
                            <li style={{'display': 'flex', 'gap': '12px'}}><i className="ph-fill ph-check"
                                    style={{'color': 'var(--purple)'}}></i> Custom API Access</li>
                        </ul>
                        <a href="contact.html" className="btn btn-primary" style={{'width': '100%'}}>Talk to Sales</a>
                    </div>

                </div>
            </div>
        </section>
    </main>

    <footer style={{'background': 'rgba(2, 6, 23, 0.8)', 'padding': '40px 0', 'textAlign': 'center', 'color': 'var(--text-tertiary)'}}>
        <div className="container">&copy; 2026 Team Work. Enterprise HRMS.</div>
    </footer>
    
    
    

    </>
  );
}
