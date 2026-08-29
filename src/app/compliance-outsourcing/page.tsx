'use client';

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
            style={{'paddingTop': '180px', 'textAlign': 'center', 'background': 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, rgba(15, 23, 42, 1) 70%)'}}>
            <div className="container">
                <span style={{'color': '#10b981', 'fontWeight': '600', 'letterSpacing': '1px'}}>STATUTORY COMPLIANCE</span>
                <h1 style={{'fontSize': '3.5rem', 'marginTop': '10px', 'marginBottom': '20px'}}>Compliance Outsourcing Services
                </h1>
                <p style={{'fontSize': '1.25rem', 'color': '#cbd5e1', 'maxWidth': '800px', 'margin': '0 auto'}}>
                    End-to-end statutory compliance management so your business stays legally secure without operational
                    stress.
                </p>
            </div>
        </section>

        <div className="container">
            {/* 1. Compliance Coverage */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">01</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Compliance Coverage</h2>
                    <div style={{'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'marginTop': '20px'}}>
                        <span className="tag">Provident Fund (PF)</span>
                        <span className="tag">ESIC</span>
                        <span className="tag">Professional Tax (PT)</span>
                        <span className="tag">Labour Welfare Fund (LWF)</span>
                        <span className="tag">CLRA & contractor compliance</span>
                        <span className="tag">Shops & Establishment / Factory Act</span>
                    </div>
                </div>
            </section>

            {/* 2. What We Handle */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">02</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>What We Handle</h2>
                    <div style={{'background': 'rgba(255,255,255,0.03)', 'padding': '30px', 'borderRadius': '12px'}}>
                        <ul className="content-list" style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '15px'}}>
                            <li>Monthly challans & returns</li>
                            <li>Registrations & amendments</li>
                            <li>Labour inspections & audits</li>
                            <li>Notices & advisory support</li>
                        </ul>
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
                            <li>No penalties or delays</li>
                            <li>Risk-free compliance</li>
                            <li>Expert handling of audits</li>
                            <li>Single-point accountability</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. Compliance Pricing */}
            <section className="service-section">
                <div style={{'maxWidth': '1000px', 'margin': '0 auto'}}>
                    <span className="section-number">04</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '10px'}}>Compliance Pricing</h2>
                    <p className="h-sub">Flexible packages to cover your statutory needs.</p>

                    <div
                        style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(250px, 1fr))', 'gap': '30px', 'marginTop': '40px'}}>

                        {/* Basic */}
                        <div className="pricing-card">
                            <div style={{'color': '#10b981', 'fontWeight': '600', 'marginBottom': '5px'}}>BASIC</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹{servicePricing.compliance.starter}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>per month</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>PF or ESIC (any one)</li>
                            </ul>
                            <a href="quote-request.html?service=compliance&plan=basic" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Standard */}
                        <div className="pricing-card" style={{'borderColor': '#10b981'}}>
                            <div style={{'color': '#10b981', 'fontWeight': '600', 'marginBottom': '5px'}}>STANDARD</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹{servicePricing.compliance.professional}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>per month</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>PF + ESIC + PT</li>
                            </ul>
                            <a href="quote-request.html?service=compliance&plan=standard" className="btn btn-primary"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Advanced */}
                        <div className="pricing-card">
                            <div style={{'color': '#8b5cf6', 'fontWeight': '600', 'marginBottom': '5px'}}>ADVANCED</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>₹{servicePricing.compliance.enterprise}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>per month</div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>All statutory compliances</li>
                            </ul>
                            <a href="quote-request.html?service=compliance&plan=advanced" className="btn btn-outline"
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
                                <li>Multi-state & factory compliance</li>
                            </ul>
                            <a href="quote-request.html?service=compliance&plan=enterprise" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* CTA */}
        <section className="section-padding" style={{'textAlign': 'center', 'background': 'rgba(30, 41, 59, 0.5)'}}>
            <div className="container">
                <h2 style={{'marginBottom': '24px'}}>Ensure 100% Legal Compliance</h2>
                <div style={{'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                    <a href="quote-request.html?service=compliance" className="btn btn-primary">Request Compliance Quote</a>
                </div>
            </div>
        </section>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    

    </>
  );
}
