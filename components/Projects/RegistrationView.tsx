
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaClinicMedical, FaUserMd, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheckCircle, FaDownload, FaIdCard, FaMapMarkerAlt, FaGlobe, FaMap } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function RegistrationView({ data }: { data: ProjectDetails }) {
    const { config, hero } = data;
    
    // State for all Windows App fields
    const [clinicName, setClinicName] = useState('');
    const [dentistName, setDentistName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('Algeria');
    const [address, setAddress] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    
    // UI State
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!acceptTerms) {
            setError("You must accept the terms and conditions.");
            return;
        }
        setIsLoading(true);
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: email,
                clinicName: clinicName,
                dentistName: dentistName,
                phoneNumber: phone,
                medicalLicenseNumber: licenseNumber,
                province: province,
                country: country,
                clinicAddress: address,
                role: 'dentist',
                project: config.slug,
                createdAt: serverTimestamp(),
                status: 'active',
                isPremium: false,
                trialStartDate: serverTimestamp()
            });

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
                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-bounce"><FaCheckCircle size={40} className="text-[#080A0E]" /></div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white">ONBOARDING <span className="text-emerald-500">SUCCESS</span></h1>
                        <p className="text-xl text-neutral-400 font-medium">Dr. <span className="text-white font-bold">{dentistName}</span>, your professional profile is now live.</p>
                    </div>
                    <div className="pt-10 space-y-6">
                        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm italic">Immediate Action Required</p>
                        <Link href={hero.ctaPrimaryLink} className="w-full bg-white text-black font-black py-6 rounded-2xl hover:scale-105 active:scale-95 transition-all text-2xl flex items-center justify-center gap-4 shadow-[0_30px_100px_rgba(255,255,255,0.1)]"><FaDownload /> Download Workspace</Link>
                        <p className="text-neutral-500 text-sm">Log in to the Windows App using your credentials to begin.</p>
                    </div>
                    <div className="pt-10 border-t border-white/5"><Link href={`/projects/${config.slug}`} className="text-neutral-400 hover:text-white transition-all font-bold italic underline decoration-emerald-500/30 underline-offset-8">Return to Portal</Link></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden relative flex flex-col">
            <div className="fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/90 backdrop-blur-2xl z-40 border-b border-white/5 flex items-center px-10">
                <Link href={`/projects/${config.slug}`} className="text-4xl font-black tracking-tighter text-white/90 underline decoration-emerald-500 decoration-4 underline-offset-8">{config.brand}</Link>
            </div>

            <main className="flex-grow pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-16 text-center">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white leading-none">DENTIST <span className="text-emerald-500">SIGNUP</span></h1>
                        <p className="text-2xl text-neutral-400 font-medium">Deploy your professional clinic workspace in seconds.</p>
                    </div>

                    <form onSubmit={handleRegister} className="bg-[#0A0C10] border border-white/5 p-8 md:p-16 rounded-[3.5rem] shadow-2xl text-left relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        {error && (<div className="mb-10 bg-red-500/10 border border-red-500/20 text-red-500 px-8 py-5 rounded-2xl font-bold text-sm">{error}</div>)}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 relative z-10">
                            {/* Email & Password (Primary) */}
                            <div className="space-y-2 md:col-span-2 border-b border-white/5 pb-8 mb-4">
                                <label className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] ml-1">Account Credentials</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div className="relative group/input">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaEnvelope /></div>
                                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Professional Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" />
                                    </div>
                                    <div className="relative group/input">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaLock /></div>
                                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="Secure Password" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5 transition-all text-lg font-medium" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                                    </div>
                                </div>
                            </div>

                            {/* Clinic & Dentist Info */}
                            <div className="space-y-6">
                                <label className="text-xs font-black text-neutral-500 uppercase tracking-[0.3em] ml-1">Professional Identity</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaClinicMedical /></div>
                                    <input required value={clinicName} onChange={(e) => setClinicName(e.target.value)} type="text" placeholder="Clinic Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 transition-all text-lg font-medium" />
                                </div>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaUserMd /></div>
                                    <input required value={dentistName} onChange={(e) => setDentistName(e.target.value)} type="text" placeholder="Dentist Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 transition-all text-lg font-medium" />
                                </div>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaPhone /></div>
                                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 transition-all text-lg font-medium" />
                                </div>
                            </div>

                            {/* Legal & Location Info */}
                            <div className="space-y-6">
                                <label className="text-xs font-black text-neutral-500 uppercase tracking-[0.3em] ml-1">Location & Licensing</label>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaIdCard /></div>
                                    <input required value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} type="text" placeholder="Medical License #" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 transition-all text-lg font-medium" />
                                </div>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaMap /></div>
                                    <input required value={province} onChange={(e) => setProvince(e.target.value)} type="text" placeholder="Province" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 transition-all text-lg font-medium" />
                                </div>
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaGlobe /></div>
                                    <input required value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 transition-all text-lg font-medium" />
                                </div>
                            </div>

                            <div className="md:col-span-2 mt-4 relative group/input">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-500 transition-colors"><FaMapMarkerAlt /></div>
                                <input required value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Full Clinic Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-5 outline-none focus:border-emerald-500/50 transition-all text-lg font-medium" />
                            </div>
                        </div>

                        <div className="mt-12 space-y-8 relative z-10">
                            <label className="flex items-center gap-4 cursor-pointer group/check">
                                <div className="relative flex items-center justify-center">
                                    <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="peer appearance-none w-8 h-8 border-2 border-white/10 rounded-lg checked:bg-emerald-500 checked:border-emerald-500 transition-all cursor-pointer" />
                                    <FaCheckCircle className="absolute text-[#080A0E] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                                <span className="text-neutral-400 font-medium select-none group-hover/check:text-white transition-colors">I accept the professional license agreement and terms of service.</span>
                            </label>

                            <button type="submit" disabled={isLoading} className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#080A0E] font-black py-8 rounded-[2rem] hover:scale-[1.01] active:scale-[0.99] transition-all text-2xl shadow-[0_30px_100px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed uppercase italic tracking-tighter">{isLoading ? "Deploying Clinic Cloud..." : "REGISTER CLINIC NOW"}</button>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="py-12 text-center text-neutral-600 font-bold uppercase tracking-[0.5em] text-xs">© {new Date().getFullYear()} Taedj Dev • Professional Dental Infrastructure</footer>
        </div>
    );
}
