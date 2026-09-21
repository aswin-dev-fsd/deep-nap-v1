import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articlesData } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Guide | Deep Nap",
  description: "Practical answers from people who make mattresses for a living.",
};

export default function GuideIndexPage() {
  const featuredArticle = articlesData[0];
  const gridArticles = articlesData.slice(1);

  return (
    <main className="w-full bg-[#EFE5D7] min-h-screen pb-24">
      
      {/* HEADER */}
      <section className="w-full pt-20 pb-12 px-gutter md:px-gutter-tablet lg:px-gutter-desktop max-w-[1280px] mx-auto">
        <h1 className="font-display-lg text-primary text-[48px] md:text-[64px] leading-none mb-4">
          Sleep guide
        </h1>
        <p className="font-body-regular text-slate text-xl md:text-2xl max-w-2xl">
          Practical answers from people who make mattresses for a living.
        </p>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="w-full px-gutter md:px-gutter-tablet lg:px-gutter-desktop max-w-[1280px] mx-auto mb-16">
        <Link href={`/guide/${featuredArticle.slug}`} className="group block">
          <div className="bg-surface-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-hairline flex flex-col md:flex-row">
            
            <div className="w-full md:w-3/5 h-[300px] md:h-[450px] relative bg-surface-container">
              <Image 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-nav text-xs uppercase tracking-wider text-[#DCA544] bg-[#DCA544]/10 px-3 py-1 rounded-full">
                  {featuredArticle.category}
                </span>
                <span className="font-caption text-slate">{featuredArticle.readTime}</span>
              </div>
              <h2 className="font-display-md text-primary text-3xl md:text-4xl mb-4 group-hover:text-[#DCA544] transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="font-body-regular text-slate text-lg mb-8 line-clamp-3">
                {featuredArticle.excerpt}
              </p>
              <div className="font-label-nav text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                Read article <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>
            
          </div>
        </Link>
      </section>

      {/* ARTICLE GRID */}
      <section className="w-full px-gutter md:px-gutter-tablet lg:px-gutter-desktop max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {gridArticles.map((article) => (
            <Link key={article.id} href={`/guide/${article.slug}`} className="group h-full">
              <div className="bg-surface-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-hairline h-full flex flex-col">
                
                <div className="w-full aspect-[4/3] relative bg-surface-container overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-nav text-[11px] uppercase tracking-wider text-[#DCA544] bg-[#DCA544]/10 px-2 py-1 rounded-md">
                      {article.category}
                    </span>
                    <span className="font-caption text-slate">{article.readTime}</span>
                  </div>
                  <h3 className="font-display-md text-primary text-2xl mb-3 group-hover:text-[#DCA544] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="font-body-regular text-slate line-clamp-2 mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="font-label-nav text-primary flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                    Read <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
                
              </div>
            </Link>
          ))}
          
        </div>
      </section>
      
    </main>
  );
}
