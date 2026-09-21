import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Refunds | Deep Nap",
};

export default function ReturnsPage() {
  return (
    <main className="w-full bg-surface-white min-h-screen py-16 lg:py-24 px-gutter md:px-gutter-tablet">
      <article className="max-w-[720px] mx-auto">
        <header className="mb-12 border-b border-hairline pb-8">
          <h1 className="font-display-lg text-primary text-[40px] md:text-[52px] leading-[1.1] mb-4">
            Returns & Refunds
          </h1>
          <p className="font-body-regular text-slate">Last updated: September 1, 2026</p>
        </header>

        <div className="font-body-regular text-[17px] leading-[1.7] text-slate space-y-6">
          <p>
            At Deep Nap, we manufacture everything to order in our Coimbatore unit. We don't hold vast warehouses of inventory, which allows us to use premium materials at fair prices. Because of this direct-to-consumer model, our return policy is strict but transparent.
          </p>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">Standard Size Mattresses</h2>
          <p>
            If you order a standard size mattress (e.g., 78x72 King, 78x60 Queen) and realize it is not the right fit for your bed, you may return it within <strong>3 days of delivery</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The mattress must be completely unused, undamaged, and in its original condition.</li>
            <li>We do not offer a "sleep trial." Once a mattress has been slept on, it cannot be returned for hygiene reasons.</li>
            <li>If you require our team to pick up the mattress, a logistics fee will be deducted from your refund. If you drop it off at our Chinniyampalayam unit, the return is free.</li>
          </ul>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">Custom Size Mattresses</h2>
          <p>
            Custom-size mattresses are manufactured exclusively for your specific bed frame dimensions. 
          </p>
          <div className="bg-[#ef4444]/10 border-l-4 border-[#ef4444] p-4 my-6">
            <p className="text-[#b91c1c] font-medium m-0">
              Custom sizes are final sale and cannot be returned, exchanged, or refunded under any circumstances.
            </p>
          </div>
          <p>
            Please measure your bed carefully following our guide, or book a free home visit if you live in Coimbatore so our team can measure it for you.
          </p>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">Manufacturing Defects</h2>
          <p>
            If your mattress arrives with a manufacturing defect, or if it develops a severe sagging issue covered under your warranty period (2 to 10 years depending on the model), please refer to our <a href="/warranty" className="text-primary underline font-medium">Warranty Registration page</a>. We will inspect the mattress and repair or replace the defective core layers at no cost to you.
          </p>
        </div>
      </article>
    </main>
  );
}
