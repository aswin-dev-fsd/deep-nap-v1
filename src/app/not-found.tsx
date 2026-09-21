import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Deep Nap',
}

export default function NotFound() {
  return (
    <main className="w-full bg-primary min-h-screen flex flex-col items-center justify-center p-6 text-center">
      {/* Simple line drawing of a mattress with folded corner */}
      <div className="w-48 h-32 border-2 border-[#EFE5D7] rounded-xl relative mb-12 flex items-center justify-center">
        {/* The mattress body */}
        <div className="absolute inset-2 border border-[#EFE5D7]/50 rounded-lg"></div>
        
        {/* Folded corner abstraction */}
        <div className="absolute -top-[2px] -right-[2px] w-12 h-12 bg-primary">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EFE5D7] origin-bottom-left -rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-[2px] h-full bg-[#EFE5D7]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EFE5D7]"></div>
        </div>
        
        {/* Decorative lines to represent layers */}
        <div className="w-3/4 h-[1px] bg-[#EFE5D7]/30 mt-4"></div>
      </div>

      <h1 className="font-display-md text-[#EFE5D7] text-4xl md:text-5xl mb-10">
        This page isn't here.
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-6 font-label-nav text-lg text-[#EFE5D7]">
        <Link href="/mattresses" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">
          Mattresses
        </Link>
        <span className="hidden sm:inline opacity-30">•</span>
        <Link href="/custom-size" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">
          Custom size
        </Link>
        <span className="hidden sm:inline opacity-30">•</span>
        <a href="tel:9600889334" className="hover:text-white transition-colors flex items-center gap-2 underline underline-offset-4 decoration-white/30 hover:decoration-white">
          Talk to us: 96008 89334
        </a>
      </div>
    </main>
  )
}
