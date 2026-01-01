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
    const shouldAnimate = projectsData.length > 0;

    const baseData: Project[] = [...projectsData] as Project[];
    if (baseData.length === 1) {
        baseData.push({
            name: "More Coming Soon",
            slug: "coming-soon",
            category: "Future",
            brand: "Taedj Dev",
            status: "planning",
            description: "We are constantly working on new innovative solutions. Stay tuned for the next breakthrough in the Taedj ecosystem.",
            image: "",
        });
    }

    const displayData = [...baseData, ...baseData, ...baseData, ...baseData];

    return (
        <section id="Taedj-Dev-Projects" className="py-24 px-6 md:px-12 bg-bg-dark overflow-hidden">
            <div className="max-w-[1224px] mx-auto">
                <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div>
                        <BackgroundText
                            backgroundText="ECOSYSTEM"
                            innerText="Taedj Dev Projects"
                        />
                        <p className="text-gray-400 mt-6 max-w-2xl text-xl leading-relaxed relative z-10">
                            Explore our ecosystem of applications and tools built for performance and scale.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="group animate-attention relative z-10 flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-bg-less-dark to-black border border-primary/40 hover:border-primary shadow-xl hover:shadow-primary/20 transition-all duration-500"
                    >
                        <span className="font-bold text-white text-lg group-hover:text-primary transition-colors">
                            View All Hub
                        </span>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                            <MdArrowForward className="text-primary" size={24} />
                        </div>
                    </Link>
                </div>

                <div className="relative w-screen left-1/2 -ml-[50vw]">
                    <div className={`flex ${shouldAnimate ? 'animate-scroll' : 'justify-center flex-wrap'} hover:pause gap-12 px-12`}>
                        {displayData.map((project, index) => {
                            const finalImage = project.image || project.thumbnail || project.imageUrl;

                            return (
                                <Link
                                    key={`${project.slug}-${index}`}
                                    href={`/projects/${project.slug}`}
                                    className="flex-shrink-0 w-[500px] bg-neutral-800/40 rounded-2xl border border-white/5 overflow-hidden hover:border-primary transition-all duration-500 group cursor-pointer shadow-2xl hover:shadow-primary/10"
                                >
                                    <div className="h-64 bg-black relative overflow-hidden flex items-center justify-center border-b border-white/5 p-8">

                                        {/* DEBUG INFO - Visible only if needed or just as fallback */}
                                        <div className="absolute bottom-2 left-2 text-[10px] text-white/10 z-0">
                                            {finalImage || "no-img"}
                                        </div>

                                        {/* Fallback Letter - MUCH BRIGHTER FOR TESTING */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="text-6xl font-black text-white/5 uppercase select-none">
                                                {project.name.substring(0, 1)}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        {finalImage && (
                                            <div className="relative w-full h-full z-10 flex items-center justify-center">
                                                {finalImage.toLowerCase().endsWith(".mp4") ? (
                                                    <video
                                                        src={finalImage}
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    <img
                                                        src={finalImage}
                                                        alt={project.name}
                                                        className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                                                        onError={(e) => {
                                                            console.warn("Img Error:", finalImage);
                                                            // If error, show red border for debugging
                                                            (e.target as HTMLImageElement).style.border = "1px solid rgba(255,0,0,0.2)";
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-20"></div>

                                        <div className="absolute top-6 right-6 z-30">
                                            <span className="text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-10 relative z-10">
                                        <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3 h-[5.4rem]">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-sm font-black text-primary group-hover:text-white transition-colors uppercase tracking-[0.2em]">
                                            Launch <MdArrowForward className="ml-3 group-hover:translate-x-2 transition-transform text-xl" />
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
