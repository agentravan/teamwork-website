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
            <h1 className="fade-up" style={{'marginBottom': '24px'}}>Simple, Transparent <br /> <span
                    className="text-gradient">Investment</span></h1>
            <p className="fade-up" style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '0 auto'}}>No hidden
                implementation fees. No surprise add-ons.</p>
        </div>
    </header>

    <main>
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(300px, 1fr))', 'gap': '30px'}}>

                    {/* Essential */}
                    <div className="glass-panel fade-up" style={{'padding': '40px', 'display': 'flex', 'flexDirection': 'column'}}>
                        <h3 style={{'marginBottom': '10px'}}>Essentials</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>For small teams
                            getting started.</p>
                        <div style={{'fontSize': '3rem', 'fontWeight': '700', 'color': 'white'}}>$4 <span
                                style={{'fontSize': '1rem', 'color': 'var(--text-tertiary)', 'fontWeight': '400'}}>/ user /
                                mo</span></div>
                        <a href="request-access.html" className="btn btn-outline" style={{'margin': '30px 0', 'width': '100%'}}>Start
                            Free Trial</a>
                        <ul style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'display': 'grid', 'gap': '12px'}}>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--text-tertiary)'}}></i> Core HR & Leave
                            </li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--text-tertiary)'}}></i> Payroll Processing
                            </li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--text-tertiary)'}}></i> Employee Mobile
                                App</li>
                        </ul>
                    </div>

                    {/* Growth (Accent) */}
                    <div className="glass-panel fade-up"
                        style={{'padding': '40px', 'display': 'flex', 'flexDirection': 'column', 'borderColor': 'var(--primary)', 'boxShadow': '0 0 40px rgba(59, 130, 246, 0.1)', 'position': 'relative', 'transform': 'scale(1.02)'}}>
                        <div
                            style={{'background': 'var(--primary)', 'color': 'white', 'padding': '4px 12px', 'borderRadius': '4px', 'fontSize': '0.75rem', 'fontWeight': 'bold', 'width': 'fit-content', 'marginBottom': '10px'}}>
                            MOST POPULAR</div>
                        <h3 style={{'marginBottom': '10px'}}>Growth</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>For scaling
                            organizations.</p>
                        <div style={{'fontSize': '3rem', 'fontWeight': '700', 'color': 'white'}}>$7 <span
                                style={{'fontSize': '1rem', 'color': 'var(--text-tertiary)', 'fontWeight': '400'}}>/ user /
                                mo</span></div>
                        <a href="request-access.html" className="btn btn-primary" style={{'margin': '30px 0', 'width': '100%'}}>Get
                            Started</a>
                        <ul style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'display': 'grid', 'gap': '12px'}}>
                            <li style={{'color': 'white'}}><i className="ph-fill ph-check" style={{'color': 'var(--accent)'}}></i>
                                Everything in Essentials</li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--accent)'}}></i> Performance Management
                            </li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--accent)'}}></i> Recruitment (ATS)</li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--accent)'}}></i> Compliance Alerts</li>
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="glass-panel fade-up" style={{'padding': '40px', 'display': 'flex', 'flexDirection': 'column'}}>
                        <h3 style={{'marginBottom': '10px'}}>Enterprise</h3>
                        <p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'marginBottom': '20px'}}>For complex
                            global needs.</p>
                        <div style={{'fontSize': '3rem', 'fontWeight': '700', 'color': 'white'}}>Custom</div>
                        <a href="contact.html" className="btn btn-outline" style={{'margin': '30px 0', 'width': '100%'}}>Contact
                            Sales</a>
                        <ul style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'display': 'grid', 'gap': '12px'}}>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--text-tertiary)'}}></i> Everything in
                                Growth</li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--text-tertiary)'}}></i> Dedicated Account
                                Manager</li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--text-tertiary)'}}></i> API Access &
                                Integrations</li>
                            <li><i className="ph-fill ph-check" style={{'color': 'var(--text-tertiary)'}}></i> On-premise
                                Deployment</li>
                        </ul>
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
