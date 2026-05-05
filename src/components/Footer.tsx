import { getApolloClient } from "@/lib/apollo/client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import { Link } from "@/i18n/navigation";

export default async function Footer({ locale }: { locale: string }) {
  let menuItems: Array<{ _id: string; label?: string; url?: string }> = [];
  
  try {
    const { data } = await getApolloClient().query({
      query: CP_MENUS,
      variables: { language: locale, kind: "footer" },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    });
    menuItems = (data as { cpMenus?: Array<{ _id: string; label?: string; url?: string }> })?.cpMenus ?? [];
  } catch {
    // Fallback to empty menu if API fails
  }

  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#22c55e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="text-lg font-bold">MMS Group</div>
                <div className="text-xs text-gray-400">Energy • Engineering • Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {locale === "mn"
                ? "Барилга, уул уурхай, инженеринг, цахилгаан болон нарны энергийн шийдлүүд."
                : locale === "zh"
                ? "建筑、采矿、工程、电气和太阳能解决方案。"
                : "Construction, mining, engineering, electrical and solar energy solutions."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {locale === "mn" ? "Холбоосууд" : locale === "zh" ? "链接" : "Links"}
            </h3>
            <ul className="space-y-2">
              {menuItems.map((item: { _id: string; label?: string; url?: string }) => (
                <li key={item._id}>
                  <Link
                    href={item.url ?? "/"}
                    locale={locale}
                    className="text-gray-400 hover:text-[#22c55e] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {menuItems.length === 0 && [
                  <li key="home">
                    <Link href="/" locale={locale} className="text-gray-400 hover:text-[#22c55e] text-sm transition-colors">
                      {locale === "mn" ? "Нүүр" : locale === "zh" ? "首页" : "Home"}
                    </Link>
                  </li>,
                  <li key="about">
                    <Link href="/about" locale={locale} className="text-gray-400 hover:text-[#22c55e] text-sm transition-colors">
                      {locale === "mn" ? "Бидний тухай" : locale === "zh" ? "关于我们" : "About"}
                    </Link>
                  </li>,
                  <li key="contact">
                    <Link href="/contact" locale={locale} className="text-gray-400 hover:text-[#22c55e] text-sm transition-colors">
                      {locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact"}
                    </Link>
                  </li>
              ]}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact"}
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Ulaanbaatar, Mongolia</p>
              <p>info@mms.mn</p>
              <p>+976-11-XXXXXX</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MMS Group. {locale === "mn" ? "Бүх эрх хуулиар хамгаалагдсан." : locale === "zh" ? "版权所有。" : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
