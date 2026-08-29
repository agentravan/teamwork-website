import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GadgetOnRent | Laptop, Printer & IT Equipment Rental Gurugram',
  description:
    'Corporate laptop rentals (MacBook, Dell, ThinkPad), heavy-duty printers, IT event setups, servers, and Annual Maintenance Contracts (AMC) in Gurugram & Pan-India.',
  openGraph: {
    title: 'GadgetOnRent | Laptop & IT Rental Gurugram',
    description: 'Rent high-performance laptops, printers, and workstations for corporate teams.',
    url: 'https://teamworkgroup.in/gadget-on-rent',
    siteName: 'TeamWork Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GadgetOnRent | Corporate IT Equipment Rental',
    description: 'Short & long-term laptop, printer, and IT rentals in Gurugram.',
  },
};

export default function GadgetOnRentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    name: 'GadgetOnRent',
    parentOrganization: {
      '@type': 'Organization',
      name: 'TeamWork Group',
      slogan: 'together we can do so much',
    },
    description:
      'Corporate IT equipment rentals including laptops, desktops, heavy-duty printers, servers, event setups, and AMC services.',
    url: 'https://teamworkgroup.in/gadget-on-rent',
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
      'Laptop Rentals',
      'Printer & MFD Rentals',
      'Complete IT Event Setup',
      'Annual Maintenance Contracts (AMC)',
      'Server & Workstation Rental',
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
      <section className="relative bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              GadgetOnRent • Green Theme
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Flexible Corporate IT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Laptop &amp; Equipment Rental
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Equip your workforce with high-performance MacBooks, ThinkPads, Dell workstations, heavy-duty printers, and event IT infrastructure on monthly lease with zero CAPEX.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#lead-form"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all text-sm flex items-center gap-2"
              >
                <span>Get a Free Rental Quote</span>
                <span>→</span>
              </a>
              <a
                href="#services"
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
              >
                Explore Rental Catalog
              </a>
            </div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800 text-center sm:text-left">
              <div>
                <div className="text-2xl font-extrabold text-emerald-400">Zero CAPEX</div>
                <div className="text-xs text-slate-400">Flexible Monthly Leases</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-400">4-Hour SLA</div>
                <div className="text-xs text-slate-400">Replacement Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-400">Pan-India</div>
                <div className="text-xs text-slate-400">Doorstep Delivery &amp; Setup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            Hardware &amp; IT Services
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Enterprise IT Rental Solutions
          </h3>
          <p className="text-slate-600 text-sm">
            Scale your IT infrastructure on demand with top-tier hardware and maintenance support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6">
              💻
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">High-Perf Laptop Rentals</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Apple MacBook Pro / Air (M1, M2, M3 Series)</li>
              <li>Lenovo ThinkPad &amp; Dell Latitude business laptops</li>
              <li>Intel i5 / i7 / i9 &amp; 16GB / 32GB RAM configurations</li>
              <li>Pre-loaded OS, antivirus &amp; corporate images</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6">
              🖨️
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Heavy-Duty Printer Rentals</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>HP / Canon multi-function laser printers (MFD)</li>
              <li>High-speed network printing, scanning &amp; copying</li>
              <li>Free toner refills &amp; maintenance included</li>
              <li>Pay-per-page or flat monthly rental models</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6">
              🎤
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Complete IT Event Setup</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Short-term rentals for hackathons, seminars &amp; expos</li>
              <li>Temporary Wi-Fi routers, switches &amp; LAN cabling</li>
              <li>Large display screens, projectors &amp; AV gear</li>
              <li>On-site IT engineers for live event monitoring</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6">
              🔧
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Annual Maintenance (AMC)</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Comprehensive &amp; non-comprehensive AMC plans</li>
              <li>Preventive maintenance &amp; hardware health checks</li>
              <li>Prompt doorstep technician support in Gurugram/NCR</li>
              <li>Standby machine replacement during repairs</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6">
              🖥️
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Workstation &amp; Server Rental</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Heavy GPU workstations for AI, rendering &amp; CAD</li>
              <li>Rack &amp; tower servers (Dell PowerEdge / HP ProLiant)</li>
              <li>High-capacity RAM &amp; NVMe SSD storage rigs</li>
              <li>Custom hardware configuration tailored to workloads</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6">
              🚚
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Pan-India Doorstep Logistics</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Pre-configured devices shipped to remote employees</li>
              <li>Tamper-proof transit packaging</li>
              <li>Hassle-free return pickup when lease ends</li>
              <li>Asset tracking &amp; inventory report management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries & Use Cases */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 mb-10">
            Use Cases &amp; Rental Scenarios
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-emerald-100 text-center font-bold text-sm text-slate-800">
              🚀 Fast-Growing Tech Startups
            </div>
            <div className="bg-white p-5 rounded-xl border border-emerald-100 text-center font-bold text-sm text-slate-800">
              🏢 Corporate Office Expansion
            </div>
            <div className="bg-white p-5 rounded-xl border border-emerald-100 text-center font-bold text-sm text-slate-800">
              🎟️ Short-Term Hackathons &amp; Events
            </div>
            <div className="bg-white p-5 rounded-xl border border-emerald-100 text-center font-bold text-sm text-slate-800">
              🏡 Remote / Hybrid Workforces
            </div>
          </div>
        </div>
      </section>

      {/* Rental Tiers with Pricing Placeholders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            Rental Packages
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Equipment Rental Tiers
          </h3>
          <p className="text-slate-600 text-sm">
            Choose a standard rental tier or request custom bulk hardware leasing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tier 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-900">Essential Laptop</h4>
              <p className="text-xs text-slate-500 mt-1">Core i5 / 8GB RAM / 256GB SSD</p>
              <div className="my-6 p-3 bg-slate-100 rounded-xl text-center">
                <span className="text-xs font-bold text-emerald-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/mo</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ Ideal for general office &amp; sales</li>
                <li>✓ Windows 11 / Office pre-loaded</li>
                <li>✓ Replacement guarantee</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 2 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-emerald-600 shadow-md relative flex flex-col justify-between">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
              MOST REQUESTED
            </span>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Workstation Pro</h4>
              <p className="text-xs text-slate-500 mt-1">MacBook Pro M2/M3 or i7/32GB</p>
              <div className="my-6 p-3 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                <span className="text-xs font-bold text-emerald-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/mo</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ For developers, designers &amp; power users</li>
                <li>✓ High-res Retina / 4K support</li>
                <li>✓ 4-hour SLA tech support</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-900">Printer &amp; MFD Tier</h4>
              <p className="text-xs text-slate-500 mt-1">Heavy-duty network Laser Printer</p>
              <div className="my-6 p-3 bg-slate-100 rounded-xl text-center">
                <span className="text-xs font-bold text-emerald-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/mo</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ Print / Scan / Copy / Duplex</li>
                <li>✓ Free toner cartridges included</li>
                <li>✓ Maintenance on-call</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 4 */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-white">Custom IT Event Setup</h4>
              <p className="text-xs text-slate-400 mt-1">Bulk rentals for events &amp; expos</p>
              <div className="my-6 p-3 bg-slate-800 rounded-xl text-center border border-slate-700">
                <span className="text-xs font-bold text-emerald-400 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-white">Daily / Weekly Rates</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li>✓ 10 to 500+ laptop setups</li>
                <li>✓ On-site network &amp; engineer support</li>
                <li>✓ Custom software deployment</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Request Event Quote
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder Section */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-emerald-300 text-center space-y-3">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-mono font-bold px-3 py-1 rounded-md inline-block">
              [PLACEHOLDER: IT HARDWARE &amp; OFFICE SETUP PHOTO GALLERY]
            </span>
            <h4 className="font-bold text-slate-800">Hardware Fleet &amp; Workstation Setup Photos</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Replace this placeholder with high-quality photos of MacBook/ThinkPad inventory, enterprise printers, and temporary event setups.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            IT Manager Feedback
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900">What Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                [TESTIMONIAL PLACEHOLDER #{idx}]
              </span>
              <p className="text-xs text-slate-600 italic">
                &ldquo;[Insert client quote praising GadgetOnRent quick laptop delivery, excellent machine condition, and fast technician support.]&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  IT
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">[Client Name Placeholder]</div>
                  <div className="text-[10px] text-slate-500">[IT Head / Operations Manager, Company]</div>
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
            Frequently Asked Questions (GadgetOnRent)
          </h3>

          <div className="space-y-4">
            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>What is the minimum rental tenure for corporate laptops?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                We offer flexible tenures starting from 1 day for events up to 12 to 36 months for corporate employee leasing.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>What happens if a rented laptop requires hardware repair?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Our 4-hour SLA in Gurugram ensures an engineer inspects the device and provides an immediate standby machine if repairs take longer.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Do printer rentals include toner cartridges and maintenance?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes! All heavy-duty printer rentals include complete toner replacements, spare parts, and routine servicing at no extra cost.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Can devices be custom configured with corporate security software?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes, our technical team can pre-image devices with your company&apos;s OS build, VPN client, antivirus, and security policies before delivery.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Is a security deposit required for corporate equipment rental?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Security deposit terms vary based on company verification and lease volume. For established corporate entities, zero or minimal deposit options are available.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Vertical Lead Capture Form */}
      <section id="lead-form" className="py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              GadgetOnRent Lead Desk
            </span>
            <h3 className="text-3xl font-extrabold text-white">
              Get Your IT Equipment Rental Quote
            </h3>
            <p className="text-xs text-slate-400">
              Submit your hardware requirements and our Gurugram IT desk will share custom lease quotes.
            </p>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <form action="/api/lead" method="POST" className="space-y-4">
              <input type="hidden" name="vertical" value="GadgetOnRent" />

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Equipment Category</label>
                  <select
                    name="service_needed"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  >
                    <option value="Laptop Rentals">Laptop Rentals (MacBook / Dell / ThinkPad)</option>
                    <option value="Printer Rentals">Heavy-Duty Printer &amp; MFD Rentals</option>
                    <option value="Event IT Setup">Complete IT Event Setup</option>
                    <option value="AMC Support">Annual Maintenance Contracts (AMC)</option>
                    <option value="Workstation Rental">GPU Workstation &amp; Server Rental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Quantity &amp; Tenure</label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g. 15 laptops for 6 months"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Configuration Specifications</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Required RAM, processor specs, OS preference, or delivery address..."
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition-all"
              >
                Request Rental Quote →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
