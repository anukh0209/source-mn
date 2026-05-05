import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | MMS Group",
  description: "Latest news and updates from MMS Group.",
  openGraph: {
    title: "News | MMS Group",
    description: "Latest news and updates from MMS Group.",
    type: "website",
  },
};

export default function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const content = {
    mn: {
      title: "Мэдээ",
      subtitle: "Манай сүүлийн үеийн мэдээлэл",
      comingSoon: "Тун удахгүй...",
    },
    en: {
      title: "News",
      subtitle: "Latest updates from MMS Group",
      comingSoon: "Coming soon...",
    },
    zh: {
      title: "新闻",
      subtitle: "MMS集团的最新动态",
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
          </svg>
        </div>
        <p className="text-gray-500">{t.comingSoon}</p>
      </div>
    </div>
  );
}
