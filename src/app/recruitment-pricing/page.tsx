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
                <span style={{'color': '#10b981', 'fontWeight': '600', 'letterSpacing': '1px'}}>TRANSPARENT & FLEXIBLE</span>
                <h1 style={{'fontSize': '3rem', 'marginTop': '10px', 'marginBottom': '20px'}}>Recruitment Pricing</h1>
                <p style={{'fontSize': '1.25rem', 'color': '#cbd5e1', 'maxWidth': '800px', 'margin': '0 auto'}}>
                    Simple, flexible, and scalable pricing models designed for your business needs.
                </p>
                <div style={{'marginTop': '30px', 'display': 'flex', 'gap': '15px', 'justifyContent': 'center'}}>
                    <div
                        style={{'background': 'rgba(255,255,255,0.05)', 'padding': '8px 16px', 'borderRadius': '20px', 'fontSize': '0.9rem'}}>
                        <i className="ph-bold ph-check" style={{'color': '#10b981'}}></i> Standard Models
                    </div>
                    <div
                        style={{'background': 'rgba(255,255,255,0.05)', 'padding': '8px 16px', 'borderRadius': '20px', 'fontSize': '0.9rem'}}>
                        <i className="ph-bold ph-check" style={{'color': '#10b981'}}></i> Custom Quotes
                    </div>
                </div>
            </div>
        </section>

        {/* PRICING MODELS */}
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(280px, 1fr))', 'gap': '30px'}}>

                    {/* 1. Starter */}
                    <div className="pricing-card">
                        <div style={{'color': '#10b981', 'fontWeight': '600'}}>STARTER HIRING</div>
                        <h3 style={{'marginTop': '5px'}}>Entry-Level & Junior</h3>
                        <div className="price-tag">₹{servicePricing.recruitment.starter}</div>
                        <div className="price-unit">per hire</div>
                        <p style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginTop': '15px'}}>Best for Small teams & Support
                            roles.</p>

                        <ul className="features-list">
                            <li><i className="ph-bold ph-check"></i> Resume sourcing</li>
                            <li><i className="ph-bold ph-check"></i> Initial screening</li>
                            <li><i className="ph-bold ph-check"></i> Shortlisting support</li>
                            <li><i className="ph-bold ph-check"></i> Replacement: 30 Days</li>
                        </ul>

                        <a href="recruitment-quote.html?plan=starter" className="btn btn-outline"
                            style={{'width': '100%', 'textAlign': 'center'}}>Add to Quote</a>
                    </div>

                    {/* 2. Growth */}
                    <div className="pricing-card highlight">
                        <div className="plan-badge">POPULAR</div>
                        <div style={{'color': 'var(--primary)', 'fontWeight': '600'}}>GROWTH HIRING</div>
                        <h3 style={{'marginTop': '5px'}}>Professional Roles</h3>
                        <div className="price-tag">₹{servicePricing.recruitment.professional}</div>
                        <div className="price-unit">per hire</div>
                        <p style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginTop': '15px'}}>For SMEs & Functional roles.</p>

                        <ul className="features-list">
                            <li><i className="ph-bold ph-check"></i> End-to-end lifecycle</li>
                            <li><i className="ph-bold ph-check"></i> Interview coordination</li>
                            <li><i className="ph-bold ph-check"></i> Candidate follow-ups</li>
                            <li><i className="ph-bold ph-check"></i> Replacement: 45 Days</li>
                        </ul>

                        <a href="recruitment-quote.html?plan=growth" className="btn btn-primary"
                            style={{'width': '100%', 'textAlign': 'center'}}>Build Custom Quote</a>
                    </div>

                    {/* 3. Professional */}
                    <div className="pricing-card">
                        <div style={{'color': '#8b5cf6', 'fontWeight': '600'}}>PROFESSIONAL</div>
                        <h3 style={{'marginTop': '5px'}}>Business-Critical</h3>
                        <div className="price-tag">8% - 10%</div>
                        <div className="price-unit">of Annual CTC</div>
                        <p style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginTop': '15px'}}>Or Fixed Fee: ₹{servicePricing.recruitment.enterprise}</p>

                        <ul className="features-list">
                            <li><i className="ph-bold ph-check"></i> Full ownership</li>
                            <li><i className="ph-bold ph-check"></i> Offer rollout support</li>
                            <li><i className="ph-bold ph-check"></i> Joining assurance</li>
                            <li><i className="ph-bold ph-check"></i> Replacement: 90 Days</li>
                        </ul>

                        <a href="recruitment-quote.html?plan=professional" className="btn btn-outline"
                            style={{'width': '100%', 'textAlign': 'center'}}>Choose Hiring Model</a>
                    </div>

                    {/* 4. Enterprise */}
                    <div className="pricing-card"
                        style={{'background': 'rgba(255,255,255,0.02)', 'borderColor': 'rgba(255,255,255,0.05)'}}>
                        <div style={{'color': '#cbd5e1', 'fontWeight': '600'}}>ENTERPRISE</div>
                        <h3 style={{'marginTop': '5px'}}>Bulk & Leadership</h3>
                        <div className="price-tag">Custom</div>
                        <div className="price-unit">Volume / Success-based</div>
                        <p style={{'color': '#94a3b8', 'fontSize': '0.9rem', 'marginTop': '15px'}}>For High-Volume & Strategic
                            Hiring.</p>

                        <ul className="features-list">
                            <li><i className="ph-bold ph-check"></i> Bulk hiring execution</li>
                            <li><i className="ph-bold ph-check"></i> Leadership search</li>
                            <li><i className="ph-bold ph-check"></i> Dedicated recruiter</li>
                            <li><i className="ph-bold ph-check"></i> Governance & tracking</li>
                        </ul>

                        <a href="recruitment-quote.html?plan=enterprise" className="btn btn-outline"
                            style={{'width': '100%', 'textAlign': 'center'}}>Request Custom Quote</a>
                    </div>

                </div>
            </div>
        </section>

        {/* ADD-ONS */}
        <section className="section-padding" style={{'background': 'rgba(30, 41, 59, 0.3)'}}>
            <div className="container">
                <h2 style={{'textAlign': 'center', 'marginBottom': '40px'}}>Optional Recruitment Add-Ons</h2>
                <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(200px, 1fr))', 'gap': '20px'}}>
                    <div
                        style={{'background': 'rgba(0,0,0,0.2)', 'padding': '20px', 'borderRadius': '8px', 'border': '1px solid rgba(255,255,255,0.05)', 'textAlign': 'center'}}>
                        <i className="ph-duotone ph-arrow-counter-clockwise"
                            style={{'fontSize': '32px', 'color': 'var(--primary)', 'marginBottom': '10px'}}></i>
                        <h4 style={{'marginBottom': '5px'}}>Replacement Guarantee</h4>
                        <div style={{'color': '#94a3b8', 'fontSize': '0.9rem'}}>30-90 Days Extension</div>
                    </div>
                    <div
                        style={{'background': 'rgba(0,0,0,0.2)', 'padding': '20px', 'borderRadius': '8px', 'border': '1px solid rgba(255,255,255,0.05)', 'textAlign': 'center'}}>
                        <i className="ph-duotone ph-user-check"
                            style={{'fontSize': '32px', 'color': 'var(--primary)', 'marginBottom': '10px'}}></i>
                        <h4 style={{'marginBottom': '5px'}}>Background Verification</h4>
                        <div style={{'color': '#94a3b8', 'fontSize': '0.9rem'}}>Coordination Support</div>
                    </div>
                    <div
                        style={{'background': 'rgba(0,0,0,0.2)', 'padding': '20px', 'borderRadius': '8px', 'border': '1px solid rgba(255,255,255,0.05)', 'textAlign': 'center'}}>
                        <i className="ph-duotone ph-chat-circle-text"
                            style={{'fontSize': '32px', 'color': 'var(--primary)', 'marginBottom': '10px'}}></i>
                        <h4 style={{'marginBottom': '5px'}}>Offer Negotiation</h4>
                        <div style={{'color': '#94a3b8', 'fontSize': '0.9rem'}}>Expert Support</div>
                    </div>
                    <div
                        style={{'background': 'rgba(0,0,0,0.2)', 'padding': '20px', 'borderRadius': '8px', 'border': '1px solid rgba(255,255,255,0.05)', 'textAlign': 'center'}}>
                        <i className="ph-duotone ph-handshake"
                            style={{'fontSize': '32px', 'color': 'var(--primary)', 'marginBottom': '10px'}}></i>
                        <h4 style={{'marginBottom': '5px'}}>Joining Assurance</h4>
                        <div style={{'color': '#94a3b8', 'fontSize': '0.9rem'}}>Follow-ups & Engagement</div>
                    </div>
                </div>
                <div style={{'textAlign': 'center', 'marginTop': '30px'}}>
                    <a href="recruitment-quote.html" className="btn btn-outline">Add Add-Ons to Quote</a>
                </div>
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-padding" style={{'textAlign': 'center'}}>
            <div className="container">
                <h2 style={{'marginBottom': '24px'}}>Not sure which pricing model fits?</h2>
                <div style={{'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                    <a href="recruitment-quote.html" className="btn btn-primary">Build Recruitment Quote</a>
                    <a href="contact.html" className="btn btn-outline">Talk to Recruitment Expert</a>
                </div>
            </div>
        </section>

    </main>

    <div id="global-footer-container"></div>

    
    
    
    

    </>
  );
}
