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
    {/* HEADER */}
    <div id="global-header-container"></div>

    <main>
        {/* SECTION 1: OVERVIEW */}
        <section className="section-padding" style={{'paddingTop': '180px', 'textAlign': 'center'}}>
            <div className="container">
                <div style={{'maxWidth': '900px', 'margin': '0 auto'}}>
                    <span
                        style={{'color': 'var(--primary)', 'fontWeight': '600', 'letterSpacing': '1px', 'textTransform': 'uppercase'}}>Our
                        Expertise</span>
                    <h1 className="fade-up" style={{'fontSize': '3rem', 'marginTop': '10px', 'marginBottom': '30px'}}>
                        Enterprise <span className="text-gradient">HR, Payroll & Compliance</span> Services
                    </h1>
                    <p className="fade-up"
                        style={{'fontSize': '1.2rem', 'lineHeight': '1.8', 'color': 'var(--text-secondary)', 'marginBottom': '40px'}}>
                        TeamWork Solutions delivers end-to-end HR, Payroll, Recruitment, Compliance, and HR Technology
                        services designed to support organizations at every stage of growth.
                        We do not provide isolated activities. We build governed HR ecosystems where compliance,
                        accuracy, audit-readiness, and scalability are non-negotiable.
                    </p>
                    <div className="fade-up"
                        style={{'display': 'flex', 'gap': '15px', 'justifyContent': 'center', 'flexWrap': 'wrap', 'marginBottom': '20px'}}>
                        <span className="badge">Startups</span>
                        <span className="badge">Growing Organizations</span>
                        <span className="badge">Large Enterprises</span>
                        <span className="badge">Multi-Location Businesses</span>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 2: PAYROLL */}
        <section className="section-padding" style={{'background': 'rgba(30, 41, 59, 0.4)'}}>
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '60px', 'alignItems': 'center'}}>
                    <div>
                        <div className="icon-box" style={{'marginBottom': '20px'}}>
                            <i className="ph-duotone ph-currency-dollar"
                                style={{'fontSize': '40px', 'color': 'var(--primary)'}}></i>
                        </div>
                        <h2 style={{'fontSize': '2.5rem', 'marginBottom': '10px'}}>Payroll Management</h2>
                        <h3 style={{'fontSize': '1.3rem', 'color': '#94a3b8', 'marginBottom': '30px', 'fontWeight': '400'}}>Structured
                            & Accurate Payroll Operations</h3>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '30px', 'lineHeight': '1.6'}}>
                            Our payroll management services ensure error-free salary processing while aligning payroll
                            operations with statutory and organizational policies.
                        </p>

                        <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '20px'}}>
                            <div>
                                <h4 style={{'color': 'white', 'marginBottom': '15px', 'fontSize': '1rem'}}>What we cover:</h4>
                                <ul className="check-list">
                                    <li>Monthly payroll processing</li>
                                    <li>Attendance & leave integration</li>
                                    <li>Salary structure management</li>
                                    <li>Payslips & payroll registers</li>
                                    <li>Reimbursements & deductions</li>
                                    <li>Full & Final settlement support</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{'color': 'white', 'marginBottom': '15px', 'fontSize': '1rem'}}>Business Benefits:</h4>
                                <ul className="check-list">
                                    <li>On-time payroll closure</li>
                                    <li>Reduced payroll errors</li>
                                    <li>Confidential & secure data</li>
                                    <li>Audit-ready records</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Visual Element */}
                        <div
                            style={{'background': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))', 'padding': '40px', 'borderRadius': '20px', 'border': '1px solid rgba(255,255,255,0.05)'}}>
                            <div
                                style={{'background': 'rgba(15, 23, 42, 0.8)', 'padding': '20px', 'borderRadius': '10px', 'marginBottom': '20px', 'display': 'flex', 'alignItems': 'center', 'gap': '20px'}}>
                                <div style={{'background': '#10b981', 'padding': '10px', 'borderRadius': '8px'}}><i
                                        className="ph-bold ph-check" style={{'color': 'white'}}></i></div>
                                <div>
                                    <div style={{'fontWeight': '700'}}>100% Compliant</div>
                                    <div style={{'fontSize': '0.8rem', 'color': '#94a3b8'}}>Zero penalty guarantee</div>
                                </div>
                            </div>
                            <div
                                style={{'background': 'rgba(15, 23, 42, 0.8)', 'padding': '20px', 'borderRadius': '10px', 'display': 'flex', 'alignItems': 'center', 'gap': '20px'}}>
                                <div style={{'background': 'var(--primary)', 'padding': '10px', 'borderRadius': '8px'}}><i
                                        className="ph-bold ph-lock" style={{'color': 'white'}}></i></div>
                                <div>
                                    <div style={{'fontWeight': '700'}}>Data Security</div>
                                    <div style={{'fontSize': '0.8rem', 'color': '#94a3b8'}}>Encrypted & Confidential</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 3: COMPLIANCE */}
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '60px', 'alignItems': 'center'}}>
                    <div style={{'order': '2'}}>
                        <div className="icon-box" style={{'marginBottom': '20px'}}>
                            <i className="ph-duotone ph-shield-check" style={{'fontSize': '40px', 'color': '#10b981'}}></i>
                        </div>
                        <h2 style={{'fontSize': '2.5rem', 'marginBottom': '10px'}}>Statutory Compliance</h2>
                        <h3 style={{'fontSize': '1.3rem', 'color': '#94a3b8', 'marginBottom': '30px', 'fontWeight': '400'}}>End-to-End
                            Labour Law Management</h3>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '30px', 'lineHeight': '1.6'}}>
                            We manage complete statutory compliance responsibilities so organizations remain legally
                            secure without operational complexity.
                        </p>

                        <div style={{'marginBottom': '30px'}}>
                            <h4 style={{'color': 'white', 'marginBottom': '15px', 'fontSize': '1rem'}}>Compliance Coverage:</h4>
                            <div style={{'display': 'flex', 'flexWrap': 'wrap', 'gap': '10px'}}>
                                <span className="tag">Provident Fund (PF)</span>
                                <span className="tag">ESIC</span>
                                <span className="tag">Professional Tax (PT)</span>
                                <span className="tag">Labour Welfare Fund</span>
                                <span className="tag">CLRA</span>
                                <span className="tag">Factory Act</span>
                            </div>
                        </div>

                        <div>
                            <h4 style={{'color': 'white', 'marginBottom': '15px', 'fontSize': '1rem'}}>What We Deliver:</h4>
                            <ul className="check-list" style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '10px'}}>
                                <li>Monthly compliance processing</li>
                                <li>Challans & statutory returns</li>
                                <li>Registrations & amendments</li>
                                <li>Audit & inspection support</li>
                                <li>Compliance advisory & risk mitigation</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{'order': '1', 'display': 'flex', 'justifyContent': 'center'}}>
                        <div
                            style={{'background': 'rgba(255,255,255,0.03)', 'padding': '60px', 'borderRadius': '50%', 'border': '1px solid rgba(255,255,255,0.1)', 'textAlign': 'center'}}>
                            <i className="ph-duotone ph-file-text"
                                style={{'fontSize': '100px', 'color': 'rgba(16, 185, 129, 0.5)'}}></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 4: RECRUITMENT */}
        <section className="section-padding" style={{'background': 'rgba(30, 41, 59, 0.4)'}}>
            <div className="container">
                <div style={{'textAlign': 'center', 'maxWidth': '800px', 'margin': '0 auto 50px'}}>
                    <i className="ph-duotone ph-users-three"
                        style={{'fontSize': '48px', 'color': '#8b5cf6', 'marginBottom': '20px'}}></i>
                    <h2 style={{'fontSize': '2.5rem', 'marginBottom': '10px'}}>Recruitment & Talent Acquisition</h2>
                    <p style={{'fontSize': '1.2rem', 'color': '#cbd5e1'}}>Business-Aligned Recruitment Solutions</p>
                    <p style={{'color': 'var(--text-secondary)', 'marginTop': '20px'}}>
                        Our recruitment services help organizations attract, evaluate, and onboard the right talent
                        through a structured and transparent hiring process.
                    </p>
                </div>

                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(3, 1fr)', 'gap': '30px'}}>
                    <div className="feature-card">
                        <h3>Recruitment Models</h3>
                        <ul className="check-list">
                            <li>Bulk & volume hiring</li>
                            <li>Professional & white-collar hiring</li>
                            <li>Leadership & strategic hiring</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>Recruitment Coverage</h3>
                        <ul className="check-list">
                            <li>Requirement analysis & JD validation</li>
                            <li>Talent sourcing & screening</li>
                            <li>Interview coordination</li>
                            <li>Offer & joining support</li>
                            <li>Hiring lifecycle tracking</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>Industries Served</h3>
                        <ul className="check-list">
                            <li>Manufacturing</li>
                            <li>Healthcare</li>
                            <li>IT & Technology</li>
                            <li>Sales & Distribution</li>
                            <li>Corporate functions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 5: POLICY & HRMS */}
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '80px'}}>
                    {/* POLICY */}
                    <div>
                        <i className="ph-duotone ph-book-bookmark"
                            style={{'fontSize': '40px', 'color': '#f59e0b', 'marginBottom': '20px'}}></i>
                        <h2 style={{'marginBottom': '10px'}}>HR Policy & Audit</h2>
                        <h4 style={{'color': '#94a3b8', 'fontWeight': '400', 'marginBottom': '20px'}}>HR Governance, Controls &
                            Digital Transformation</h4>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '20px'}}>We help organizations design,
                            audit, and implement HR policies aligned with labour laws and best practices.</p>
                        <h4 style={{'color': 'white', 'marginBottom': '15px', 'fontSize': '1rem'}}>Coverage Includes:</h4>
                        <ul className="check-list">
                            <li>HR policy framework design</li>
                            <li>Labour law audits</li>
                            <li>HR documentation & registers</li>
                            <li>Compliance gap analysis</li>
                            <li>Policy implementation support</li>
                        </ul>
                    </div>

                    {/* HRMS */}
                    <div>
                        <i className="ph-duotone ph-desktop"
                            style={{'fontSize': '40px', 'color': '#ef4444', 'marginBottom': '20px'}}></i>
                        <h2 style={{'marginBottom': '10px'}}>GlobalHRX HRMS</h2>
                        <h4 style={{'color': '#94a3b8', 'fontWeight': '400', 'marginBottom': '20px'}}>Digital HR Transformation
                        </h4>
                        <p style={{'color': 'var(--text-secondary)', 'marginBottom': '20px'}}>Enterprise-grade HRMS solution
                            designed to automate HR operations and ensure governance at scale.</p>
                        <h4 style={{'color': 'white', 'marginBottom': '15px', 'fontSize': '1rem'}}>Core Capabilities:</h4>
                        <ul className="check-list">
                            <li>Employee master & lifecycle management</li>
                            <li>Attendance & leave management</li>
                            <li>Payroll & compliance integration</li>
                            <li>Recruitment & onboarding modules</li>
                            <li>HR analytics & dashboards</li>
                            <li>Role-based access & audit trails</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-padding" style={{'textAlign': 'center', 'borderTop': '1px solid rgba(255,255,255,0.05)'}}>
            <div className="container">
                <h2 style={{'marginBottom': '24px'}}>Not sure which service fits your business needs?</h2>
                <p style={{'color': 'var(--text-secondary)', 'maxWidth': '700px', 'margin': '0 auto 30px'}}>
                    Our experts help organizations design the right HR, payroll, and compliance setup based on business
                    size, industry, and growth stage.
                </p>
                <div style={{'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                    <a href="contact.html" className="btn btn-primary">Talk to an Expert</a>
                    <a href="contact.html" className="btn btn-outline">Request Consultation</a>
                </div>
            </div>
        </section>

    </main>

    {/* FOOTER */}
    <div id="global-footer-container"></div>

    
    
    
    
    
    <style>{`
        .badge {
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            color: #e2e8f0;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .check-list {
            list-style: none;
            padding: 0;
        }

        .check-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        .check-list li::before {
            content: '✔';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
        }

        .tag {
            background: rgba(59, 130, 246, 0.1);
            color: #60a5fa;
            padding: 6px 12px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 6px;
            font-size: 0.85rem;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 30px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.05);
        }

        .feature-card h3 {
            margin-bottom: 20px;
            font-size: 1.25rem;
            color: white;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 10px;
        }
    `}</style>
    

    </>
  );
}
