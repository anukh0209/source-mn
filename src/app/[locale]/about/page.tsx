"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = useTranslations();

  const values = [
    { key: 'quality', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { key: 'trust', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { key: 'innovation', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { key: 'sustainability', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#111] mb-4">{t('about.title')}</h1>
        <p className="text-xl text-gray-500 mb-8">
          {locale === "mn" ? "MMS Group - Монголын тэргүүлэгч олон салбар бүхий групп" : 
           locale === "zh" ? "MMS集团 - 蒙古领先的多行业集团" : 
           "MMS Group - Mongolia's Leading Multi-Industry Group"}
        </p>
        <p className="text-gray-600 leading-relaxed mb-12">
          {t('about.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-semibold text-[#111] mb-3">
              {locale === "mn" ? "Алсын хараа" : locale === "zh" ? "愿景" : "Vision"}
            </h2>
            <p className="text-gray-600">
              {locale === "mn" ? "Монгол Улсын хөгжлийн тэргүүлэгч хүч болох" : 
               locale === "zh" ? "成为蒙古发展的主导力量" : 
               "To be the leading force in Mongolia's development"}
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-semibold text-[#111] mb-3">
              {locale === "mn" ? "Эрхэм зорилго" : locale === "zh" ? "使命" : "Mission"}
            </h2>
            <p className="text-gray-600">
              {locale === "mn" ? "Чанартай бүтээгдэхүүн, шийдлээрээ харилцагчдынхаа итгэлийг хүлээх" : 
               locale === "zh" ? "通过优质的产品和解决方案赢得合作伙伴的信任" : 
               "To earn our partners' trust through quality products and solutions"}
            </p>
          </div>
        </div>

        <div className="p-6 bg-[#22c55e]/5 rounded-xl border border-[#22c55e]/10">
          <h2 className="text-xl font-semibold text-[#111] mb-6">
            {locale === "mn" ? "Үнэт зүйлс" : locale === "zh" ? "价值观" : "Values"}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <span className="text-[#111] font-medium">
                  {locale === "mn" 
                    ? ["Чанар", "Итгэлцэл", "Иноваци", "Тогтвортой хөгжил"][index]
                    : locale === "zh"
                    ? ["质量", "信任", "创新", "可持续发展"][index]
                    : ["Quality", "Trust", "Innovation", "Sustainability"][index]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
