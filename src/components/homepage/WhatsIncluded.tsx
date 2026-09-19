import React from "react";

export default function WhatsIncluded() {
  return (
    <section className="w-full bg-[#F3E3C2] py-4 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-y border-hairline min-h-[64px] flex items-center">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col sm:flex-row justify-around items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DCA544] shrink-0"></span>
          <span className="font-label-nav text-label-nav text-primary font-medium">Free pillows with every mattress</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DCA544] shrink-0"></span>
          <span className="font-label-nav text-label-nav text-primary font-medium">No-cost EMI available in store</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DCA544] shrink-0"></span>
          <span className="font-label-nav text-label-nav text-primary font-medium">Bulk discounts on 10+ units</span>
        </div>
      </div>
    </section>
  );
}
