import React, { Suspense } from "react";
import CompareTable from "./CompareTable";

export default function ComparePage() {
  return (
    <main className="w-full bg-surface-white min-h-screen">
      <div className="w-full bg-[#EFE5D7] pt-12 pb-8 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="font-display-lg text-display-lg text-primary">Compare Mattresses</h1>
          <p className="font-body-regular text-body-regular text-slate mt-2">
            Side-by-side specifications to help you decide.
          </p>
        </div>
      </div>
      
      <div className="w-full">
        <Suspense fallback={<div className="p-12 text-center text-primary font-label-nav">Loading comparison...</div>}>
          <CompareTable />
        </Suspense>
      </div>
    </main>
  );
}
