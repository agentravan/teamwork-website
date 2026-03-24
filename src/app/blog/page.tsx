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
        {/* BLOG HEADER */}
        <section className="blog-header">
            <div className="container">
                <span style={{'color': 'var(--primary)', 'fontWeight': '600', 'letterSpacing': '0.1em'}}>THOUGHT LEADERSHIP</span>
                <h1 className="fade-up" style={{'fontSize': '3rem', 'marginTop': '15px', 'marginBottom': '20px'}}>
                    Insights, Updates & <span className="text-gradient">HR Trends</span>
                </h1>
                <p className="fade-up"
                    style={{'maxWidth': '700px', 'margin': '0 auto', 'color': 'var(--text-secondary)', 'fontSize': '1.1rem'}}>
                    Stay updated with the latest insights on HR transformation, payroll governance, statutory
                    compliance, and HR technology.
                    Our blog brings together real-world HR experiences directly from our LinkedIn knowledge base.
                </p>
            </div>
        </section>

        {/* LATEST POSTS */}
        <section className="section-padding">
            <div className="container">
                <div style={{'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginBottom': '40px'}}>
                    <h2>Latest from LinkedIn</h2>
                    <a href="https://www.linkedin.com/company/teamhrpro" target="_blank" className="btn btn-outline">
                        <i className="ph-bold ph-linkedin-logo"></i> Follow Us
                    </a>
                </div>

                <div className="post-grid" id="linkedin-feed">
                    {/* Posts will be injected here */}
                    <div style={{'gridColumn': '1/-1', 'textAlign': 'center', 'padding': '40px'}}>
                        <i className="ph-duotone ph-spinner"
                            style={{'fontSize': '32px', 'animation': 'spin 1s linear infinite'}}></i>
                        <p>Loading updates...</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div id="global-footer-container"></div>

    
    
    

    
    

    </>
  );
}
