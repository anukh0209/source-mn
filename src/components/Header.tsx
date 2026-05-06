"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "mn", label: "MN" },
    { code: "en", label: "EN" },
    { code: "zh", label: "中文" },
  ];

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href={`tel:${t('topBar.phone')}`} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('topBar.phone')}
              </a>
              <a href={`mailto:${t('topBar.email')}`} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('topBar.email')}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/about" locale={locale} className="hover:text-gray-300 transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="/career" locale={locale} className="hover:text-gray-300 transition-colors">
                {t('nav.career')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" locale={locale} className="text-[#111] hover:text-[#1e3a5f] font-medium transition-colors">
                {t('nav.home')}
              </Link>
              <Link href="/about" locale={locale} className="text-[#111] hover:text-[#1e3a5f] font-medium transition-colors">
                {t('nav.about')}
              </Link>
            </div>

            {/* Center Logo */}
            <Link href="/" locale={locale} className="flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#1e3a5f] -mt-8">
                  <div className="text-center">
                    <div className="text-[#1e3a5f] font-bold text-2xl leading-none">MMS</div>
                    <div className="text-[8px] text-gray-500 tracking-widest uppercase">Group</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Right nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/career" locale={locale} className="text-[#111] hover:text-[#1e3a5f] font-medium transition-colors">
                {t('nav.career')}
              </Link>
              <Link href="/contact" locale={locale} className="text-[#111] hover:text-[#1e3a5f] font-medium transition-colors">
                {t('nav.contact')}
              </Link>
            </div>

            {/* Language switcher + Mobile menu */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href="/"
                    locale={lang.code}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      locale === lang.code
                        ? "bg-[#1e3a5f] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#111]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              {[
                { href: "/", label: t('nav.home') },
                { href: "/about", label: t('nav.about') },
                { href: "/career", label: t('nav.career') },
                { href: "/contact", label: t('nav.contact') },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  locale={locale}
                  className="block px-4 py-3 text-[#111] hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
