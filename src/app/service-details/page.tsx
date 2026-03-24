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

    <main id="details-container" style={{'minHeight': '80vh', 'paddingTop': '150px'}}>
        {/* CONTENT LOADED VIA JS */}
        <div style={{'textAlign': 'center', 'color': 'white'}}>Loading Service Details...</div>
    </main>

    
    
    
    <style>{`
        .typography h3 {
            color: white;
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 1.5rem;
        }

        .typography h4 {
            color: #e2e8f0;
            margin-top: 25px;
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .typography ul,
        .typography ol {
            padding-left: 20px;
            margin-bottom: 20px;
        }

        .typography li {
            margin-bottom: 10px;
        }

        .sub-page-link:hover {
            background: rgba(255, 255, 255, 0.05);
            color: white;
        }
    `}</style>
    <div id="global-footer-container"></div>
    
    
    
    

    </>
  );
}
