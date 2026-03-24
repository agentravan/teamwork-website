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
            <h1 style={{'marginBottom': '40px', 'fontSize': '2.5rem'}}>Your Custom Package Quote</h1>

            <div style={{'display': 'grid', 'gridTemplateColumns': '2fr 1fr', 'gap': '40px'}}>
                {/* LEFT: LIST */}
                <div id="quote-list">
                    <p>Loading your selection...</p>
                </div>

                {/* RIGHT: FORM */}
                <div>
                    <div
                        style={{'background': 'rgba(30, 41, 59, 0.5)', 'padding': '30px', 'borderRadius': '12px', 'border': '1px solid rgba(255,255,255,0.1)', 'position': 'sticky', 'top': '120px'}}>
                        <h3 style={{'marginBottom': '20px'}}>Finalize Request</h3>
                        <form id="quote-form" onSubmit={(e) => { e.preventDefault(); }}>
                            <div className="form-group" style={{'marginBottom': '15px'}}>
                                <label style={{'fontSize': '0.9rem', 'color': '#cbd5e1'}}>Company Name</label>
                                <input type="text" name="companyName" required
                                    style={{'width': '100%', 'padding': '10px', 'background': 'rgba(0,0,0,0.2)', 'border': '1px solid #475569', 'color': 'white', 'borderRadius': '6px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '15px'}}>
                                <label style={{'fontSize': '0.9rem', 'color': '#cbd5e1'}}>Contact Person</label>
                                <input type="text" name="contactName" required
                                    style={{'width': '100%', 'padding': '10px', 'background': 'rgba(0,0,0,0.2)', 'border': '1px solid #475569', 'color': 'white', 'borderRadius': '6px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '15px'}}>
                                <label style={{'fontSize': '0.9rem', 'color': '#cbd5e1'}}>Email</label>
                                <input type="email" name="email" required
                                    style={{'width': '100%', 'padding': '10px', 'background': 'rgba(0,0,0,0.2)', 'border': '1px solid #475569', 'color': 'white', 'borderRadius': '6px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '15px'}}>
                                <label style={{'fontSize': '0.9rem', 'color': '#cbd5e1'}}>Phone</label>
                                <input type="tel" name="phone" required
                                    style={{'width': '100%', 'padding': '10px', 'background': 'rgba(0,0,0,0.2)', 'border': '1px solid #475569', 'color': 'white', 'borderRadius': '6px'}} />
                            </div>
                            <div className="form-group" style={{'marginBottom': '15px'}}>
                                <label style={{'fontSize': '0.9rem', 'color': '#cbd5e1'}}>Employee Count</label>
                                <select name="empCount"
                                    style={{'width': '100%', 'padding': '10px', 'background': 'rgba(0,0,0,0.2)', 'border': '1px solid #475569', 'color': 'white', 'borderRadius': '6px'}}>
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>50-200</option>
                                    <option>200+</option>
                                </select>
                            </div>
                            <div className="form-group" style={{'marginBottom': '20px'}}>
                                <label style={{'fontSize': '0.9rem', 'color': '#cbd5e1'}}>Specific Requirements</label>
                                <textarea name="requirements" rows="3"
                                    style={{'width': '100%', 'padding': '10px', 'background': 'rgba(0,0,0,0.2)', 'border': '1px solid #475569', 'color': 'white', 'borderRadius': '6px'}}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{'width': '100%'}}>
                                <i className="ph-bold ph-paper-plane-right"></i> Send Request
                            </button>
                            <p style={{'fontSize': '0.8rem', 'color': '#94a3b8', 'marginTop': '10px', 'textAlign': 'center'}}>
                                Request will be sent to teamwork.hrsolution@zohomail.in
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>

    
    
    
    

    </>
  );
}
