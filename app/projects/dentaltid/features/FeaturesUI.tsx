'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaUserMd, FaPrescriptionBottleAlt, FaShieldAlt, FaNetworkWired, FaChartLine } from 'react-icons/fa';

const PROJECT_CONFIG = {
    name: 'DentalTid | Taedj Dev',
    slug: 'dentaltid',
    brand: 'Taedj Dev'
};

type Language = 'EN' | 'FR' | 'AR';

const CONTENT = {
    EN: {
        title: 'Feature Report',
        subtitle: 'A comprehensive deep-dive into DentalTid capabilities',
        back: 'Back to Overview',
        sections: [
            {
                title: 'The Unified Dashboard',
                icon: <FaChartLine />,
                description: 'The command center of your clinic. Real-time insights into today\'s appointments, critical inventory alerts, and patient flow management.',
                details: [
                    'Live appointment tracking with status indicators.',
                    'Dynamic KPI cards for patients and inventory.',
                    'Low-stock and expiring item automated alerts.',
                    'Emergency patient prioritizing system.'
                ]
            },
            {
                title: 'Staff Collaboration (LAN Sync)',
                icon: <FaNetworkWired />,
                description: 'Seamless teamwork without boundaries. Connect multiple devices over your local network without requiring an active internet connection.',
                details: [
                    'Dentist-Host and Staff-Client architecture.',
                    'Instant data synchronization across the clinic.',
                    'Role-based access control (Dentist, Assistant, Receptionist).',
                    'Zero-latency local database performance.'
                ]
            },
            {
                title: 'Advanced Medical Prescriptions',
                icon: <FaPrescriptionBottleAlt />,
                description: 'Professional prescription management with a focus on precision and efficiency.',
                details: [
                    'Multilingual prescription generation (EN, FR, AR).',
                    'Customizable layout with logo and background transparency.',
                    'QR code integration for digital verification.',
                    'Medicine preset system for instant list creation.'
                ]
            },
            {
                title: 'Clinical Practice Suite',
                icon: <FaUserMd />,
                description: 'A multi-dimensional approach to patient and clinic management.',
                details: [
                    'Comprehensive patient health history tracking.',
                    'Integrated dental imaging and X-ray gallery.',
                    'Automated financial auditing and transaction history.',
                    'Smart inventory logistics with supplier management.'
                ]
            },
            {
                title: 'Security & Redundancy',
                icon: <FaShieldAlt />,
                description: 'Your data is your most valuable asset. We protect it with military-grade standards.',
                details: [
                    'Offline-first architecture for total data privacy.',
                    'Optional secure cloud synchronization.',
                    'Automated local encrypted backups.',
                    'SQLCipher integration for database-level protection.'
                ]
            }
        ],
        footer: 'Finality through Precision.'
    },
    FR: {
        title: 'Rapport des Fonctionnalités',
        subtitle: 'Une plongée complète dans les capacités de DentalTid',
        back: 'Retour à la vue d\'ensemble',
        sections: [
            {
                title: 'Le Tableau de Bord Unifié',
                icon: <FaChartLine />,
                description: 'Le centre de commandement de votre clinique. Aperçu en temps réel des rendez-vous du jour, alertes d\'inventaire critiques et gestion du flux de patients.',
                details: [
                    'Suivi des rendez-vous en direct avec indicateurs de statut.',
                    'Cartes KPI dynamiques pour les patients et l\'inventaire.',
                    'Alertes automatiques pour le stock faible et les articles expirants.',
                    'Système de priorisation des patients d\'urgence.'
                ]
            },
            {
                title: 'Collaboration du Personnel (Sync LAN)',
                icon: <FaNetworkWired />,
                description: 'Travail d\'équipe fluide sans frontières. Connectez plusieurs appareils via votre réseau local sans nécessiter de connexion internet active.',
                details: [
                    'Architecture Dentiste-Hôte et Personnel-Client.',
                    'Synchronisation instantanée des données dans toute la clinique.',
                    'Contrôle d\'accès basé sur les rôles (Dentiste, Assistant, Réceptionniste).',
                    'Performance de base de données locale sans latence.'
                ]
            },
            {
                title: 'Ordonnances Médicales Avancées',
                icon: <FaPrescriptionBottleAlt />,
                description: 'Gestion professionnelle des ordonnances avec un accent sur la précision et l\'efficacité.',
                details: [
                    'Génération d\'ordonnances multilingues (EN, FR, AR).',
                    'Mise en page personnalisable avec logo et transparence de l\'arrière-plan.',
                    'Intégration de codes QR pour la vérification numérique.',
                    'Système de préréglages de médicaments pour une création de liste instantanée.'
                ]
            },
            {
                title: 'Suite de Pratique Clinique',
                icon: <FaUserMd />,
                description: 'Une approche multidimensionnelle de la gestion des patients et de la clinique.',
                details: [
                    'Suivi complet de l\'historique de santé des patients.',
                    'Galerie d\'imagerie dentaire et de radiographies intégrée.',
                    'Audit financier automatisé et historique des transactions.',
                    'Logistique d\'inventaire intelligente avec gestion des fournisseurs.'
                ]
            },
            {
                title: 'Sécurité et Redondance',
                icon: <FaShieldAlt />,
                description: 'Vos données sont votre atout le plus précieux. Nous les protégeons avec des normes de classe militaire.',
                details: [
                    'Architecture Offline-first pour une confidentialité totale des données.',
                    'Synchronisation cloud sécurisée optionnelle.',
                    'Sauvegardes locales cryptées automatisées.',
                    'Intégration SQLCipher pour la protection au niveau de la base de données.'
                ]
            }
        ],
        footer: 'La finalité par la précision.'
    },
    AR: {
        title: 'تقرير المميزات',
        subtitle: 'غوص شامل في قدرات DentalTid',
        back: 'العودة للملف الشخصي',
        sections: [
            {
                title: 'لوحة التحكم الموحدة',
                icon: <FaChartLine />,
                description: 'مركز القيادة لعيادتك. رؤى فورية لمواعيد اليوم، تنبيهات المخزون الحرجة، وإدارة تدفق المرضى.',
                details: [
                    'تتبع المواعيد المباشر مع مؤشرات الحالة.',
                    'بطاقات KPI ديناميكية للمرضى والمخزون.',
                    'تنبيهات تلقائية لنقص المخزون والأصناف منتهية الصلاحية.',
                    'نظام تحديد أولويات مرضى الطوارئ.'
                ]
            },
            {
                title: 'تعاون الطاقم (مزامنة الشبكة المحلية)',
                icon: <FaNetworkWired />,
                description: 'عمل جماعي سلس بدون حدود. ربط أجهزة متعددة عبر شبكتك المحلية دون الحاجة لاتصال إنترنت نشط.',
                details: [
                    'بنية الطبيب (المضيف) والطاقم (العميل).',
                    'مزامنة فورية للبيانات في جميع أنحاء العيادة.',
                    'التحكم في الوصول بناءً على الأدوار (طبيب، مساعد، موظف استقبال).',
                    'أداء قاعدة بيانات محلية بدون تأخير.'
                ]
            },
            {
                title: 'الوصفات الطبية المتقدمة',
                icon: <FaPrescriptionBottleAlt />,
                description: 'إدارة احترافية للوصفات الطبية مع التركيز على الدقة والكفاءة.',
                details: [
                    'إنشاء وصفات طبية متعددة اللغات (EN, FR, AR).',
                    'تنسيق قابل للتخصيص مع الشعار وشفافية الخلفية.',
                    'تكامل رمز QR للتحقق الرقمي.',
                    'نظام مسبق لضبط الأدوية لإنشاء القوائم فوراً.'
                ]
            },
            {
                title: 'جناح الممارسة السريرية',
                icon: <FaUserMd />,
                description: 'نهج متعدد الأبعاد لإدارة المرضى والعيادة.',
                details: [
                    'تتبع شامل لتاريخ صحة المريض.',
                    'معرض متكامل للتصوير السني والأشعة.',
                    'تدقيق مالي مؤتمت وسجل المعاملات.',
                    'لوجستيات مخزون ذكية مع إدارة الموردين.'
                ]
            },
            {
                title: 'الأمن والاحتياط',
                icon: <FaShieldAlt />,
                description: 'بياناتك هي أغلى أصولك. نحن نحميها بمعايير عسكرية.',
                details: [
                    'بنية تركز على العمل المحلي لخصوصية تامة للبيانات.',
                    'مزامنة سحابية آمنة اختيارية.',
                    'نسخ احتياطي محلي مشفر ومؤتمت.',
                    'تكامل SQLCipher لحماية قاعدة البيانات.'
                ]
            }
        ],
        footer: 'الكمال من خلال الدقة.'
    }
};

