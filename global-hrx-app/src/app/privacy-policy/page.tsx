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
                <h1 style={{'fontSize': '3rem', 'marginBottom': '10px'}}>Privacy Policy</h1>
                <p style={{'color': '#94a3b8'}}>Last Updated: 2026</p>
            </div>

            <div className="legal-content"
                style={{'background': 'rgba(30, 41, 59, 0.4)', 'padding': '40px', 'borderRadius': '16px', 'border': '1px solid rgba(255,255,255,0.05)'}}>

                <h3>1. Introduction</h3>
                <p>TeamWork Solutions (“we”, “our”, “us”) respects your privacy and is committed to protecting the
                    personal and business information you share with us. This Privacy Policy explains how we collect,
                    use, store, and protect your data when you use our website, HR services, HRMS platform (GlobalHRX),
                    recruitment services, or contact us.</p>
                <p>By using our services, you agree to the practices described in this policy.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>2. Information We Collect</h3>
                <p>We may collect the following information:</p>

                <p><strong>a. Personal Information</strong></p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Job title</li>
                </ul>

                <p><strong>b. Business & HR Data</strong></p>
                <ul>
                    <li>Employee information (only when provided by authorized clients)</li>
                    <li>Payroll & compliance data</li>
                    <li>Recruitment-related information</li>
                </ul>

                <p><strong>c. Technical Information</strong></p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited and usage behavior</li>
                </ul>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>3. How We Use Your Information</h3>
                <p>We use collected data to:</p>
                <ul>
                    <li>Provide HR, payroll, compliance, recruitment, and HRMS services</li>
                    <li>Process service requests and quotations</li>
                    <li>Communicate updates, offers, and support responses</li>
                    <li>Improve platform security and performance</li>
                    <li>Comply with legal and regulatory requirements</li>
                </ul>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>4. Data Security</h3>
                <p>We follow industry-standard security practices to protect your information, including:</p>
                <ul>
                    <li>Role-based access control</li>
                    <li>Secure servers and encrypted storage</li>
                    <li>Restricted internal access</li>
                    <li>Periodic security reviews</li>
                </ul>
                <p>However, no digital system is 100% secure, and users are advised to share data responsibly.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>5. Data Sharing & Disclosure</h3>
                <p>We <strong>do not sell or rent</strong> your personal data.</p>
                <p>Information may be shared only:</p>
                <ul>
                    <li>With authorized internal teams</li>
                    <li>With government authorities when legally required</li>
                    <li>With trusted service providers under confidentiality agreements</li>
                </ul>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>6. Cookies & Tracking</h3>
                <p>Our website may use cookies to:</p>
                <ul>
                    <li>Enhance user experience</li>
                    <li>Analyze traffic and performance</li>
                    <li>Improve services</li>
                </ul>
                <p>You may disable cookies via browser settings.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>7. Data Retention</h3>
                <p>We retain data only as long as required for:</p>
                <ul>
                    <li>Service delivery</li>
                    <li>Legal & compliance obligations</li>
                    <li>Business operations</li>
                </ul>
                <p>Data is securely deleted once no longer required.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>8. Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                    <li>Request access to your data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent where applicable</li>
                </ul>
                <p>Requests can be sent to: <br />
                    📧 <a href="mailto:teamwork.hrsolution@zohomail.in"
                        style={{'color': 'var(--primary)'}}>teamwork.hrsolution@zohomail.in</a></p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>9. Policy Updates</h3>
                <p>This Privacy Policy may be updated periodically. Continued use of our services indicates acceptance
                    of updated terms.</p>

                <hr style={{'borderColor': 'rgba(255,255,255,0.1)', 'margin': '30px 0'}} />

                <h3>10. Contact Us</h3>
                <p>For privacy-related concerns:<br />
                    📧 <a href="mailto:teamwork.hrsolution@zohomail.in"
                        style={{'color': 'var(--primary)'}}>teamwork.hrsolution@zohomail.in</a></p>

            </div>
        </div>
    </main>

    <div id="global-footer-container"></div>

    
    
    
    

    </>
  );
}
