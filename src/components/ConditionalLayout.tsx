"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isQuiz = pathname === "/quiz";

  if (isQuiz) {
    // For the quiz, we render exactly what's needed without the standard header/footer
    // and without the top padding that the standard layout has.
    return (
      <div className="w-full h-full bg-[#EFE5D7]">
        {children}
      </div>
    );
  }

  return (
    <>
      <Header />
      {/* pt-[116px] offsets the fixed Header (h-20 = 80px + utility bar 36px = 116px) */}
      <div className="flex-grow pt-[116px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
