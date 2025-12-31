
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaRocket } from 'react-icons/fa';

export const metadata: Metadata = { title: 'DentalTid | Taedj Dev', description: 'Your trusted dental companion' };

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden relative">
      
      <div className="fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/90 backdrop-blur-2xl z-40 border-b border-white/5 flex items-center px-10">
        <div className="text-4xl font-black tracking-tighter text-white/90 underline decoration-emerald-500 decoration-4 underline-offset-8">Taedj Dev</div>
      </div>
      <main className="relative z-10 w-full">
        <div className="max-w-[95%] mx-auto pt-40 pb-12">
          <Link href="/#Taedj-Dev-Projects" className="group inline-flex items-center gap-4 text-neutral-500 hover:text-white transition-all text-xl font-medium">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span>Back to Projects Hub</span>
          </Link>
        </div>
        <section className="pt-20 pb-20 text-center w-full px-6">
          <div className="max-w-[95%] mx-auto space-y-12">
            <h1 style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))', fontSize: '120px' }} className="font-black tracking-tighter leading-[0.85] text-white" dangerouslySetInnerHTML={{ __html: ` <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">DentalTid</span>` }} />
            <p className="text-3xl md:text-4xl text-neutral-400 max-w-5xl mx-auto leading-tight font-medium">Your trusted dental companion</p>
            <div className="flex flex-wrap gap-8 pt-10 justify-center">
              <Link href="#" style={{ padding: '32px 64px', fontSize: '32px', borderRadius: '32px' }} className="bg-emerald-500 hover:bg-emerald-400 text-[#080A0E] font-black rounded-[2rem] transition-all flex items-center gap-4 shadow-[0_20px_60px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95">
                <FaDownload /> Download Now
              </Link>
              <Link href="#" style={{ padding: '32px 64px', fontSize: '32px', borderRadius: '32px' }} className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-[2rem] transition-all flex items-center gap-4 hover:scale-105 active:scale-95">Learn More</Link>
            </div>
          </div>
        </section>
        <section className="pb-40 w-full px-4 md:px-10">
          <div style={{ borderRadius: '32px' }} className="relative aspect-video overflow-hidden border border-white/5 shadow-[0_0_150px_rgba(16,185,129,0.1)] bg-[#0A0C10] group/hero w-full mx-auto flex items-center justify-center">
            <div className="absolute top-0 left-0 right-0 h-16 bg-[#14171C] border-b border-white/5 flex items-center px-10 gap-3 z-20">
              <div className="w-5 h-5 rounded-full bg-red-500/40" />
              <div className="w-5 h-5 rounded-full bg-yellow-500/40" />
              <div className="w-5 h-5 rounded-full bg-green-500/40" />
              <div className="ml-10 h-9 px-8 bg-white/5 rounded-xl border border-white/5 flex-grow max-w-2xl hidden lg:flex text-sm text-neutral-500 items-center font-mono tracking-widest text-left">dentaltid.app/dashboard</div>
            </div>
            <img
               src="/assets/projects/dentaltid/cover.gif"
               alt="dentaltid Hero"
               style={{
                 maxWidth: '100%',
                 transform: 'translateY(0px) scale(1)',
                 transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
               }}
               className="w-full h-full object-contain pt-16 transition-all duration-1000 group-hover/hero:scale-[1.01]" />
          </div>
        </section>
        <div className="py-40 max-w-[95%] mx-auto text-left">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-40" />
          
        <section key={0} style={{ paddingTop: '160px', paddingBottom: '160px' }} className="space-y-20">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">Feature 1</h2>
            <p className="text-2xl md:text-3xl text-neutral-400 leading-relaxed max-w-4xl mx-auto">Description for Chapter 1</p>
          </div>
          <div className="relative group/chapter w-full px-4 md:px-0">
            <div style={{ borderRadius: '32px' }} className="aspect-video bg-[#0A0C10] border border-white/5 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.8)] relative w-full">
               <div className="absolute top-0 left-0 right-0 h-14 bg-[#14171C] border-b border-white/5 flex items-center px-8 gap-3 z-20">
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
               </div>
               <div className="w-full h-full flex items-center justify-center overflow-hidden pt-14">
                 <img
                     src={`/assets/projects/dentaltid/feature1.png`}
                     alt="Feature 1"
                     style={{
                       maxWidth: '100%',
                       transform: 'translateY(0px) scale(1)',
                       transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                     }}
                     className="object-contain h-full transition-all duration-1000 group-hover/chapter:scale-[1.05]"
                   />
               </div>
            </div>
          </div>
        </section>
        <section key={1} style={{ paddingTop: '160px', paddingBottom: '160px' }} className="space-y-20">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">Feature 2</h2>
            <p className="text-2xl md:text-3xl text-neutral-400 leading-relaxed max-w-4xl mx-auto">Description for Chapter 2</p>
          </div>
          <div className="relative group/chapter w-full px-4 md:px-0">
            <div style={{ borderRadius: '32px' }} className="aspect-video bg-[#0A0C10] border border-white/5 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.8)] relative w-full">
               <div className="absolute top-0 left-0 right-0 h-14 bg-[#14171C] border-b border-white/5 flex items-center px-8 gap-3 z-20">
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
               </div>
               <div className="w-full h-full flex items-center justify-center overflow-hidden pt-14">
                 <img
                     src={`/assets/projects/dentaltid/feature2.png`}
                     alt="Feature 2"
                     style={{
                       maxWidth: '100%',
                       transform: 'translateY(0px) scale(1)',
                       transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                     }}
                     className="object-contain h-full transition-all duration-1000 group-hover/chapter:scale-[1.05]"
                   />
               </div>
            </div>
          </div>
        </section>
        <section key={2} style={{ paddingTop: '160px', paddingBottom: '160px' }} className="space-y-20">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">Feature 3</h2>
            <p className="text-2xl md:text-3xl text-neutral-400 leading-relaxed max-w-4xl mx-auto">Description for Chapter 3</p>
          </div>
          <div className="relative group/chapter w-full px-4 md:px-0">
            <div style={{ borderRadius: '32px' }} className="aspect-video bg-[#0A0C10] border border-white/5 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.8)] relative w-full">
               <div className="absolute top-0 left-0 right-0 h-14 bg-[#14171C] border-b border-white/5 flex items-center px-8 gap-3 z-20">
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
                 <div className="w-4 h-4 rounded-full bg-white/5" />
               </div>
               <div className="w-full h-full flex items-center justify-center overflow-hidden pt-14">
                 <img
                     src={`/assets/projects/dentaltid/feature3.png`}
                     alt="Feature 3"
                     style={{
                       maxWidth: '100%',
                       transform: 'translateY(0px) scale(1)',
                       transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                     }}
                     className="object-contain h-full transition-all duration-1000 group-hover/chapter:scale-[1.05]"
                   />
               </div>
            </div>
          </div>
        </section>
        </div>
        <section className="py-60 text-center w-full px-6 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"><div className="max-w-6xl mx-auto"><div className="w-24 h-1.5 bg-emerald-500 mx-auto mb-16 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" /><blockquote className="text-5xl md:text-7xl font-bold text-white italic leading-[1.1] tracking-tight">"Precision is the heartbeat of modern dentistry."</blockquote></div></section>
        <section className="py-60 text-center px-6">
          <div className="bg-gradient-to-br from-emerald-600/20 via-[#0A0C10] to-cyan-600/20 p-24 md:p-40 border border-white/5 shadow-2xl relative overflow-hidden group" style={{ borderRadius: '64px' }}>
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-6xl md:text-[10rem] font-black mb-12 tracking-tighter leading-none">Get Started Today</h2>
            <p className="text-3xl md:text-4xl text-neutral-400 mb-20 max-w-4xl mx-auto leading-tight font-medium">Join the future of dental practice management.</p>
            <Link href="#" style={{ padding: '32px 64px', fontSize: '32px', borderRadius: '32px' }} className="bg-white text-black font-black text-4xl rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-6 shadow-[0_30px_100px_rgba(255,255,255,0.15)]">
              <FaRocket size={40} /> Get Started
            </Link>
          </div>
        </section>
      </main>
      <footer className="py-32 border-t border-white/5 text-center">
        <div className="mb-10 text-3xl font-black tracking-tighter text-white/20">TAEDJ ECOSYSTEM</div>
        <p className="text-xl text-neutral-600 font-medium">© 2026 Taedj Dev. Finality through Precision.</p>
      </footer>
    </div>
  );
}
