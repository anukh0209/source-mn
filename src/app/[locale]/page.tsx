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

const businessHub = [
  {
    id: "milwaukee",
    title: { mn: "Milwaukee Tools", en: "Milwaukee Tools", zh: "Milwaukee Tools" },
    description: { 
      mn: "Мэргэжлийн багаж хэрэгсэл, тоног төхөөрөмж", 
      en: "Professional tools and equipment", 
      zh: "专业工具和设备" 
    },
    href: "https://milwaukee.source.mn",
    color: "#ef4444",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    id: "electric",
    title: { mn: "Цахилгаан бүтээгдэхүүн", en: "Electrical Products", zh: "电气产品" },
    description: { 
      mn: "Цахилгаан тоног төхөөрөмж, кабель", 
      en: "Electrical equipment and cables", 
      zh: "电气设备和电缆" 
    },
    href: "https://electric.source.mn",
    color: "#3b82f6",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "solar",
    title: { mn: "Нарны энерги", en: "Solar Energy", zh: "太阳能" },
    description: { 
      mn: "Нарны эрчим хүчний систем, суурилуулалт", 
      en: "Solar energy systems and installation", 
      zh: "太阳能系统和安装" 
    },
    href: "https://solar.source.mn",
    color: "#f59e0b",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    id: "engineering",
    title: { mn: "Инженеринг", en: "Engineering", zh: "工程" },
    description: { 
      mn: "Төслийн удирдлага, зураг төсөл", 
      en: "Project management and design", 
      zh: "项目管理和设计" 
    },
    href: "https://mmse.mn",
    color: "#22c55e",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    id: "construction",
    title: { mn: "Барилгын шийдэл", en: "Construction", zh: "建筑" },
    description: { 
      mn: "Барилгын материал, тоног төхөөрөмж", 
      en: "Construction materials and equipment", 
      zh: "建筑材料和设备" 
    },
    href: "/business/construction",
    color: "#6b7280",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    id: "mining",
    title: { mn: "Уул уурхайн шийдэл", en: "Mining", zh: "采矿" },
    description: { 
      mn: "Уул уурхайн тоног төхөөрөмж", 
      en: "Mining equipment and solutions", 
      zh: "采矿设备和解决方案" 
    },
    href: "/business/mining",
    color: "#78716c",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
];

const featuredProducts = [
  {
    name: { mn: "Milwaukee M18 FUEL", en: "Milwaukee M18 FUEL", zh: "Milwaukee M18 FUEL" },
    source: "Milwaukee",
    href: "https://milwaukee.source.mn",
    color: "#ef4444",
  },
  {
    name: { mn: "Нарны дэлгэц 500W", en: "Solar Panel 500W", zh: "太阳能板 500W" },
    source: "Solar",
    href: "https://solar.source.mn",
    color: "#f59e0b",
  },
  {
    name: { mn: "Цахилгаан кабель", en: "Electrical Cable", zh: "电缆" },
    source: "Electric",
    href: "https://electric.source.mn",
    color: "#3b82f6",
  },
  {
    name: { mn: "Инженеринг үйлчилгээ", en: "Engineering Service", zh: "工程服务" },
    source: "Engineering",
    href: "https://mmse.mn",
    color: "#22c55e",
  },
];

const stats = [
  { value: "15+", label: { mn: "Жил", en: "Years", zh: "年" } },
  { value: "500+", label: { mn: "Төсөл", en: "Projects", zh: "项目" } },
  { value: "1000+", label: { mn: "Харилцагч", en: "Clients", zh: "客户" } },
  { value: "6", label: { mn: "Бизнес чиглэл", en: "Business Units", zh: "业务部门" } },
];

const projects = [
  {
    title: { mn: "Барилгын төсөл 1", en: "Construction Project 1", zh: "建筑项目 1" },
    description: { 
      mn: "Томоохон барилгын төсөл", 
      en: "Major construction project", 
      zh: "大型建筑项目" 
    },
    category: "Construction",
  },
  {
    title: { mn: "Уул уурхайн төсөл 2", en: "Mining Project 2", zh: "采矿项目 2" },
    description: { 
      mn: "Уул уурхайн тоног төхөөрөмж нийлүүлэлт", 
      en: "Mining equipment supply", 
      zh: "采矿设备供应" 
    },
    category: "Mining",
  },
  {
    title: { mn: "Нарны энерги төсөл", en: "Solar Energy Project", zh: "太阳能项目" },
    description: { 
      mn: "Нарны эрчим хүчний суурилуулалт", 
      en: "Solar energy installation", 
      zh: "太阳能安装" 
    },
    category: "Solar",
  },
];

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const t = {
    hero: {
      badge: locale === "mn" ? "Монголын тэргүүлэгч групп" : locale === "zh" ? "蒙古领先集团" : "Mongolia's Leading Group",
      title: locale === "mn" ? "MMS Group" : locale === "zh" ? "MMS集团" : "MMS Group",
      subtitle: locale === "mn" ? "Energy • Engineering • Solutions" : locale === "zh" ? "能源 • 工程 • 解决方案" : "Energy • Engineering • Solutions",
      description: locale === "mn"
        ? "Барилга, уул уурхай, инженеринг, цахилгаан болон нарны энергийн салбарт тэргүүлэгч MMS Group-ийн бизнес платформууд."
        : locale === "zh"
        ? "MMS集团在建筑、采矿、工程、电气和太阳能领域的领先业务平台。"
        : "MMS Group's business platforms in construction, mining, engineering, electrical, and solar energy.",
      ctaExplore: locale === "mn" ? "Бизнесүүд үзэх" : locale === "zh" ? "探索业务" : "Explore Businesses",
      ctaProducts: locale === "mn" ? "Бүтээгдэхүүн үзэх" : locale === "zh" ? "查看产品" : "View Products",
      ctaContact: locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact Us",
    },
    businessHub: {
      title: locale === "mn" ? "Бизнес платформууд" : locale === "zh" ? "业务平台" : "Business Platforms",
      subtitle: locale === "mn"
        ? "MMS Group-ийн бизнес чиглэлүүдээр зочлоорой"
        : locale === "zh"
        ? "访问MMS集团的业务方向"
        : "Explore MMS Group's business directions",
      visit: locale === "mn" ? "Зочлох" : locale === "zh" ? "访问" : "Visit",
    },
    products: {
      title: locale === "mn" ? "Онцлох бүтээгдэхүүн" : locale === "zh" ? "精选产品" : "Featured Products",
      subtitle: locale === "mn"
        ? "Манай бизнес платформуудаас"
        : locale === "zh"
        ? "来自我们的业务平台"
        : "From our business platforms",
      viewAll: locale === "mn" ? "Бүгдийг харах" : locale === "zh" ? "查看全部" : "View All",
    },
    about: {
      title: locale === "mn" ? "MMS Group-ийн тухай" : locale === "zh" ? "关于MMS集团" : "About MMS Group",
      description: locale === "mn"
        ? "MMS Group нь Монгол Улсад үйл ажиллагаа явуулдаг тэргүүлэгч олон салбар бүхий групп компани юм. Бид барилга, уул уурхай, инженеринг, цахилгаан болон нарны энергийн салбарт олон улсын стандартад нийцсэн шийдлүүдийг нэвтрүүлж байна."
        : locale === "zh"
        ? "MMS集团是在蒙古运营的领先多行业集团。我们在建筑、采矿、工程、电气和太阳能领域实施国际标准解决方案。"
        : "MMS Group is a leading multi-industry group operating in Mongolia. We implement international standard solutions in construction, mining, engineering, electrical, and solar energy sectors.",
      cta: locale === "mn" ? "Дэлгэрэнгүй" : locale === "zh" ? "了解更多" : "Learn More",
    },
    projects: {
      title: locale === "mn" ? "Төслүүд" : locale === "zh" ? "项目" : "Projects",
      subtitle: locale === "mn"
        ? "Манай бизнес чиглэлүүдийн төслүүд"
        : locale === "zh"
        ? "我们业务领域的项目"
        : "Projects across our business sectors",
      viewAll: locale === "mn" ? "Бүх төслүүд" : locale === "zh" ? "所有项目" : "All Projects",
    },
    contact: {
      title: locale === "mn" ? "Хамтран ажиллая" : locale === "zh" ? "让我们合作" : "Let's Work Together",
      description: locale === "mn"
        ? "Төслийн талаар зөвлөгөө авахыг хүсвэл бидэнтэй холбоо барина уу"
        : locale === "zh"
        ? "如需项目咨询，请联系我们"
        : "Contact us for project consultation",
      cta: locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact Us",
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#111] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0a0a0a]" />
        
        {/* Accent Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#22c55e] text-sm font-medium mb-8 border border-white/10">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              {t.hero.badge}
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              {t.hero.title}
            </h1>
            
            <p className="text-2xl text-gray-400 mb-4 font-light">
              {t.hero.subtitle}
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#business-hub"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#22c55e] text-white font-semibold rounded-lg hover:bg-[#16a34a] transition-all hover:shadow-lg hover:shadow-[#22c55e]/25"
              >
                {t.hero.ctaExplore}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link
                href="/business"
                locale={locale}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/10"
              >
                {t.hero.ctaProducts}
              </Link>
              <Link
                href="/contact"
                locale={locale}
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                {t.hero.ctaContact}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Business Hub Section */}
      <section id="business-hub" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22c55e]/10 rounded-full text-[#22c55e] text-sm font-medium mb-4">
              {locale === "mn" ? "Бизнес" : locale === "zh" ? "业务" : "Business"}
            </div>
            <h2 className="text-4xl font-bold text-[#111] mb-4">
              {t.businessHub.title}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {t.businessHub.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessHub.map((business) => (
              <a
                key={business.id}
                href={business.href}
                target={business.href.startsWith("http") ? "_blank" : undefined}
                rel={business.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Hover Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: business.color }}
                />
                
                <div className="relative">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${business.color}15` }}
                  >
                    <svg 
                      className="w-8 h-8 transition-colors duration-300" 
                      style={{ color: business.color }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={business.icon} />
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#111] mb-3 group-hover:text-[#22c55e] transition-colors">
                    {business.title[locale as keyof typeof business.title] ?? business.title.en}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {business.description[locale as keyof typeof business.description] ?? business.description.en}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold" style={{ color: business.color }}>
                    {t.businessHub.visit}
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22c55e]/10 rounded-full text-[#22c55e] text-sm font-medium mb-4">
                {locale === "mn" ? "Бүтээгдэхүүн" : locale === "zh" ? "产品" : "Products"}
              </div>
              <h2 className="text-4xl font-bold text-[#111]">{t.products.title}</h2>
              <p className="text-xl text-gray-500 mt-2">{t.products.subtitle}</p>
            </div>
            <Link
              href="/business"
              locale={locale}
              className="mt-4 sm:mt-0 inline-flex items-center text-[#22c55e] font-semibold hover:underline"
            >
              {t.products.viewAll}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <a
                key={index}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Product Image Placeholder */}
                <div 
                  className="w-full h-40 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${product.color}10` }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <svg className="w-8 h-8" style={{ color: product.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.source}
                  </span>
                </div>
                <h3 className="font-semibold text-[#111] group-hover:text-[#22c55e] transition-colors">
                  {product.name[locale as keyof typeof product.name] ?? product.name.en}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22c55e]/10 rounded-full text-[#22c55e] text-sm font-medium mb-4">
                {locale === "mn" ? "Бидний тухай" : locale === "zh" ? "关于我们" : "About Us"}
              </div>
              <h2 className="text-4xl font-bold text-[#111] mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t.about.description}
              </p>
              <Link
                href="/about"
                locale={locale}
                className="inline-flex items-center px-6 py-3 bg-[#111] text-white font-semibold rounded-lg hover:bg-[#333] transition-colors"
              >
                {t.about.cta}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-8 bg-gray-50 rounded-2xl text-center hover:bg-[#22c55e]/5 transition-colors">
                  <div className="text-4xl font-bold text-[#22c55e] mb-2">{stat.value}</div>
                  <div className="text-gray-500 font-medium">
                    {stat.label[locale as keyof typeof stat.label] ?? stat.label.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[#22c55e] text-sm font-medium mb-4">
                {locale === "mn" ? "Төслүүд" : locale === "zh" ? "项目" : "Projects"}
              </div>
              <h2 className="text-4xl font-bold text-white">{t.projects.title}</h2>
              <p className="text-xl text-gray-400 mt-2">{t.projects.subtitle}</p>
            </div>
            <Link
              href="/projects"
              locale={locale}
              className="mt-4 sm:mt-0 inline-flex items-center text-[#22c55e] font-semibold hover:underline"
            >
              {t.projects.viewAll}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#22c55e]/30 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#22c55e]/10 text-[#22c55e] text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors">
                    {project.title[locale as keyof typeof project.title] ?? project.title.en}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.description[locale as keyof typeof project.description] ?? project.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-[#22c55e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              locale={locale}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#22c55e] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t.contact.cta}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@mms.mn"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg hover:bg-white/10 transition-colors border-2 border-white/30"
            >
              info@mms.mn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
