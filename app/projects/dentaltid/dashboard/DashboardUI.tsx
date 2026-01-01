'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { FaUserMd, FaClinicMedical, FaKey, FaDownload, FaSignOutAlt, FaSpinner } from 'react-icons/fa';
// ASSUMPTION: Centralized firebase export
import { auth, db } from '../../../../lib/firebase';

const PROJECT_CONFIG = {
    name: 'DentalTid | Taedj Dev',
    slug: 'dentaltid',
    brand: 'Taedj Dev'
};

export default function DashboardUI() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                router.push(`/projects/${PROJECT_CONFIG.slug}/register`); // Redirect to register/login if not auth
                return;
            }

            setUser(currentUser);
            try {
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProfile(docSnap.data());
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push(`/projects/${PROJECT_CONFIG.slug}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#080A0E] flex items-center justify-center text-emerald-500">
                <FaSpinner className="animate-spin text-4xl" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 font-sans">
            {/* Header */}
            <header className="border-b border-white/5 bg-[#080A0E]/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="font-black text-2xl tracking-tighter text-white">
                        {PROJECT_CONFIG.brand} <span className="text-emerald-500">Dashboard</span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-bold"
                    >
                        <FaSignOutAlt /> Sign Out
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">

                {/* Welcome Hero */}
                <section className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        Welcome, <span className="text-emerald-400">{profile?.dentistName || 'Doctor'}</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl">
                        Your account for <strong className="text-white">{profile?.clinicName}</strong> is active.
                        Use the license key below to activate your desktop application.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* License Key Card */}
                    <div className="bg-[#0A0C10] border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6 text-neutral-400 group-hover:text-emerald-400 transition-colors">
                            <FaKey className="text-2xl" />
                            <h2 className="text-xl font-bold uppercase tracking-wider">License Key</h2>
                        </div>
                        <div className="bg-black/50 border border-white/10 rounded-xl p-6 font-mono text-lg md:text-2xl text-center text-emerald-400 tracking-widest break-all">
                            {profile?.licenseKey || 'Loading Key...'}
                        </div>
                        <p className="text-center text-neutral-500 text-sm mt-4">
                            Keep this key secure. You will need it to component login.
                        </p>
                    </div>

                    {/* Status & Plan */}
                    <div className="bg-[#0A0C10] border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6 text-neutral-400 group-hover:text-blue-400 transition-colors">
                            <FaClinicMedical className="text-2xl" />
                            <h2 className="text-xl font-bold uppercase tracking-wider">Plan Status</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                                <span className="text-neutral-400">Current Plan</span>
                                <span className="font-bold text-white capitalize">{profile?.plan || 'Free Trial'}</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                                <span className="text-neutral-400">Status</span>
                                <span className="font-bold text-emerald-400 capitalize">{profile?.status || 'Active'}</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                                <span className="text-neutral-400">Member Since</span>
                                <span className="font-bold text-white">
                                    {profile?.createdAt?.toDate ? new Date(profile.createdAt.toDate()).toLocaleDateString() : 'Just now'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Download CTA */}
                <section className="text-center py-12">
                    <p className="text-neutral-400 mb-8">Ready to start managing your patients?</p>
                    <button className="bg-white text-black font-black text-xl py-4 px-10 rounded-full hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 shadow-lg shadow-white/10">
                        <FaDownload /> Download {PROJECT_CONFIG.brand} for Windows
                    </button>
                </section>
            </main>
        </div>
    );
}
