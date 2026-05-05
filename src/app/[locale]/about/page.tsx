import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MMS Group",
  description: "Learn about MMS Group - Mongolia's leading multi-industry group in construction, mining, engineering, and energy.",
  openGraph: {
    title: "About | MMS Group",
    description: "Learn about MMS Group - Mongolia's leading multi-industry group in construction, mining, engineering, and energy.",
    type: "website",
  },
};

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const content = {
    mn: {
      title: "Бидний тухай",
      subtitle: "MMS Group - Монголын тэргүүлэгч олон салбар бүхий групп",
      description: "MMS Group нь барилга, уул уурхай, инженеринг, цахилгаан болон нарны энергийн салбарт үйл ажиллагаа явуулдаг Монголын тэргүүлэгч групп компани юм. Бид дотоодын хэрэгцээг хангах, олон улсын стандартад нийцсэн шийдэлүүдийг нэвтрүүлэх зорилготойгоор ажиллаж байна.",
      vision: "Алсын хараа",
      visionText: "Монгол Улсын хөгжлийн тэргүүлэгч хүч болох",
      mission: "Эрхэм зорилго",
      missionText: "Чанартай бүтээгдэхүүн, шийдлээрээ харилцагчдынхаа итгэлийг хүлээх",
      values: "Үнэт зүйлс",
      valuesList: ["Чанар", "Итгэлцэл", "Иноваци", "Тогтвортой хөгжил"],
    },
    en: {
      title: "About Us",
      subtitle: "MMS Group - Mongolia's Leading Multi-Industry Group",
      description: "MMS Group is Mongolia's leading multi-industry group operating in construction, mining, engineering, electrical, and solar energy sectors. We work to meet domestic needs and implement international standard solutions.",
      vision: "Vision",
      visionText: "To be the leading force in Mongolia's development",
      mission: "Mission",
      missionText: "To earn our partners' trust through quality products and solutions",
      values: "Values",
      valuesList: ["Quality", "Trust", "Innovation", "Sustainability"],
    },
    zh: {
      title: "关于我们",
      subtitle: "MMS集团 - 蒙古领先的多行业集团",
      description: "MMS集团是蒙古领先的多行业集团，在建筑、采矿、工程、电气和太阳能领域开展业务。我们致力于满足国内需求并实施国际标准解决方案。",
      vision: "愿景",
      visionText: "成为蒙古发展的主导力量",
      mission: "使命",
      missionText: "通过优质的产品和解决方案赢得合作伙伴的信任",
      values: "价值观",
      valuesList: ["质量", "信任", "创新", "可持续发展"],
    },
  };

  const t = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#111] mb-4">{t.title}</h1>
        <p className="text-xl text-gray-500 mb-8">{t.subtitle}</p>
        <p className="text-gray-600 leading-relaxed mb-12">{t.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-semibold text-[#111] mb-3">{t.vision}</h2>
            <p className="text-gray-600">{t.visionText}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-semibold text-[#111] mb-3">{t.mission}</h2>
            <p className="text-gray-600">{t.missionText}</p>
          </div>
        </div>

        <div className="p-6 bg-[#22c55e]/5 rounded-xl border border-[#22c55e]/10">
          <h2 className="text-xl font-semibold text-[#111] mb-4">{t.values}</h2>
          <div className="grid grid-cols-2 gap-4">
            {t.valuesList.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#111] font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
