"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const businessHub = [
  {
    id: "milwaukee",
    href: "https://milwaukee.source.mn",
    color: "#ef4444",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    id: "electric",
    href: "https://electric.source.mn",
    color: "#3b82f6",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "solar",
    href: "https://solar.source.mn",
    color: "#f59e0b",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    id: "engineering",
    href: "https://mmse.mn",
    color: "#22c55e",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    id: "construction",
    href: "/business/construction",
    color: "#6b7280",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    id: "mining",
    href: "/business/mining",
    color: "#78716c",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
];

const featuredProducts = [
  { id: "milwaukee", source: "Milwaukee", href: "https://milwaukee.source.mn", color: "#ef4444" },
  { id: "solar", source: "Solar", href: "https://solar.source.mn", color: "#f59e0b" },
  { id: "electric", source: "Electric", href: "https://electric.source.mn", color: "#3b82f6" },
  { id: "engineering", source: "Engineering", href: "https://mmse.mn", color: "#22c55e" },
];

const stats = [
  { value: "15+", key: "years" },
  { value: "500+", key: "projects" },
  { value: "1000+", key: "clients" },
  { value: "6", key: "businesses" },
];

const projects = [
  { id: "project1", category: "Construction" },
  { id: "project2", category: "Mining" },
  { id: "project3", category: "Solar" },
];

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#111] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#22c55e] text-sm font-medium mb-8 border border-white/10">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              {t('hero.badge')}
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-2xl text-gray-400 mb-4 font-light">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#business-hub"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#22c55e] text-white font-semibold rounded-lg hover:bg-[#16a34a] transition-all hover:shadow-lg hover:shadow-[#22c55e]/25"
              >
                {t('hero.ctaExplore')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link
                href="/business"
                locale={locale}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/10"
              >
                {t('hero.ctaProducts')}
              </Link>
              <Link
                href="/contact"
                locale={locale}
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                {t('hero.ctaContact')}
              </Link>
            </div>
          </div>
        </div>

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
              {t('businessHub.badge')}
            </div>
            <h2 className="text-4xl font-bold text-[#111] mb-4">
              {t('businessHub.title')}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {t('businessHub.subtitle')}
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
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: business.color }}
                />
                
                <div className="relative">
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

                  <h3 className="text-xl font-bold text-[#111] mb-3 group-hover:text-[#22c55e] transition-colors">
                    {t(`businessHub.businesses.${business.id}.title`)}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {t(`businessHub.businesses.${business.id}.description`)}
                  </p>

                  <div className="flex items-center text-sm font-semibold" style={{ color: business.color }}>
                    {t('businessHub.visit')}
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
                {t('products.badge')}
              </div>
              <h2 className="text-4xl font-bold text-[#111]">{t('products.title')}</h2>
              <p className="text-xl text-gray-500 mt-2">{t('products.subtitle')}</p>
            </div>
            <Link
              href="/business"
              locale={locale}
              className="mt-4 sm:mt-0 inline-flex items-center text-[#22c55e] font-semibold hover:underline"
            >
              {t('products.viewAll')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <a
                key={product.id}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
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
                  {t(`products.items.${product.id}`)}
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
                {t('about.badge')}
              </div>
              <h2 className="text-4xl font-bold text-[#111] mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('about.description')}
              </p>
              <Link
                href="/about"
                locale={locale}
                className="inline-flex items-center px-6 py-3 bg-[#111] text-white font-semibold rounded-lg hover:bg-[#333] transition-colors"
              >
                {t('about.cta')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.key} className="p-8 bg-gray-50 rounded-2xl text-center hover:bg-[#22c55e]/5 transition-colors">
                  <div className="text-4xl font-bold text-[#22c55e] mb-2">{stat.value}</div>
                  <div className="text-gray-500 font-medium">{t(`about.stats.${stat.key}`)}</div>
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
                {t('projects.badge')}
              </div>
              <h2 className="text-4xl font-bold text-white">{t('projects.title')}</h2>
              <p className="text-xl text-gray-400 mt-2">{t('projects.subtitle')}</p>
            </div>
            <Link
              href="/projects"
              locale={locale}
              className="mt-4 sm:mt-0 inline-flex items-center text-[#22c55e] font-semibold hover:underline"
            >
              {t('projects.viewAll')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#22c55e]/30 transition-all duration-300"
              >
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
                    {t(`projects.items.${project.id}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t(`projects.items.${project.id}.description`)}
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
            {t('contactCta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t('contactCta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              locale={locale}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#22c55e] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('contactCta.cta')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@mms.mn"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg hover:bg-white/10 transition-colors border-2 border-white/30"
            >
              {t('contactCta.email')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
