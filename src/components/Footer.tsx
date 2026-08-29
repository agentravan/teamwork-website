import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Group Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                TW
              </div>
              <div className="font-extrabold text-2xl tracking-tight text-white">
                TeamWork <span className="text-blue-500">Group</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              &ldquo;together we can do so much&rdquo; — Gurugram&apos;s premier multi-vertical corporate partner powering HR outsourcing, corporate gifting hampers, and IT gadget rentals under one trusted brand umbrella.
            </p>

            {/* Address & GST placeholders */}
            <div className="space-y-2 text-xs text-slate-400 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">🏢 Office:</span>
                <span>Corporate Office: [Sector 99A, Gurugram-122505]</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">📄 Registration:</span>
                <span>GSTIN: [To be added]</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✉️ Custom Email:</span>
                <a href="mailto:contact@teamworkgroup.in" className="text-blue-400 hover:underline">
                  contact@teamworkgroup.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">📞 Support Phone:</span>
                <span>+91 98XXX XXXXX / +91 124 XXXXXXX [Placeholder]</span>
              </div>
            </div>
          </div>

          {/* Col 2: HR Consulting Vertical */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              HR Consulting
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/hr-consulting" className="hover:text-blue-400 transition-colors">
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link href="/hr-consulting" className="hover:text-blue-400 transition-colors">
                  Recruitment & Executive Search
                </Link>
              </li>
              <li>
                <Link href="/hr-consulting" className="hover:text-blue-400 transition-colors">
                  Statutory HR Compliance
                </Link>
              </li>
              <li>
                <Link href="/hr-consulting" className="hover:text-blue-400 transition-colors">
                  HRMS & Attendance Portal
                </Link>
              </li>
              <li>
                <Link href="/hr-consulting" className="hover:text-blue-400 transition-colors">
                  POSH & Policy Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: GiftCraft Hampers Vertical */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              GiftCraft Hampers
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/giftcraft" className="hover:text-rose-400 transition-colors">
                  Festive & Holiday Hampers
                </Link>
              </li>
              <li>
                <Link href="/giftcraft" className="hover:text-rose-400 transition-colors">
                  Employee Onboarding Kits
                </Link>
              </li>
              <li>
                <Link href="/giftcraft" className="hover:text-rose-400 transition-colors">
                  Custom Executive Branding
                </Link>
              </li>
              <li>
                <Link href="/giftcraft" className="hover:text-rose-400 transition-colors">
                  Client & Partner Gifts
                </Link>
              </li>
              <li>
                <Link href="/giftcraft" className="hover:text-rose-400 transition-colors">
                  Milestone Celebration Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: GadgetOnRent Vertical */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              GadgetOnRent
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/gadget-on-rent" className="hover:text-emerald-400 transition-colors">
                  Laptop & Workstation Rental
                </Link>
              </li>
              <li>
                <Link href="/gadget-on-rent" className="hover:text-emerald-400 transition-colors">
                  Heavy-Duty Printer Rental
                </Link>
              </li>
              <li>
                <Link href="/gadget-on-rent" className="hover:text-emerald-400 transition-colors">
                  Complete IT Event Setup
                </Link>
              </li>
              <li>
                <Link href="/gadget-on-rent" className="hover:text-emerald-400 transition-colors">
                  Annual Maintenance (AMC)
                </Link>
              </li>
              <li>
                <Link href="/gadget-on-rent" className="hover:text-emerald-400 transition-colors">
                  Server & Networking Rental
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Social Placeholders */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TeamWork Group. All rights reserved. Operating in Gurugram & Pan-India.
          </div>

          {/* Social Links Placeholders */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer" title="LinkedIn Placeholder">
              [LinkedIn]
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" title="Twitter/X Placeholder">
              [Twitter/X]
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" title="Instagram Placeholder">
              [Instagram]
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" title="Facebook Placeholder">
              [Facebook]
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 underline underline-offset-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
