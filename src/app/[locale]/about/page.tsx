"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutPage() {
  const t = useTranslations('about');

  const stats = [
    { value: t('stats.yearsValue'), label: t('stats.years') },
    { value: t('stats.employeesValue'), label: t('stats.employees') },
    { value: t('stats.partnersValue'), label: t('stats.partners') },
    { value: t('stats.projectsValue'), label: t('stats.projects') },
  ];

  const values = [
    { key: 'quality', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { key: 'trust', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { key: 'innovation', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { key: 'sustainability', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  const history = [
    { year: '2009', key: 'year2009' },
    { year: '2012', key: 'year2012' },
    { year: '2015', key: 'year2015' },
    { year: '2018', key: 'year2018' },
    { year: '2021', key: 'year2021' },
    { year: '2024', key: 'year2024' },
  ];

  const businessUnits = [
    { id: 'renewable', color: 'bg-orange-500' },
    { id: 'tools', color: 'bg-blue-500' },
    { id: 'panels', color: 'bg-green-500' },
    { id: 'mining', color: 'bg-gray-500' },
    { id: 'construction', color: 'bg-teal-500' },
    { id: 'cable', color: 'bg-amber-500' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-6">
            MMS Group
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('pageTitle')}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#1e3a5f] rounded-2xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('mission.title')}</h2>
              <p className="text-white/80 leading-relaxed">{t('mission.content')}</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#111] mb-4">{t('vision.title')}</h2>
              <p className="text-gray-600 leading-relaxed">{t('vision.content')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111]">{t('history.title')}</h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1e3a5f]/20 md:-translate-x-px" />
            
            {history.map((item, index) => (
              <div key={item.year} className={`relative flex items-start mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block w-1/2" />
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#1e3a5f] rounded-full border-4 border-white shadow-md md:-translate-x-2 mt-1.5 z-10" />
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="inline-block px-3 py-1 bg-[#1e3a5f] text-white text-sm font-bold rounded-lg mb-2">
                    {item.year}
                  </div>
                  <p className="text-gray-600">{t(`history.${item.key}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111]">{t('values.title')}</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.key} className="p-6 bg-gray-50 rounded-2xl text-center hover:bg-[#1e3a5f]/5 transition-colors">
                <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#111]">{t(`values.${value.key}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Units */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111] mb-4">{t('businessUnits.title')}</h2>
            <p className="text-gray-500">{t('businessUnits.description')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessUnits.map((unit) => (
              <div key={unit.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`w-4 h-4 ${unit.color} rounded-full mb-4`} />
                <h3 className="text-xl font-bold text-[#111] mb-2">
                  {t(`businesses.${unit.id}.title`)}
                </h3>
                <p className="text-gray-500">
                  {t(`businesses.${unit.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111]">{t('certifications.title')}</h2>
          </div>
          
          <div className="space-y-4">
            {['iso9001', 'iso14001', 'ohsas'].map((cert) => (
              <div key={cert} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-[#111] font-medium">{t(`certifications.${cert}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/70 mb-8">{t('cta.description')}</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1e3a5f] font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('cta.button')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
