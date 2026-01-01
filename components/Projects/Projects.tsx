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
    // If no projects, don't show the marquee
    const hasProjects = projectsData && projectsData.length > 0;

    // Duplicate data for scrolling marquee effect
    const baseData: Project[] = hasProjects ? [...projectsData] as Project[] : [];

    // Add "Coming Soon" if we have only 1 project to maintain layout
    if (baseData.length === 1) {
        baseData.push({
            name: "Innovation Hub",
            slug: "coming-soon",
            category: "Future",
            brand: "Taedj Dev",
            status: "planning",
            description: "Explore the upcoming high-performance solutions currently in development.",
            image: "",
        });
    }

    const displayData = [...baseData, ...baseData, ...baseData, ...baseData];

    return (
        <section id="Taedj-Dev-Projects" className="py-24 px-6 md:px-12 bg-[#0B0D11] overflow-hidden">
            <div className="max-w-[1224px] mx-auto">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div>
                        <BackgroundText backgroundText="ECOSYSTEM" innerText="Taedj Dev Projects" />
                        <p className="text-gray-400 mt-6 max-w-2xl text-xl leading-relaxed relative z-10">
                            High-performance applications built for medical precision and premium user experience.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="group animate-attention relative z-10 flex items-center gap-4 px-8 py-4 rounded-full bg-[#161B22] border border-emerald-500/20 hover:border-emerald-500 shadow-xl transition-all duration-500"
                    >
                        <span className="font-bold text-white text-lg">View All Projects</span>
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                            <MdArrowForward className="text-emerald-500" size={24} />
                        </div>
                    </Link>
                </div>

                {/* Marquee */}
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
                                    {/* Visual Content */}
                                    <div className="h-64 bg-black relative flex items-center justify-center p-12">

                                        {/* Fallback Letter (Always visible behind if image is transparent or failing) */}
                                        <div className="absolute inset-0 flex items-center justify-center select-none opacity-10">
                                            <span className="text-[120px] font-black text-white leading-none">
                                                {project.name.charAt(0)}
                                            </span>
                                        </div>

                                        {/* Actual Image / Video */}
                                        {imgPath && (
                                            <div className="relative w-full h-full z-10 flex items-center justify-center">
                                                {imgPath.toLowerCase().endsWith('.mp4') ? (
                                                    <video src={imgPath} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl" />
                                                ) : (
                                                    <img
                                                        src={imgPath}
                                                        alt={project.name}
                                                        className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform duration-700"
                                                        onError={(e) => {
                                                            console.error("Image load failed:", imgPath);
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {/* Glass Badge */}
                                        <div className="absolute top-6 right-6 z-20">
                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Bottom Fade */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-10 bg-[#161B22]">
                                        <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3 h-[5.4rem]">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-sm font-black text-emerald-500 uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                                            Explore Project <MdArrowForward className="ml-3 text-xl" />
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
