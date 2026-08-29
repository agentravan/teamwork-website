import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TeamWork HR Consulting | Payroll, Recruitment & Compliance Gurugram',
  description:
    'End-to-end HR outsourcing, payroll management, statutory labor compliance, recruitment, HRMS, POSH compliance, and HR audits for growing enterprises.',
  openGraph: {
    title: 'TeamWork HR Consulting | HR Outsourcing & Payroll Gurugram',
    description:
      'Streamline payroll, statutory compliance, and recruitment under one trusted partner.',
    url: 'https://teamworkgroup.in/hr-consulting',
    siteName: 'TeamWork Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeamWork HR Consulting | Payroll & HR Compliance',
    description: 'HR outsourcing and payroll compliance solutions in Gurugram.',
  },
};

export default function HRConsultingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    name: 'TeamWork HR Consulting',
    parentOrganization: {
      '@type': 'Organization',
      name: 'TeamWork Group',
      slogan: 'together we can do so much',
    },
    description:
      'End-to-end HR outsourcing, payroll management, statutory compliance, recruitment, HRMS, and POSH audits.',
    url: 'https://teamworkgroup.in/hr-consulting',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[Sector 99A]',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122505',
      addressCountry: 'IN',
    },
    areaServed: 'Pan-India',
    serviceType: [
      'Payroll Management',
      'Recruitment & Staffing',
      'Statutory HR Compliance',
      'HRMS Software',
      'POSH Compliance',
      'HR Policy Audit',
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              TeamWork HR Consulting • Blue Theme
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Transform Operations with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                End-to-End HR Excellence
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Automate payroll, ensure 100% statutory labor compliance, hire top talent, and implement enterprise-grade HRMS workflows tailored for Indian companies.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#lead-form"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all text-sm flex items-center gap-2"
              >
                <span>Get a Free Quote</span>
                <span>→</span>
              </a>
              <a
                href="#services"
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
              >
                Explore Services
              </a>
            </div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800 text-center sm:text-left">
              <div>
                <div className="text-2xl font-extrabold text-blue-400">100%</div>
                <div className="text-xs text-slate-400">Statutory Compliance</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-blue-400">Pan-India</div>
                <div className="text-xs text-slate-400">PF / ESI / PT Coverage</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-blue-400">Fast SLAs</div>
                <div className="text-xs text-slate-400">Turnaround Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Core Solutions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Comprehensive HR Consulting Services
          </h3>
          <p className="text-slate-600 text-sm">
            Everything your business needs to manage employees seamlessly, from hire to retire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
              💰
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Payroll Management</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Zero-error monthly salary computation &amp; payslips</li>
              <li>TDS, PF, ESI, and LWF tax deduction management</li>
              <li>Direct bank payout file generation</li>
              <li>Reimbursement &amp; loan processing</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
              🎯
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Recruitment &amp; Staffing</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Lateral &amp; executive search hiring</li>
              <li>Bulk hiring for IT, sales, and manufacturing</li>
              <li>Candidate screening &amp; background checks</li>
              <li>Reduced time-to-hire with SLA guarantees</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
              ⚖️
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Statutory HR Compliance</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>EPFO, ESIC, and Factory Act compliance filings</li>
              <li>Shop &amp; Establishment Act registration &amp; renewals</li>
              <li>Labor law register maintenance</li>
              <li>Inspection support &amp; audit representation</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
              💻
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">HRMS &amp; Attendance</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Cloud HRMS portal with mobile app access</li>
              <li>Biometric &amp; geo-fenced attendance tracking</li>
              <li>Automated leave management &amp; workflows</li>
              <li>Employee self-service (ESS) portal</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
              🛡️
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">POSH Compliance</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Internal Committee (IC) constitution</li>
              <li>External member representation</li>
              <li>Employee sensitization workshops &amp; e-learning</li>
              <li>Annual POSH report filing with district authorities</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
              📋
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">HR Policy Audit</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Comprehensive handbook &amp; policy reviews</li>
              <li>Salary structure optimization (tax efficiency)</li>
              <li>Performance management (KRA/KPI) frameworks</li>
              <li>Exit management &amp; NDA contract drafting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries & Use Cases */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 mb-10">
            Industries Served &amp; Business Use Cases
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-blue-100 text-center font-bold text-sm text-slate-800">
              💻 IT &amp; Software Startups
            </div>
            <div className="bg-white p-5 rounded-xl border border-blue-100 text-center font-bold text-sm text-slate-800">
              🏭 Manufacturing &amp; Plants
            </div>
            <div className="bg-white p-5 rounded-xl border border-blue-100 text-center font-bold text-sm text-slate-800">
              🏦 BFSI &amp; Financial Services
            </div>
            <div className="bg-white p-5 rounded-xl border border-blue-100 text-center font-bold text-sm text-slate-800">
              🛍️ Retail &amp; Logistics Networks
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Tiers with Pricing Placeholders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Flexible Plans
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            HR Engagement Tiers
          </h3>
          <p className="text-slate-600 text-sm">
            Choose a plan tailored to your employee headcount and compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tier 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-900">Basic HR</h4>
              <p className="text-xs text-slate-500 mt-1">For teams up to 20 employees</p>
              <div className="my-6 p-3 bg-slate-100 rounded-xl text-center">
                <span className="text-xs font-bold text-blue-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/mo</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ Monthly payroll calculation</li>
                <li>✓ Form 16 generation</li>
                <li>✓ Basic attendance tracking</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 2 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-blue-600 shadow-md relative flex flex-col justify-between">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
              MOST POPULAR
            </span>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Standard HR</h4>
              <p className="text-xs text-slate-500 mt-1">For teams of 20 - 100 employees</p>
              <div className="my-6 p-3 bg-blue-50 rounded-xl text-center border border-blue-200">
                <span className="text-xs font-bold text-blue-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/mo</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ Full Payroll + PF/ESI/PT filings</li>
                <li>✓ Cloud HRMS software access</li>
                <li>✓ Dedicated HR account manager</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-900">Premium HR</h4>
              <p className="text-xs text-slate-500 mt-1">For teams of 100+ employees</p>
              <div className="my-6 p-3 bg-slate-100 rounded-xl text-center">
                <span className="text-xs font-bold text-blue-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/mo</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ End-to-end HR outsourcing</li>
                <li>✓ Full POSH &amp; labor law compliance</li>
                <li>✓ Recruitment support included</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 4 */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-white">Custom Enterprise</h4>
              <p className="text-xs text-slate-400 mt-1">Multi-location &amp; factory setups</p>
              <div className="my-6 p-3 bg-slate-800 rounded-xl text-center border border-slate-700">
                <span className="text-xs font-bold text-blue-400 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-white">Tailored Proposals</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li>✓ On-site HR desk option</li>
                <li>✓ Custom API HRMS integrations</li>
                <li>✓ Executive recruitment SLAs</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder Section */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-blue-300 text-center space-y-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-mono font-bold px-3 py-1 rounded-md inline-block">
              [PLACEHOLDER: HR PORTAL &amp; TEAM OPERATIONS PHOTO GALLERY]
            </span>
            <h4 className="font-bold text-slate-800">Visual Assets &amp; Portal Showcase</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Replace this placeholder block with high-resolution screenshots of the HRMS dashboard, employee mobile app interface, and team operation photos.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Client Trust
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900">What Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                [TESTIMONIAL PLACEHOLDER #{idx}]
              </span>
              <p className="text-xs text-slate-600 italic">
                &ldquo;[Insert client feedback quote regarding TeamWork HR Consulting payroll efficiency and statutory compliance support.]&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  P
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">[Client Name Placeholder]</div>
                  <div className="text-[10px] text-slate-500">[HR Director / CEO, Company]</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 mb-10">
            Frequently Asked Questions (HR Consulting)
          </h3>

          <div className="space-y-4">
            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>How fast can TeamWork take over our monthly payroll processing?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                We can onboard your organization within 5 to 7 business days, including historical data migration, salary structure alignment, and tax setting verification.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Do you handle statutory filings for EPFO and ESIC directly?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes, our compliance specialists prepare and file monthly ECR returns for Provident Fund (EPFO), ESIC, Professional Tax (PT), and Labor Welfare Fund (LWF) across Pan-India states.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Can we use your recruitment service on a pay-per-hire basis?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes, we offer flexible recruitment engagements including success-fee lateral hiring as well as dedicated recruitment process outsourcing (RPO).
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Is POSH compliance mandatory for companies in Gurugram?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes, under the POSH Act 2013, any organization with 10 or more employees must constitute an Internal Committee (IC), conduct regular employee training, and submit an annual report to the local district officer.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Is employee data kept confidential during HR outsourcing?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Absolutely. We sign comprehensive Non-Disclosure Agreements (NDAs) and store data in encrypted, DPDP Act-compliant cloud infrastructure with strict role-based access.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Vertical Lead Capture Form */}
      <section id="lead-form" className="py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
              TeamWork HR Consulting Lead Desk
            </span>
            <h3 className="text-3xl font-extrabold text-white">
              Get Your Custom HR &amp; Payroll Quote
            </h3>
            <p className="text-xs text-slate-400">
              Submit your inquiry and our HR specialists in Gurugram will reach out within 2 business hours.
            </p>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <form action="/api/lead" method="POST" className="space-y-4">
              <input type="hidden" name="vertical" value="TeamWork HR Consulting" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company Name"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Official Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Primary HR Service Needed</label>
                <select
                  name="service_needed"
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                >
                  <option value="Payroll Management">Payroll Management &amp; Processing</option>
                  <option value="Recruitment & Staffing">Recruitment &amp; Executive Search</option>
                  <option value="Statutory Compliance">Statutory Labor Compliance (PF/ESI)</option>
                  <option value="HRMS Implementation">HRMS &amp; Attendance Portal</option>
                  <option value="POSH Compliance">POSH Compliance &amp; Training</option>
                  <option value="HR Policy Audit">HR Policy &amp; Compensation Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Headcount &amp; Details</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Employee headcount, specific locations, or urgent timeline..."
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition-all"
              >
                Submit HR Quote Request →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
