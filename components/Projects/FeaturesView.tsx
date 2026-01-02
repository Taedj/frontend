
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaGlobe, FaChevronRight } from 'react-icons/fa';
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
    const content = hasReport ? report[lang] : '';

    return (
        <div className={`min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden flex flex-col ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Premium Header */}
            <div className="fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/80 backdrop-blur-2xl z-50 border-b border-white/5 flex items-center justify-between px-6 md:px-12">
                <Link href={`/projects/${config.slug}`} className="group flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <FaArrowLeft className={isRtl ? 'rotate-180' : ''} />
                    </div>
                    <span className="hidden md:block font-bold tracking-widest uppercase text-xs text-neutral-500 group-hover:text-white transition-colors">
                        {isRtl ? 'العودة للمشروع' : 'Back to Project'}
                    </span>
                </Link>

                {/* Language Switcher */}
                <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/5">
                    {(['en', 'fr', 'ar'] as Language[]).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`px-4 py-2 rounded-xl text-sm font-black transition-all uppercase tracking-tighter ${lang === l
                                ? 'bg-emerald-500 text-[#080A0E] shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                : 'hover:bg-white/5 text-neutral-500 hover:text-white'
                                }`}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </div>

            <main className="flex-grow pt-40 pb-32 px-6 md:px-10">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lang}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-16"
                        >
                            {hasReport ? (
                                <article className={`prose prose-invert prose-2xl max-w-none 
                                    prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase 
                                    prose-h1:text-7xl prose-h1:text-emerald-500 prose-h1:italic
                                    prose-h2:text-4xl prose-h2:text-white prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-4
                                    prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:font-light
                                    prose-strong:text-emerald-400 prose-strong:font-bold
                                    prose-li:text-neutral-300
                                `}>
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </article>
                            ) : (
                                <div className="space-y-12">
                                    <header className="space-y-6 text-center">
                                        <h1 className="text-7xl font-black tracking-tighter uppercase italic text-emerald-500">
                                            {isRtl ? 'تقرير المميزات' : 'Feature Report'}
                                        </h1>
                                        <p className="text-2xl text-neutral-400 font-medium">
                                            {isRtl ? `تدقيق مفصل لإمكانيات ${config.name}` : `Detailed audit of ${config.name} capabilities.`}
                                        </p>
                                    </header>

                                    <div className="grid grid-cols-1 gap-8">
                                        {chapters.map((chapter, i) => (
                                            <div key={i} className="group bg-[#0A0C10] border border-white/5 p-10 rounded-[2.5rem] hover:border-emerald-500/20 transition-all">
                                                <div className="space-y-4">
                                                    <h2 className="text-3xl font-bold flex items-center gap-4">
                                                        <span className="text-emerald-500 font-mono text-sm opacity-50">0{i + 1}</span>
                                                        {chapter.title}
                                                    </h2>
                                                    <p className="text-xl text-neutral-400 font-light leading-relaxed">{chapter.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl text-center">
                                        <p className="text-emerald-400 font-medium italic">
                                            {isRtl
                                                ? 'ملاحظة: هذا المشروع يستخدم نظام العرض القديم. يرجى إضافة REPORT.md للدعم الكامل لثلاث لغات.'
                                                : 'Note: This project uses the legacy view. Add REPORT.md for full multi-language support.'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            {/* Bottom Navigation */}
            <div className="py-20 border-t border-white/5 bg-black/20">
                <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm">{data.config.brand}</h4>
                        <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Intelligent Ecosystem</p>
                    </div>

                    <Link
                        href={`/projects/${config.slug}`}
                        className="group flex items-center gap-6 bg-white text-black px-10 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/5"
                    >
                        {isRtl ? 'ابدأ الاستخدام الآن' : 'Get Started Now'}
                        <FaChevronRight className={`group-hover:translate-x-2 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;400;700;900&display=swap');
                .font-arabic {
                    font-family: 'Noto Sans Arabic', sans-serif;
                }
            `}</style>
        </div>
    );
}
