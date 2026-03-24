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

    <main className="section-padding" style={{'paddingTop': '150px'}}>
        <div className="container" style={{'maxWidth': '800px'}}>
            <div style={{'textAlign': 'center', 'marginBottom': '40px'}}>
                <h1 style={{'fontSize': '2.5rem', 'marginBottom': '10px'}}>Build Your Recruitment Quote</h1>
                <p style={{'color': 'var(--text-secondary)'}}>Select the services you require and receive a custom
                    recruitment quote.</p>
            </div>

            <form id="recruitment-quote-form" onSubmit={(e) => { e.preventDefault(); }}>

                {/* Step 1: Services */}
                <div className="form-section">
                    <h3><span
                            style={{'background': 'var(--primary)', 'color': 'white', 'width': '24px', 'height': '24px', 'borderRadius': '50%', 'display': 'inline-flex', 'justifyContent': 'center', 'alignItems': 'center', 'fontSize': '0.8rem'}}>1</span>
                        Select Recruitment Services</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-btn">
                            <input type="checkbox" name="services" value="End-to-End Recruitment" />
                            <span className="box">End-to-End Recruitment</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="services" value="Bulk Hiring" />
                            <span className="box">Bulk / Volume Hiring</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="services" value="Professional Hiring" />
                            <span className="box">Professional Hiring</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="services" value="Leadership Hiring" />
                            <span className="box">Leadership Hiring</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="services" value="RPO" />
                            <span className="box">RPO Services</span>
                        </label>
                    </div>
                </div>

                {/* Step 2: Hiring Details */}
                <div className="form-section">
                    <h3><span
                            style={{'background': 'var(--primary)', 'color': 'white', 'width': '24px', 'height': '24px', 'borderRadius': '50%', 'display': 'inline-flex', 'justifyContent': 'center', 'alignItems': 'center', 'fontSize': '0.8rem'}}>2</span>
                        Hiring Details</h3>
                    <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '20px'}}>
                        <div className="form-group">
                            <label>Number of Positions</label>
                            <input type="number" name="positions" className="form-control" placeholder="e.g. 5" />
                        </div>
                        <div className="form-group">
                            <label>Job Location(s)</label>
                            <input type="text" name="location" className="form-control"
                                placeholder="e.g. Bangalore, Mumbai" />
                        </div>
                        <div className="form-group" style={{'gridColumn': '1 / -1'}}>
                            <label>Job Role(s)</label>
                            <input type="text" name="roles" className="form-control"
                                placeholder="e.g. Sales Executive, Java Developer" />
                        </div>
                        <div className="form-group">
                            <label>Industry</label>
                            <input type="text" name="industry" className="form-control"
                                placeholder="e.g. IT, Manufacturing" />
                        </div>
                        <div className="form-group">
                            <label>Expected Timeline</label>
                            <select name="timeline" className="form-control">
                                <option>Immediate</option>
                                <option>Within 15 Days</option>
                                <option>Within 30 Days</option>
                                <option>Next Quarter</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Step 3: Model */}
                <div className="form-section">
                    <h3><span
                            style={{'background': 'var(--primary)', 'color': 'white', 'width': '24px', 'height': '24px', 'borderRadius': '50%', 'display': 'inline-flex', 'justifyContent': 'center', 'alignItems': 'center', 'fontSize': '0.8rem'}}>3</span>
                        Preferred Hiring Model</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-btn">
                            <input type="radio" name="model" value="Fixed Per-Hire" />
                            <span className="box">Fixed per-hire</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="radio" name="model" value="Success-Based (%)" />
                            <span className="box">Success-based (%)</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="radio" name="model" value="Volume-Based" />
                            <span className="box">Volume-based hiring</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="radio" name="model" value="Custom Enterprise" checked />
                            <span className="box">Custom Enterprise</span>
                        </label>
                    </div>
                </div>

                {/* Step 4: Add-ons */}
                <div className="form-section">
                    <h3><span
                            style={{'background': 'var(--primary)', 'color': 'white', 'width': '24px', 'height': '24px', 'borderRadius': '50%', 'display': 'inline-flex', 'justifyContent': 'center', 'alignItems': 'center', 'fontSize': '0.8rem'}}>4</span>
                        Optional Add-Ons</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-btn">
                            <input type="checkbox" name="addons" value="Replacement Guarantee" />
                            <span className="box">Replacement Guarantee</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="addons" value="Interview Coordination" />
                            <span className="box">Interview Coordination</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="addons" value="Offer Negotiation" />
                            <span className="box">Offer Negotiation</span>
                        </label>
                        <label className="checkbox-btn">
                            <input type="checkbox" name="addons" value="Joining Assurance" />
                            <span className="box">Joining Assurance</span>
                        </label>
                    </div>
                </div>

                {/* Summary Info */}
                <div className="summary-card">
                    <h4 style={{'color': '#10b981', 'marginBottom': '10px'}}>Quote Summary</h4>
                    <p style={{'fontSize': '0.9rem', 'opacity': '0.8', 'marginBottom': '10px'}}>
                        Based on your selection, our team will generate a detailed commercial proposal with relevant
                        volume discounts.
                    </p>
                    <div style={{'fontWeight': '600'}}>Status: Custom Quote Required</div>
                </div>

                <div className="form-section" style={{'marginTop': '30px'}}>
                    <h3>Your Contact Details</h3>
                    <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '20px'}}>
                        <input type="text" name="companyName" placeholder="Company Name" required className="form-control" />
                        <input type="text" name="contactName" placeholder="Contact Person" required
                            className="form-control" />
                        <input type="email" name="email" placeholder="Official Email" required className="form-control" />
                        <input type="tel" name="phone" placeholder="Phone Number" required className="form-control" />
                    </div>
                </div>

                <div style={{'marginTop': '40px', 'display': 'flex', 'gap': '20px', 'justifyContent': 'center'}}>
                    <button type="submit" className="btn btn-primary" style={{'padding': '15px 40px', 'fontSize': '1.1rem'}}>
                        <i className="ph-bold ph-paper-plane-right"></i> Submit Quote Request
                    </button>
                    <a href="contact.html" className="btn btn-outline" style={{'padding': '15px 30px'}}>Talk to Expert</a>
                </div>
                <p style={{'textAlign': 'center', 'marginTop': '15px', 'color': '#64748b', 'fontSize': '0.85rem'}}>
                    Request will be sent to teamwork.hrsolution@zohomail.in
                </p>

            </form>
        </div>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    
    

    </>
  );
}
