import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MMS Group",
  description: "Get in touch with MMS Group for business inquiries and partnerships.",
  openGraph: {
    title: "Contact | MMS Group",
    description: "Get in touch with MMS Group for business inquiries and partnerships.",
    type: "website",
  },
};

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const content = {
    mn: {
      title: "Холбоо барих",
      subtitle: "Бидэнтэй холбоо барина уу",
      name: "Нэр",
      email: "Имэйл",
      phone: "Утас",
      message: "Мессеж",
      submit: "Илгээх",
      address: "Хаяг",
      addressText: "Улаанбаатар хот, Монгол Улс",
    },
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send",
      address: "Address",
      addressText: "Ulaanbaatar, Mongolia",
    },
    zh: {
      title: "联系我们",
      subtitle: "与我们联系",
      name: "姓名",
      email: "电子邮件",
      phone: "电话",
      message: "留言",
      submit: "发送",
      address: "地址",
      addressText: "蒙古国乌兰巴托",
    },
  };

  const t = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#111] mb-4">{t.title}</h1>
          <p className="text-xl text-gray-500">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t.name}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
                  placeholder={t.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t.email}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
                  placeholder={t.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t.phone}</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
                  placeholder={t.phone}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t.message}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
                  placeholder={t.message}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#22c55e] text-white font-medium rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                {t.submit}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#111] mb-4">{t.address}</h3>
              <p className="text-gray-600">{t.addressText}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111] mb-4">Email</h3>
              <p className="text-gray-600">info@mms.mn</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111] mb-4">Phone</h3>
              <p className="text-gray-600">+976-11-XXXXXX</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-[#111] mb-4">
                {locale === "mn" ? "Бизнес платформууд" : locale === "zh" ? "业务平台" : "Business Platforms"}
              </h3>
              <div className="space-y-2">
                <a href="https://mmse.mn" target="_blank" rel="noopener noreferrer" className="block text-[#22c55e] hover:underline">Engineering</a>
                <a href="https://milwaukee.source.mn" target="_blank" rel="noopener noreferrer" className="block text-[#22c55e] hover:underline">Milwaukee Tools</a>
                <a href="https://electric.source.mn" target="_blank" rel="noopener noreferrer" className="block text-[#22c55e] hover:underline">Electrical Products</a>
                <a href="https://solar.source.mn" target="_blank" rel="noopener noreferrer" className="block text-[#22c55e] hover:underline">Solar Energy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
