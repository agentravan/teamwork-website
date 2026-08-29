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
            style={{'paddingTop': '180px', 'textAlign': 'center', 'background': 'radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, rgba(15, 23, 42, 1) 70%)'}}>
            <div className="container">
                <span style={{'color': '#ef4444', 'fontWeight': '600', 'letterSpacing': '1px'}}>DIGITAL HR TRANSFORMATION</span>
                <h1 style={{'fontSize': '3.5rem', 'marginTop': '10px', 'marginBottom': '20px'}}>GlobalHRX HRMS Software</h1>
                <p style={{'fontSize': '1.25rem', 'color': '#cbd5e1', 'maxWidth': '800px', 'margin': '0 auto'}}>
                    An enterprise-grade HRMS platform to automate HR, payroll, compliance, and recruitment.
                </p>
            </div>
        </section>

        <div className="container">
            {/* 1. Modules Included */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">01</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Modules Included</h2>
                    <div style={{'background': 'rgba(255,255,255,0.03)', 'padding': '30px', 'borderRadius': '12px'}}>
                        <ul className="content-list" style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '15px'}}>
                            <li>Employee master & lifecycle</li>
                            <li>Attendance & leave</li>
                            <li>Payroll & compliance</li>
                            <li>Recruitment & onboarding</li>
                            <li>HR analytics & dashboards</li>
                            <li>Role-based access & audit logs</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. Why GlobalHRX */}
            <section className="service-section">
                <div style={{'maxWidth': '800px', 'margin': '0 auto'}}>
                    <span className="section-number">02</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '15px'}}>Why GlobalHRX</h2>
                    <div style={{'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'marginTop': '20px'}}>
                        <span className="tag">Scalable & secure</span>
                        <span className="tag">Compliance-ready</span>
                        <span className="tag">Cloud & on-premise options</span>
                        <span className="tag">Built for Indian labour laws</span>
                    </div>
                </div>
            </section>

            {/* 3. Pricing */}
            <section className="service-section">
                <div style={{'maxWidth': '1000px', 'margin': '0 auto'}}>
                    <span className="section-number">03</span>
                    <h2 style={{'fontSize': '2rem', 'marginBottom': '10px'}}>HRMS Pricing</h2>
                    <p className="h-sub">Affordable per-employee pricing.</p>

                    <div
                        style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(220px, 1fr))', 'gap': '20px', 'marginTop': '40px'}}>

                        {/* Basic */}
                        <div className="pricing-card">
                            <div style={{'color': '#ef4444', 'fontWeight': '600', 'marginBottom': '5px'}}>BASIC</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>{servicePricing.hrms.starter}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>/ employee / month
                            </div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Core HR + Leave</li>
                            </ul>
                            <a href="quote-request.html?service=hrms&plan=basic" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Standard */}
                        <div className="pricing-card" style={{'borderColor': '#ef4444'}}>
                            <div style={{'color': '#ef4444', 'fontWeight': '600', 'marginBottom': '5px'}}>STANDARD</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>{servicePricing.hrms.professional}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>/ employee / month
                            </div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Payroll + ESS</li>
                            </ul>
                            <a href="quote-request.html?service=hrms&plan=standard" className="btn btn-primary"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>

                        {/* Professional */}
                        <div className="pricing-card">
                            <div style={{'color': '#8b5cf6', 'fontWeight': '600', 'marginBottom': '5px'}}>PROFESSIONAL</div>
                            <div style={{'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white', 'margin': '15px 0 5px'}}>{servicePricing.hrms.enterprise}
                            </div>
                            <div style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginBottom': '15px'}}>/ employee / month
                            </div>
                            <ul className="content-list"
                                style={{'gridTemplateColumns': '1fr', 'gap': '10px', 'marginBottom': '20px'}}>
                                <li>Compliance + Recruitment</li>
                            </ul>
                            <a href="quote-request.html?service=hrms&plan=professional" className="btn btn-outline"
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
                                <li>Multi-entity & API integrations</li>
                            </ul>
                            <a href="quote-request.html?service=hrms&plan=enterprise" className="btn btn-outline"
                                style={{'width': '100%', 'textAlign': 'center'}}>Get Quote</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* CTA */}
        <section className="section-padding" style={{'textAlign': 'center', 'background': 'rgba(30, 41, 59, 0.5)'}}>
            <div className="container">
                <h2 style={{'marginBottom': '24px'}}>Transform Your HR operations</h2>
                <div style={{'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                    <a href="contact.html" className="btn btn-primary">Request HRMS Demo</a>
                </div>
            </div>
        </section>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    

    </>
  );
}
