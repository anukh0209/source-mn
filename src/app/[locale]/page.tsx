import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "MMS Group | Energy • Engineering • Solutions",
  description: "MMS Group - Central gateway to multiple business platforms including construction, mining, engineering, and energy solutions.",
  openGraph: {
    title: "MMS Group | Energy • Engineering • Solutions",
    description: "MMS Group - Central gateway to multiple business platforms including construction, mining, engineering, and energy solutions.",
    type: "website",
  },
};

const businessCards = [
  {
    title: { mn: "Барилгын шийдэл", en: "Construction Solutions", zh: "建筑解决方案" },
    description: { mn: "Барилгын материал, тоног төхөөрөмж", en: "Construction materials and equipment", zh: "建筑材料和设备" },
    href: "/business/construction",
  },
  {
    title: { mn: "Уул уурхайн шийдэл", en: "Mining Solutions", zh: "采矿解决方案" },
    description: { mn: "Уул уурхайн тоног төхөөрөмж", en: "Mining equipment and solutions", zh: "采矿设备和解决方案" },
    href: "/business/mining",
  },
  {
    title: { mn: "Инженеринг", en: "Engineering", zh: "工程" },
    description: { mn: "ММС Инженеринг", en: "MMS Engineering", zh: "MMS工程" },
    href: "https://mmse.mn",
    external: true,
  },
  {
    title: { mn: "Milwaukee Tools", en: "Milwaukee Tools", zh: "Milwaukee Tools" },
    description: { mn: "Мэргэжлийн багаж хэрэгсэл", en: "Professional tools and equipment", zh: "专业工具和设备" },
    href: "https://milwaukee.source.mn",
    external: true,
  },
  {
    title: { mn: "Цахилгаан бүтээгдэхүүн", en: "Electrical Products", zh: "电气产品" },
    description: { mn: "Цахилгаан тоног төхөөрөмж", en: "Electrical equipment", zh: "电气设备" },
    href: "https://electric.source.mn",
    external: true,
  },
  {
    title: { mn: "Нарны энерги", en: "Solar Energy", zh: "太阳能" },
    description: { mn: "Нарны эрчим хүчний шийдэл", en: "Solar energy solutions", zh: "太阳能解决方案" },
    href: "https://solar.source.mn",
    external: true,
  },
];

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 rounded-full text-[#22c55e] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
              {locale === "mn" ? "Монголын тэргүүлэгч групп" : locale === "zh" ? "蒙古领先集团" : "Mongolia's Leading Group"}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] tracking-tight mb-6">
              {locale === "mn" ? "MMS Group" : locale === "zh" ? "MMS集团" : "MMS Group"}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {locale === "mn" ? "Energy • Engineering • Solutions" : locale === "zh" ? "能源 • 工程 • 解决方案" : "Energy • Engineering • Solutions"}
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              {locale === "mn"
                ? "Барилга, уул уурхай, инженеринг, цахилгаан болон нарны энергийн салбарт тэргүүлэгч MMS Group-ийн бизнес платформууд."
                : locale === "zh"
                ? "MMS集团在建筑、采矿、工程、电气和太阳能领域的领先业务平台。"
                : "MMS Group's business platforms in construction, mining, engineering, electrical, and solar energy."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                locale={locale}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#22c55e] text-white font-medium rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                {locale === "mn" ? "Дэлгэрэнгүй" : locale === "zh" ? "了解更多" : "Learn More"}
              </Link>
              <a
                href="https://mmse.mn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-[#111] font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {locale === "mn" ? "Инженеринг" : locale === "zh" ? "工程" : "Engineering"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#111] mb-4">
              {locale === "mn" ? "Бизнес платформууд" : locale === "zh" ? "业务平台" : "Business Platforms"}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {locale === "mn"
                ? "MMS Group-ийн бизнес чиглэлүүдээр зочлоорой"
                : locale === "zh"
                ? "访问MMS集团的业务方向"
                : "Explore MMS Group's business directions"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-[#22c55e]/5 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#22c55e]/20"
              >
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#111] mb-2 group-hover:text-[#22c55e] transition-colors">
                  {card.title[locale as keyof typeof card.title] ?? card.title.en}
                </h3>
                <p className="text-gray-500 text-sm">
                  {card.description[locale as keyof typeof card.description] ?? card.description.en}
                </p>
                {card.external && (
                  <div className="mt-4 flex items-center text-[#22c55e] text-sm font-medium">
                    {locale === "mn" ? "Зочлох" : locale === "zh" ? "访问" : "Visit"}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
