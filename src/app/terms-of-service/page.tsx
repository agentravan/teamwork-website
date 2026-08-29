import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | TeamWork Group',
  description:
    'Terms of Service and legal agreements governing the use of TeamWork Group website and service verticals.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
          Terms of Service
        </h1>
        <div className="text-xs text-slate-500 mb-8 border-b border-slate-100 pb-4">
          Last Updated: August 2026 • TeamWork Group (Gurugram)
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the TeamWork Group website and any of its business verticals (TeamWork HR Consulting, GiftCraft Hampers, GadgetOnRent), you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services or submitting lead quote requests.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Service Proposals &amp; Pricing Placeholders</h2>
            <p>
              Information displayed on this website, including pricing indications (&ldquo;Starting from ₹___&rdquo;) and engagement package tiers, is provided for informational and quote-estimation purposes. Final binding terms, service level agreements (SLAs), hamper delivery schedules, or IT rental lease contracts will be formalized in written agreements executed between TeamWork Group and the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Business Verticals &amp; Scope</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>TeamWork HR Consulting:</strong> HR outsourcing, payroll management, statutory compliance, and recruitment services are executed under custom Master Services Agreements (MSA).</li>
              <li><strong>GiftCraft Hampers:</strong> Corporate gifting hampers, customized onboarding kits, and festive branding are subject to stock availability and approved sample sign-offs.</li>
              <li><strong>GadgetOnRent:</strong> IT equipment rentals (laptops, printers, workstations) are subject to security deposits, lease terms, and AMC support schedules.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. Intellectual Property</h2>
            <p>
              All brand elements, parent tagline (&ldquo;together we can do so much&rdquo;), sub-brand logos, web design layouts, graphics, and text content belong exclusively to TeamWork Group.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted under applicable laws of India, TeamWork Group shall not be liable for indirect, incidental, or consequential damages arising from website access or temporary service disruptions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">6. Contact Information</h2>
            <p>For legal inquiries or terms clarification, reach out to:</p>
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800">
              TeamWork Group Legal Desk<br />
              Email: contact@teamworkgroup.in<br />
              Location: [Sector 99A, Gurugram-122505]
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
