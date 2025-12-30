
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'DentalTid | Taedj Dev',
  description: 'A high-performance, offline-first management suite designed specifically for modern dental professionals.',
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#0E1116] text-white selection:bg-emerald-500/30">
      {/* Navigation Backdrop */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-[#0E1116]/80 backdrop-blur-md z-40 border-b border-white/5" />
      
      <main className="relative z-10 px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="pt-32 pb-12">
          <Link href="/#Taedj-Dev-Projects" className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-20 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
              active
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              Elevate Your Practice with <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">${word}</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
              A high-performance, offline-first management suite designed specifically for modern dental professionals.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0E1116] font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20">
                <FaDownload /> Download Now
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-neutral-800">
               
                 <img src="/assets/projects/dentaltid/cover.png" alt="DentalTid Hero" className="w-full h-full object-cover" />
               
            </div>
          </div>
        </section>

        {/* Story Chapters */}
        <div className="py-32">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />
          
        <section key={0} className="min-h-screen flex flex-col md:flex-row items-center justify-between py-24 gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Chapter 01</span>
            <h2 className="text-4xl font-bold text-white">The Unified Patient Hub</h2>
            <p className="text-xl text-neutral-400 leading-relaxed">Stop hunting for records. DentalTid brings medical history, treatment logs, and clinical alerts into a single, lightning-fast dashboard. It's your clinic's memory, organized perfectly.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden shadow-2xl relative">
              
                <img 
                  src={`/assets/projects/dentaltid/cover.png`} 
                  alt="The Unified Patient Hub" 
                  className="w-full h-full object-cover"
                />
              
            </div>
          </div>
        </section>
    
        <section key={1} className="min-h-screen flex flex-col md:flex-row items-center justify-between py-24 gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Chapter 02</span>
            <h2 className="text-4xl font-bold text-white">Precision Financial Intelligence</h2>
            <p className="text-xl text-neutral-400 leading-relaxed">Real-time tracking of every treatment, expense, and payment. Generate professional financial reports in seconds and gain deep insights into your practice's growth without the complexity of traditional accounting software.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden shadow-2xl relative">
              
                <img 
                  src={`/assets/projects/dentaltid/feature1.png`} 
                  alt="Precision Financial Intelligence" 
                  className="w-full h-full object-cover"
                />
              
            </div>
          </div>
        </section>
    
        <section key={2} className="min-h-screen flex flex-col md:flex-row items-center justify-between py-24 gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Chapter 03</span>
            <h2 className="text-4xl font-bold text-white">Resilience by Design (Offline First)</h2>
            <p className="text-xl text-neutral-400 leading-relaxed">Your patient data belongs in your clinic, not just on the web. DentalTid works seamlessly offline, ensuring your practice never stops even if the internet does. Local backups and optional cloud sync provide ultimate peace of mind.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden shadow-2xl relative">
              
                <img 
                  src={`/assets/projects/dentaltid/feature2.png`} 
                  alt="Resilience by Design (Offline First)" 
                  className="w-full h-full object-cover"
                />
              
            </div>
          </div>
        </section>
    
        </div>

        {/* Final CTA */}
        <section className="py-40 text-center">
          <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-20 rounded-[4rem] border border-emerald-500/20">
             <h2 className="text-5xl font-bold mb-6">Ready to transform your clinic?</h2>
             <p className="text-xl text-neutral-400 mb-10 max-w-xl mx-auto">
               Join the forward-thinking dentists who use DentalTid to power their daily operations.
             </p>
             <button className="px-12 py-5 bg-white text-black font-black text-xl rounded-2xl hover:scale-105 transition-transform">
               Get Started for Free
             </button>
          </div>
        </section>
      </main>

      {/* Footer Branding */}
      <footer className="py-20 border-t border-white/5 text-center text-neutral-600">
         <p>© {new Date().getFullYear()} Taedj Dev. Powered by the Taedj Ecosystem.</p>
      </footer>
    </div>
  );
}
    