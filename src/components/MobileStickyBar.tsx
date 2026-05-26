"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function MobileStickyBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-12px_30px_rgba(0,0,0,0.12)] lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href="tel:8434152437"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-brand-black px-3 py-3 text-sm font-semibold text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {t.mobile.callNow}
        </a>
        <Link
          href="/contact"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-brand-gold px-3 py-3 text-sm font-semibold text-brand-black"
        >
          {t.mobile.freeQuote}
        </Link>
      </div>
    </div>
  );
}
