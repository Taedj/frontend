
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaRocket } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'DentalTid | Taedj Dev',
  description: 'A high-performance, offline-first management suite designed specifically for modern dental professionals.',
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Mega Navigation Backdrop */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/90 backdrop-blur-2xl z-40 border-b border-white/5" />
      
      <main className="relative z-10 w-full">
        {/* Back Link Container */}
        <div className="max-w-[95%] mx-auto pt-40 pb-12">
          <Link href="/#Taedj-Dev-Projects" className="group inline-flex items-center gap-4 text-neutral-500 hover:text-white transition-all text-xl font-medium">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span>Back to Projects Hub</span>
          </Link>
        </div>

        {/* Hero Section - Mega Impact */}
        <section className="pt-20 pb-20 text-center w-full px-6">
          <div className="max-w-[95%] mx-auto space-y-12">
            <div className="inline-block px-8 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-lg font-bold tracking-[0.2em] uppercase">
              active
            </div>
            <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-[0.85] text-white" 
                style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))' }}
                dangerouslySetInnerHTML={{ __html: `Elevate Your Practice with <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">DentalTid</span>` }} />
            
            <p className="text-3xl md:text-4xl text-neutral-400 max-w-5xl mx-auto leading-tight font-medium">
              A high-performance, offline-first management suite designed specifically for modern dental professionals.
            </p>

            <div className="flex flex-wrap gap-8 pt-10 justify-center">
              <Link href="https://github.com/taedj-dev/dentaltid/releases/latest" className="px-16 py-8 bg-emerald-500 hover:bg-emerald-400 text-[#080A0E] text-3xl font-black rounded-[2rem] transition-all flex items-center gap-4 shadow-[0_20px_60px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95">
                <FaDownload size={32} /> Download for Windows
              </Link>
              <Link href="#features" className="px-16 py-8 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-3xl font-black rounded-[2rem] transition-all flex items-center gap-4 hover:scale-105 active:scale-95">
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Visual - Ultra Scale (No lateral space) */}
        <section className="pb-40 w-full px-4 md:px-10">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_150px_rgba(16,185,129,0.1)] bg-[#0A0C10] group/hero w-full mx-auto">
             {/* Window Decorator - Ultra Scale */}
             <div className="absolute top-0 left-0 right-0 h-16 bg-[#14171C] border-b border-white/5 flex items-center px-10 gap-3 z-20">
               <div className="w-5 h-5 rounded-full bg-red-500/40" />
               <div className="w-5 h-5 rounded-full bg-yellow-500/40" />
               <div className="w-5 h-5 rounded-full bg-green-500/40" />
               <div className="ml-10 h-9 px-8 bg-white/5 rounded-xl border border-white/5 flex-grow max-w-2xl hidden lg:flex text-sm text-neutral-500 items-center font-mono tracking-widest">
                 dentaltid.app/dashboard
               </div>
             </div>
             
               <img src="/assets/projects/dentaltid/cover.gif" alt="DentalTid Hero" className="w-full h-full object-contain pt-16 transition-all duration-1000 group-hover/hero:scale-[1.01]" />
             
          </div>
        </section>

        {/* Story Chapters - Immersive Scale */}
        <div className="py-40 max-w-[95%] mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-40" />
          
        <section key={0} className="py-24 space-y-20">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <span className="text-emerald-500 font-mono text-lg tracking-[0.3em] uppercase bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20">Chapter 01</span>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">The Unified Patient Hub</h2>
            <p className="text-2xl md:text-3xl text-neutral-400 leading-relaxed max-w-4xl mx-auto">Stop hunting for records. DentalTid brings medical history, treatment logs, and clinical alerts into a single, lightning-fast dashboard. It's your clinic's memory, organized perfectly.</p>
          </div>
          
          <div className="relative group/chapter w-full px-4 md:px-0">
            <div className="aspect-video bg-[#0A0C10] rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.8)] relative w-full">
               {/* Browser Decorator - Mega Scale */}
               <div className="absolute top-0 left-0 right-0 h-14 bg-[#14171C] border-b border-white/5 flex items-center px-8 gap-3 z-20">
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
               </div>
              
                <img 
                  src={`/assets/projects/dentaltid/cover.gif`} 
                  alt="The Unified Patient Hub" 
                  className="w-full h-full object-contain pt-14 transition-all duration-1000 group-hover/chapter:scale-[1.02]"
                />
              
            </div>
          </div>
        </section>
    
        <section key={1} className="py-24 space-y-20">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <span className="text-emerald-500 font-mono text-lg tracking-[0.3em] uppercase bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20">Chapter 02</span>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">Precision Financial Intelligence</h2>
            <p className="text-2xl md:text-3xl text-neutral-400 leading-relaxed max-w-4xl mx-auto">Real-time tracking of every treatment, expense, and payment. Generate professional financial reports in seconds and gain deep insights into your practice's growth without the complexity of traditional accounting software.</p>
          </div>
          
          <div className="relative group/chapter w-full px-4 md:px-0">
            <div className="aspect-video bg-[#0A0C10] rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.8)] relative w-full">
               {/* Browser Decorator - Mega Scale */}
               <div className="absolute top-0 left-0 right-0 h-14 bg-[#14171C] border-b border-white/5 flex items-center px-8 gap-3 z-20">
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
               </div>
              
                <img 
                  src={`/assets/projects/dentaltid/feature1.png`} 
                  alt="Precision Financial Intelligence" 
                  className="w-full h-full object-contain pt-14 transition-all duration-1000 group-hover/chapter:scale-[1.02]"
                />
              
            </div>
          </div>
        </section>
    
        <section key={2} className="py-24 space-y-20">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <span className="text-emerald-500 font-mono text-lg tracking-[0.3em] uppercase bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20">Chapter 03</span>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">Resilience by Design (Offline First)</h2>
            <p className="text-2xl md:text-3xl text-neutral-400 leading-relaxed max-w-4xl mx-auto">Your patient data belongs in your clinic, not just on the web. DentalTid works seamlessly offline, ensuring your practice never stops even if the internet does. Local backups and optional cloud sync provide ultimate peace of mind.</p>
          </div>
          
          <div className="relative group/chapter w-full px-4 md:px-0">
            <div className="aspect-video bg-[#0A0C10] rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.8)] relative w-full">
               {/* Browser Decorator - Mega Scale */}
               <div className="absolute top-0 left-0 right-0 h-14 bg-[#14171C] border-b border-white/5 flex items-center px-8 gap-3 z-20">
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
               </div>
              
                <img 
                  src={`/assets/projects/dentaltid/feature2.png`} 
                  alt="Resilience by Design (Offline First)" 
                  className="w-full h-full object-contain pt-14 transition-all duration-1000 group-hover/chapter:scale-[1.02]"
                />
              
            </div>
          </div>
        </section>
    
        </div>

        {/* Vision Section - Cinematic */}
        
          <section className="py-60 text-center w-full px-6 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
            <div className="max-w-6xl mx-auto">
              <div className="w-24 h-1.5 bg-emerald-500 mx-auto mb-16 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
              <blockquote className="text-5xl md:text-7xl font-bold text-white italic leading-[1.1] tracking-tight">
                "We believe software should feel invisible, allowing you to focus on what matters most: your patients."
              </blockquote>
            </div>
          </section>
        

        {/* Tech Stack Section - Grid Scale */}
        
          <section className="py-40 max-w-[90%] mx-auto">
            <h2 className="text-6xl md:text-8xl font-black mb-24 text-center tracking-tighter">The Fusion Engine</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              
        <div key="**Framework:** Flutter (Windows Desktop)" className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
          <p className="text-neutral-200 text-xl font-bold tracking-tight">**Framework:** Flutter (Windows Desktop)</p>
        </div>
    
        <div key="**Backend:** Firebase (Firestore, Auth, Storage)" className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
          <p className="text-neutral-200 text-xl font-bold tracking-tight">**Backend:** Firebase (Firestore, Auth, Storage)</p>
        </div>
    
        <div key="**Database:** SQLite (Offline-First sync)" className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
          <p className="text-neutral-200 text-xl font-bold tracking-tight">**Database:** SQLite (Offline-First sync)</p>
        </div>
    
        <div key="**State:** Riverpod" className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
          <p className="text-neutral-200 text-xl font-bold tracking-tight">**State:** Riverpod</p>
        </div>
    
        <div key="**UI:** Custom 3D Flip Cards & Framer-like animations" className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
          <p className="text-neutral-200 text-xl font-bold tracking-tight">**UI:** Custom 3D Flip Cards & Framer-like animations</p>
        </div>
    
            </div>
          </section>
        

        {/* Final CTA - Ultra Block */}
        <section className="py-60 text-center px-6">
          <div className="bg-gradient-to-br from-emerald-600/20 via-[#0A0C10] to-cyan-600/20 p-24 md:p-40 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <h2 className="text-6xl md:text-[10rem] font-black mb-12 tracking-tighter leading-none">Ready to Transform Your Clinic?</h2>
             <p className="text-3xl md:text-4xl text-neutral-400 mb-20 max-w-4xl mx-auto leading-tight font-medium">
               Join hundreds of dental professionals who have already upgraded their workflow with DentalTid.
             </p>
             <Link href="https://taedj.dev/dentaltid/buy" className="px-20 py-10 bg-white text-black font-black text-4xl rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-6 shadow-[0_30px_100px_rgba(255,255,255,0.15)]">
               <FaRocket size={40} /> Get DentalTid Now
             </Link>
          </div>
        </section>
      </main>

      {/* Footer Branding - Clean Finish */}
      <footer className="py-32 border-t border-white/5 text-center">
         <div className="mb-10 text-3xl font-black tracking-tighter text-white/20">TAEDJ ECOSYSTEM</div>
         <p className="text-xl text-neutral-600 font-medium">© {new Date().getFullYear()} Taedj Dev. Finality through Precision.</p>
      </footer>
    </div>
  );
}
    