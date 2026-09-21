import React, { Suspense } from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <main className="w-full bg-[#F8F4ED] min-h-screen">
      {/* Small Header */}
      <div className="w-full bg-surface-white border-b border-hairline pt-8 pb-4 px-gutter md:px-gutter-tablet lg:px-gutter-desktop sticky top-0 z-30">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <Link href="/" className="font-display-sm text-primary">Deep Nap</Link>
          <Link href="/mattresses" className="font-label-nav text-slate hover:text-primary transition-colors">
            Cancel
          </Link>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-12 md:py-20">
        <Suspense fallback={<div className="font-label-nav text-primary">Loading your configuration...</div>}>
          <QuoteForm />
        </Suspense>
      </div>
    </main>
  );
}
