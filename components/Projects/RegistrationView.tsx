
'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';

export default function RegistrationView({ data }: { data: ProjectDetails }) {
    const { config, styles } = data;

    return (
        <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden relative flex flex-col">
            <div className="fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/90 backdrop-blur-2xl z-40 border-b border-white/5 flex items-center px-10">
                <Link href={`/projects/${config.slug}`} className="flex items-center gap-4">
                    {styles.brandLogo ? (
                        <img src={styles.brandLogo.startsWith('http') ? styles.brandLogo : `https://raw.githubusercontent.com/Taedj/${config.slug}/master/CONTROL_WEBSITE/screenshots/${styles.brandLogo}`} className="h-12 w-auto object-contain" />
                    ) : (
                        <div className="text-4xl font-black tracking-tighter text-white/90 underline decoration-emerald-500 decoration-4 underline-offset-8">{config.brand}</div>
                    )}
                </Link>
            </div>

            <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
                <div className="max-w-xl w-full space-y-12 text-center">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Join <span className="text-emerald-500">{config.name.split(' ')[0]}</span></h1>
                        <p className="text-xl text-neutral-400">Create your account to start your professional journey.</p>
                    </div>

                    <div className="bg-[#0A0C10] border border-white/5 p-10 rounded-[2rem] shadow-2xl text-left space-y-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest ml-1">Full Name</label>
                                <input type="text" placeholder="Dr. Tidjani Zitouni" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-emerald-500/50 transition-all text-lg" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest ml-1">Email Address</label>
                                <input type="email" placeholder="zitounitidjani@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-emerald-500/50 transition-all text-lg" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest ml-1">Password</label>
                                <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-emerald-500/50 transition-all text-lg" />
                            </div>
                        </div>

                        <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative z-10">
                            Create Account
                        </button>

                        <p className="text-center text-neutral-500 text-sm font-medium relative z-10">
                            By signing up, you agree to our <Link href="#" className="underline hover:text-white transition-colors">Terms of Service</Link>
                        </p>
                    </div>

                    <p className="text-neutral-500 font-medium">
                        Already have an account? <Link href={`/projects/${config.slug}/dashboard`} className="text-white underline decoration-emerald-500/50 underline-offset-4 hover:decoration-emerald-500 transition-all">Sign in</Link>
                    </p>
                </div>
            </main>

            <footer className="py-12 text-center">
                <Link href={`/projects/${config.slug}`} className="inline-flex items-center gap-3 text-neutral-600 hover:text-white transition-all font-bold">
                    <FaArrowLeft /> Back to Project
                </Link>
            </footer>
        </div>
    );
}
