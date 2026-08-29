import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TeamWork Group',
  description:
    'Privacy Policy and data protection compliance information for TeamWork Group and its verticals (TeamWork HR Consulting, GiftCraft Hampers, GadgetOnRent).',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
          Privacy Policy
        </h1>
        <div className="text-xs text-slate-500 mb-8 border-b border-slate-100 pb-4">
          Last Updated: August 2026 • Compliant with Digital Personal Data Protection (DPDP) Act &amp; Ad Network Requirements
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Introduction</h2>
            <p>
              TeamWork Group (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating under the parent tagline <em>&ldquo;together we can do so much&rdquo;</em> from [Sector 99A, Gurugram-122505], respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, process, store, and safeguard information submitted across our brand website and sub-brand verticals:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>TeamWork HR Consulting</strong> (HR outsourcing, payroll, recruitment, compliance)</li>
              <li><strong>GiftCraft Hampers</strong> (Corporate gifting hampers &amp; onboarding kits)</li>
              <li><strong>GadgetOnRent</strong> (Laptop, printer, and IT equipment rentals)</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide when filling out lead quote forms, requesting consultation, or contacting us:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Full name, official email address, phone number, and company name.</li>
              <li><strong>Inquiry Details:</strong> Specific service requirements, headcount estimates, hamper quantities, or gadget specifications.</li>
              <li><strong>Technical &amp; Analytics Data:</strong> IP address, browser type, referral URLs, and UTM campaign tracking parameters to measure Google/Meta ad performance.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Purpose of Processing &amp; Legal Basis</h2>
            <p>We process your data strictly for legitimate business operations:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fulfilling quote requests and delivering custom proposals.</li>
              <li>Communicating with you regarding HR consulting, corporate gifting, or IT rental agreements.</li>
              <li>Improving website speed, ad relevancy, and client experience.</li>
              <li>Complying with applicable statutory regulations in India.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. Confidentiality &amp; Data Security</h2>
            <p>
              We implement strict technical and organizational security measures. We do NOT sell, rent, or trade your personal information to third parties. Data is shared only with trusted backend service providers bound by strict non-disclosure obligations (e.g., secure lead routing webhooks and email notification services).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">5. Cookies &amp; Tracking Pixels</h2>
            <p>
              Our website uses cookies and tracking technologies (such as Google Analytics 4, Google Ads tags, and Meta Pixel) to analyze traffic and measure ad conversions. You can disable cookies through your web browser settings at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">6. Your Rights under India DPDP Act</h2>
            <p>
              You have the right to request access to your personal data, request correction of inaccurate data, or request erasure of your contact details from our lead database. To exercise these rights, please contact our Privacy Team at:
            </p>
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800">
              Email: contact@teamworkgroup.in<br />
              Address: TeamWork Group Privacy Office, [Sector 99A, Gurugram-122505]
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
