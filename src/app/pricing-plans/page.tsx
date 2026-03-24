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

    <main className="section-padding" style={{'paddingTop': '150px', 'minHeight': '80vh'}}>
        <div className="container">
            <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
                <span style={{'color': 'var(--primary)'}}>Plans & Pricing</span>
                <h1 style={{'fontSize': '3rem'}}>Transparent Pricing for Every Stage</h1>
                <p style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '10px auto'}}>Choose the plan that fits
                    your workforce size and compliance needs. No hidden fees.</p>
            </div>

            {/* TABS */}
            <div id="pricing-tabs"
                style={{'display': 'flex', 'justifyContent': 'center', 'gap': '10px', 'marginBottom': '40px', 'flexWrap': 'wrap'}}>
                {/* Injected via JS */}
            </div>

            {/* PRICING GRID */}
            <div id="pricing-grid"
                style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(280px, 1fr))', 'gap': '30px'}}>
                {/* Injected via JS */}
            </div>
        </div>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    
    

    </>
  );
}
