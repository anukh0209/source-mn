import { Link } from "@/i18n/navigation";

export default async function Footer({ locale }: { locale: string }) {
  const content = {
    mn: {
      description: "Барилга, уул уурхай, инженеринг, цахилгаан болон нарны энергийн шийдлүүд.",
      links: "Холбоосууд",
      contact: "Холбоо барих",
      businesses: "Бизнес чиглэлүүд",
      rights: "Бүх эрх хуулиар хамгаалагдсан",
    },
    en: {
      description: "Construction, mining, engineering, electrical and solar energy solutions.",
      links: "Links",
      contact: "Contact",
      businesses: "Business Units",
      rights: "All rights reserved",
    },
    zh: {
      description: "建筑、采矿、工程、电气和太阳能解决方案。",
      links: "链接",
      contact: "联系我们",
      businesses: "业务部门",
      rights: "版权所有",
    },
  };

  const t = content[locale as keyof typeof content] ?? content.en;

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#22c55e] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="text-lg font-bold">MMS Group</div>
                <div className="text-[11px] text-gray-500 tracking-wider">ENERGY • ENGINEERING • SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              {t.links}
            </h3>
            <ul className="space-y-3">
              {[
                { label: locale === "mn" ? "Нүүр" : locale === "zh" ? "首页" : "Home", href: "/" },
                { label: locale === "mn" ? "Бидний тухай" : locale === "zh" ? "关于我们" : "About", href: "/about" },
                { label: locale === "mn" ? "Төслүүд" : locale === "zh" ? "项目" : "Projects", href: "/projects" },
                { label: locale === "mn" ? "Мэдээ" : locale === "zh" ? "新闻" : "News", href: "/news" },
                { label: locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    locale={locale}
                    className="text-gray-400 hover:text-[#22c55e] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Units */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              {t.businesses}
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Milwaukee Tools", href: "https://milwaukee.source.mn", color: "#ef4444" },
                { label: locale === "mn" ? "Цахилгаан" : locale === "zh" ? "电气" : "Electrical", href: "https://electric.source.mn", color: "#3b82f6" },
                { label: locale === "mn" ? "Нарны энерги" : locale === "zh" ? "太阳能" : "Solar", href: "https://solar.source.mn", color: "#f59e0b" },
                { label: locale === "mn" ? "Инженеринг" : locale === "zh" ? "工程" : "Engineering", href: "https://mmse.mn", color: "#22c55e" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              {t.contact}
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ulaanbaatar, Mongolia
              </p>
              <a href="mailto:info@mms.mn" className="flex items-center gap-2 hover:text-[#22c55e] transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@mms.mn
              </a>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +976-11-XXXXXX
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MMS Group. {t.rights}.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
