
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DentalTid - Taedj Dev',
  description: 'Official page for DentalTid',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            DentalTid
          </h1>
          <p className="text-xl text-neutral-400">Management by Taedj Dev</p>
        </header>
        
        <section className="mb-16">
           <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
             <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Overview</h2>
             <div className="prose prose-invert max-w-none">
                <p>
                  Welcome to the official page for DentalTid. This is part of the Taedj Dev ecosystem.
                </p>
             </div>
           </div>
        </section>

        {/* Future Layout: Screenshots, Features, CTA */}
      </div>
    </div>
  );
}
    