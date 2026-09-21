import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Deep Nap",
};

export default function PrivacyPage() {
  return (
    <main className="w-full bg-surface-white min-h-screen py-16 lg:py-24 px-gutter md:px-gutter-tablet">
      <article className="max-w-[720px] mx-auto">
        <header className="mb-12 border-b border-hairline pb-8">
          <h1 className="font-display-lg text-primary text-[40px] md:text-[52px] leading-[1.1] mb-4">
            Privacy Policy
          </h1>
          <p className="font-body-regular text-slate">Last updated: September 1, 2026</p>
        </header>

        <div className="font-body-regular text-[17px] leading-[1.7] text-slate space-y-6">
          <p>
            At Deep Nap, we believe in keeping things simple. We make mattresses, we deliver them, and we handle our own customer service. We do not use third-party marketing agencies, and we do not sell your data.
          </p>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">What we collect</h2>
          <p>
            When you request a quote, book a consultation, or register your warranty, we collect only the information necessary to fulfill that request:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your name</li>
            <li>Your phone number (for WhatsApp communication and delivery coordination)</li>
            <li>Your delivery address</li>
            <li>Details about your bed dimensions or sleep preferences</li>
          </ul>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">How we use it</h2>
          <p>
            Your information stays with the Deep Nap team in Coimbatore. We use your phone number to coordinate the manufacturing and delivery of your mattress via WhatsApp. We keep your invoice details on file strictly so that we can honor your 2-to-10-year warranty if you ever need to make a claim.
          </p>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">What we do not do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not process online payments on this website, so we never see or store your credit card information.</li>
            <li>We do not use third-party shipping partners (like BlueDart or Delhivery) who would require your address. We deliver the mattresses ourselves.</li>
            <li>We do not send promotional spam emails.</li>
            <li>We absolutely never sell your phone number or address to third-party data brokers.</li>
          </ul>

          <h2 className="font-display-md text-primary text-2xl mt-10 mb-4">Contact us</h2>
          <p>
            If you want us to delete your consultation details or phone number from our internal records, simply message us on WhatsApp at <strong>96008 89334</strong> and we will remove it immediately. (Note: removing your invoice details may affect our ability to process future warranty claims).
          </p>
        </div>
      </article>
    </main>
  );
}
