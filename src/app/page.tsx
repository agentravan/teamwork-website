import React from 'react';

export default function Home() {
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



    {/* HERO SECTION */}
    <header className="section-padding"
        style={{'minHeight': '90vh', 'display': 'flex', 'alignItems': 'center', 'position': 'relative', 'overflow': 'hidden', 'paddingTop': '140px'}}>
        <div className="hero-glow-bg"></div>
        <div className="container" style={{'textAlign': 'center', 'position': 'relative', 'zIndex': '10'}}>

            <div className="fade-up" style={{'marginBottom': '24px'}}>
                <span
                    style={{'background': 'rgba(59, 130, 246, 0.15)', 'border': '1px solid rgba(59, 130, 246, 0.3)', 'color': 'var(--primary)', 'padding': '8px 16px', 'borderRadius': '50px', 'fontWeight': '600', 'fontSize': '0.9rem', 'display': 'inline-flex', 'alignItems': 'center', 'gap': '8px'}}>
                    <i className="ph-fill ph-lightning"></i> HR Management Evolved
                </span>
            </div>

            <h1 className="fade-up"
                style={{'marginBottom': '32px', 'fontSize': 'clamp(3rem, 6vw, 5rem)', 'lineHeight': '1.1', 'fontWeight': '800', 'maxWidth': '1000px', 'marginLeft': 'auto', 'marginRight': 'auto'}}>
                The Operating System for <br />
                <span className="text-blue">Modern Teams</span>
            </h1>

            <p className="fade-up"
                style={{'maxWidth': '700px', 'margin': '0 auto 48px auto', 'fontSize': '1.25rem', 'color': 'var(--text-muted)'}}>
                Automate payroll, compliance, and HR operations with a platform designed for the next generation of
                business.
            </p>

            <div className="fade-up" style={{'display': 'flex', 'gap': '16px', 'justifyContent': 'center', 'marginBottom': '80px'}}>
                <a href="contact.html" className="btn-campfire">
                    Start Your Trial <i className="ph-bold ph-arrow-right"></i>
                </a>
                <a href="services.html" className="btn-outline">
                    Explore Platform
                </a>
            </div>

            {/* DASHBOARD MOCKUP */}
            <div className="fade-up" style={{'position': 'relative', 'perspective': '1000px'}}>
                <div className="mockup-card" style={{'padding': '0', 'border': 'none', 'background': 'transparent', 'overflow': 'visible'}}>
                    {/* DETAILED DASHBOARD UI */}
                    <div className="dashboard-interface">
                        {/* Sidebar */}
                        <div className="dash-sidebar">
                            <div className="dash-icon active"><i className="ph-bold ph-squares-four"></i></div>
                            <div className="dash-icon"><i className="ph-bold ph-users"></i></div>
                            <div className="dash-icon"><i className="ph-bold ph-calendar-check"></i></div>
                            <div className="dash-icon"><i className="ph-bold ph-airplane-tilt"></i></div>
                            <div className="dash-icon"><i className="ph-bold ph-clock"></i></div>
                        </div>

                        {/* Main Content */}
                        <div className="dash-main">
                            {/* Widget 1: Employee Distribution */}
                            <div className="dash-widget">
                                <div className="dash-header">
                                    <span className="dash-title">Employee by Dept</span>
                                    <i className="ph-bold ph-dots-three"></i>
                                </div>
                                <div className="donut-container">
                                    <div className="donut-hole"></div>
                                </div>
                                <div
                                    style={{'display': 'flex', 'gap': '10px', 'justifyContent': 'center', 'marginTop': '15px', 'fontSize': '0.7rem', 'color': '#6B7280'}}>
                                    <span style={{'display': 'flex', 'alignItems': 'center', 'gap': '4px'}}><span
                                            style={{'width': '8px', 'height': '8px', 'background': '#3B82F6', 'borderRadius': '50%'}}></span>
                                        Dev</span>
                                    <span style={{'display': 'flex', 'alignItems': 'center', 'gap': '4px'}}><span
                                            style={{'width': '8px', 'height': '8px', 'background': '#F59E0B', 'borderRadius': '50%'}}></span>
                                        Sales</span>
                                    <span style={{'display': 'flex', 'alignItems': 'center', 'gap': '4px'}}><span
                                            style={{'width': '8px', 'height': '8px', 'background': '#10B981', 'borderRadius': '50%'}}></span>
                                        HR</span>
                                </div>
                            </div>

                            {/* Widget 2: Today's Leave */}
                            <div className="dash-widget">
                                <div className="dash-header">
                                    <span className="dash-title">Today's Leave</span>
                                    <button
                                        style={{'background': '#3B82F6', 'color': 'white', 'border': 'none', 'padding': '4px 8px', 'borderRadius': '4px', 'fontSize': '0.7rem'}}>View
                                        All</button>
                                </div>
                                <div className="employee-item">
                                    <div className="employee-avatar">BH</div>
                                    <div style={{'flex': '1'}}>
                                        <div style={{'fontSize': '0.8rem', 'fontWeight': '600'}}>Bart Hon</div>
                                        <div style={{'fontSize': '0.7rem', 'color': '#EF4444'}}>Rejected</div>
                                    </div>
                                </div>
                                <div className="employee-item">
                                    <div className="employee-avatar">LL</div>
                                    <div style={{'flex': '1'}}>
                                        <div style={{'fontSize': '0.8rem', 'fontWeight': '600'}}>Lori Luken</div>
                                        <div style={{'fontSize': '0.7rem', 'color': '#6B7280'}}>Cancelled</div>
                                    </div>
                                </div>
                            </div>

                            {/* Widget 3: New Employees (Spanning) */}
                            <div className="dash-widget" style={{'gridColumn': 'span 2'}}>
                                <div className="dash-header">
                                    <span className="dash-title">New Employee List</span>
                                    <button
                                        style={{'background': '#3B82F6', 'color': 'white', 'border': 'none', 'padding': '4px 8px', 'borderRadius': '4px', 'fontSize': '0.7rem'}}>View
                                        All</button>
                                </div>
                                <div className="employee-item">
                                    <div className="employee-avatar" style={{'background': '#DBEAFE', 'color': '#1E40AF'}}>MS</div>
                                    <div style={{'flex': '1'}}>
                                        <div style={{'fontSize': '0.8rem', 'fontWeight': '600'}}>Micheal Smith</div>
                                        <div style={{'fontSize': '0.7rem', 'color': '#6B7280'}}>Developer</div>
                                    </div>
                                    <div style={{'fontSize': '0.75rem', 'color': '#6B7280'}}>04 April</div>
                                    <i className="ph-bold ph-pencil-simple" style={{'color': '#10B981'}}></i>
                                </div>
                                <div className="employee-item">
                                    <div className="employee-avatar" style={{'background': '#FEF3C7', 'color': '#92400E'}}>JM</div>
                                    <div style={{'flex': '1'}}>
                                        <div style={{'fontSize': '0.8rem', 'fontWeight': '600'}}>John Miller</div>
                                        <div style={{'fontSize': '0.7rem', 'color': '#6B7280'}}>HR Officer</div>
                                    </div>
                                    <div style={{'fontSize': '0.75rem', 'color': '#6B7280'}}>10 April</div>
                                    <i className="ph-bold ph-pencil-simple" style={{'color': '#10B981'}}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge (Preserved) */}
                    <div
                        style={{'position': 'absolute', 'bottom': '-20px', 'left': '-20px', 'background': 'white', 'padding': '15px', 'borderRadius': '12px', 'boxShadow': '0 10px 25px rgba(0,0,0,0.1)', 'display': 'flex', 'alignItems': 'center', 'gap': '10px'}}>
                        <div
                            style={{'width': '40px', 'height': '40px', 'background': '#DCFCE7', 'borderRadius': '50%', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#16A34A'}}>
                            <i className="ph-bold ph-check"></i>
                        </div>
                        <div>
                            <div style={{'fontWeight': '700', 'color': '#111827'}}>100%</div>
                            <div style={{'fontSize': '0.8rem', 'color': '#6B7280'}}>Compliance Score</div>
                        </div>
                    </div>
                </div>
                {/* Gradient Glow behind mockup */}
                <div
                    style={{'position': 'absolute', 'top': '10%', 'left': '50%', 'transform': 'translateX(-50%)', 'width': '80%', 'height': '80%', 'background': 'var(--primary)', 'filter': 'blur(100px)', 'opacity': '0.15', 'zIndex': '-1'}}>
                </div>
            </div>

        </div>
    </header>

    {/* TRUST CAROUSEL (Infinite Scroll) */}
    <div className="marquee-wrapper">
        <div className="marquee">
            <span>HEXAGON</span>
            <span>WAVELABS</span>
            <span>NEXUS</span>
            <span>VORTEX</span>
            <span>CATALYST</span>
            <span>HORIZON</span>
            {/* Duplicate for Infinite Scroll */}
            <span>HEXAGON</span>
            <span>WAVELABS</span>
            <span>NEXUS</span>
            <span>VORTEX</span>
            <span>CATALYST</span>
            <span>HORIZON</span>
        </div>
    </div>

    {/* WHO WE ARE (Refined) */}
    <section className="section-padding section-who-we-are">
        <div className="container">
            <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
                <h5 className="text-blue"
                    style={{'marginBottom': '16px', 'textTransform': 'uppercase', 'letterSpacing': '2px', 'fontWeight': '700'}}>Who
                    We Are</h5>
                <h2 className="fade-up" style={{'fontSize': '2.5rem', 'marginBottom': '24px'}}>Simplifying HR for Modern Teams</h2>
                <p style={{'color': 'var(--text-muted)', 'fontSize': '1.1rem', 'maxWidth': '700px', 'margin': '0 auto'}}>
                    We combine technology with human expertise to deliver seamless payroll, compliance, and strategic HR
                    solutions.
                </p>
            </div>

            <div className="bento-grid" style={{'gridTemplateColumns': 'repeat(3, 1fr)', 'gap': '30px'}}>
                {/* Card 1 */}
                <div className="card-enterprise fade-up" style={{'gridColumn': 'span 1'}}>
                    <div className="icon-box"><i className="ph-duotone ph-users-three"></i></div>
                    <h3 style={{'fontSize': '1.25rem', 'marginBottom': '12px', 'color': 'white'}}>Expert Team</h3>
                    <p>Dedicated professionals managing your HR operations with precision and care.</p>
                </div>

                {/* Card 2 (Highlight) */}
                <div className="card-enterprise card-highlight fade-up" style={{'gridColumn': 'span 1'}}>
                    <div className="icon-box"><i className="ph-duotone ph-chart-line-up"></i></div>
                    <h3 style={{'fontSize': '1.25rem', 'marginBottom': '12px', 'color': 'white'}}>Proven Growth</h3>
                    <p>Consistent results that help you scale your workforce without compliance headaches.</p>
                </div>

                {/* Card 3 */}
                <div className="card-enterprise fade-up" style={{'gridColumn': 'span 1'}}>
                    <div className="icon-box"><i className="ph-duotone ph-shield-check"></i></div>
                    <h3 style={{'fontSize': '1.25rem', 'marginBottom': '12px', 'color': 'white'}}>100% Compliant</h3>
                    <p>Stay ahead of regulations with our automated and expert-verified systems.</p>
                </div>
            </div>
        </div>
    </section>

    {/* SERVICES */}
    <section className="section-padding">
        <div className="container">
            <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
                <div
                    style={{'display': 'inline-block', 'padding': '6px 12px', 'background': 'rgba(59, 130, 246, 0.1)', 'color': 'var(--primary)', 'borderRadius': '20px', 'fontWeight': '600', 'fontSize': '0.85rem', 'marginBottom': '15px'}}>
                    OUR EXPERTISE</div>
                <h2 style={{'marginBottom': '16px', 'fontSize': '2.5rem'}}>Comprehensive HR Services</h2>
                <p style={{'color': 'var(--text-muted)', 'maxWidth': '600px', 'margin': '0 auto'}}>End-to-end solutions designed to
                    streamline your workforce management.</p>
            </div>

            <div className="bento-grid">
                {/* Large Card: Payroll */}
                <a href="payroll-management.html" className="service-link bento-span-2">
                    <div className="service-card campfire-card"
                        style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column'}}>
                        <div className="icon-box"><i className="ph-duotone ph-currency-dollar"></i></div>
                        <h3 style={{'fontSize': '1.5rem', 'marginBottom': '12px', 'color': 'white'}}>Payroll Processing</h3>
                        <p style={{'marginBottom': '20px'}}>Automated payroll calculation that handles tax deductions,
                            reimbursements, and payslips with zero errors.</p>
                        <span className="read-more">Read More &rarr;</span>
                        <div style={{'position': 'absolute', 'right': '-20px', 'bottom': '-20px', 'opacity': '0.5'}}>
                            <i className="ph-duotone ph-chart-line-up"
                                style={{'fontSize': '150px', 'color': 'rgba(255,255,255,0.03)'}}></i>
                        </div>
                    </div>
                </a>

                {/* Card: Compliance */}
                <a href="compliance-outsourcing.html" className="service-link">
                    <div className="service-card campfire-card"
                        style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column'}}>
                        <div className="icon-box"><i className="ph-duotone ph-shield-check"></i></div>
                        <h3 style={{'fontSize': '1.25rem', 'marginBottom': '12px', 'color': 'white'}}>Compliance</h3>
                        <p style={{'marginBottom': '20px'}}>Full statutory coverage for PF, ESIC, and Tax.</p>
                        <span className="read-more">Read More &rarr;</span>
                    </div>
                </a>

                {/* Card: Audits */}
                <a href="hr-policy-audit.html" className="service-link">
                    <div className="service-card campfire-card"
                        style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column'}}>
                        <div className="icon-box"><i className="ph-duotone ph-files"></i></div>
                        <h3 style={{'fontSize': '1.25rem', 'marginBottom': '12px', 'color': 'white'}}>HR Audits</h3>
                        <p style={{'marginBottom': '20px'}}>Risk-free policy design and internal audits.</p>
                        <span className="read-more">Read More &rarr;</span>
                    </div>
                </a>

                {/* Large Card: Business Setup */}
                <a href="startup-registration.html" className="service-link bento-span-2">
                    <div className="service-card campfire-card"
                        style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column'}}>
                        <div className="icon-box"><i className="ph-duotone ph-buildings"></i></div>
                        <h3 style={{'fontSize': '1.5rem', 'marginBottom': '12px', 'color': 'white'}}>Business Setup</h3>
                        <p style={{'marginBottom': '20px'}}>End-to-end support for company registration, licensing, and
                            operational foundation.</p>
                        <span className="read-more">Read More &rarr;</span>
                    </div>
                </a>

                {/* Card: Attendance */}
                <a href="global-hrx.html" className="service-link">
                    <div className="service-card campfire-card"
                        style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column'}}>
                        <div className="icon-box"><i className="ph-duotone ph-clock-user"></i></div>
                        <h3 style={{'fontSize': '1.25rem', 'marginBottom': '12px', 'color': 'white'}}>Attendance</h3>
                        <p style={{'marginBottom': '20px'}}>Biometric and geo-fenced tracking.</p>
                        <span className="read-more">Read More &rarr;</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="section-padding">
        <div className="container">
            <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
                <h2 className="fade-up" style={{'marginBottom': '16px'}}>Why Partner with TeamWork?</h2>
            </div>

            <div className="bento-grid" style={{'gridTemplateColumns': 'repeat(4, 1fr)'}}>
                <div className="campfire-card fade-up">
                    <h4 style={{'marginBottom': '10px', 'color': 'white'}}>Transparency</h4>
                    <p>Clear processes, regular updates, and complete visibility.</p>
                </div>
                <div className="campfire-card fade-up" style={{'borderTop': '2px solid var(--primary)'}}>
                    <h4 style={{'marginBottom': '10px', 'color': 'white'}}>Accuracy</h4>
                    <p>Zero penalties with our strong validation checks.</p>
                </div>
                <div className="campfire-card fade-up">
                    <h4 style={{'marginBottom': '10px', 'color': 'white'}}>SME Focus</h4>
                    <p>Flexible solutions designed for growing businesses.</p>
                </div>
                <div className="campfire-card fade-up">
                    <h4 style={{'marginBottom': '10px', 'color': 'white'}}>Support</h4>
                    <p>Direct WhatsApp access to your dedicated account manager.</p>
                </div>
            </div>
        </div>
    </section>

    {/* MEET THE TEAM */}
    <section className="section-padding">
        <div className="container">
            <div style={{'textAlign': 'center', 'marginBottom': '60px'}}>
                <h5 style={{'color': 'var(--primary)', 'marginBottom': '10px', 'letterSpacing': '2px'}}>LEADERSHIP</h5>
                <h2 className="fade-up">Driven by Experts</h2>
            </div>

            <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(250px, 1fr))', 'gap': '40px'}}>
                {/* Team Member 1 */}
                <div className="fade-up" style={{'textAlign': 'center'}}>
                    <div
                        style={{'width': '100px', 'height': '100px', 'borderRadius': '50%', 'background': '#222', 'margin': '0 auto 20px', 'overflow': 'hidden', 'border': '2px solid #333', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white'}}>
                        HB
                    </div>
                    <h4 style={{'marginBottom': '5px', 'color': 'white'}}>Harshit Bhardwaj</h4>
                    <p style={{'color': 'var(--primary)', 'fontSize': '0.9rem', 'marginBottom': '10px', 'fontWeight': '600'}}>Founder
                    </p>
                </div>

                {/* Team Member 2 */}
                <div className="fade-up" style={{'textAlign': 'center', 'transitionDelay': '0.1s'}}>
                    <div
                        style={{'width': '100px', 'height': '100px', 'borderRadius': '50%', 'background': '#222', 'margin': '0 auto 20px', 'overflow': 'hidden', 'border': '2px solid #333', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white'}}>
                        SC
                    </div>
                    <h4 style={{'marginBottom': '5px', 'color': 'white'}}>Shaksham Chug</h4>
                    <p style={{'color': 'var(--text-muted)', 'fontSize': '0.9rem', 'marginBottom': '10px'}}>Finance Head</p>
                </div>

                {/* Team Member 3 */}
                <div className="fade-up" style={{'textAlign': 'center', 'transitionDelay': '0.2s'}}>
                    <div
                        style={{'width': '100px', 'height': '100px', 'borderRadius': '50%', 'background': '#222', 'margin': '0 auto 20px', 'overflow': 'hidden', 'border': '2px solid #333', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white'}}>
                        YL
                    </div>
                    <h4 style={{'marginBottom': '5px', 'color': 'white'}}>Yashika Lohchab</h4>
                    <p style={{'color': 'var(--text-muted)', 'fontSize': '0.9rem', 'marginBottom': '10px'}}>Director</p>
                </div>

                {/* Team Member 4 */}
                <div className="fade-up" style={{'textAlign': 'center', 'transitionDelay': '0.3s'}}>
                    <div
                        style={{'width': '100px', 'height': '100px', 'borderRadius': '50%', 'background': '#222', 'margin': '0 auto 20px', 'overflow': 'hidden', 'border': '2px solid #333', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '1.5rem', 'fontWeight': '700', 'color': 'white'}}>
                        AV
                    </div>
                    <h4 style={{'marginBottom': '5px', 'color': 'white'}}>Ashu Verma</h4>
                    <p style={{'color': 'var(--text-muted)', 'fontSize': '0.9rem', 'marginBottom': '10px'}}>Marketing</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA STRIP */}
    {/* CTA STRIP */}
    <section className="cta-strip fade-up"
        style={{'background': 'linear-gradient(to right, #111, #000)', 'padding': '80px 0', 'borderTop': '1px solid #222'}}>
        <div className="container" style={{'textAlign': 'center'}}>
            <h2 style={{'marginBottom': '24px', 'color': 'white'}}>Ready to ignite your growth?</h2>
            <p style={{'maxWidth': '600px', 'margin': '0 auto 30px auto', 'fontSize': '1.1rem', 'color': '#888'}}>
                Join hundreds of businesses that leverage TeamWork Solutions for seamless compliance.
            </p>
            <a href="contact.html" className="btn-campfire" style={{'padding': '18px 40px', 'fontSize': '1.1rem'}}>Get Started Today
                &rarr;</a>
        </div>
    </section>

    {/* FOOTER */}
    <footer>
        <div className="container">
            <div
                style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(250px, 1fr))', 'gap': '50px', 'marginBottom': '60px'}}>
                {/* Contact Info */}
                <div className="footer-col">
                    <h4 style={{'marginBottom': '24px'}}>Let's Simplify Your HR Journey</h4>
                    <ul style={{'gap': '16px'}}>
                        <li style={{'display': 'flex', 'gap': '12px', 'alignItems': 'flex-start', 'color': 'var(--text-secondary)'}}>
                            <i className="ph-fill ph-phone"
                                style={{'color': 'var(--primary)', 'fontSize': '1.2rem', 'marginTop': '2px'}}></i>
                            <div>
                                <span style={{'display': 'block', 'color': 'white'}}>+91 95188 42774</span>
                                <span style={{'fontSize': '0.85rem'}}>(WhatsApp Available)</span>
                            </div>
                        </li>
                        <li style={{'display': 'flex', 'gap': '12px', 'alignItems': 'flex-start', 'color': 'var(--text-secondary)'}}>
                            <i className="ph-fill ph-envelope"
                                style={{'color': 'var(--primary)', 'fontSize': '1.2rem', 'marginTop': '2px'}}></i>
                            <div>
                                <span style={{'display': 'block', 'color': 'white'}}>teamwork.hrsolution@zohomail.in</span>
                            </div>
                        </li>
                        <li style={{'display': 'flex', 'gap': '12px', 'alignItems': 'flex-start', 'color': 'var(--text-secondary)'}}>
                            <i className="ph-fill ph-map-pin"
                                style={{'color': 'var(--primary)', 'fontSize': '1.2rem', 'marginTop': '2px'}}></i>
                            <div>
                                <span style={{'display': 'block', 'color': 'white'}}>Jind, Haryana</span>
                                <span style={{'fontSize': '0.85rem'}}>(Serving Clients Across India)</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 style={{'marginBottom': '24px'}}>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="global-hrx.html">Global HRX</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                {/* Tagline */}
                <div className="footer-col"
                    style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'textAlign': 'center'}}>
                    <div>
                        <div
                            style={{fontFamily: "'Space Grotesk'", fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '10px'}}>
                            TeamWork Solutions</div>
                        <p style={{'fontStyle': 'italic', 'color': 'var(--text-tertiary)'}}>Together, We Can Do So Much.</p>
                    </div>
                </div>
            </div>

            <div
                style={{'textAlign': 'center', 'paddingTop': '40px', 'borderTop': '1px solid var(--border-subtle)', 'color': 'var(--text-tertiary)', 'fontSize': '0.9rem'}}>
                &copy; 2026 TeamWork Solutions. All Rights Reserved.
            </div>
        </div>
    </footer>

    
    </>
  );
}
