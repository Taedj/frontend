
'use client';

import React from 'react';
import Link from 'next/link';
import { FaUserCircle, FaSignOutAlt, FaRocket } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';

export default function DashboardView({ data }: { data: ProjectDetails }) {
    const { config, styles } = data;

    return (
        <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden flex flex-col">
            <div className="fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/90 backdrop-blur-2xl z-40 border-b border-white/5 flex items-center justify-between px-10">
                <Link href={`/projects/${config.slug}`} className="flex items-center gap-4">
                    {styles.brandLogo ? (
                        <img src={styles.brandLogo.startsWith('http') ? styles.brandLogo : `https://raw.githubusercontent.com/Taedj/${config.slug}/master/CONTROL_WEBSITE/screenshots/${styles.brandLogo}`} className="h-12 w-auto object-contain" />
                    ) : (
                        <div className="text-4xl font-black tracking-tighter text-white/90 underline decoration-emerald-500 decoration-4 underline-offset-8">{config.brand}</div>
                    )}
                </Link>
                <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <FaUserCircle size={24} />
                    </div>
                    <button className="text-neutral-500 hover:text-white transition-colors">
                        <FaSignOutAlt size={20} />
                    </button>
                </div>
            </div>

            <main className="flex-grow pt-40 pb-20 px-10">
                <div className="max-w-7xl mx-auto space-y-12">
                    <header className="space-y-4">
                        <h1 className="text-6xl font-black tracking-tighter">My <span className="text-emerald-500">Dashboard</span></h1>
                        <p className="text-xl text-neutral-400">Welcome to the {config.name} control center.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0A0C10] border border-white/5 p-10 rounded-[2.5rem] space-y-6 group hover:border-emerald-500/30 transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                                <FaRocket size={32} />
                            </div>
                            <h3 className="text-3xl font-bold">Quick Start</h3>
                            <p className="text-neutral-500 leading-relaxed">Your professional suite is ready for deployment. Launch your workspace now.</p>
                            <button className="px-8 py-4 bg-white text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all">Launch App</button>
                        </div>

                        <div className="bg-[#0A0C10] border border-white/5 p-10 rounded-[2.5rem] flex items-center justify-center text-neutral-700 italic text-xl border-dashed">
                            Feature coming soon...
                        </div>
                        <div className="bg-[#0A0C10] border border-white/5 p-10 rounded-[2.5rem] flex items-center justify-center text-neutral-700 italic text-xl border-dashed">
                            Feature coming soon...
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
