import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GiftCraft Hampers | Premium Corporate Gifting & Onboarding Kits Gurugram',
  description:
    'Custom corporate hampers, employee onboarding kits, Diwali & festive gift hampers, executive branding, and client appreciation gifts across Pan-India.',
  openGraph: {
    title: 'GiftCraft Hampers | Corporate Gifting & Welcome Kits',
    description: 'Elevate corporate relationships with custom hampers & employee welcome kits.',
    url: 'https://teamworkgroup.in/giftcraft',
    siteName: 'TeamWork Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GiftCraft Hampers | Corporate Gifting Gurugram',
    description: 'Custom corporate hampers and onboarding kits by TeamWork Group.',
  },
};

export default function GiftCraftPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    name: 'GiftCraft Hampers',
    parentOrganization: {
      '@type': 'Organization',
      name: 'TeamWork Group',
      slogan: 'together we can do so much',
    },
    description:
      'Premium corporate gifting hampers, festive packages, onboarding kits, and custom branded client gifts.',
    url: 'https://teamworkgroup.in/giftcraft',
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
      'Festive Hampers',
      'Employee Onboarding Kits',
      'Custom Executive Branding',
      'Client Appreciation Hampers',
      'Milestone Celebration Boxes',
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
      <section className="relative bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-600/20 via-transparent to-transparent opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-600/20 text-rose-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/30">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              GiftCraft Hampers • Red/Pink Theme
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Delight Employees &amp; Clients with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
                Custom Corporate Hampers
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Curated festive hampers, employee onboarding kits, executive merchandise, and luxury client gifts with custom corporate branding and doorstep Pan-India delivery.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#lead-form"
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all text-sm flex items-center gap-2"
              >
                <span>Get a Free Quote</span>
                <span>→</span>
              </a>
              <a
                href="#services"
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
              >
                Explore Hamper Collections
              </a>
            </div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800 text-center sm:text-left">
              <div>
                <div className="text-2xl font-extrabold text-rose-400">Pan-India</div>
                <div className="text-xs text-slate-400">Doorstep Logistics</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-rose-400">100% Custom</div>
                <div className="text-xs text-slate-400">Corporate Logo Branding</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-rose-400">Bulk Discounts</div>
                <div className="text-xs text-slate-400">Tiered Volume Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Hamper Categories
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Curated Gifting &amp; Welcome Solutions
          </h3>
          <p className="text-slate-600 text-sm">
            Handcrafted hampers designed to strengthen corporate culture and client loyalty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6">
              🎁
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Festive &amp; Holiday Hampers</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Diwali, New Year &amp; Holi luxury hampers</li>
              <li>Gourmet dry fruits, artisanal chocolates &amp; sweets</li>
              <li>Eco-friendly brass diyas &amp; scented candles</li>
              <li>Customized festive greeting cards with executive notes</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6">
              🎒
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Employee Onboarding Kits</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Welcome boxes for new team joiners</li>
              <li>Custom branded laptop sleeves &amp; tech accessories</li>
              <li>Thermal water bottles, hoodies &amp; premium notebooks</li>
              <li>Pre-packed &amp; shipped direct to employee homes</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6">
              ✨
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Custom Executive Branding</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Laser engraving &amp; UV printing with your logo</li>
              <li>Custom ribboning, box colors &amp; sleeve art</li>
              <li>Premium leatherette desk organizers</li>
              <li>Bespoke packaging matching brand guidelines</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6">
              🤝
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Client Appreciation Hampers</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>High-value client retention &amp; partner gifts</li>
              <li>Curated tea/coffee blends &amp; luxury desk gadgets</li>
              <li>Personalized thank-you messages from leadership</li>
              <li>Delivered with premium white-glove presentation</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6">
              🏆
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Milestone &amp; Award Boxes</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Work anniversary &amp; promotion celebration boxes</li>
              <li>Top performer trophy &amp; reward hampers</li>
              <li>Custom voucher &amp; gift card integrations</li>
              <li>Employee recognition program fulfillment</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold mb-6">
              📦
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Bulk Logistics &amp; Warehousing</h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
              <li>Pan-India individual address dispatching</li>
              <li>Real-time tracking for bulk orders</li>
              <li>Climate-controlled storage for perishables</li>
              <li>Dedicated account support for high-volume orders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries & Use Cases */}
      <section className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 mb-10">
            Gifting Occasions &amp; Use Cases
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-rose-100 text-center font-bold text-sm text-slate-800">
              🪔 Diwali &amp; New Year Festive Gifting
            </div>
            <div className="bg-white p-5 rounded-xl border border-rose-100 text-center font-bold text-sm text-slate-800">
              💼 New Employee Welcome Kits
            </div>
            <div className="bg-white p-5 rounded-xl border border-rose-100 text-center font-bold text-sm text-slate-800">
              🥂 CXO &amp; VIP Partner Appreciation
            </div>
            <div className="bg-white p-5 rounded-xl border border-rose-100 text-center font-bold text-sm text-slate-800">
              🎉 Annual Townhall &amp; Event Giveaways
            </div>
          </div>
        </div>
      </section>

      {/* Hamper Tiers with Pricing Placeholders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Gifting Tiers
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Hamper Engagement Tiers
          </h3>
          <p className="text-slate-600 text-sm">
            Select a tier or request custom curation matching your budget per hamper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tier 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-900">Starter Box</h4>
              <p className="text-xs text-slate-500 mt-1">Essential employee welcome &amp; event box</p>
              <div className="my-6 p-3 bg-slate-100 rounded-xl text-center">
                <span className="text-xs font-bold text-rose-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/box</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ Branded notebook &amp; pen</li>
                <li>✓ Insulated coffee mug</li>
                <li>✓ Custom welcome card</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 2 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-rose-600 shadow-md relative flex flex-col justify-between">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
              POPULAR CHOICE
            </span>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Executive Hamper</h4>
              <p className="text-xs text-slate-500 mt-1">Premium onboarding &amp; festive hamper</p>
              <div className="my-6 p-3 bg-rose-50 rounded-xl text-center border border-rose-200">
                <span className="text-xs font-bold text-rose-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/hamper</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ Branded backpack / tech pouch</li>
                <li>✓ Gourmet dry fruits &amp; chocolates</li>
                <li>✓ Stainless thermal bottle</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-slate-900">Premium Delight</h4>
              <p className="text-xs text-slate-500 mt-1">CXO &amp; key client appreciation hamper</p>
              <div className="my-6 p-3 bg-slate-100 rounded-xl text-center">
                <span className="text-xs font-bold text-rose-600 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-slate-900">Starting from ₹___/hamper</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 mb-6">
                <li>✓ Smart desk gadget / audio speaker</li>
                <li>✓ Artisanal food &amp; tea gift set</li>
                <li>✓ Rigid magnetic box with metallic logo</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Get Quote
            </a>
          </div>

          {/* Tier 4 */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-white">Bespoke Custom</h4>
              <p className="text-xs text-slate-400 mt-1">Bulk festive &amp; enterprise projects</p>
              <div className="my-6 p-3 bg-slate-800 rounded-xl text-center border border-slate-700">
                <span className="text-xs font-bold text-rose-400 block">[PRICING PLACEHOLDER]</span>
                <span className="text-lg font-extrabold text-white">Custom Curation</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li>✓ 100% tailor-made product selection</li>
                <li>✓ Multi-location direct house dispatch</li>
                <li>✓ Dedicated sample approval workflow</li>
              </ul>
            </div>
            <a href="#lead-form" className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-xl text-xs text-center block">
              Request Curation
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder Section */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-rose-300 text-center space-y-3">
            <span className="bg-rose-100 text-rose-800 text-xs font-mono font-bold px-3 py-1 rounded-md inline-block">
              [PLACEHOLDER: CORPORATE HAMPER SHOWCASE PHOTO GALLERY]
            </span>
            <h4 className="font-bold text-slate-800">High-Res Gift Box &amp; Onboarding Kit Photos</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Replace this placeholder with product photography of festive gift boxes, branded merchandise items, and unboxing gallery images.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Client Appreciation
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900">What Corporate Buyers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="bg-rose-100 text-rose-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                [TESTIMONIAL PLACEHOLDER #{idx}]
              </span>
              <p className="text-xs text-slate-600 italic">
                &ldquo;[Insert client quote praising GiftCraft Hampers packaging quality, custom logo finish, and on-time Pan-India delivery during festive season.]&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  G
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">[Client Name Placeholder]</div>
                  <div className="text-[10px] text-slate-500">[Admin Head / Procurement Manager, Company]</div>
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
            Frequently Asked Questions (GiftCraft Hampers)
          </h3>

          <div className="space-y-4">
            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>What is the minimum order quantity (MOQ) for custom branded hampers?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Our standard MOQ for custom branded hampers and onboarding kits is 25 units. For non-customized stock hampers, smaller order sizes are available.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Can you ship hampers directly to individual employee addresses across India?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes! We handle individual doorstep delivery across 20,000+ PIN codes in India with real-time tracking updates provided to your HR/Admin team.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Can we request a physical sample box before placing a bulk order?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes, sample kits can be dispatched to your Gurugram or pan-India office within 48 hours upon approval of your bulk quote request.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>How much lead time is needed for Diwali corporate gifting?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                We recommend booking Diwali orders 3 to 4 weeks in advance to ensure smooth custom printing and guaranteed delivery before festival dates.
              </p>
            </details>

            <details className="group bg-slate-50 p-5 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer">
                <span>Are eco-friendly and sustainable gift options available?</span>
                <span className="transition group-open:rotate-180">👇</span>
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Yes, we offer green gifting collections including seed-paper notebooks, bamboo desk items, organic cotton bags, and biodegradable packaging.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Vertical Lead Capture Form */}
      <section id="lead-form" className="py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">
              GiftCraft Hampers Lead Desk
            </span>
            <h3 className="text-3xl font-extrabold text-white">
              Request Your Corporate Gifting Catalog &amp; Quote
            </h3>
            <p className="text-xs text-slate-400">
              Fill in your requirement details and our gifting specialists will share sample options &amp; bulk pricing.
            </p>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <form action="/api/lead" method="POST" className="space-y-4">
              <input type="hidden" name="vertical" value="GiftCraft Hampers" />

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
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Occasion / Category</label>
                  <select
                    name="service_needed"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  >
                    <option value="Festive Hampers">Diwali &amp; Festive Hampers</option>
                    <option value="Employee Onboarding Kits">Employee Onboarding Kits</option>
                    <option value="Client Appreciation">Client Appreciation Gifts</option>
                    <option value="Rewards & Recognition">Milestone &amp; Award Boxes</option>
                    <option value="Custom Branding">Custom Merchandising</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g. 50 hampers, 200 kits"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Budget per Hamper / Remarks</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Target budget range per unit, delivery locations, or specific items required..."
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition-all"
              >
                Request GiftCraft Catalog &amp; Quote →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
