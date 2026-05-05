"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

interface BusinessItem {
  label: string;
  href: string;
  external?: boolean;
}

const LABELS: Record<string, string> = {
  mn: "МН",
  en: "EN",
  zh: "中",
};

const businessItems: Record<string, BusinessItem[]> = {
  mn: [
    { label: "Барилгын шийдэл", href: "/business/construction" },
    { label: "Уул уурхайн шийдэл", href: "/business/mining" },
    { label: "Ногоон барилга", href: "https://greenbuilding.mn", external: true },
    { label: "Инженеринг", href: "https://mmse.mn", external: true },
    { label: "Milwaukee Tools", href: "https://milwaukee.source.mn", external: true },
    { label: "Цахилгаан бүтээгдэхүүн", href: "https://electric.source.mn", external: true },
    { label: "Нарны энерги", href: "https://solar.source.mn", external: true },
  ],
  en: [
    { label: "Construction Solutions", href: "/business/construction" },
    { label: "Mining Solutions", href: "/business/mining" },
    { label: "Green Building", href: "https://greenbuilding.mn", external: true },
    { label: "Engineering", href: "https://mmse.mn", external: true },
    { label: "Milwaukee Tools", href: "https://milwaukee.source.mn", external: true },
    { label: "Electrical Products", href: "https://electric.source.mn", external: true },
    { label: "Solar Energy", href: "https://solar.source.mn", external: true },
  ],
  zh: [
    { label: "建筑解决方案", href: "/business/construction" },
    { label: "采矿解决方案", href: "/business/mining" },
    { label: "绿色建筑", href: "https://greenbuilding.mn", external: true },
    { label: "工程", href: "https://mmse.mn", external: true },
    { label: "Milwaukee Tools", href: "https://milwaukee.source.mn", external: true },
    { label: "电气产品", href: "https://electric.source.mn", external: true },
    { label: "太阳能", href: "https://solar.source.mn", external: true },
  ],
};

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-2 text-sm font-medium">
      {["mn", "en", "zh"].map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`px-2 py-1 rounded transition-colors ${
            l === locale
              ? "bg-[#22c55e] text-white"
              : "text-[#111] hover:bg-gray-100"
          }`}
        >
          {LABELS[l] ?? l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

function BusinessDropdown({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const items = businessItems[locale] ?? businessItems["en"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors"
      >
        {locale === "mn" ? "Бизнес" : locale === "zh" ? "业务" : "Business"}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block px-4 py-2 text-sm text-[#111] hover:bg-[#22c55e]/10 hover:text-[#22c55e] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ locale }: { locale: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const items = businessItems[locale] ?? businessItems["en"];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" locale={locale} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#22c55e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-[#111]">MMS Group</div>
                <div className="text-xs text-gray-500">Energy • Engineering • Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              locale={locale}
              className="px-3 py-2 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors"
            >
              {locale === "mn" ? "Нүүр" : locale === "zh" ? "首页" : "Home"}
            </Link>
            <Link
              href="/about"
              locale={locale}
              className="px-3 py-2 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors"
            >
              {locale === "mn" ? "Бидний тухай" : locale === "zh" ? "关于我们" : "About"}
            </Link>
            <BusinessDropdown locale={locale} />
            <Link
              href="/projects"
              locale={locale}
              className="px-3 py-2 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors"
            >
              {locale === "mn" ? "Төслүүд" : locale === "zh" ? "项目" : "Projects"}
            </Link>
            <Link
              href="/news"
              locale={locale}
              className="px-3 py-2 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors"
            >
              {locale === "mn" ? "Мэдээ" : locale === "zh" ? "新闻" : "News"}
            </Link>
            <Link
              href="/contact"
              locale={locale}
              className="px-3 py-2 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors"
            >
              {locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact"}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder={locale === "mn" ? "Хайх..." : locale === "zh" ? "搜索..." : "Search..."}
                className="w-40 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              locale={locale}
              className="block px-3 py-2 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Нүүр" : locale === "zh" ? "首页" : "Home"}
            </Link>
            <Link
              href="/about"
              locale={locale}
              className="block px-3 py-2 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Бидний тухай" : locale === "zh" ? "关于我们" : "About"}
            </Link>
            <button
              onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-lg"
            >
              {locale === "mn" ? "Бизнес" : locale === "zh" ? "业务" : "Business"}
              <svg
                className={`w-4 h-4 transition-transform ${mobileBusinessOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileBusinessOpen && (
              <div className="pl-4 space-y-1">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
            <Link
              href="/projects"
              locale={locale}
              className="block px-3 py-2 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Төслүүд" : locale === "zh" ? "项目" : "Projects"}
            </Link>
            <Link
              href="/news"
              locale={locale}
              className="block px-3 py-2 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Мэдээ" : locale === "zh" ? "新闻" : "News"}
            </Link>
            <Link
              href="/contact"
              locale={locale}
              className="block px-3 py-2 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact"}
            </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-100">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder={locale === "mn" ? "Хайх..." : locale === "zh" ? "搜索..." : "Search..."}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
