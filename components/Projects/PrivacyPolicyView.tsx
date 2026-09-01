'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt, FaTrashAlt, FaLock, FaEnvelope, FaGlobe, FaUserCheck, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'en' | 'ar' | 'fr';

interface Props {
    projectName?: string;
    projectSlug?: string;
    brandName?: string;
}

export default function PrivacyPolicyView({
    projectName = 'Ma Ydi3ch',
    projectSlug = 'maydi3ch',
    brandName = 'Taedj Dev'
}: Props) {
    const [lang, setLang] = useState<Language>('en');
    const isRtl = lang === 'ar';

    const content = {
        en: {
            badge: 'Google Play & GDPR Compliant',
            title: 'Privacy Policy',
            lastUpdated: 'Effective Date: September 1, 2026',
            intro: `This Privacy Policy outlines how ${projectName} ("we", "our", or "the App"), developed under ${brandName}, collects, uses, protects, and handles your personal information when using our Android mobile application and related services.`,
            sections: [
                {
                    icon: FaUserCheck,
                    title: '1. Information We Collect',
                    body: [
                        'Account Information: When you create an account, we collect your name and email address through Firebase Authentication to manage your profile and secure your account.',
                        'Location Data: We collect approximate location data (City / Wilaya) explicitly provided by you to display relevant local marketplace listings and donation items. We do not track continuous real-time background GPS.',
                        'Listing Media: Photos uploaded by sellers to describe surplus products or food donations are stored temporarily on Firebase Cloud Storage.',
                        'In-App Messages: Chat messages exchanged between buyers and sellers to arrange product pickups and reservations are securely transmitted via Firebase Firestore.'
                    ]
                },
                {
                    icon: FaLock,
                    title: '2. How We Use Your Data & Zero-Cost Architecture',
                    body: [
                        'To provide core marketplace features: browsing listings, points transactions, reservations, and community chat.',
                        'To prevent spam and abuse through our points-based transaction validation.',
                        'We do not sell, rent, or monetize your personal data with third-party data brokers.'
                    ]
                },
                {
                    icon: FaMobileAlt,
                    title: '3. Zero Advertisements & No Tracking',
                    body: [
                        'Ma Ydi3ch does NOT contain third-party advertisements or ad tracking SDKs.',
                        'We do not collect Advertising IDs (AAID) or track your activity across external applications and websites.'
                    ]
                },
                {
                    icon: FaDatabase,
                    title: '4. Third-Party Services & Data Security',
                    body: [
                        'Our backend infrastructure is hosted on Google Firebase (Auth, Firestore, Cloud Storage).',
                        'All communication between the app and cloud servers is encrypted in transit using industry-standard TLS/HTTPS protocols.',
                        'Data is stored in secure, access-restricted cloud data centers adhering to SOC and ISO compliance standards.'
                    ]
                },
                {
                    icon: FaShieldAlt,
                    title: '5. Asset Retention & Auto-Purge Policy',
                    body: [
                        'In accordance with our zero-waste infrastructure principles, product photos are automatically scheduled for permanent deletion once a deal or donation is completed.',
                        'Chat records and temporary reservations are periodically purged to minimize storage and protect user privacy.'
                    ]
                },
                {
                    icon: FaTrashAlt,
                    title: '6. Account & Data Deletion Policy',
                    body: [
                        'In-App Deletion: You can permanently delete your account and all associated data at any time directly in the app by going to Profile > Security > Delete Account.',
                        'Email Request: You may also email tidjanizitouni@gmail.com with the subject "Delete My Account - Ma Ydi3ch". Upon confirmation, all personal profiles, listings, and point balances will be permanently wiped within 30 days.'
                    ]
                },
                {
                    icon: FaGlobe,
                    title: '7. Children’s Privacy & Age Limit',
                    body: [
                        'Our application is intended for users aged 13 and older. We do not knowingly collect personally identifiable information from children under 13.',
                        'If we discover that a child under 13 has provided personal information, we will delete it from our servers immediately.'
                    ]
                },
                {
                    icon: FaEnvelope,
                    title: '8. Contact Us & Developer Info',
                    body: [
                        'Publisher: Taedj Dev (Dr. Tidjani Zitouni)',
                        'Primary Email: tidjanizitouni@gmail.com',
                        'App Identifier: com.baraka.market',
                        'If you have questions, feedback, or privacy concerns, please contact us anytime.'
                    ]
                }
            ],
            backToProject: 'Back to Project',
            backToHub: 'Projects Hub'
        },
        ar: {
            badge: 'متوافق مع معايير Google Play وحماية البيانات',
            title: 'سياسة الخصوصية',
            lastUpdated: 'تاريخ السريان: 1 سبتمبر 2026',
            intro: `توضح سياسة الخصوصية هذه كيفية قيام تطبيق "${projectName}" ("نحن"، "التطبيق")، المطور تحت مظلة ${brandName}، بجمع واستخدام وحماية بياناتك الشخصية عند استخدامك لتطبيق أندرويد والخدمات المرتبطة به.`,
            sections: [
                {
                    icon: FaUserCheck,
                    title: '1. المعلومات التي نجمعها',
                    body: [
                        'بيانات الحساب: عند إنشاء حساب، نجمع الاسم والبريد الإلكتروني عبر Firebase Authentication لإدارة حسابك وتأمينه.',
                        'بيانات الموقع: نجمع الموقع التقريبي (الولاية / المدينة) الذي تدخله بنفسك لعرض عروض الفائض والتبرعات القريبة منك. لا نقوم بتتبع الموقع الجغرافي الدقيق في الخلفية.',
                        'صور المنتجات: الصور التي يرفعها البائع لوصف السلع أو التبرعات الغذائية تُخزن مؤقتاً في مساحة التخزين السحابية Firebase Storage.',
                        'الرسائل داخل التطبيق: تُنقل المحادثات المباشرة بين البائع والمشتري لتنسيق الاستلام عبر خوادم Firebase Firestore المشفرة.'
                    ]
                },
                {
                    icon: FaLock,
                    title: '2. كيفية استخدام البيانات والبنية الصفرية',
                    body: [
                        'لتوفير ميزات السوق الأساسية: تصفح العروض، تداول النقاط، الحجوزات، والمحادثات المباشرة.',
                        'لمنع الرسائل المزعجة وحماية المجتمع عبر نظام النقاط التفاعلي.',
                        'نحن لا نبيع أو نؤجر أو نشارك بياناتك الشخصية مع أي وسطاء أو شركات إعلانية إطلاقاً.'
                    ]
                },
                {
                    icon: FaMobileAlt,
                    title: '3. خالٍ تماماً من الإعلانات والتتبع',
                    body: [
                        'تطبيق ما يضيعش لا يحتوي على أي إعلانات تجارية خارجية أو مكتبات تتبع إعلانية.',
                        'لا نجمع معرفات الإعلانات (AAID) ولا نتتبع نشاطك عبر تطبيقات أو مواقع أخرى.'
                    ]
                },
                {
                    icon: FaDatabase,
                    title: '4. خدمات الطرف الثالث وأمان البيانات',
                    body: [
                        'تتم استضافة البنية التحتية بالكامل على خوادم Google Firebase الآمنة.',
                        'جميع الاتصالات بين التطبيق والخوادم مشفرة أثناء النقل باستخدام بروتوكولات TLS / HTTPS القياسية.',
                        'تُخزن البيانات في مراكز بيانات آمنة مطابقة لأعلى المعايير العالمية (SOC و ISO).'
                    ]
                },
                {
                    icon: FaShieldAlt,
                    title: '5. سياسة الحذف التلقائي للوسائط',
                    body: [
                        'وفقاً لمبادئنا في توفير المساحة وحماية الخصوصية، يتم حذف صور السلع والمنتجات نهائياً وتلقائياً بمجرد إتمام الصفقة أو التبرع.',
                        'تتم أرشفة وتنظيف سجلات المحادثات المؤقتة بانتظام لحماية خصوصية المستخدمين.'
                    ]
                },
                {
                    icon: FaTrashAlt,
                    title: '6. سياسة حذف الحساب والبيانات',
                    body: [
                        'الحذف الفوري من التطبيق: يمكنك حذف حسابك وكافة بياناتك نهائياً في أي وقت عبر الانتقال إلى الملف الشخصي > الأمان > حذف الحساب.',
                        'طلب الحذف عبر البريد: يمكنك مراسلتنا عبر tidjanizitouni@gmail.com بعنوان "Delete My Account - Ma Ydi3ch"، وسيتم مسح كافة بيانات الحساب والعروض وسجل النقاط نهائياً خلال 30 يوماً.'
                    ]
                },
                {
                    icon: FaGlobe,
                    title: '7. خصوصية الأطفال والفئة العمرية',
                    body: [
                        'التطبيق مخصص للمستخدمين من سن 13 عاماً فما فوق. ولا نجمع عمداً أي بيانات شخصية من الأطفال دون سن 13.',
                        'إذا تبين لنا تزويدنا بمعلومات من طفل دون 13 عاماً، فإننا نقوم بحذفها فوراً من خوادمنا.'
                    ]
                },
                {
                    icon: FaEnvelope,
                    title: '8. معلومات المطور والتواصل',
                    body: [
                        'الجهة المطورة: Taedj Dev (د. تيجاني زيتوني)',
                        'البريد الإلكتروني: tidjanizitouni@gmail.com',
                        'معرف التطبيق: com.baraka.market',
                        'لأية استفسارات أو ملاحظات حول الخصوصية، نرحب بتواصلكم في أي وقت.'
                    ]
                }
            ],
            backToProject: 'العودة للمشروع',
            backToHub: 'مركز المشاريع'
        },
        fr: {
            badge: 'Conforme Google Play & RGPD',
            title: 'Politique de Confidentialité',
            lastUpdated: 'Date d’effet : 1er Septembre 2026',
            intro: `Cette Politique de Confidentialité décrit la manière dont ${projectName} ("nous", "notre" ou "l'Application"), développé par ${brandName}, collecte, utilise, protège et gère vos données personnelles lors de l'utilisation de notre application mobile Android et des services associés.`,
            sections: [
                {
                    icon: FaUserCheck,
                    title: '1. Informations Collectées',
                    body: [
                        'Informations de compte : Lors de l’inscription, nous recueillons votre nom et votre adresse e-mail via Firebase Authentication pour sécuriser votre compte.',
                        'Données de localisation : Nous collectons la localisation approximative (Wilaya / Ville) renseignée par vos soins pour afficher les surplus et dons locaux. Aucun suivi GPS en arrière-plan n’est effectué.',
                        'Photos des annonces : Les photos téléversées par les vendeurs sont stockées temporairement sur Google Firebase Cloud Storage.',
                        'Messages intégrés : Les conversations entre acheteurs et vendeurs pour convenir des retraits sont transmises de manière sécurisée via Firebase Firestore.'
                    ]
                },
                {
                    icon: FaLock,
                    title: '2. Utilisation des Données & Zéro Coût',
                    body: [
                        'Fournir les fonctionnalités essentielles : consultation des annonces, transactions de points, réservations et messagerie instantanée.',
                        'Prévenir les abus et le spam grâce à la régulation par points.',
                        'Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers à des fins publicitaires.'
                    ]
                },
                {
                    icon: FaMobileAlt,
                    title: '3. Aucune Publicité & Zéro Traçage',
                    body: [
                        'L’application Ma Ydi3ch ne contient AUCUNE publicité tierce ni SDK de ciblage publicitaire.',
                        'Nous ne collectons pas l’identifiant publicitaire (AAID) et ne suivons pas votre activité sur d’autres applications.'
                    ]
                },
                {
                    icon: FaDatabase,
                    title: '4. Infrastructure Tiers & Sécurité',
                    body: [
                        'Notre infrastructure est hébergée sur Google Firebase (Auth, Firestore, Cloud Storage).',
                        'Toutes les communications entre l’application et les serveurs sont chiffrées en transit via TLS / HTTPS.',
                        'Les données sont stockées dans des centres de données cloud sécurisés respectant les normes SOC et ISO.'
                    ]
                },
                {
                    icon: FaShieldAlt,
                    title: '5. Rétention des Données & Suppression Automatique',
                    body: [
                        'Conformément à notre démarche zéro déchet et de protection de la vie privée, les photos des produits sont automatiquement supprimées du Cloud Storage dès qu’une transaction est conclue.',
                        'Les historiques de messages temporaires sont purgés périodiquement.'
                    ]
                },
                {
                    icon: FaTrashAlt,
                    title: '6. Suppression de Compte et des Données',
                    body: [
                        'Suppression depuis l’App : Vous pouvez supprimer votre compte et l’intégralité de vos données à tout moment via Profil > Sécurité > Supprimer mon compte.',
                        'Demande par E-mail : Vous pouvez nous contacter à tidjanizitouni@gmail.com avec l’objet "Delete My Account - Ma Ydi3ch". Toutes vos données personnelles seront définitivement effacées sous 30 jours.'
                    ]
                },
                {
                    icon: FaGlobe,
                    title: '7. Protection des Mineurs',
                    body: [
                        'L’application est destinée aux personnes âgées de 13 ans et plus. Nous ne collectons pas sciemment de données auprès d’enfants de moins de 13 ans.',
                        'Si nous découvrons qu’un enfant de moins de 13 ans nous a fourni des données, nous les supprimerons immédiatement.'
                    ]
                },
                {
                    icon: FaEnvelope,
                    title: '8. Contact & Informations Développeur',
                    body: [
                        'Éditeur : Taedj Dev (Dr. Tidjani Zitouni)',
                        'E-mail officiel : tidjanizitouni@gmail.com',
                        'Identifiant de l’application : com.baraka.market',
                        'Pour toute question relative à vos données, notre équipe reste à votre écoute.'
                    ]
                }
            ],
            backToProject: 'Retour au Projet',
            backToHub: 'Hub des Projets'
        }
    };

    const current = content[lang];

    return (
        <div className={`min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden flex flex-col ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap');
                .font-arabic { font-family: 'Noto Sans Arabic', sans-serif !important; }
            `}</style>

            {/* Top Navigation */}
            <div className={`fixed top-0 left-0 right-0 h-28 bg-[#080A0E]/80 backdrop-blur-2xl z-50 border-b border-white/5 flex items-center justify-between px-6 md:px-12 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="flex items-center gap-6">
                    <Link href={`/projects/${projectSlug}`} className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-all">
                            <FaArrowLeft className={isRtl ? 'rotate-180 text-xl' : 'text-xl'} />
                        </div>
                        <span className="font-bold text-sm md:text-base">{current.backToProject}</span>
                    </Link>
                </div>

                {/* Language Switcher */}
                <div dir="ltr" className="flex items-center gap-2 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
                    {(['en', 'ar', 'fr'] as Language[]).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all uppercase tracking-wider ${lang === l
                                ? 'bg-emerald-500 text-[#080A0E] shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105'
                                : 'hover:bg-white/5 text-neutral-500 hover:text-white'
                                }`}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </div>

            <main className="flex-grow pt-44 pb-32 px-6 md:px-12">
                <div className="max-w-5xl mx-auto space-y-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lang}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-12"
                        >
                            {/* Header Card */}
                            <div className="bg-gradient-to-br from-[#0D1117] to-[#080A0E] border border-white/5 p-8 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="relative z-10 space-y-6">
                                    <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                                            {current.badge}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                                        {current.title}
                                    </h1>
                                    <p className="text-emerald-400 font-mono text-sm">
                                        {current.lastUpdated}
                                    </p>
                                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-normal">
                                        {current.intro}
                                    </p>
                                </div>
                            </div>

                            {/* Policy Sections */}
                            <div className="space-y-8">
                                {current.sections.map((section, idx) => {
                                    const IconComponent = section.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="bg-[#0A0C10] border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-300 space-y-6"
                                        >
                                            <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl flex-shrink-0">
                                                    <IconComponent />
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                    {section.title}
                                                </h2>
                                            </div>
                                            <ul className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                                                {section.body.map((item, itemIdx) => (
                                                    <li key={itemIdx} className={`flex items-start gap-3 text-neutral-300 text-base md:text-lg leading-relaxed ${isRtl ? 'flex-row-reverse' : ''}`}>
                                                        <span className="text-emerald-500 font-bold mt-1">▪</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Account Deletion Callout Card */}
                            <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent border border-red-500/20 p-8 md:p-12 rounded-[2rem] space-y-4">
                                <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <FaTrashAlt className="text-red-400 text-2xl" />
                                    <h3 className="text-2xl font-bold text-white">
                                        {lang === 'ar' ? 'طلب حذف الحساب والبيانات' : (lang === 'fr' ? 'Suppression Immédiate du Compte' : 'Account & Data Deletion Guarantee')}
                                    </h3>
                                </div>
                                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                                    {lang === 'ar'
                                        ? 'نلتزم تماماً بحقك في حذف بياناتك. يمكنك حذف حسابك مباشرة من التطبيق عبر: الملف الشخصي > الأمان > حذف الحساب، أو بمراسلتنا على tidjanizitouni@gmail.com وسنقوم بمسح كافة بياناتك بالكامل.'
                                        : (lang === 'fr'
                                            ? 'Vous disposez d’un droit absolu à l’effacement de vos données. Supprimez votre compte directement dans l’application (Profil > Sécurité > Supprimer le compte) ou contactez-nous à tidjanizitouni@gmail.com.'
                                            : 'You have full sovereignty over your data. Delete your account directly in the app (Profile > Security > Delete Account) or request instant deletion via tidjanizitouni@gmail.com.')}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-16 border-t border-white/5 text-center space-y-4">
                <div className="text-sm font-black tracking-widest text-emerald-500 uppercase">{brandName} Ecosystem</div>
                <p className="text-sm text-neutral-500">© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
            </footer>
        </div>
    );
}
