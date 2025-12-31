
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';

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
        <section className="pt-24 pb-16 text-center max-w-6xl mx-auto">
          <div className="space-y-10">
            <div className="inline-block px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-base font-medium">
              active
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: `Elevate Your Practice with <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">DentalTid</span>` }} />
            <p className="text-2xl md:text-3xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              A high-performance, offline-first management suite designed specifically for modern dental professionals.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0E1116] font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20">
                <FaDownload /> Download for Windows
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                Explore Features
              </button>
            </div>
          </div>
        </section>

        {/* Hero Visual - Ultra Large View */}
        <section className="pb-32 px-2 md:px-6">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(16,185,129,0.15)] bg-[#111419] group/hero max-w-[90rem] mx-auto">
             {/* Browser Decorator */}
             <div className="absolute top-0 left-0 right-0 h-12 bg-[#1A1D23] border-b border-white/10 flex items-center px-6 gap-2.5 z-20">
               <div className="w-4 h-4 rounded-full bg-red-500/40" />
               <div className="w-4 h-4 rounded-full bg-yellow-500/40" />
               <div className="w-4 h-4 rounded-full bg-green-500/40" />
               <div className="ml-6 h-7 px-5 bg-white/5 rounded-lg border border-white/10 flex-grow max-w-lg hidden md:flex text-xs text-neutral-500 items-center font-mono">
                 dentaltid.app
               </div>
             </div>
             
               <img src="/assets/projects/dentaltid/cover.gif" alt="DentalTid Hero" className="w-full h-full object-contain pt-12 transition-transform duration-1000 group-hover/hero:scale-[1.01]" />
             
          </div>
        </section>

        {/* Story Chapters */}
        <div className="py-32">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />
          
        <section key={0} className="py-24 space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">Chapter 01</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">The Unified Patient Hub</h2>
            <p className="text-2xl text-neutral-400 leading-relaxed">Stop hunting for records. DentalTid brings medical history, treatment logs, and clinical alerts into a single, lightning-fast dashboard. It's your clinic's memory, organized perfectly.</p>
          </div>
          
          <div className="relative group/chapter">
            <div className="aspect-video bg-[#111419] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative max-w-7xl mx-auto">
               {/* Window Decorator */}
               <div className="absolute top-0 left-0 right-0 h-10 bg-[#1A1D23] border-b border-white/10 flex items-center px-6 gap-2 z-20">
                 <div className="w-3 h-3 rounded-full bg-white/10" />
                 <div className="w-3 h-3 rounded-full bg-white/10" />
                 <div className="w-3 h-3 rounded-full bg-white/10" />
               </div>
              
                <img 
                  src={`/assets/projects/dentaltid/cover.gif`} 
                  alt="The Unified Patient Hub" 
                  className="w-full h-full object-contain pt-10 transition-all duration-700 group-hover/chapter:scale-[1.01]"
                />
              
            </div>
          </div>
        </section>
    
        <section key={1} className="py-24 space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">Chapter 02</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">Precision Financial Intelligence</h2>
            <p className="text-2xl text-neutral-400 leading-relaxed">Real-time tracking of every treatment, expense, and payment. Generate professional financial reports in seconds and gain deep insights into your practice's growth without the complexity of traditional accounting software.</p>
          </div>
          
          <div className="relative group/chapter">
            <div className="aspect-video bg-[#111419] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative max-w-7xl mx-auto">
               {/* Window Decorator */}
               <div className="absolute top-0 left-0 right-0 h-10 bg-[#1A1D23] border-b border-white/10 flex items-center px-6 gap-2 z-20">
                 <div className="w-3 h-3 rounded-full bg-white/10" />
                 <div className="w-3 h-3 rounded-full bg-white/10" />
                 <div className="w-3 h-3 rounded-full bg-white/10" />
               </div>
              
                <img 
                  src={`/assets/projects/dentaltid/feature1.png`} 
                  alt="Precision Financial Intelligence" 
                  className="w-full h-full object-contain pt-10 transition-all duration-700 group-hover/chapter:scale-[1.01]"
                />
              
            </div>
          </div>
        </section>
    
        <section key={2} className="py-24 space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">Chapter 03</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">Resilience by Design (Offline First)</h2>
            <p className="text-2xl text-neutral-400 leading-relaxed">Your patient data belongs in your clinic, not just on the web. DentalTid works seamlessly offline, ensuring your practice never stops even if the internet does. Local backups and optional cloud sync provide ultimate peace of mind.</p>
          </div>
          
          <div className="relative group/chapter">
            <div className="aspect-video bg-[#111419] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative max-w-7xl mx-auto">
               {/* Window Decorator */}
               <div className="absolute top-0 left-0 right-0 h-10 bg-[#1A1D23] border-b border-white/10 flex items-center px-6 gap-2 z-20">
                 <div className="w-3 h-3 rounded-full bg-white/10" />
                 <div className="w-3 h-3 rounded-full bg-white/10" />
                 <div className="w-3 h-3 rounded-full bg-white/10" />
               </div>
              
                <img 
                  src={`/assets/projects/dentaltid/feature2.png`} 
                  alt="Resilience by Design (Offline First)" 
                  className="w-full h-full object-contain pt-10 transition-all duration-700 group-hover/chapter:scale-[1.01]"
                />
              
            </div>
          </div>
        </section>
    
        </div>

        {/* Vision Section */}
        
          <section className="py-32 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <div className="w-12 h-1 bg-emerald-500 mx-auto mb-8 rounded-full" />
              <blockquote className="text-3xl md:text-4xl font-medium text-neutral-200 italic leading-snug">
                "We believe software should feel invisible, allowing you to focus on what matters most: your patients."
              </blockquote>
            </div>
          </section>
        

        {/* Tech Stack Section */}
        
          <section className="py-32">
            <h2 className="text-3xl font-bold mb-12 text-center">The Tech Behind the Magic</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
        <div key="**Framework:** Flutter (Windows Desktop)" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-neutral-300 font-medium">**Framework:** Flutter (Windows Desktop)</p>
        </div>
    
        <div key="**Backend:** Firebase (Firestore, Auth, Storage)" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-neutral-300 font-medium">**Backend:** Firebase (Firestore, Auth, Storage)</p>
        </div>
    
        <div key="**Database:** SQLite (Offline-First sync)" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-neutral-300 font-medium">**Database:** SQLite (Offline-First sync)</p>
        </div>
    
        <div key="**State:** Riverpod" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-neutral-300 font-medium">**State:** Riverpod</p>
        </div>
    
        <div key="**UI:** Custom 3D Flip Cards & Framer-like animations" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-neutral-300 font-medium">**UI:** Custom 3D Flip Cards & Framer-like animations</p>
        </div>
    
            </div>
          </section>
        

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
         <p>© 2025 Taedj Dev. Powered by the Taedj Ecosystem.</p>
      </footer>
    </div>
  );
}
    