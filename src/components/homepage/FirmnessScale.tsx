"use client";
import React, { useState } from "react";

export default function FirmnessScale() {
  const [firmness, setFirmness] = useState<number>(7);

  const getDesc = (v: number) => {
    if (v <= 3) return "plush soft";
    if (v <= 5) return "gentle contour";
    if (v <= 7) return "medium firm";
    if (v <= 8) return "firm support";
    return "ortho extra firm";
  };

  const percentage = ((firmness - 1) / 9) * 100;

  return (
    <div className="pt-space-md pb-space-sm max-w-lg">
      <div className="flex justify-between items-center mb-1">
        <span className="font-label-form text-label-form text-slate">Soft (1)</span>
        <span
          className="font-label-nav text-label-nav font-semibold text-primary px-2.5 py-0.5 rounded bg-surface-white/60"
        >
          {firmness} &middot; {getDesc(firmness)}
        </span>
        <span className="font-label-form text-label-form text-slate">Firm (10)</span>
      </div>
      <div className="relative w-full py-3 flex items-center">
        <input
          className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary focus:outline-none"
          style={{
            background: `linear-gradient(to right, var(--color-primary) ${percentage}%, #DFD8CC ${percentage}%)`
          }}
          max="10"
          min="1"
          type="range"
          value={firmness}
          onChange={(e) => setFirmness(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="flex justify-between text-caption font-caption text-primary font-medium px-1">
        <span>Contoured sinking</span>
        <span>Balanced posture</span>
        <span>Orthopaedic spine</span>
      </div>
    </div>
  );
}
