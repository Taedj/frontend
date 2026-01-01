'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaClinicMedical, FaUserMd, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';

export default function RegistrationView({ data }: { data: ProjectDetails }) {
    const { config, styles, hero } = data;
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    if (isRegistered) {
        return (
            <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 flex flex-col items-center justify-center p-6">
                <div className="max-w-2xl w-full bg-[#0A0C10] border border-emerald-500/20 p-12 md:p-20 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.1)] text-center space-y-10 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                    
                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-bounce">
                        <FaClinicMedical size={40} className="text-[#080A0E]" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">REGISTRATION <span className="text-emerald-500">COMPLETE</span></h1>
                        <p className="text-xl text-neutral-400 font-medium">Your clinic has been successfully onboarded to the {config.name} ecosystem.</p>
                    </div>

                    <div className="pt-10 space-y-6">
                        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm">Next Step: Install Workspace</p>
                        <Link 
                            href={hero.ctaPrimaryLink}
                            className="w-full bg-white text-black font-black py-6 rounded-2xl hover:scale-105 active:scale-95 transition-all text-2xl flex items-center justify-center gap-4 shadow-[0_30px_100px_rgba(255,255,255,0.1)]"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg" className="w-8 h-8" alt="Windows" />
                            Download for Windows
                        </Link>
                        <p className="text-neutral-500 text-sm">Version 2.0.1 • Windows 10/11 x64</p>
                    </div>

                    <div className="pt-10 border-t border-white/5">
                        <Link href={`/projects/${config.slug}/dashboard`} className="text-neutral-400 hover:text-white transition-all font-bold">Go to Web Dashboard →</Link>
                    </div>
                </div>
            </div>
        );
    }

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
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">DENTIST <span className="text-emerald-500">REGISTRATION</span></h1>
                        <p className="text-xl text-neutral-400 font-medium">Join the professional dental ecosystem.</p>
                    </div>

                    <div className="bg-[#0A0C10] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl text-left space-y-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="space-y-6 relative z-10">
                            {/* Clinic Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Clinic Name</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaClinicMedical />
                                    </div>
                                    <input type="text" placeholder="e.g. Diamond Dental Clinic" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" />
                                </div>
                            </div>

                            {/* Dentist Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Dentist Full Name</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaUserMd />
                                    </div>
                                    <input type="text" placeholder="Dr. Tidjani Zitouni" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaPhone />
                                    </div>
                                    <input type="tel" placeholder="+213 --- --- ---" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Professional Email</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaEnvelope />
                                    </div>
                                    <input type="email" placeholder="zitounitidjani@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Secure Password</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaLock />
                                    </div>
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="••••••••" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" 
                                    />
                                    <button 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 space-y-6 relative z-10">
                            <button 
                                onClick={() => setIsRegistered(true)}
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#080A0E] font-black py-6 rounded-[1.5rem] hover:scale-[1.02] active:scale-[0.98] transition-all text-xl shadow-[0_20px_60px_rgba(16,185,129,0.2)]"
                            >
                                REGISTER CLINIC
                            </button>

                            <p className="text-center text-neutral-500 text-sm font-medium">
                                By registering, you agree to the <Link href="#" className="text-white hover:underline transition-colors">DentalTid License Agreement</Link>
                            </p>
                        </div>
                    </div>

                    <p className="text-neutral-500 font-medium text-lg">
                        Access existing account? <Link href={`/projects/${config.slug}/dashboard`} className="text-white font-bold hover:text-emerald-500 transition-colors">Sign In Here</Link>
                    </p>
                </div>
            </main>

            <footer className="py-12 text-center">
                <Link href={`/projects/${config.slug}`} className="group inline-flex items-center gap-3 text-neutral-600 hover:text-white transition-all font-black uppercase tracking-widest">
                    <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Suite
                </Link>
            </footer>
        </div>
    );
}