import React from 'react';
import Link from 'next/link';
import projectsData from '../../data/projects.json';

export const metadata = {
    title: 'Taedj Dev - Projects Hub',
    description: 'Explore the ecosystem of projects by Taedj Dev.',
};

export default function ProjectsHub() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-emerald-500 selection:text-white">
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        Taedj Dev
                    </Link>
                    <Link href="/" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
                        Back to Portfolio
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <header className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                        Our Ecosystem
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Discover the suite of powerful projects built to solve real-world problems.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group relative bg-neutral-800/50 rounded-3xl p-8 border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 block"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-2xl font-bold text-neutral-900 shadow-lg">
                                        {project.name.substring(0, 1)}
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-neutral-400 line-clamp-3 mb-6">
                                    {project.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                    Explore Project
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Empty State / Coming Soon */}
                    {projectsData.length === 0 && (
                        <div className="col-span-full text-center py-20 text-neutral-500">
                            <p className="text-xl">No projects published yet.</p>
                        </div>
                    )}
                </div>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-neutral-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Taedj Dev. All rights reserved.</p>
            </footer>
        </div>
    );
}
