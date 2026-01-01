import React from "react";
import Link from "next/link";
import projectsData from "../../data/projects.json";
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
    const hasProjects = projectsData && projectsData.length > 0;
    const baseData: Project[] = hasProjects ? [...projectsData] as Project[] : [];

    // Placeholder for symmetry
    if (baseData.length === 1) {
        baseData.push({
            name: "Future Solutions",
            slug: "coming-soon",
            category: "Future",
            brand: "Taedj Dev",
            status: "planning",
            description: "New innovative projects are currently in the workshop. Stay tuned for updates.",
            image: "",
        });
    }

    const displayData = [...baseData, ...baseData, ...baseData, ...baseData];

    return (
        <section id="Taedj-Dev-Projects" className="py-24 px-6 md:px-12 bg-[#0B0D11] overflow-hidden">
            <div className="max-w-[1224px] mx-auto">
                <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div>
                        <BackgroundText backgroundText="ECOSYSTEM" innerText="Taedj Dev Projects" />
                        <p className="text-gray-400 mt-6 max-w-2xl text-xl leading-relaxed relative z-10">
                            Explore our suite of professional applications designed for precision and scale.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="group animate-attention relative z-10 flex items-center gap-4 px-8 py-4 rounded-full bg-[#161B22] border border-emerald-500/20 hover:border-emerald-500 shadow-xl transition-all duration-500"
                    >
                        <span className="font-bold text-white text-lg">View Entire Hub</span>
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
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
                                    {/* DIAGNOSTIC IMAGE AREA */}
                                    <div className="h-64 bg-gradient-to-br from-neutral-900 to-[#0B0D11] relative flex items-center justify-center p-12 overflow-hidden border-b border-white/5">

                                        {/* HIGH VISIBILITY PLACEHOLDER (Testing if code is live) */}
                                        <div className="absolute inset-0 flex items-center justify-center select-none z-0">
                                            <span className="text-[140px] font-black text-emerald-500/20 leading-none">
                                                {project.name.charAt(0)}
                                            </span>
                                        </div>

                                        {/* IMAGE / VIDEO */}
                                        {imgPath ? (
                                            <div className="relative w-full h-full z-10 flex items-center justify-center">
                                                {imgPath.toLowerCase().endsWith('.mp4') ? (
                                                    <video src={imgPath} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl shadow-2xl" />
                                                ) : (
                                                    <img
                                                        src={imgPath}
                                                        alt={project.name}
                                                        className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-all duration-700"
                                                        onError={(e) => {
                                                            console.error("Path Resolution Error:", imgPath);
                                                            // For diagnostic: red border if image fails
                                                            (e.target as HTMLImageElement).style.border = "2px solid rgba(255,0,0,0.5)";
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <div className="z-10 text-white/40 italic text-sm">No Asset Defined</div>
                                        )}

                                        {/* Overlay Effects */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-20"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-6 right-6 z-30">
                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-10 bg-[#161B22] relative z-20">
                                        <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3 h-[5.4rem]">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-sm font-black text-emerald-500 uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                                            Launch Project <MdArrowForward className="ml-3 text-xl" />
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
