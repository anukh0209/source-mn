import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | MMS Group",
  description: "Explore MMS Group's projects in construction, mining, engineering, and energy sectors.",
  openGraph: {
    title: "Projects | MMS Group",
    description: "Explore MMS Group's projects in construction, mining, engineering, and energy sectors.",
    type: "website",
  },
};

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const content = {
    mn: {
      title: "Төслүүд",
      subtitle: "Манай бизнес чиглэлүүдийн төслүүд",
      comingSoon: "Тун удахгүй...",
    },
    en: {
      title: "Projects",
      subtitle: "Projects across our business sectors",
      comingSoon: "Coming soon...",
    },
    zh: {
      title: "项目",
      subtitle: "我们业务领域的项目",
      comingSoon: "即将推出...",
    },
  };

  const t = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#111] mb-4">{t.title}</h1>
        <p className="text-xl text-gray-500">{t.subtitle}</p>
      </div>

      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <p className="text-gray-500">{t.comingSoon}</p>
      </div>
    </div>
  );
}
