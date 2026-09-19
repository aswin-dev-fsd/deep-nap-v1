"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "./UtilityBar";
import { PrimaryButton, WhatsAppButton } from "./Buttons";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <UtilityBar />
      
      <div className="bg-secondary-fixed/90 backdrop-blur-md border-b border-hairline shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop flex items-center justify-between gap-space-md">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-space-md">
            {/* Hamburger (Mobile Only) */}
            <button 
              className="xl:hidden text-primary p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            <Link href="/" className="flex items-center gap-space-md">
              <div className="relative h-16 w-48 sm:w-64">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VyBxylK-3YX6ydgNoyvEM6k3-IYwrftv2b1w8EZrMNWwbDHEkLstP3lfwBQYP1yub851HDJgdj69RnCc64OvsOlfotAmwM0jeiG3r3KclvcXmNSot3s41ZFJkA9ARlDaOFKM6CiXAnoZ--JguVEs1FujkWc23g5XeMUT_lpDTLNShJWVF5bpfC9-QwBsj2RnpdQu3p6n7kbB65ZfiH0PV9rQCy9H-Rj2JXODC904x_wiaYDaSq-YvcUfWf"
                  alt="Deep Nap Mattress Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-space-md">
            <Link href="#" className="transition-colors bg-primary-container text-surface-white rounded-lg px-space-sm py-1.5 font-semibold">
              Mattresses
            </Link>
            <Link href="#" className="font-label-nav text-label-nav text-on-surface-variant hover:text-on-surface transition-colors py-1.5">
              Diwan cots
            </Link>
            <Link href="#" className="font-label-nav text-label-nav text-on-surface-variant hover:text-on-surface transition-colors py-1.5">
              Custom size
            </Link>
            <Link href="#" className="font-label-nav text-label-nav text-on-surface-variant hover:text-on-surface transition-colors py-1.5">
              Bulk orders
            </Link>
            <Link href="#" className="font-label-nav text-label-nav text-on-surface-variant hover:text-on-surface transition-colors py-1.5">
              Visit us
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-space-sm">
            <div className="hidden sm:block">
              <WhatsAppButton />
            </div>
            <PrimaryButton className="!px-5 !py-2.5 !h-auto text-sm">
              Get a quote
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative w-4/5 max-w-sm bg-surface h-full shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-hairline">
              <span className="font-headline-sm text-primary tracking-tight">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-on-surface-variant"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-4">
              <Link href="#" className="font-label-nav text-lg text-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                Mattresses
              </Link>
              <Link href="#" className="font-label-nav text-lg text-on-surface-variant" onClick={() => setIsMobileMenuOpen(false)}>
                Diwan cots
              </Link>
              <Link href="#" className="font-label-nav text-lg text-on-surface-variant" onClick={() => setIsMobileMenuOpen(false)}>
                Custom size
              </Link>
              <Link href="#" className="font-label-nav text-lg text-on-surface-variant" onClick={() => setIsMobileMenuOpen(false)}>
                Bulk orders
              </Link>
              <Link href="#" className="font-label-nav text-lg text-on-surface-variant" onClick={() => setIsMobileMenuOpen(false)}>
                Visit us
              </Link>
            </nav>
            <div className="mt-auto p-4 border-t border-hairline flex flex-col gap-4">
              <WhatsAppButton className="w-full justify-center" />
              <div className="flex items-center gap-2 text-slate font-label-nav">
                <span className="material-symbols-outlined text-[18px]">call</span>
                96008 89334
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
