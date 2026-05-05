import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business | MMS Group",
  description: "Explore MMS Group's business areas including construction, mining, engineering, and energy.",
  openGraph: {
    title: "Business | MMS Group",
    description: "Explore MMS Group's business areas including construction, mining, engineering, and energy.",
    type: "website",
  },
};

export default function BusinessPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const businesses = [
    {
      title: { mn: "Барилгын шийдэл", en: "Construction Solutions", zh: "建筑解决方案" },
      description: { mn: "Барилгын материал, тоног төхөөрөмжийн нийлүүлэлт", en: "Construction materials and equipment supply", zh: "建筑材料和设备供应" },
      href: "/business/construction",
    },
    {
      title: { mn: "Уул уурхайн шийдэл", en: "Mining Solutions", zh: "采矿解决方案" },
      description: { mn: "Уул уурхайн тоног төхөөрөмж, сэлбэг хэрэгсэл", en: "Mining equipment and spare parts", zh: "采矿设备和备件" },
      href: "/business/mining",
    },
    {
      title: { mn: "Инженеринг", en: "Engineering", zh: "工程" },
      description: { mn: "ММС Инженеринг - Төслийн удирдлага, зураг төсөл", en: "MMS Engineering - Project management and design", zh: "MMS工程 - 项目管理和设计" },
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
      description: { mn: "Цахилгаан тоног төхөөрөмж, кабель", en: "Electrical equipment and cables", zh: "电气设备和电缆" },
      href: "https://electric.source.mn",
      external: true,
    },
    {
      title: { mn: "Нарны энерги", en: "Solar Energy", zh: "太阳能" },
      description: { mn: "Нарны эрчим хүчний систем, суурилуулалт", en: "Solar energy systems and installation", zh: "太阳能系统和安装" },
      href: "https://solar.source.mn",
      external: true,
    },
  ];

  const content = {
    mn: {
      title: "Бизнес",
      subtitle: "Манай бизнес чиглэлүүд",
    },
    en: {
      title: "Business",
      subtitle: "Our Business Areas",
    },
    zh: {
      title: "业务",
      subtitle: "我们的业务领域",
    },
  };

  const t = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#111] mb-4">{t.title}</h1>
        <p className="text-xl text-gray-500">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business, index) => (
          <a
            key={index}
            href={business.href}
            target={business.external ? "_blank" : undefined}
            rel={business.external ? "noopener noreferrer" : undefined}
            className="group p-6 bg-gray-50 rounded-xl hover:bg-[#22c55e]/5 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#22c55e]/20"
          >
            <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/20 transition-colors">
              <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111] mb-2 group-hover:text-[#22c55e] transition-colors">
              {business.title[locale as keyof typeof business.title] ?? business.title.en}
            </h3>
            <p className="text-gray-500 text-sm">
              {business.description[locale as keyof typeof business.description] ?? business.description.en}
            </p>
            {business.external && (
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
  );
}
