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
        <div className="container" style={{'maxWidth': '900px'}}>
            <div style={{'marginBottom': '40px', 'textAlign': 'center'}}>
                <h1 style={{'fontSize': '3rem', 'marginBottom': '10px'}}>Terms of Use</h1>
                <p style={{'color': '#94a3b8'}}>Last Updated: 2026</p>
            </div>

            <div className="legal-content"
                style={{'background': 'rgba(30, 41, 59, 0.4)', 'padding': '40px', 'borderRadius': '16px', 'border': '1px solid rgba(255,255,255,0.05)'}}>

                <h3>1. Acceptance of Terms</h3>
                <p>By accessing TeamWork Solutions’ website, HRMS (GlobalHRX), or services, you agree to comply with
                    these Terms of Use. If you do not agree, please discontinue usage.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>2. Scope of Services</h3>
                <p>TeamWork Solutions provides:</p>
                <ul>
                    <li>HR & Payroll services</li>
                    <li>Statutory compliance outsourcing</li>
                    <li>Recruitment & hiring services</li>
                    <li>HR policy & audit services</li>
                    <li>HRMS software (GlobalHRX)</li>
                </ul>
                <p>Service scope, pricing, and deliverables are defined in proposals or agreements.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>3. User Responsibilities</h3>
                <p>Users agree to:</p>
                <ul>
                    <li>Provide accurate and lawful information</li>
                    <li>Maintain confidentiality of login credentials</li>
                    <li>Use services only for lawful business purposes</li>
                    <li>Avoid misuse, reverse engineering, or unauthorized access</li>
                </ul>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>4. Account & Access</h3>
                <ul>
                    <li>HRMS access is granted only after approval</li>
                    <li>Login credentials are confidential</li>
                    <li>Users are responsible for all activity under their account</li>
                </ul>
                <p>TeamWork Solutions reserves the right to suspend access in case of misuse or security risks.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>5. Payments & Pricing</h3>
                <ul>
                    <li>Pricing is as per agreed quotation or contract</li>
                    <li>Taxes are applicable as per law</li>
                    <li>Delayed payments may result in service suspension</li>
                </ul>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>6. Intellectual Property</h3>
                <p>All content, software, designs, and documentation are the intellectual property of TeamWork
                    Solutions.</p>
                <p>Unauthorized copying, distribution, or modification is strictly prohibited.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>7. Limitation of Liability</h3>
                <p>TeamWork Solutions is not liable for:</p>
                <ul>
                    <li>Indirect or consequential damages</li>
                    <li>Loss due to incorrect data provided by the client</li>
                    <li>Downtime caused by third-party infrastructure</li>
                </ul>
                <p>Our liability, if any, is limited to the service fees paid.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>8. Termination</h3>
                <p>We reserve the right to:</p>
                <ul>
                    <li>Terminate services for policy violations</li>
                    <li>Suspend access due to legal or compliance reasons</li>
                </ul>
                <p>Clients may terminate services as per agreed notice period.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>9. Governing Law</h3>
                <p>These Terms are governed by the laws of <strong>India</strong>.<br />
                    Jurisdiction: <strong>Gurugram, Haryana</strong></p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>10. Contact</h3>
                <p>For legal or contractual queries:<br />
                    📧 <a href="mailto:teamwork.hrsolution@zohomail.in"
                        style={{'color': 'var(--primary)'}}>teamwork.hrsolution@zohomail.in</a></p>

            </div>
        </div>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    

    </>
  );
}
