
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaRocket } from 'react-icons/fa';
import { ProjectDetails } from '@/lib/github';

interface CurrencyConfig {
    symbol: string;
    position: 'prefix' | 'suffix';
    plans: Record<string, {
        monthly: string;
        yearly: string;
        lifetime: string;
    }>;
}

export default function ProjectView({ data }: { data: ProjectDetails }) {
    const { config, hero, chapters, vision, visionTranslations, finalCta, styles, pricing, remotePricing } = data;
    const [currency, setCurrency] = useState('DZD');
    const [duration, setDuration] = useState<'monthly' | 'yearly' | 'lifetime'>('yearly');
    const [lang, setLang] = useState<'en' | 'ar' | 'fr'>('en');

    const isRtl = lang === 'ar';

    // Helper to get localized content
    const tHero = lang === 'en' ? hero : (hero.translations?.[lang] || hero);
    const tVision = lang === 'en' ? vision : (visionTranslations?.[lang] || vision);
    const tFinalCta = lang === 'en' ? finalCta : (finalCta.translations?.[lang] || finalCta);

    // Static UI Translations
    const ui = {
        en: {
            back: 'Back to Projects Hub',
            choosePlan: 'Choose Your Plan',
            selectPlan: 'Select Plan',
            features: 'Features',
            visualComing: 'Visual Coming Soon',
            ecosystem: 'TAEDJ ECOSYSTEM',
            finality: 'Finality through Precision.'
        },
        ar: {
            back: 'العودة إلى مركز المشاريع',
            choosePlan: 'اختر خطتك',
            selectPlan: 'اختر الخطة',
            features: 'الميزات',
            visualComing: 'العرض المرئي قريباً',
            ecosystem: 'منظومة تيدج',
            finality: 'النهائية من خلال الدقة.'
        },
        fr: {
            back: 'Retour au Hub des Projets',
            choosePlan: 'Choisissez Votre Plan',
            selectPlan: 'Choisir le Plan',
            features: 'Fonctionnalités',
            visualComing: 'Visuel bientôt disponible',
            ecosystem: 'ÉCOSYSTÈME TAEDJ',
            finality: 'La finalité par la précision.'
        }
    }[lang];

    const getPrice = (planName: string, includeDuration: boolean = true) => {
        const tier = planName.toLowerCase().includes('crown') ? 'crown' : (planName.toLowerCase().includes('premium') ? 'premium' : null);
        if (!tier) return { ar: 'مجاني', fr: 'Gratuit', en: 'Free' }[lang];

        const p = remotePricing ? (remotePricing[currency] as unknown as CurrencyConfig) : null;
        if (p && p.plans && p.plans[tier]) {
            const val = p.plans[tier][duration];
            const symbol = p.symbol || '';
            const position = p.position || 'suffix';

            const formatted = position === 'prefix' ? `${symbol}${val}` : `${val} ${symbol}`;
            if (!includeDuration) return formatted;

            const suffixes = {
                en: { monthly: ' /mo', yearly: ' /yr', lifetime: '' },
                ar: { monthly: ' /شهريا', yearly: ' /سنويا', lifetime: '' },
                fr: { monthly: ' /mois', yearly: ' /an', lifetime: '' }
            }[lang];

            return formatted + (duration === 'lifetime' ? '' : suffixes[duration]);
        }
        return 'N/A';
    };

    const handleSelectPlan = (planName: string) => {
        if (planName.toLowerCase().includes('trial')) {
            window.location.href = "#";
            return;
        }

        const price = getPrice(planName, false);
        const message = `Hello ${config.brand}, I would like to upgrade to the ${planName} plan (${duration}) for ${config.name} for ${price}. (Currency: ${currency})`;
        const encodedMessage = encodeURIComponent(message);

        const phone = "+213657293332";
        window.open(`https://wa.me/${phone.replace(/[\s+]/g, '')}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className={`min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden relative ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap');
                .font-arabic { font-family: 'Noto Sans Arabic', sans-serif !important; }
            `}</style>

            {styles.heroBackground && (
                <div className="fixed inset-0 z-0 opacity-20">
                    <img src={styles.heroBackground} className="w-full h-full object-cover" alt="" />
                </div>
            )}

            <div className={`fixed top-0 left-0 right-0 h-24 bg-[#080A0E]/90 backdrop-blur-2xl z-40 border-b border-white/5 flex items-center justify-between px-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="flex items-center gap-10">
                    {styles.brandLogo ? (
                        <img src={styles.brandLogo} className="h-12 w-auto object-contain" />
                    ) : (
                        <div className="text-4xl font-black tracking-tighter text-white/90 underline decoration-emerald-500 decoration-4 underline-offset-8">{config.brand}</div>
                    )}
                </div>

                <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10" dir="ltr">
                    {(['en', 'ar', 'fr'] as const).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`w-10 h-10 rounded-full text-xs font-black transition-all ${lang === l ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'text-neutral-500 hover:text-white'}`}
                        >
                            {l.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <main className="relative z-10 w-full">
                <div className="max-w-[95%] mx-auto pt-40 pb-12">
                    <Link href="/#Taedj-Dev-Projects" className={`group inline-flex items-center gap-4 text-neutral-500 hover:text-white transition-all text-xl font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <FaArrowLeft className={`${isRtl ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} />
                        </div>
                        <span>{ui.back}</span>
                    </Link>
                </div>

                <section className="pt-20 pb-20 text-center w-full px-6">
                    <div className="max-w-[95%] mx-auto space-y-12">
                        <h1
                            style={{
                                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
                                fontSize: `clamp(2.5rem, 6vw, ${styles.heroTitleSize * (styles.fontScale / 100)}px)`
                            }}
                            className="font-black tracking-tighter leading-[1.1] text-white"
                        >
                            {(() => {
                                const titleStr = tHero.title || '';
                                const words = titleStr.split(' ');
                                const lastWord = words.pop();
                                return (
                                    <>
                                        {words.join(' ')}{' '}
                                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                            {lastWord}
                                        </span>
                                    </>
                                );
                            })()}
                        </h1>
                        <p className="text-lg md:text-3xl text-neutral-400 max-w-5xl mx-auto leading-relaxed font-medium px-4">{tHero.subtitle}</p>

                        <div className={`flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 pt-10 justify-center items-center px-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
                            <Link
                                href={hero.ctaPrimaryLink}
                                style={{
                                    padding: `clamp(12px, 3vw, ${styles.buttonPaddingY}px) clamp(24px, 4vw, ${styles.buttonPaddingX}px)`,
                                    fontSize: `clamp(14px, 3vw, ${styles.buttonTextSize}px)`,
                                    borderRadius: `${styles.borderRadius}px`
                                }}
                                className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#080A0E] font-black transition-all flex items-center justify-center gap-4 shadow-[0_20px_60px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95"
                            >
                                <FaDownload className="text-lg md:text-2xl" /> {tHero.ctaPrimaryLabel}
                            </Link>
                            <Link
                                href={hero.ctaSecondaryLink}
                                style={{
                                    padding: `clamp(12px, 3vw, ${styles.buttonPaddingY}px) clamp(24px, 4vw, ${styles.buttonPaddingX}px)`,
                                    fontSize: `clamp(14px, 3vw, ${styles.buttonTextSize}px)`,
                                    borderRadius: `${styles.borderRadius}px`
                                }}
                                className="w-full md:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black transition-all flex items-center justify-center gap-4 hover:scale-105 active:scale-95"
                            >
                                {tHero.ctaSecondaryLabel}
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="pb-20 md:pb-40 w-full px-4 md:px-10">
                    <div style={{ borderRadius: `${styles.borderRadius}px` }} className="relative aspect-video overflow-hidden border border-white/5 shadow-[0_0_150px_rgba(16,185,129,0.1)] bg-[#0A0C10] group/hero w-full mx-auto flex items-center justify-center">
                        {hero.image.match(/\.(mp4|webm)$/i) ? (
                            <video
                                src={hero.image}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                onClick={(e) => e.currentTarget.muted = !e.currentTarget.muted}
                                style={{
                                    width: styles.heroVideoWidth ? `${styles.heroVideoWidth}px` : '100%',
                                    height: styles.heroVideoHeight ? `${styles.heroVideoHeight}px` : 'auto',
                                    maxWidth: `${styles.heroImgWidth}%`,
                                    transform: `translateY(${styles.heroImgOffsetY}px) scale(${styles.heroImgScale / 100})`,
                                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                                className="object-cover transition-all duration-1000 group-hover/hero:scale-[1.01] cursor-pointer"
                            />
                        ) : (
                            <img
                                src={hero.image}
                                alt={config.name}
                                style={{
                                    maxWidth: `${styles.heroImgWidth}%`,
                                    transform: `translateY(${styles.heroImgOffsetY}px) scale(${styles.heroImgScale / 100})`,
                                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                                className="w-full h-full object-contain transition-all duration-1000 group-hover/hero:scale-[1.01]"
                            />
                        )}
                    </div>
                </section>

                <div className="py-20 md:py-40 max-w-[95%] mx-auto text-left">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20 md:mb-40" />

                    {chapters.map((c, i) => {
                        const tChapter = lang === 'en' ? c : (c.translations?.[lang] || c);
                        return (
                            <section key={i} style={{ paddingTop: `${styles.sectionSpacing / 10}px`, paddingBottom: `${styles.sectionSpacing / 10}px` }} className="space-y-12 md:space-y-20">
                                <div className="max-w-6xl mx-auto text-center space-y-6 md:space-y-10">
                                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight px-4">{tChapter.title}</h2>
                                    <p className="text-xl md:text-3xl text-neutral-400 leading-relaxed max-w-4xl mx-auto px-4">{tChapter.description}</p>
                                </div>
                                <div className="relative group/chapter w-full px-4 md:px-0">
                                    <div style={{ borderRadius: `${styles.borderRadius}px` }} className="aspect-video bg-[#0A0C10] border border-white/5 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.8)] relative w-full">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            {c.image ? (
                                                <img
                                                    src={c.image}
                                                    alt={tChapter.title}
                                                    style={{
                                                        maxWidth: `${c.styles.imgWidth}%`,
                                                        transform: `translateY(${c.styles.imgOffsetY}px) scale(${c.styles.imgScale / 100})`,
                                                        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    }}
                                                    className="object-contain h-full transition-all duration-1000 group-hover/chapter:scale-[1.05]"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-neutral-800 italic text-2xl md:text-3xl font-light">{ui.visualComing}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                {tVision && (
                    <section className="py-40 text-center w-full px-6 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
                        <div className="max-w-6xl mx-auto">
                            <div className="w-24 h-1.5 bg-emerald-500 mx-auto mb-16 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                            <blockquote className={`text-4xl md:text-6xl font-bold text-white italic leading-[1.2] tracking-tight ${isRtl ? 'font-arabic' : ''}`}>"{tVision}"</blockquote>
                        </div>
                    </section>
                )}

                {pricing && pricing.length > 0 && (
                    <section className="py-20 w-full px-6 text-center">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter">{ui.choosePlan}</h2>

                        <div className={`flex flex-col md:flex-row justify-center items-center gap-6 mb-20 ${isRtl ? 'flex-row-reverse' : ''}`} dir="ltr">
                            <div className="flex bg-white/5 rounded-full p-2 border border-white/10">
                                {remotePricing && Object.keys(remotePricing).map(c => (
                                    <button key={c} onClick={() => setCurrency(c)} className={`px-6 py-2 rounded-full font-bold transition-all ${currency === c ? 'bg-emerald-500 text-black shadow-lg' : 'text-neutral-400 hover:text-white'}`}>{c}</button>
                                ))}
                            </div>

                            <div className="flex bg-white/5 rounded-full p-2 border border-white/10">
                                {(['monthly', 'yearly', 'lifetime'] as const).map(d => {
                                    const labels = {
                                        en: { monthly: 'Monthly', yearly: 'Yearly', lifetime: 'Lifetime' },
                                        ar: { monthly: 'شهري', yearly: 'سنوي', lifetime: 'مدى الحياة' },
                                        fr: { monthly: 'Mensuel', yearly: 'Annuel', lifetime: 'À vie' }
                                    }[lang];
                                    return (
                                        <button key={d} onClick={() => setDuration(d)} className={`px-6 py-2 rounded-full font-bold transition-all capitalize ${duration === d ? 'bg-white text-black shadow-lg' : 'text-neutral-400 hover:text-white'}`}>{labels[d]}</button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pricing.map((plan, i) => {
                                const tPlan = lang === 'en' ? plan : (plan.translations?.[lang] || plan);
                                return (
                                    <div key={i} style={{ borderRadius: `${styles.borderRadius}px` }} className={`bg-[#0A0C10] border border-white/5 p-8 md:p-10 flex flex-col group hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
                                        <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all opacity-50" />
                                        <h3 className="text-3xl font-bold text-white mb-2">{tPlan.name}</h3>
                                        <p className="text-emerald-400 font-mono text-sm mb-6 uppercase tracking-widest">{tPlan.subtitle || ''}</p>
                                        <div className="text-4xl font-black text-white mb-8 transition-all min-h-[3rem]">{getPrice(plan.name)}</div>
                                        <ul className="space-y-4 mb-10 flex-grow">
                                            {tPlan.features.map((f, fi) => (
                                                <li key={fi} className={`flex items-start gap-3 text-neutral-400 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                                    <span className="text-emerald-500 mt-1">✔</span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {!plan.name.toLowerCase().includes('trial') && (
                                            <button
                                                onClick={() => handleSelectPlan(plan.name)}
                                                className="w-full py-4 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white text-white font-bold transition-all text-center border border-white/10 relative z-10"
                                            >
                                                {ui.selectPlan}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                <section className="py-20 md:py-60 text-center px-4 md:px-6">
                    <div className="bg-gradient-to-br from-emerald-600/20 via-[#0A0C10] to-cyan-600/20 p-8 md:p-40 border border-white/5 shadow-2xl relative overflow-hidden group" style={{ borderRadius: `${styles.borderRadius * 2}px` }}>
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <h2 className="text-4xl md:text-[8rem] font-black mb-6 md:mb-12 tracking-tighter leading-none relative z-10" style={{ fontSize: `clamp(3rem, 8vw, ${styles.finalCtaTitleSize}px)` }}>{tFinalCta.title}</h2>
                        <p className="text-xl md:text-3xl text-neutral-400 mb-10 md:mb-20 max-w-4xl mx-auto leading-tight font-medium relative z-10">{tFinalCta.subtitle}</p>
                        <Link
                            href={finalCta.buttonLink}
                            style={{
                                padding: `clamp(12px, 3vw, ${styles.buttonPaddingY}px) clamp(24px, 4vw, ${styles.buttonPaddingX}px)`,
                                fontSize: `clamp(18px, 4vw, ${styles.buttonTextSize}px)`,
                                borderRadius: `${styles.borderRadius}px`
                            }}
                            className="relative z-10 bg-white text-black font-black hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-4 md:gap-6 shadow-[0_30px_100px_rgba(255,255,255,0.15)] w-full md:w-auto"
                        >
                            <FaRocket className={`${isRtl ? 'rotate-[-45deg]' : ''} text-2xl md:text-4xl`} /> {tFinalCta.buttonLabel}
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="py-32 border-t border-white/5 text-center">
                <div className="mb-10 text-3xl font-black tracking-tighter text-white/20">{ui.ecosystem}</div>
                <p className="text-xl text-neutral-600 font-medium">© {new Date().getFullYear()} {config.brand}. {ui.finality}</p>
            </footer>
        </div>
    );
}
