'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaGlobe, FaCogs, FaUserMd, FaPrescriptionBottleAlt, FaShieldAlt, FaNetworkWired, FaChartLine, FaBoxOpen } from 'react-icons/fa';

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
                    'Architecture \