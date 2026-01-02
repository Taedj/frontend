
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaChevronRight, FaBookOpen } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'en' | 'ar' | 'fr';

export default function FeaturesView({ data }: { data: ProjectDetails }) {
    const { config, report, chapters } = data;
    const [lang, setLang] = useState<Language>('en');

    const isRtl = lang === 'ar';

    // Fallback if no report is present
    const hasReport = report && (report.en || report.ar || report.fr);
    const rawContent = hasReport ? report[lang] : '';

    // Split content into cards based on "# " (h1 equivalent in markdown)
    // We assume the [EN] tag was stripped in github.ts, leaving the rest.
    const sections = rawContent
        .split(/(?=\n# )|(?=^# )/g)
        .map(s => s.trim())
        .filter(s => s.length > 0);

    return (
        <div className={`min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden flex flex-col ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Premium Header */}
            <div className="fixed top-0 left-0 right-0 h-28 bg-[#080A0E]/80 backdrop-blur-2xl z-50 border-b border-white/5 flex items-center justify-between px-6 md:px-12">
                <Link href={`/projects/${config.slug}`} className="group flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-all duration-500 shadow-lg shadow-emerald-500/0 group-hover:shadow-emerald-500/20">
                        <FaArrowLeft className={isRtl ? 'rotate-180 text-xl' : 'text-xl'} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black tracking-[0.3em] uppercase text-[10px] text-emerald-500 mb-1">
                            {isRtl ? 'المشروع الرقمي' : 'Digital Project'}
                        </span>
                        <span className="font-bold text-xl tracking-tight group-hover:text-emerald-400 transition-colors uppercase">
                            {config.name}
                        </span>
                    </div>
                </Link>

                {/* Language Switcher */}
                <div className="flex items-center gap-2 bg-white/5 p-2 rounded-2xl border border-white/5 backdrop-blur-md">
                    {(['en', 'fr', 'ar'] as Language[]).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all uppercase tracking-tighter ${lang === l
                                ? 'bg-emerald-500 text-[#080A0E] shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105'
                                : 'hover:bg-white/5 text-neutral-500 hover:text-white'
                                }`}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </div>

            <main className="flex-grow pt-48 pb-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lang}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-24"
                        >
                            {/* Page Intro Card */}
                            <div className="relative group overflow-hidden bg-gradient-to-br from-[#0D1117] to-[#080A0E] border border-white/5 p-16 md:p-24 rounded-[3rem] shadow-2xl">
                                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                                    <FaBookOpen className="text-[12rem] text-emerald-500" />
                                </div>

                                <div className="relative z-10 space-y-8 max-w-4xl">
                                    <div className="inline-flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-emerald-500 font-black uppercase tracking-widest text-xs">
                                            {isRtl ? 'دليل المستخدم التفاعلي' : 'Interactive Project Manual'}
                                        </span>
                                    </div>

                                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-white leading-[0.9]">
                                        {isRtl ? 'تقرير الإمكانيات الشامل' : 'Comprehensive Feature Report'}
                                    </h1>

                                    <p className="text-2xl md:text-3xl text-neutral-400 font-light leading-relaxed">
                                        {isRtl
                                            ? `اكتشف كيف يغير ${config.name} قواعد اللعبة. هذا التقرير يوضح الفوائد والقدرات التقنية التي تميز هذا المشروع.`
                                            : `Discover how ${config.name} redefines possibilities. This manual explores the core benefits and technical capabilities that sets this project apart.`}
                                    </p>
                                </div>
                            </div>

                            {/* Cards Grid */}
                            {hasReport ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                    {sections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                                            className="group bg-[#0A0C10] border border-white/5 p-12 md:p-16 rounded-[2.5rem] hover:border-emerald-500/20 hover:bg-[#0D1117] transition-all duration-500 flex flex-col relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/10 transition-colors" />

                                            <div className="relative z-10 prose prose-invert prose-xl max-w-none prose-h1:text-4xl prose-h1:font-black prose-h1:uppercase prose-h1:tracking-tighter prose-h1:text-emerald-500 prose-h1:mb-8 prose-h1:leading-tight prose-h2:text-2xl prose-h2:text-white prose-h2:font-bold prose-h2:mb-6 prose-h2:opacity-80 prose-p:text-neutral-400 prose-p:text-xl prose-p:leading-relaxed prose-p:font-light prose-li:text-neutral-300 prose-li:text-lg prose-li:mb-2 prose-strong:text-emerald-400 prose-strong:font-bold">

                                                <ReactMarkdown>{section}</ReactMarkdown>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {chapters.map((chapter, i) => (
                                        <div key={i} className="group bg-[#0A0C10] border border-white/5 p-12 rounded-[2.5rem] hover:border-emerald-500/20 transition-all">
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-emerald-500/20 font-black text-6xl italic">0{i + 1}</span>
                                                    <div className="w-12 h-1 px-4 bg-emerald-500/20 rounded-full" />
                                                </div>
                                                <h2 className="text-4xl font-black tracking-tight uppercase">{chapter.title}</h2>
                                                <p className="text-xl text-neutral-400 font-light leading-relaxed">{chapter.description}</p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Legacy Warning */}
                                    <div className="md:col-span-2 p-12 bg-red-500/5 border border-red-500/10 rounded-[2.5rem] text-center">
                                        <p className="text-red-400/60 font-medium italic text-lg uppercase tracking-widest">
                                            {isRtl
                                                ? 'تحذير: هذا المشروع يستخدم نظام العرض القديم. يرجى تحديث REPORT.md للاستفادة من الدليل التفاعلي.'
                                                : 'Warning: This project uses legacy view. Please update REPORT.md for full manual experience.'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            {/* Bottom Excellence CTA */}
            <div className="py-32 border-t border-white/5 bg-gradient-to-t from-black/40 to-transparent">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="text-white font-black uppercase tracking-[0.4em] text-sm opacity-50">{data.config.brand}</h4>
                        <p className="text-neutral-500 text-lg max-w-md">© {new Date().getFullYear()} Building the future of digital ecosystems through intelligent engineering.</p>
                    </div>

                    <Link
                        href={`/projects/${config.slug}`}
                        className="group relative flex items-center gap-8 bg-emerald-500 text-[#080A0E] px-16 py-8 rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_60px_rgba(16,185,129,0.2)]"
                    >
                        {isRtl ? 'ابدأ الاستخدام الآن' : 'Get Started Now'}
                        <div className={`w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors`}>
                            <FaChevronRight className={`transition-transform duration-500 ${isRtl ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
                        </div>
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;400;700;900&display=swap');
                .font-arabic {
                    font-family: 'Noto Sans Arabic', sans-serif;
                }
                .prose p {
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .prose h1 {
                    margin-top: 0 !important;
                }
            `}</style>
        </div>
    );
}