export default function FeaturesUI() {
    const [lang, setLang] = useState<Language>('EN');
    const isAr = lang === 'AR';
    const t = CONTENT[lang];

    return (
        <div className={`min-h-screen bg-[#080A0E] text-white selection:bg-emerald-500/30 overflow-x-hidden relative flex flex-col ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}> 
            
            {/* Language Switcher */}
            <div className={`fixed top-8 z-50 flex bg-[#0A0C10]/80 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl ${isAr ? 'left-8' : 'right-8'}`}>
                {(['EN', 'FR', 'AR'] as const).map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === l ? 'bg-emerald-500 text-black shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                    >
                        {l}
                    </button>
                ))}
            </div>

            <main className="relative z-10 w-full flex-grow py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    
                    <Link href={`/projects/${PROJECT_CONFIG.slug}`} className="group inline-flex items-center gap-4 text-neutral-500 hover:text-white transition-all text-lg font-medium mb-20">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <FaArrowLeft className={`${isAr ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} />
                        </div>
                        <span>{t.back}</span>
                    </Link>

                    <header className="mb-32 space-y-6">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                            {t.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-neutral-400 font-medium max-w-3xl">
                            {t.subtitle}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {t.sections.map((section, idx) => (
                            <div key={idx} className="group p-10 bg-[#0A0C10] border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {section.icon}
                                </div>

                                <h2 className="text-3xl font-black mb-4 tracking-tight">{section.title}</h2>
                                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                    {section.description}
                                </p>

                                <ul className="space-y-4">
                                    {section.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="flex items-start gap-3 text-neutral-500 group-hover:text-neutral-300 transition-colors">
                                            <span className="text-emerald-500 mt-1.5 text-xs">●</span>
                                            <span className="font-medium">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="py-20 border-t border-white/5 text-center mt-20">
                <div className="text-neutral-600 font-bold tracking-widest uppercase text-xs mb-4">TAEDJ Dev Ecosystem</div>
                <p className="text-neutral-500 font-medium">© {new Date().getFullYear()} {PROJECT_CONFIG.name}. {t.footer}</p>
            </footer>
        </div>
    );
}
