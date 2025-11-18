/* eslint-disable react/no-unescaped-entities */

"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
    { id: "introduction", title: "1. Introduction" },
    { id: "definitions", title: "2. Definitions" },
    { id: "scope", title: "3. Scope / Applicability" },
    { id: "principles", title: "4. Principles of Data Processing" },
    { id: "lawful-bases", title: "5. Lawful Bases for Processing" },
    { id: "what-we-collect", title: "6. What Data We Collect" },
    { id: "purposes", title: "7. Purposes of Processing" },
    { id: "sharing", title: "8. Sharing / Disclosure of Personal Data" },
    { id: "transfers", title: "9. Cross-Border Transfers" },
    { id: "rights", title: "10. Data Subject Rights" },
    { id: "cookies", title: "11. Cookies, Tracking and Automated Processing" },
    { id: "retention", title: "12. Data Retention" },
    { id: "security", title: "13. Security of Personal Data" },
    { id: "dpo", title: "14. Data Protection Officer & Contact" },
    { id: "changes", title: "15. Changes to this Policy" },
    { id: "complaints", title: "16. Complaints & Remedies" },
    { id: "misc", title: "17. Miscellaneous" },
] as const;

export default function PrivacyPolicy() {
   const effectiveDate = "01 Nov 2025";
    const lastReviewed = "18 Nov 2025";

    const [active, setActive] = useState<string>(SECTIONS[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) =>
                        a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1
                    );
                if (visible[0]?.target)
                    setActive((visible[0].target as HTMLElement).id);
            },
            { rootMargin: "-100px 0px -60% 0px", threshold: [0, 0.2, 0.6] }
        );
        SECTIONS.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const jump = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 antialiased">
            <div className="mx-auto mt-24 md:mt-32 max-w-7xl px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                        Aso Realty Privacy Policy
                    </h1>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500">
                        How we collect, use and protect your personal data.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
                    <span className="rounded-full border border-slate-200 px-2.5 py-1 bg-white text-slate-600">
                        Effective: {effectiveDate}
                    </span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="rounded-full border border-slate-200 px-2.5 py-1 bg-white text-slate-600">
                        Last reviewed: {lastReviewed}
                    </span>
                    <button
                        onClick={() => window.print()}
                        className="ml-1 rounded-lg border cursor-pointer border-slate-200 px-3 py-1.5 text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 active:scale-[.98] transition"
                    >
                        Print / Save PDF
                    </button>
                </div>
            </div>

            <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8">
                <aside className="lg:sticky lg:top-20 h-max">
                    <nav className="rounded-2xl  bg-white/90 backdrop-blur-sm p-4 shadow">
                        <p className="px-1 pb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                            Table of contents
                        </p>
                        <ul className="space-y-1.5 text-[13px] leading-snug ">
                            {SECTIONS.map((s) => (
                                <li key={s.id}>
                                    <button
                                        onClick={() => jump(s.id)}
                                        className={
                                            "w-full text-left rounded px-2.5 py-3 transition " +
                                            (active === s.id
                                                ? "bg-[#902830] text-slate-50 shadow-sm "
                                                : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900")
                                        }
                                    >
                                        {s.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white/90 p-4 text-[12px] leading-relaxed text-slate-600 shadow-sm">
                        <p>
                            <span className="font-medium text-slate-700">Controller:</span>{" "}
                            Aso Realty
                        </p>
                        <p className="mt-1">
                            <span className="font-medium text-slate-700">
                                Jurisdiction:
                            </span>{" "}
                            Nigeria (NDPA 2023)
                        </p>
                    </div>
                </aside>

                <article className="space-y-8 text-[0.95rem] leading-relaxed text-slate-800">
                    <CardSection id="introduction" title="1. Introduction">
                        <p>
                            Aso Realty (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
                            is committed to protecting the privacy and security of personal
                            data of all individuals (&ldquo;Data Subjects&rdquo;) whose data
                            we handle in connection with our real estate operations in
                            Nigeria. We comply with the Nigeria Data Protection Act, 2023
                            (NDPA) and guidance from the Nigeria Data Protection Commission
                            (NDPC).
                        </p>
                        <p>
                            This Privacy Policy explains how we collect, use, store, share,
                            transfer, and otherwise process your personal data, what rights
                            you have, and how you may exercise them.
                        </p>
                    </CardSection>

                    <CardSection id="definitions" title="2. Definitions">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>
                                <b>Personal Data</b>: information relating to an identifiable
                                natural person as defined under the NDPA.
                            </li>
                            <li>
                                <b>Sensitive Personal Data</b>: biometric, genetic, health data,
                                religious or political beliefs and similar special categories.
                            </li>
                            <li>
                                <b>Data Controller</b>: entity determining purposes and means of
                                processing personal data.
                            </li>
                            <li>
                                <b>Data Processor</b>: entity processing personal data for the
                                controller.
                            </li>
                            <li>
                                <b>Data Subject</b>: the identifiable natural person whose data
                                is processed.
                            </li>
                            <li>
                                <b>Consent</b>: freely given, specific, informed and unambiguous
                                indication of wishes.
                            </li>
                        </ul>
                    </CardSection>

                    <CardSection id="scope" title="3. Scope / Applicability">
                        <p>
                            This policy applies to all personal data we collect and process in
                            Nigeria or from Data Subjects in Nigeria, via online channels
                            (website, apps), offline channels (office visits, paper forms),
                            service delivery, and marketing contexts.
                        </p>
                    </CardSection>

                    <CardSection id="principles" title="4. Principles of Data Processing">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>Lawfulness, fairness and transparency</li>
                            <li>Purpose limitation</li>
                            <li>Data minimization</li>
                            <li>Accuracy</li>
                            <li>Storage limitation</li>
                            <li>Security, integrity and confidentiality</li>
                            <li>Accountability</li>
                        </ul>
                    </CardSection>

                    <CardSection id="lawful-bases" title="5. Lawful Bases for Processing">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>Consent</li>
                            <li>Contract</li>
                            <li>Legal obligation</li>
                            <li>Legitimate interests (balanced against your rights)</li>
                            <li>Vital interests</li>
                            <li>Additional safeguards for Sensitive Personal Data</li>
                        </ul>
                    </CardSection>

                    <CardSection id="what-we-collect" title="6. What Data We Collect">
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/60">
                            <table className="w-full text-[13px] border-separate border-spacing-0">
                                <thead>
                                    <tr className="bg-slate-100/80">
                                        <th className="p-3 text-left font-semibold text-slate-700">
                                            Category
                                        </th>
                                        <th className="p-3 text-left font-semibold text-slate-700">
                                            Examples
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            k: "Identification & Contact Data",
                                            v: "Name, address, phone, email, national ID/passport, utility bill address",
                                        },
                                        {
                                            k: "Transactional Data",
                                            v: "Property interest, ownership details, financial info, payment history",
                                        },
                                        {
                                            k: "Employment Data",
                                            v: "CV, education, certifications, references",
                                        },
                                        {
                                            k: "Sensitive Personal Data",
                                            v: "Health data (if disclosed), biometric data (if used), religious beliefs (if provided)",
                                        },
                                        {
                                            k: "Technical & Usage Data",
                                            v: "IP, device/browser type, cookies, site usage",
                                        },
                                        {
                                            k: "Marketing & Preferences",
                                            v: "Communication preferences, opt-ins, survey responses",
                                        },
                                    ].map((r, i) => (
                                        <tr
                                            key={r.k}
                                            className={i % 2 ? "bg-white" : "bg-slate-50/60"}
                                        >
                                            <td className="p-3 align-top font-medium text-slate-800">
                                                {r.k}
                                            </td>
                                            <td className="p-3 align-top text-slate-700">{r.v}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardSection>

                    <CardSection id="purposes" title="7. Purposes of Processing">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>
                                Provide real estate services: listings, viewings, sales,
                                rentals, management
                            </li>
                            <li>Manage client relationships and communications</li>
                            <li>Evaluate and process applications</li>
                            <li>Due diligence and background checks where required</li>
                            <li>Security, fraud prevention, identity verification</li>
                            <li>Marketing with consent</li>
                            <li>Legal and regulatory compliance</li>
                            <li>Complaints handling, dispute resolution, enforcement of terms</li>
                        </ul>
                    </CardSection>

                    <CardSection
                        id="sharing"
                        title="8. Sharing / Disclosure of Personal Data"
                    >
                        <p>
                            We may disclose personal data to employees and service providers
                            under binding obligations; to third parties such as mortgage
                            providers, surveyors, legal advisors, government authorities; to
                            prospective tenants/buyers/landlords as necessary; during
                            corporate transactions; and when required by law.
                        </p>
                    </CardSection>

                    <CardSection id="transfers" title="9. Cross-Border Transfers">
                        <p>
                            Where data is transferred outside Nigeria, we ensure an adequate
                            level of protection or implement appropriate safeguards (e.g.,
                            standard contractual clauses, binding corporate rules, or
                            NDPC-approved mechanisms) and will inform you of the safeguards in
                            place.
                        </p>
                    </CardSection>

                    <CardSection id="rights" title="10. Data Subject Rights">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>Right to be informed</li>
                            <li>Right of access</li>
                            <li>Right to rectification</li>
                            <li>Right to object (including direct marketing)</li>
                            <li>Right to erasure</li>
                            <li>Right to data portability (where applicable)</li>
                            <li>Right to withdraw consent</li>
                            <li>Rights regarding automated decision-making</li>
                        </ul>
                        <p className="mt-2 text-slate-700">
                            Use the contact in Section 14 to exercise your rights.
                        </p>
                    </CardSection>

                    <CardSection
                        id="cookies"
                        title="11. Cookies, Tracking and Automated Processing"
                    >
                        <p>
                            We use essential cookies and, with your consent, analytics /
                            marketing cookies. On first visit you'll see a cookie banner to
                            accept or reject non-essential cookies. If automated
                            decision-making or profiling is used, we will disclose the logic
                            involved and your rights.
                        </p>
                    </CardSection>

                    <CardSection id="retention" title="12. Data Retention">
                        <p>
                            We retain personal data only as long as necessary for stated
                            purposes or as required by law. When no longer needed, data will
                            be securely deleted or anonymized. Example periods: property
                            transaction records for [Insert Period] years; marketing data
                            until opt-out; employee records per employment/tax law.
                        </p>
                    </CardSection>

                    <CardSection id="security" title="13. Security of Personal Data">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>Access controls, encryption where appropriate, secure servers</li>
                            <li>Secure physical storage with restricted access</li>
                            <li>Employee training on confidentiality and data protection</li>
                            <li>
                                Incident response for data breaches, with notifications per NDPA
                                where required
                            </li>
                        </ul>
                    </CardSection>

                    <CardSection id="dpo" title="14. Data Protection Officer & Contact">
                        <div className="grid sm:grid-cols-2 gap-4 text-[0.9rem]">
                            <div className="space-y-1.5">
                                <p>
                                    <span className="font-medium text-slate-800">Name:</span>{" "}
                                    _______________________
                                </p>
                                <p>
                                    <span className="font-medium text-slate-800">Email:</span>{" "}
                                    _______________________
                                </p>
                                <p>
                                    <span className="font-medium text-slate-800">Phone:</span>{" "}
                                    _______________________
                                </p>
                                <p>
                                    <span className="font-medium text-slate-800">Address:</span>{" "}
                                    _____________________
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-[12px] text-slate-600">
                                Prefer email for authentication of your request. We may ask for
                                identity verification.
                            </div>
                        </div>
                    </CardSection>

                    <CardSection id="changes" title="15. Changes to this Policy">
                        <p>
                            We may update this policy to reflect legal, business, or
                            technological changes. Updates will be posted here with an updated
                            effective date. For material changes we may provide additional
                            notice.
                        </p>
                    </CardSection>

                    <CardSection id="complaints" title="16. Complaints & Remedies">
                        <p>
                            If you believe we have not complied with this policy or the NDPA,
                            contact us first via the DPO details above. You may also lodge a
                            complaint with the Nigeria Data Protection Commission (NDPC).
                        </p>
                    </CardSection>

                    <CardSection id="misc" title="17. Miscellaneous">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>
                                <b>Withholding Data</b>: mandatory data may be required to
                                fulfill contracts or legal obligations.
                            </li>
                            <li>
                                <b>Minors / Legal Capacity</b>: if under 18 or lacking legal
                                capacity, we require parental/guardian consent unless an NDPA
                                exception applies.
                            </li>
                            <li>
                                <b>Automated Decisions & Profiling</b>: where used, we will
                                state the existence, logic, significance, and consequences.
                            </li>
                        </ul>
                    </CardSection>
                </article>
            </section>

            <style jsx global>{`
        @media print {
          nav,
          header .border,
          header button {
            display: none !important;
          }
          header {
            position: static !important;
          }
          main {
            background: white !important;
          }
          article {
            font-size: 12pt;
          }
        }
      `}</style>
        </main>
    );
}

function CardSection({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-24">
            <div className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md hover:border-slate-300">
                <h2 className="text-base sm:text-lg font-semibold tracking-tight mb-3 text-slate-900">
                    {title}
                </h2>
                <div className="prose prose-slate prose-sm max-w-none">
                    {children}
                </div>
            </div>
        </section>
    );
}
