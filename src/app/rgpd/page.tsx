import Link from "next/link";
import { ChevronLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Privacy Policy & GDPR Compliance
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Last updated: March 2026
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          This privacy policy outlines how SkillsPoints collects, processes, and protects your personal data in accordance with the General Data Protection Regulation (GDPR) and international privacy laws.
        </p>

        <div className="space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Data Collected
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We collect only the essential information necessary for operating the learning platform: your email address, full name, encrypted password, learning progress, and point transactions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Purpose of Processing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your personal data is strictly utilized to create and maintain your learner account, secure authentication access, deliver micro-courses, issue completion badges, process reward marketplace redemptions, and improve our services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Data Retention Period
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Personal data is safely stored for as long as your SkillsPoints account remains active. You may request account deletion or data export at any time through your profile settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Your Rights Under GDPR
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Under GDPR, you have the right to access, rectify, delete, restrict processing, and request portability of your data. You may exercise these rights directly within your account settings or by contacting our Data Protection Officer.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">
              5. Contact DPO
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For any inquiries regarding data protection or to submit a privacy request, please contact our Data Protection Officer:
            </p>
            <a
              href="mailto:dpo@skillspoints.com"
              className="inline-block mt-2 font-bold text-blue-600 hover:underline text-sm"
            >
              dpo@skillspoints.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

