"use client";

import { useTranslations } from "next-intl";

const businesses = [
  { id: "construction", href: "/business/construction", color: "#6b7280" },
  { id: "mining", href: "/business/mining", color: "#78716c" },
  { id: "engineering", href: "https://mmse.mn", external: true, color: "#22c55e" },
  { id: "milwaukee", href: "https://milwaukee.source.mn", external: true, color: "#ef4444" },
  { id: "electric", href: "https://electric.source.mn", external: true, color: "#3b82f6" },
  { id: "solar", href: "https://solar.source.mn", external: true, color: "#f59e0b" },
];

export default function BusinessPage({ params }: { params: { locale: string } }) {
  const t = useTranslations();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#111] mb-4">{t('businessHub.title')}</h1>
        <p className="text-xl text-gray-500">{t('businessHub.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <a
            key={business.id}
            href={business.href}
            target={business.external ? "_blank" : undefined}
            rel={business.external ? "noopener noreferrer" : undefined}
            className="group p-6 bg-gray-50 rounded-xl hover:bg-[#22c55e]/5 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#22c55e]/20"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/20 transition-colors"
              style={{ backgroundColor: `${business.color}15` }}
            >
              <svg className="w-6 h-6" style={{ color: business.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111] mb-2 group-hover:text-[#22c55e] transition-colors">
              {t(`businessHub.businesses.${business.id}.title`)}
            </h3>
            <p className="text-gray-500 text-sm">
              {t(`businessHub.businesses.${business.id}.description`)}
            </p>
            {business.external && (
              <div className="mt-4 flex items-center text-[#22c55e] text-sm font-medium">
                {t('businessHub.visit')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
