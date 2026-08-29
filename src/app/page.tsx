import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TeamWork Group | Corporate HR Consulting, Hampers & Gadget Rentals Gurugram',
  description:
    'TeamWork Group ("together we can do so much") brings three corporate verticals under one brand umbrella: HR Consulting, GiftCraft Hampers, and GadgetOnRent.',
  openGraph: {
    title: 'TeamWork Group | Together We Can Do So Much',
    description:
      'Gurugram corporate group offering HR outsourcing, corporate hampers, and laptop rentals.',
    url: 'https://teamworkgroup.in',
    siteName: 'TeamWork Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeamWork Group | 3 Corporate Verticals',
    description: 'HR outsourcing, corporate hampers, and IT gadget rentals in Gurugram.',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    name: 'TeamWork Group',
    slogan: 'together we can do so much',
    description:
      'Gurugram-based multi-vertical group providing HR consulting, corporate gifting hampers, and IT equipment rentals.',
    url: 'https://teamworkgroup.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[Sector 99A]',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122505',
      addressCountry: 'IN',
    },
    areaServed: 'Pan-India',
    subOrganization: [
      { '@type': 'Organization', name: 'TeamWork HR Consulting' },
      { '@type': 'Organization', name: 'GiftCraft Hampers' },
      { '@type': 'Organization', name: 'GadgetOnRent' },
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
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 lg:py-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6">
            ✨ Gurugram Headquartered Corporate Group
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            One Trusted Umbrella. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-rose-400 to-emerald-400">
              Three Specialized Verticals.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            TeamWork Group <span className="text-slate-400 italic">&ldquo;together we can do so much&rdquo;</span> delivers end-to-end HR consulting, premium corporate gifting hampers, and flexible IT hardware rentals across India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a
              href="#verticals"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all text-sm flex items-center gap-2"
            >
              <span>Explore Our 3 Verticals</span>
              <span>↓</span>
            </a>
            <a
              href="#contact-form"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all text-sm"
            >
              Contact Group Desk
            </a>
          </div>

          {/* Group Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-16 text-left">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Our Vision</div>
              <h4 className="text-lg font-bold text-white">Simplifying Corporate Growth</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                To be the most reliable single-window operational partner for Indian enterprises, streamlining people, culture, and technology.
              </p>
            </div>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">Our Mission</div>
              <h4 className="text-lg font-bold text-white">Operational Excellence &amp; Trust</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empower businesses with 100% compliant HR workflows, memorable corporate gifting, and agile zero-CAPEX hardware rentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Parent Trust Badges Bar */}
      <section className="bg-slate-900 text-slate-200 py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div className="text-left">
                <div className="text-sm font-bold text-white">Pan-India Presence</div>
                <div className="text-xs text-slate-400">Serving 20,000+ PIN Codes</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🔒</span>
              <div className="text-left">
                <div className="text-sm font-bold text-white">100% Confidentiality &amp; Compliance</div>
                <div className="text-xs text-slate-400">DPDP Act &amp; Statutory Certified</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">⚡</span>
              <div className="text-left">
                <div className="text-sm font-bold text-white">Fast Turnaround Time</div>
                <div className="text-xs text-slate-400">Guaranteed SLA Responses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Vertical Feature Cards */}
      <section id="verticals" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Our Business Umbrella
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Three Verticals, One Standard of Excellence
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            Click on any vertical to view dedicated service offerings, pricing tiers, and FAQs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vertical Card 1: HR Consulting (Blue) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-blue-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-md shadow-blue-500/30">
                  👥
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Blue Theme
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  TeamWork HR Consulting
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-to-end HR outsourcing, payroll management, statutory labor compliance, executive recruitment, HRMS, and POSH audits.
                </p>
              </div>

              <ul className="text-xs text-slate-600 space-y-2.5 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Payroll &amp; TDS Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> PF / ESI / Labor Law Compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Executive Recruitment &amp; Staffing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Cloud HRMS &amp; Attendance Portal
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/hr-consulting"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs text-center block shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Visit HR Consulting Landing Page</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Vertical Card 2: GiftCraft Hampers (Rose/Pink) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-rose-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center text-2xl font-bold shadow-md shadow-rose-500/30">
                  🎁
                </div>
                <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Red/Pink Theme
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors">
                  GiftCraft Hampers
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Curated corporate gifting hampers, Diwali &amp; festive boxes, customized employee onboarding welcome kits, and client gifts.
                </p>
              </div>

              <ul className="text-xs text-slate-600 space-y-2.5 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✓</span> Diwali &amp; Festive Gift Hampers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✓</span> New Joiner Onboarding Welcome Kits
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✓</span> Laser Engraved Custom Logo Branding
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✓</span> Pan-India Direct Home Delivery
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/giftcraft"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 rounded-xl text-xs text-center block shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Visit GiftCraft Landing Page</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Vertical Card 3: GadgetOnRent (Green) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold shadow-md shadow-emerald-500/30">
                  💻
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Green Theme
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  GadgetOnRent
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flexible corporate laptop rentals (MacBook, Dell, ThinkPad), heavy-duty printers, event IT setups, servers, and AMC services.
                </p>
              </div>

              <ul className="text-xs text-slate-600 space-y-2.5 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> MacBook, ThinkPad &amp; Dell Rentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Heavy-Duty Laser Printer Rentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Complete Hackathon &amp; Event IT Setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> 4-Hour SLA Technician Support
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/gadget-on-rent"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-xs text-center block shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Visit GadgetOnRent Landing Page</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Photo & Bio Placeholder */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-slate-200 border-2 border-dashed border-slate-400 flex items-center justify-center text-center p-3 text-slate-500 font-mono text-[10px] flex-shrink-0">
              [PLACEHOLDER: FOUNDER PHOTO]
            </div>

            <div className="space-y-3 text-center md:text-left">
              <span className="bg-slate-100 text-slate-700 text-[10px] font-mono font-bold px-2.5 py-1 rounded">
                [PLACEHOLDER: FOUNDER BIO BLOCK]
              </span>
              <h4 className="text-xl font-bold text-slate-900">[Founder / Leadership Name]</h4>
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                Managing Director, TeamWork Group
              </p>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;[Insert founder statement about building TeamWork Group as a multi-vertical operational backbone for enterprises across India, driving quality in HR, corporate gifting, and IT infrastructure.]&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Placeholder Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="bg-slate-200 text-slate-800 text-[10px] font-mono font-bold px-3 py-1 rounded-md">
            [PLACEHOLDER: CLIENT LOGOS GRID]
          </span>
          <h4 className="text-xl font-bold text-slate-900 mt-2">Trusted by Leading Enterprises</h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-20 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 text-slate-400 font-mono text-[10px] text-center"
            >
              [Client Logo {i}]
            </div>
          ))}
        </div>
      </section>

      {/* Unified Parent Contact / Lead Form */}
      <section id="contact-form" className="py-20 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
              Unified Group Lead Desk
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Connect with TeamWork Group
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Select the relevant vertical or submit a general inquiry for your business.
            </p>
          </div>

          <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            <form action="/api/lead" method="POST" className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Select Business Vertical *
                </label>
                <select
                  name="vertical"
                  required
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3.5 py-3 text-sm font-medium"
                >
                  <option value="TeamWork HR Consulting">TeamWork HR Consulting (Blue Theme)</option>
                  <option value="GiftCraft Hampers">GiftCraft Hampers (Red/Pink Theme)</option>
                  <option value="GadgetOnRent">GadgetOnRent (Green Theme)</option>
                  <option value="General Group Inquiry">General Group Inquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company Name"
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
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
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Requirement Details</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can TeamWork Group help your enterprise? Mention headcount, hamper counts, or hardware specs..."
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 rounded-xl text-sm shadow-xl transition-all"
              >
                Submit Inquiry to Group Desk →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
