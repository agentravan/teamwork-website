import React from 'react';
import { servicePricing } from '@/config/pricing';

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

    <main>
        {/* HERO */}
        <section className="section-padding"
            style={{'paddingTop': '180px', 'textAlign': 'center', 'background': 'radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, rgba(15, 23, 42, 1) 70%)'}}>
            <div className="container">
                <span style={{'color': 'var(--primary)', 'fontWeight': '600', 'letterSpacing': '1px'}}>OUR EXPERTISE</span>
                <h1 style={{'fontSize': '3.5rem', 'marginTop': '10px', 'marginBottom': '20px'}}>Payroll Management Services</h1>
                <p style={{'fontSize': '1.25rem', 'color': '#cbd5e1', 'maxWidth': '800px', 'margin': '0 auto'}}>
                    Accurate, compliant, and scalable payroll solutions designed for modern organizations.
                </p>
                <p
                    style={{'fontSize': '1.1rem', 'color': 'var(--text-secondary)', 'maxWidth': '800px', 'margin': '20px auto 0', 'lineHeight': '1.6'}}>
                    We manage your complete payroll lifecycle so that salaries are processed on time, compliances are
                    met, and employees receive a seamless payroll experience.
                </p>
            </div>
        </section>

        <div className="container">
            {/* 1. What We Do */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">01</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>What We Do</h2>
                    <p className="h-sub">Comprehensive payroll processing services.</p>

                    <div style={{'background': 'rgba(255,255,255,0.03)', 'padding': '30px', 'borderRadius': '12px'}}>
                        <ul className="content-list" style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '15px'}}>
                            <li>Monthly salary processing</li>
                            <li>Attendance & leave integration</li>
                            <li>Payslip generation</li>
                            <li>Reimbursements & deductions</li>
                            <li>Full & Final settlements</li>
                            <li>Payroll MIS & reports</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. Who It's For */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">02</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Who It's For</h2>
                    <div style={{'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'marginTop': '20px'}}>
                        <span className="tag">Startups & SMEs</span>
                        <span className="tag">Manufacturing units</span>
                        <span className="tag">Sales & field workforce</span>
                        <span className="tag">Multi-location organizations</span>
                    </div>
                </div>
            </section>

            {/* 3. Benefits */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">03</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Benefits</h2>
                    <div
                        style={{'background': 'rgba(16, 185, 129, 0.1)', 'padding': '30px', 'borderRadius': '12px', 'border': '1px solid rgba(16, 185, 129, 0.2)'}}>
                        <ul className="content-list" style={{'gridTemplateColumns': '1fr 1fr'}}>
                            <li>Zero payroll errors</li>
                            <li>100% statutory alignment</li>
                            <li>Confidential data handling</li>
                            <li>Audit-ready payroll records</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. Payroll Pricing */}
            <section className="service-section">
                <div style={{'maxWidth': '1000px', 'margin': '0 auto'}}>
                    <span className="section-number">04</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '10px'}}>Payroll Pricing</h2>
                    <p className="h-sub">Transparent pricing packages for every stage of growth.</p>

                    <div
                        style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(280px, 1fr))', 'gap': '30px', 'marginTop': '40px'}}>

                        {/* Starter */}
                        <div className="pricing-card">
                            <div style={{'color': '#10b981', 'fontWeight': '600', 'marginBottom': '5px'}}>STARTER PAYROLL</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹{servicePricing.payroll.starter}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>per month</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Up to 10 employees</li>
                            </ul>
                            <a href="quote-request.html?service=payroll&plan=starter" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Growth */}
                        <div className="pricing-card" style={{'borderColor': 'var(--primary)'}}>
                            <div style={{'color': 'var(--primary)', 'fontWeight': '600', 'marginBottom': '5px'}}>GROWTH PAYROLL
                            </div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹{servicePricing.payroll.professional}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>per month</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Up to 25 employees</li>
                            </ul>
                            <a href="quote-request.html?service=payroll&plan=growth" className="btn btn-primary"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Professional */}
                        <div className="pricing-card">
                            <div style={{'color': '#8b5cf6', 'fontWeight': '600', 'marginBottom': '5px'}}>PROFESSIONAL</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹{servicePricing.payroll.enterprise}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>per month</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Up to 50 employees</li>
                            </ul>
                            <a href="quote-request.html?service=payroll&plan=professional" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Enterprise */}
                        <div className="pricing-card">
                            <div style={{'color': '#cbd5e1', 'fontWeight': '600', 'marginBottom': '5px'}}>ENTERPRISE</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>Custom
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>Pricing</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Multi-location & large workforce</li>
                            </ul>
                            <a href="quote-request.html?service=payroll&plan=enterprise" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* CTA */}
        <section className="section-padding" style={{'textAlign': 'center', 'background': 'rgba(30, 41, 59, 0.5)'}}>
            <div className="container">
                <h2 style={{'marginBottom': '24px'}}>Need a reliable payroll partner?</h2>
                <div style={{'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                    <a href="quote-request.html?service=payroll" className="btn btn-primary">Get Payroll Quote</a>
                </div>
            </div>
        </section>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    

    </>
  );
}
