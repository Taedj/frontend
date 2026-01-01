
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaClinicMedical, FaUserMd, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheckCircle, FaDownload } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function RegistrationView({ data }: { data: ProjectDetails }) {
    const { config, styles, hero } = data;
    
    // State for form fields
    const [clinicName, setClinicName] = useState('');
    const [dentistName, setDentistName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // UI State
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // 1. Create Firebase Auth User
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 2. Save Additional Data to Firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: email,
                clinicName: clinicName,
                dentistName: dentistName,
                phone: phone,
                role: 'dentist',
                project: config.slug,
                createdAt: serverTimestamp(),
                status: 'active'
            });

            // 3. Success State
            setIsRegistered(true);
        } catch (err: unknown) {
            console.error("Registration Error:", err);
            const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    if (isRegistered) {
        return (
            <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 flex flex-col items-center justify-center p-6">
                <div className="max-w-2xl w-full bg-[#0A0C10] border border-emerald-500/20 p-12 md:p-20 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.1)] text-center space-y-10 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                    
                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-bounce">
                        <FaCheckCircle size={40} className="text-[#080A0E]" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">WELCOME <span className="text-emerald-500">DOCTOR</span></h1>
                        <p className="text-xl text-neutral-400 font-medium">Your clinic <span className="text-white font-bold">{clinicName}</span> is now active.</p>
                    </div>

                    <div className="pt-10 space-y-6">
                        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm">Next Step: Download Software</p>
                        <Link 
                            href={hero.ctaPrimaryLink}
                            className="w-full bg-white text-black font-black py-6 rounded-2xl hover:scale-105 active:scale-95 transition-all text-2xl flex items-center justify-center gap-4 shadow-[0_30px_100px_rgba(255,255,255,0.1)]"
                        >
                            <FaDownload />
                            Download Windows App
                        </Link>
                        <p className="text-neutral-500 text-sm">Use your email and password to log in to the desktop suite.</p>
                    </div>

                    <div className="pt-10 border-t border-white/5">
                        <Link href={`/projects/${config.slug}`} className="text-neutral-400 hover:text-white transition-all font-bold italic">Return to Project Page</Link>
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
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">DENTIST <span className="text-emerald-500">SIGNUP</span></h1>
                        <p className="text-xl text-neutral-400 font-medium">Create your cloud account for {config.name}.</p>
                    </div>

                    <form onSubmit={handleRegister} className="bg-[#0A0C10] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl text-left space-y-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-xl font-bold text-sm">
                                {error}
                            </div>
                        )}

                        <div className="space-y-6 relative z-10">
                            {/* Clinic Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Clinic Name</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaClinicMedical />
                                    </div>
                                    <input 
                                        required
                                        value={clinicName}
                                        onChange={(e) => setClinicName(e.target.value)}
                                        type="text" 
                                        placeholder="e.g. Diamond Dental Clinic" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" 
                                    />
                                </div>
                            </div>

                            {/* Dentist Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Dentist Full Name</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaUserMd />
                                    </div>
                                    <input 
                                        required
                                        value={dentistName}
                                        onChange={(e) => setDentistName(e.target.value)}
                                        type="text" 
                                        placeholder="Dr. Tidjani Zitouni" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" 
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaPhone />
                                    </div>
                                    <input 
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="tel" 
                                        placeholder="+213 --- --- ---" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" 
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-emerald-500/50 uppercase tracking-[0.2em] ml-1">Professional Email</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors">
                                        <FaEnvelope />
                                    </div>
                                    <input 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" 
                                        placeholder="zitounitidjani@gmail.com" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" 
                                    />
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
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="••••••••" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" 
                                    />
                                    <button 
                                        type="button"
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
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#080A0E] font-black py-6 rounded-[1.5rem] hover:scale-[1.02] active:scale-[0.98] transition-all text-xl shadow-[0_20px_60px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "PROCESSING..." : "REGISTER CLINIC"}
                            </button>

                            <p className="text-center text-neutral-500 text-sm font-medium">
                                By registering, you agree to the <Link href="#" className="text-white hover:underline transition-colors">DentalTid License Agreement</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="py-12 text-center">
                <Link href={`/projects/${config.slug}`} className="group inline-flex items-center gap-3 text-neutral-600 hover:text-white transition-all font-black uppercase tracking-widest italic">
                    <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Project
                </Link>
            </footer>
        </div>
    );
}
