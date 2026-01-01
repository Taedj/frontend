import React, { useState } from "react";
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

    // Prepare data for the marquee
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
                {/* Header Section */}
                <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div>
                        <BackgroundText
                            backgroundText="ECOSYSTEM"
                            innerText="Taedj Dev Projects"
                        />
                        <p className="text-gray-400 mt-6 max-w-2xl text-xl leading-relaxed relative z-10">
                            Explore our ecosystem of applications and tools built for performance and scale.
                            Our software is designed with a focus on medical precision and premium user experience.
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

                {/* Marquee Container */}
                <div className="relative w-screen left-1/2 -ml-[50vw]">
                    <div className={`flex ${shouldAnimate ? 'animate-scroll' : 'justify-center flex-wrap'} hover:pause gap-12 px-12`}>
                        {displayData.map((project, index) => {
                            const finalImage = project.image || project.thumbnail || project.imageUrl;
                            const isPlaceholder = !finalImage;

                            return (
                                <Link
                                    key={`${project.slug}-${index}`}
                                    href={`/projects/${project.slug}`}
                                    className="flex-shrink-0 w-[500px] bg-neutral-800/40 rounded-2xl border border-white/5 overflow-hidden hover:border-primary transition-all duration-500 group cursor-pointer shadow-2xl hover:shadow-primary/10"
                                >
                                    {/* Project Image Area */}
                                    <div className="h-64 bg-black relative overflow-hidden flex items-center justify-center border-b border-white/5">

                                        {/* Fallback Letter (Always behind) */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-3xl font-bold text-white/20 select-none">
                                                {project.name.substring(0, 1)}
                                            </div>
                                        </div>

                                        {/* Actual Content (Image or Video) */}
                                        {!isPlaceholder && (
                                            <div className="absolute inset-0 z-10">
                                                {finalImage.toLowerCase().match(/\.(mp4|webm)$/) ? (
                                                    <video
                                                        src={finalImage}
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        className="w-full h-full object-cover opacity-100"
                                                    />
                                                ) : (
                                                    <div
                                                        className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-700 group-hover:scale-105"
                                                        style={{
                                                            backgroundImage: `url('${finalImage}')`,
                                                            // We use img scale trick for better rendering
                                                            margin: '1.5rem'
                                                        }}
                                                        role="img"
                                                        aria-label={project.name}
                                                    >
                                                        {/* Inline img for diagnostic + accessibility */}
                                                        <img
                                                            src={finalImage}
                                                            className="sr-only"
                                                            alt={project.name}
                                                            onError={(e) => {
                                                                console.error(`Failed to load project image: ${finalImage}`);
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Light Overlay to help content pop */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-20"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-6 right-6 z-30">
                                            <span className="text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-10 relative z-10">
                                        <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3 h-[5.4rem]">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-sm font-black text-primary/60 group-hover:text-primary transition-colors uppercase tracking-[0.2em]">
                                            Experience Solution <MdArrowForward className="ml-3 group-hover:translate-x-2 transition-transform text-xl" />
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
