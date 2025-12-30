import React from "react";
import Link from "next/link";
import projectsData from "../../data/projects.json";
import BackgroundText from "../BackgroundText/BackgroundText";
import { MdArrowForward } from "react-icons/md";
import "./Projects.css";

const Projects = () => {
    // Duplicate data to create seamless infinite loop
    const seamlessData = [...projectsData, ...projectsData, ...projectsData, ...projectsData];

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
                        <p className="text-gray-400 mt-4 max-w-2xl text-lg relative z-10">
                            Explore our ecosystem of applications and tools built for performance and scale.
                        </p>
                    </div>

                    {/* View Ecosystem Button (Animated) */}
                    <Link
                        href="/projects"
                        className="group animate-attention relative z-10 flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-bg-less-dark to-black border border-primary/30 hover:border-primary shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                        <span className="font-semibold text-white group-hover:text-primary transition-colors">
                            View Ecosystem
                        </span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <MdArrowForward className="text-primary" size={18} />
                        </div>
                    </Link>
                </div>

                {/* Marquee Container */}
                <div className="relative w-screen left-1/2 -ml-[50vw]">
                    <div className="flex animate-scroll hover:pause gap-8 px-8">
                        {seamlessData.map((project, index) => (
                            <Link
                                // Use index in key because we have duplicates
                                key={`${project.slug}-${index}`}
                                href={`/projects/${project.slug}`}
                                className="flex-shrink-0 w-[400px] bg-bg-less-dark rounded-xl border border-border-color overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/5"
                            >
                                <div className="h-52 bg-gradient-to-br from-bg-less-dark to-black flex items-center justify-center relative overflow-hidden">
                                    {/* Abstract Background Grid */}
                                    <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110 group-hover:scale-100"></div>

                                    {/* Icon */}
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-3xl font-bold text-white shadow-2xl z-10 group-hover:scale-110 transition-transform duration-300">
                                        {project.name.substring(0, 1)}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-black/30 border border-white/5 text-primary">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                    {/* Description: Increased readability with more lines and better contrast */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4 h-[5rem]">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-widest text-xs">
                                        View Project <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform text-lg" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
