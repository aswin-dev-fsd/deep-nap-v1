import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Deep Nap",
};

export default function TermsPage() {
  return (
    <main className="w-full bg-surface-white min-h-screen py-16 lg:py-24 px-gutter md:px-gutter-tablet">
      <article className="max-w-[720px] mx-auto">
        <header className="mb-12 border-b border-hairline pb-8">
          <h1 className="font-display-lg text-primary text-[40px] md:text-[52px] leading-[1.1] mb-4">
            Terms & Conditions
          </h1>
          <p className="font-body-regular text-slate">Last updated: September 1, 2026</p>
        </header>

        <div className="font-body-regular text-[17px] leading-[1.7] text-slate space-y-6">
          <p>
            By ordering a mattress from Deep Nap, you agree to the following operational terms. We have kept them as simple and plain-English as possible.
          </p>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">1. Pricing and Quotes</h2>
          <p>
            All quotes provided via our website or WhatsApp are valid for 14 days. Because we use natural materials like latex and coir, our raw material costs fluctuate. We reserve the right to update our pricing, but we will always honor a quote if you place your order within the 14-day window. All prices quoted are inclusive of GST.
          </p>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">2. Payments</h2>
          <p>
            We do not accept payments directly through this website. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standard Sizes:</strong> You pay nothing upfront. You pay 100% of the invoice total via Cash or UPI only after the mattress has been delivered and placed on your bed.</li>
            <li><strong>Custom Sizes:</strong> Because the mattress is built uniquely for you, we require a small advance token (usually 10-20%) via UPI or Bank Transfer to begin manufacturing. The remaining balance is paid on delivery.</li>
          </ul>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">3. Delivery Timelines</h2>
          <p>
            We manufacture everything at our Chinniyampalayam unit. Typical lead times are 2 to 4 working days from the moment your order is confirmed. During peak festival seasons, this may extend to 7 days. Our team will coordinate a delivery time that works for you via WhatsApp.
          </p>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">4. Order Cancellations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standard Sizes:</strong> You may cancel your order at any time before it is loaded into our delivery vehicle.</li>
            <li><strong>Custom Sizes:</strong> You may cancel your order within 24 hours of paying the advance token. If you cancel after manufacturing has begun (usually day 2), your advance token is non-refundable, as we cannot sell a custom-sized mattress to another customer.</li>
          </ul>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">5. Tolerance and Variations</h2>
          <p>
            Because our mattresses are hand-assembled and use natural materials, please allow for a standard industry tolerance of +/- 0.5 inches in the final length, width, or height of the mattress. Small variations in the feel of natural latex batches are normal and are not considered a manufacturing defect.
          </p>
        </div>
      </article>
    </main>
  );
}
