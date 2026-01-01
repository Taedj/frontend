
'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';

export default function FeaturesView({ data }: { data: ProjectDetails }) {
    const { config, styles, chapters } = data;

    return (
        <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden flex flex-col">
            <div className="fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/90 backdrop-blur-2xl z-40 border-b border-white/5 flex items-center px-10">
                <Link href={`/projects/${config.slug}`} className="flex items-center gap-4">
                    {styles.brandLogo ? (
                        <img src={styles.brandLogo.startsWith('http') ? styles.brandLogo : `https://raw.githubusercontent.com/Taedj/${config.slug}/master/CONTROL_WEBSITE/screenshots/${styles.brandLogo}`} className="h-12 w-auto object-contain" />
                    ) : (
                        <div className="text-4xl font-black tracking-tighter text-white/90 underline decoration-emerald-500 decoration-4 underline-offset-8">{config.brand}</div>
                    )}
                </Link>
            </div>

            <main className="flex-grow pt-40 pb-20 px-10">
                <div className="max-w-5xl mx-auto space-y-24">
                    <header className="space-y-6 text-center">
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic text-emerald-500">Feature Report</h1>
                        <p className="text-2xl text-neutral-400 font-medium">Detailed audit of the {config.name} capabilities.</p>
                    </header>

                    <div className="grid grid-cols-1 gap-16">
                        {chapters.map((chapter, i) => (
                            <div key={i} className="group relative bg-[#0A0C10] border border-white/5 p-12 rounded-[3rem] overflow-hidden hover:border-emerald-500/20 transition-all duration-700">
                                <div className="absolute top-0 right-0 p-40 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-4 text-emerald-500">
                                        <FaCheckCircle size={32} />
                                        <h2 className="text-4xl font-bold tracking-tight">{chapter.title}</h2>
                                    </div>
                                    <p className="text-2xl text-neutral-400 leading-relaxed font-light">{chapter.description}</p>
                                    
                                    {chapter.image && (
                                        <div className="aspect-video rounded-3xl overflow-hidden border border-white/5 bg-black/40">
                                            <img src={chapter.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="py-20 text-center">
                <Link href={`/projects/${config.slug}`} className="inline-flex items-center gap-3 text-neutral-600 hover:text-white transition-all font-bold text-xl uppercase tracking-widest">
                    <FaArrowLeft /> Return to Main Page
                </Link>
            </footer>
        </div>
    );
}
