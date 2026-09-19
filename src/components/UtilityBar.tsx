import React from "react";

export default function UtilityBar() {
  return (
    <div className="hidden lg:flex w-full bg-primary-container h-9 items-center justify-center">
      <div className="flex text-surface-white/70 font-label-form text-label-form items-center justify-between px-gutter-desktop max-w-[1280px] w-full">
        <span className="flex items-center gap-space-xs font-label-form text-label-form">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
          Made to order in our own unit · delivered across Tamil Nadu
        </span>
        <div className="flex items-center gap-space-lg font-label-form text-label-form">
          <div className="flex items-center gap-space-xs">
            <button className="hover:text-surface-white transition-colors" type="button">
              English
            </button>
            <span className="text-surface-white/30">/</span>
            <button className="hover:text-surface-white transition-colors" type="button">
              தமிழ்
            </button>
          </div>
          <span className="text-surface-white/30">·</span>
          <a
            className="flex items-center gap-1 hover:text-surface-white transition-colors font-medium"
            href="tel:9600889334"
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            96008 89334
          </a>
        </div>
      </div>
    </div>
  );
}
