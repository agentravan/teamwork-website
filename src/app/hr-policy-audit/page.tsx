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

    <main>
        {/* HERO */}
        <section className="section-padding"
            style={{'paddingTop': '180px', 'textAlign': 'center', 'background': 'radial-gradient(circle at center, rgba(245, 158, 11, 0.1) 0%, rgba(15, 23, 42, 1) 70%)'}}>
            <div className="container">
                <span style={{'color': '#f59e0b', 'fontWeight': '600', 'letterSpacing': '1px'}}>GOVERNANCE & AUDIT</span>
                <h1 style={{'fontSize': '3.5rem', 'marginTop': '10px', 'marginBottom': '20px'}}>HR Policy & Audit Services</h1>
                <p style={{'fontSize': '1.25rem', 'color': '#cbd5e1', 'maxWidth': '800px', 'margin': '0 auto'}}>
                    We help organizations build strong HR governance frameworks aligned with labour laws and best
                    practices.
                </p>
            </div>
        </section>

        <div className="container">
            {/* 1. Services Included */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">01</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Services Included</h2>
                    <div style={{'background': 'rgba(255,255,255,0.03)', 'padding': '30px', 'borderRadius': '12px'}}>
                        <ul className="content-list" style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '15px'}}>
                            <li>HR policy drafting & review</li>
                            <li>Labour law audit</li>
                            <li>HR documentation & registers</li>
                            <li>Compliance gap analysis</li>
                            <li>Policy implementation support</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. Ideal For */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">02</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Ideal For</h2>
                    <div style={{'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'marginTop': '20px'}}>
                        <span className="tag">New companies</span>
                        <span className="tag">Growing organizations</span>
                        <span className="tag">Audit-ready enterprises</span>
                    </div>
                </div>
            </section>

            {/* 3. Benefits */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">03</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Benefits</h2>
                    <div
                        style={{'background': 'rgba(245, 158, 11, 0.1)', 'padding': '30px', 'borderRadius': '12px', 'border': '1px solid rgba(245, 158, 11, 0.2)'}}>
                        <ul className="content-list" style={{'gridTemplateColumns': '1fr 1fr'}}>
                            <li>Clear HR governance</li>
                            <li>Reduced legal risk</li>
                            <li>Structured documentation</li>
                            <li>Audit preparedness</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. Pricing */}
            <section className="service-section">
                <div style={{'maxWidth': '1000px', 'margin': '0 auto'}}>
                    <span className="section-number">04</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '10px'}}>HR Policy & Audit Pricing</h2>
                    <p className="h-sub">One-time and comprehensive audit packages.</p>

                    <div
                        style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(250px, 1fr))', 'gap': '30px', 'marginTop': '40px'}}>

                        {/* Drafting */}
                        <div className="pricing-card">
                            <div style={{'color': '#f59e0b', 'fontWeight': '600', 'marginBottom': '5px'}}>POLICY DRAFTING</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹10,000
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>One-time</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>HR Policy Drafting</li>
                            </ul>
                            <a href="quote-request.html?service=policy&plan=drafting" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Law Audit */}
                        <div className="pricing-card" style={{'borderColor': '#f59e0b'}}>
                            <div style={{'color': '#f59e0b', 'fontWeight': '600', 'marginBottom': '5px'}}>LABOUR LAW AUDIT</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹15,000
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>One-time</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Labour Law Audit</li>
                            </ul>
                            <a href="quote-request.html?service=policy&plan=law_audit" className="btn btn-primary"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Full Audit */}
                        <div className="pricing-card">
                            <div style={{'color': '#8b5cf6', 'fontWeight': '600', 'marginBottom': '5px'}}>FULL HR AUDIT</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹25,000
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>One-time</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Full HR Compliance Audit</li>
                            </ul>
                            <a href="quote-request.html?service=policy&plan=full_audit" className="btn btn-outline"
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
                                <li>Enterprise HR Audit</li>
                            </ul>
                            <a href="quote-request.html?service=policy&plan=enterprise" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* CTA */}
        <section className="section-padding" style={{'textAlign': 'center', 'background': 'rgba(30, 41, 59, 0.5)'}}>
            <div className="container">
                <h2 style={{'marginBottom': '24px'}}>Prepare Your Business for Audit</h2>
                <div style={{'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                    <a href="contact.html" className="btn btn-primary">Consult HR Expert</a>
                </div>
            </div>
        </section>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    

    </>
  );
}
