"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

interface BusinessItem {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  color?: string;
}

const LABELS: Record<string, string> = {
  mn: "МН",
  en: "EN",
  zh: "中",
};

const businessItems: Record<string, BusinessItem[]> = {
  mn: [
    { label: "Milwaukee Tools", href: "https://milwaukee.source.mn", external: true, description: "Мэргэжлийн багаж", color: "#ef4444" },
    { label: "Цахилгаан бүтээгдэхүүн", href: "https://electric.source.mn", external: true, description: "Цахилгаан тоног төхөөрөмж", color: "#3b82f6" },
    { label: "Нарны энерги", href: "https://solar.source.mn", external: true, description: "Нарны эрчим хүч", color: "#f59e0b" },
    { label: "Инженеринг", href: "https://mmse.mn", external: true, description: "Төслийн удирдлага", color: "#22c55e" },
    { label: "Барилгын шийдэл", href: "/business/construction", description: "Барилгын материал", color: "#6b7280" },
    { label: "Уул уурхайн шийдэл", href: "/business/mining", description: "Уул уурхайн тоног төхөөрөмж", color: "#78716c" },
  ],
  en: [
    { label: "Milwaukee Tools", href: "https://milwaukee.source.mn", external: true, description: "Professional tools", color: "#ef4444" },
    { label: "Electrical Products", href: "https://electric.source.mn", external: true, description: "Electrical equipment", color: "#3b82f6" },
    { label: "Solar Energy", href: "https://solar.source.mn", external: true, description: "Solar power systems", color: "#f59e0b" },
    { label: "Engineering", href: "https://mmse.mn", external: true, description: "Project management", color: "#22c55e" },
    { label: "Construction", href: "/business/construction", description: "Construction materials", color: "#6b7280" },
    { label: "Mining", href: "/business/mining", description: "Mining equipment", color: "#78716c" },
  ],
  zh: [
    { label: "Milwaukee Tools", href: "https://milwaukee.source.mn", external: true, description: "专业工具", color: "#ef4444" },
    { label: "电气产品", href: "https://electric.source.mn", external: true, description: "电气设备", color: "#3b82f6" },
    { label: "太阳能", href: "https://solar.source.mn", external: true, description: "太阳能系统", color: "#f59e0b" },
    { label: "工程", href: "https://mmse.mn", external: true, description: "项目管理", color: "#22c55e" },
    { label: "建筑", href: "/business/construction", description: "建筑材料", color: "#6b7280" },
    { label: "采矿", href: "/business/mining", description: "采矿设备", color: "#78716c" },
  ],
};

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-1 text-sm font-medium">
      {["mn", "en", "zh"].map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            l === locale
              ? "bg-[#22c55e] text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100 hover:text-[#111]"
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
        className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[#111] hover:text-[#22c55e] transition-colors rounded-lg hover:bg-gray-50"
      >
        {locale === "mn" ? "Бизнес" : locale === "zh" ? "业务" : "Business"}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl py-3 z-50">
          <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {locale === "mn" ? "Бизнес чиглэлүүд" : locale === "zh" ? "业务方向" : "Business Directions"}
          </div>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl text-sm hover:bg-gray-50 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div 
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1">
                <div className="font-medium text-[#111] group-hover:text-[#22c55e] transition-colors">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs text-gray-400">{item.description}</div>
                )}
              </div>
              {item.external && (
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#22c55e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" locale={locale} className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-[#22c55e] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-[#111] leading-tight">MMS Group</div>
                <div className="text-[11px] text-gray-400 font-medium tracking-wider">ENERGY • ENGINEERING • SOLUTIONS</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              locale={locale}
              className="px-4 py-2.5 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors rounded-lg hover:bg-gray-50"
            >
              {locale === "mn" ? "Нүүр" : locale === "zh" ? "首页" : "Home"}
            </Link>
            <Link
              href="/about"
              locale={locale}
              className="px-4 py-2.5 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors rounded-lg hover:bg-gray-50"
            >
              {locale === "mn" ? "Бидний тухай" : locale === "zh" ? "关于我们" : "About"}
            </Link>
            <BusinessDropdown locale={locale} />
            <Link
              href="/projects"
              locale={locale}
              className="px-4 py-2.5 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors rounded-lg hover:bg-gray-50"
            >
              {locale === "mn" ? "Төслүүд" : locale === "zh" ? "项目" : "Projects"}
            </Link>
            <Link
              href="/news"
              locale={locale}
              className="px-4 py-2.5 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors rounded-lg hover:bg-gray-50"
            >
              {locale === "mn" ? "Мэдээ" : locale === "zh" ? "新闻" : "News"}
            </Link>
            <Link
              href="/contact"
              locale={locale}
              className="px-4 py-2.5 text-sm font-medium text-[#111] hover:text-[#22c55e] transition-colors rounded-lg hover:bg-gray-50"
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
                className="w-44 pl-4 pr-10 py-2 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/10 transition-all placeholder:text-gray-400"
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
            <div className="h-6 w-px bg-gray-200" />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#111] hover:bg-gray-50 rounded-lg transition-colors"
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
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              locale={locale}
              className="block px-4 py-3 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Нүүр" : locale === "zh" ? "首页" : "Home"}
            </Link>
            <Link
              href="/about"
              locale={locale}
              className="block px-4 py-3 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Бидний тухай" : locale === "zh" ? "关于我们" : "About"}
            </Link>
            <button
              onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-xl transition-colors"
            >
              {locale === "mn" ? "Бизнес" : locale === "zh" ? "业务" : "Business"}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileBusinessOpen ? "rotate-180" : ""}`}
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
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <div className="font-medium text-[#111]">{item.label}</div>
                      {item.description && (
                        <div className="text-xs text-gray-400">{item.description}</div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}
            <Link
              href="/projects"
              locale={locale}
              className="block px-4 py-3 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Төслүүд" : locale === "zh" ? "项目" : "Projects"}
            </Link>
            <Link
              href="/news"
              locale={locale}
              className="block px-4 py-3 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Мэдээ" : locale === "zh" ? "新闻" : "News"}
            </Link>
            <Link
              href="/contact"
              locale={locale}
              className="block px-4 py-3 text-sm font-medium text-[#111] hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact"}
            </Link>
          </div>
          <div className="px-4 py-4 border-t border-gray-100 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder={locale === "mn" ? "Хайх..." : locale === "zh" ? "搜索..." : "Search..."}
                className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/10"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
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
