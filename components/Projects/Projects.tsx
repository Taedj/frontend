"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BackgroundText from "../BackgroundText/BackgroundText";
import { MdArrowForward } from "react-icons/md";
import "./Projects.css";

interface Project {
    name: string;
    slug: string;
    category: string;
    brand: string;
    status: string;
    description: string;
    image: string;
    thumbnail?: string;
    imageUrl?: string;
}

const Projects = () => {
    const [projectsData, setProjectsData] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProjectsData(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch projects:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section id="Taedj-Dev-Projects" className="py-24 px-6 md:px-12 bg-[#0B0D11] overflow-hidden min-h-[400px] flex items-center justify-center">
                <div className="animate-pulse text-emerald-500 font-bold">Discovering Ecosystem...</div>
            </section>
        );
    }

    const hasProjects = projectsData && projectsData.length > 0;
    const baseData: Project[] = hasProjects ? [...projectsData] as Project[] : [];

    // Safety check for empty projects
    if (baseData.length === 0) {
        return null;
    }

    // Add placeholder if needed
    if (baseData.length === 1) {
        baseData.push({
            name: "Digital Future",
            slug: "coming-soon",
            category: "Future",
            brand: "Taedj Dev",
            status: "planning",
            description: "New innovative solutions are being developed. Stay tuned for the next release.",
            image: "",
        });
    }

    const displayData = [...baseData, ...baseData, ...baseData, ...baseData];
    const buildTime = new Date().toLocaleTimeString();

    return (
        <section id="Taedj-Dev-Projects" className="py-24 px-6 md:px-12 bg-[#0B0D11] overflow-hidden">
            <div className="max-w-[1224px] mx-auto">
                <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div>
                        <BackgroundText backgroundText="ECOSYSTEM" innerText="Taedj Dev Projects" />
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-gray-400 max-w-2xl text-xl leading-relaxed relative z-10">
                                Explore our professional solutions.
                            </p>
                            <span className="text-[10px] text-emerald-500/30 uppercase tracking-widest bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                                Ver: {buildTime} | Projects: {projectsData.length}
                            </span>
                        </div>
                    </div>

                    <Link
                        href="/projects"
                        className="group animate-attention relative z-10 flex items-center gap-4 px-8 py-4 rounded-full bg-[#161B22] border border-emerald-500/20 hover:border-emerald-500 shadow-xl transition-all duration-500"
                    >
                        <span className="font-bold text-white">View Hub</span>
                        <div className="w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                            <MdArrowForward className="text-emerald-500" size={24} />
                        </div>
                    </Link>
                </div>

                <div className="relative w-screen left-1/2 -ml-[50vw]">
                    <div className={`flex ${hasProjects ? 'animate-scroll' : 'justify-center'} hover:pause gap-12 px-12`}>
                        {displayData.map((project, index) => {
                            const imgPath = project.image || project.thumbnail || project.imageUrl;

                            return (
                                <Link
                                    key={`${project.slug}-${index}`}
                                    href={`/projects/${project.slug}`}
                                    className="flex-shrink-0 w-[500px] bg-[#161B22] rounded-3xl border border-white/5 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 group cursor-pointer shadow-2xl"
                                >
                                    {/* IMAGE AREA - Brighter background to show card is alive */}
                                    <div className="h-64 bg-[#1a1f26] relative overflow-hidden border-b border-white/5">
                                        {/* Logo Container */}
                                        {imgPath ? (
                                            <div className="relative w-full h-full z-10">
                                                <img
                                                    src={imgPath}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    onError={(e) => {
                                                        // Fallback on visual error
                                                        (e.target as HTMLImageElement).style.opacity = '0.3';
                                                        (e.target as HTMLImageElement).style.filter = 'grayscale(1)';
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div className="z-10 w-full h-full bg-white/5 flex items-center justify-center text-6xl font-bold text-white/20">
                                                {project.name.charAt(0)}
                                            </div>
                                        )}

                                        {/* Bottom Fade Mask - Slightly more subtle for full images */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20"></div>

                                        {/* Badge */}
                                        <div className="absolute top-6 right-6 z-30">
                                            <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded bg-black/80 border border-white/10 text-emerald-400">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* SMALL PATH LABEL FOR DEBUGGING */}
                                        <div className="absolute bottom-2 right-2 text-[8px] text-white/5 select-none z-30">
                                            {imgPath}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-10 bg-[#161B22] relative z-20 border-t border-white/5">
                                        <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3 h-[5.4rem]">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-sm font-black text-emerald-500 uppercase tracking-[0.2em] group-hover:pl-2 transition-all">
                                            View Solution <MdArrowForward className="ml-3 text-xl" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
