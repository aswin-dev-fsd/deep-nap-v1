"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, ProductCategory } from "@/data/products";
import CustomSizeBuilder from "@/components/homepage/CustomSizeBuilder";

const categories: ProductCategory[] = ["Latex", "Pocket spring", "Orthopaedic", "Memory foam", "Coir"];

export default function MattressesPage() {
  const [currentType, setCurrentType] = useState<ProductCategory | null>(null);

  const filteredProducts = currentType
    ? products.filter((p) => p.category === currentType)
    : products;

  return (
    <main className="w-full bg-surface min-h-screen">
      {/* Header Area */}
      <div className="w-full bg-[#EFE5D7] pt-12 pb-8 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="max-w-[1280px] mx-auto">
          <div className="font-caption text-caption text-slate mb-4">
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span> Mattresses
          </div>
          <h1 className="font-display-lg text-display-lg text-primary">Mattresses</h1>
          <p className="font-body-regular text-body-regular text-slate mt-2 max-w-2xl">
            Every mattress made to order in our own unit, in any of 18 standard sizes or yours. Built for comfort, backed by honest pricing.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="w-full bg-surface-white border-b border-hairline sticky top-[116px] z-30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 whitespace-nowrap min-w-max">
            <span className="font-label-nav text-label-nav text-slate mr-2 font-medium">Filter by Type:</span>
            
            <button
              onClick={() => setCurrentType(null)}
              className={`h-10 px-5 rounded-full font-label-nav text-label-nav font-medium transition-colors border ${
                !currentType
                  ? "bg-primary text-surface-white border-primary"
                  : "bg-surface text-primary border-hairline hover:bg-surface-container"
              }`}
            >
              All types
            </button>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCurrentType(cat)}
                className={`h-10 px-5 rounded-full font-label-nav text-label-nav font-medium transition-colors border ${
                  currentType === cat
                    ? "bg-primary text-surface-white border-primary"
                    : "bg-surface text-primary border-hairline hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-12 md:py-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-surface-white rounded-xl border border-hairline overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                
                <div className="relative w-full aspect-[4/3] bg-surface-container">
                  {product.isBestSeller && (
                    <div className="absolute top-4 left-4 z-10 bg-[#F3E3C2] text-primary px-3 py-1 rounded-full font-caption text-caption font-semibold">
                      Best seller
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-title-card text-title-card text-primary mb-1">{product.name}</h3>
                  <p className="font-body-regular text-body-regular text-slate text-sm line-clamp-1 mb-4">{product.description}</p>
                  
                  <div className="w-full h-px bg-hairline mb-4"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-caption text-caption text-slate uppercase tracking-wider">Firmness</div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${(product.firmness / 10) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-label-nav text-label-nav font-bold text-primary">{product.firmness}/10</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Thickness</div>
                      <div className="font-label-nav text-label-nav font-semibold text-primary">{product.thicknesses}</div>
                    </div>
                    <div>
                      <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Warranty</div>
                      <div className="font-label-nav text-label-nav font-semibold text-primary">{product.warranty}</div>
                    </div>
                  </div>

                  <div className="mt-auto flex items-end justify-between pt-4 border-t border-hairline">
                    <div>
                      <div className="font-price-display text-price-display text-primary">₹{product.priceFrom.toLocaleString('en-IN')}</div>
                      <div className="font-caption text-caption text-slate">indicative starting price</div>
                    </div>
                    <Link 
                      href={`/mattresses/${product.slug}`}
                      className="h-10 px-5 rounded-lg border border-primary text-primary font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-primary hover:text-surface-white transition-colors"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-white rounded-xl border border-hairline px-6">
            <span className="material-symbols-outlined text-[48px] text-slate mb-4">search_off</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Nothing matches that combination</h3>
            <p className="font-body-regular text-body-regular text-slate max-w-md mx-auto mb-8">
              We make everything to order, so we can probably build exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setCurrentType(null)} className="h-12 px-6 rounded-lg border border-primary text-primary font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-surface transition-colors">
                Clear filters
              </button>
              <a 
                href="https://wa.me/919600889334" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full bg-primary text-surface-white font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-navy-deep transition-colors gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
                Ask us on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

      <CustomSizeBuilder />
    </main>
  );
}
