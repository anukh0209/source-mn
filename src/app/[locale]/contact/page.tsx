"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = useTranslations('contactPage');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-500">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t('name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/10 transition-all"
                  placeholder={t('name')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t('email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/10 transition-all"
                  placeholder={t('email')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t('phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/10 transition-all"
                  placeholder={t('phone')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">{t('message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/10 transition-all resize-none"
                  placeholder={t('message')}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-8 py-4 bg-[#22c55e] text-white font-semibold rounded-lg hover:bg-[#16a34a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : t('submit')}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                  {t('success')}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                  {t('error')}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-[#111] mb-4">{t('address')}</h3>
              <p className="text-gray-600">{t('addressText')}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-[#111] mb-4">Email</h3>
              <a href="mailto:info@mms.mn" className="text-[#22c55e] hover:underline">info@mms.mn</a>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-[#111] mb-4">Phone</h3>
              <p className="text-gray-600">+976-11-XXXXXX</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-[#111] mb-4">{t('platforms')}</h3>
              <div className="space-y-3">
                <a href="https://mmse.mn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#22c55e] hover:underline">
                  <span className="w-2 h-2 bg-[#22c55e] rounded-full" />
                  Engineering
                </a>
                <a href="https://milwaukee.source.mn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ef4444] hover:underline">
                  <span className="w-2 h-2 bg-[#ef4444] rounded-full" />
                  Milwaukee Tools
                </a>
                <a href="https://electric.source.mn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#3b82f6] hover:underline">
                  <span className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  Electrical Products
                </a>
                <a href="https://solar.source.mn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#f59e0b] hover:underline">
                  <span className="w-2 h-2 bg-[#f59e0b] rounded-full" />
                  Solar Energy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
