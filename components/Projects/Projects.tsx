import React from "react";
import Link from "next/link";
import projectsData from "../../data/projects.json";
import BackgroundText from "../BackgroundText/BackgroundText";
import { MdArrowForward } from "react-icons/md";
import { colors } from "../../constants/constants";

const Projects = () => {
    return (
        <section id="Taedj-Dev-Projects" className="py-24 px-6 md:px-12 bg-bg-dark">
            <div className="max-w-[1224px] mx-auto">
                <div className="mb-16">
                    <BackgroundText
                        backgroundText="ECOSYSTEM"
                        innerText="Taedj Dev Projects"
                    />
                </div>

                <div className="relative">
                    {/* Header / Subtext */}
                    <p className="text-gray-400 mb-8 max-w-2xl text-lg">
                        Explore our ecosystem of applications and tools built for performance and scale.
                    </p>

                    {/* Carousel Container */}
                    <div className="flex overflow-x-auto space-x-6 pb-12 scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thin snap-x snap-mandatory">
                        {projectsData.slice(0, 5).map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="flex-shrink-0 w-[350px] bg-bg-less-dark rounded-xl border border-border-color overflow-hidden hover:border-primary transition-all duration-300 snap-center group cursor-pointer shadow-lg"
                            >
                                <div className="h-48 bg-gradient-to-br from-bg-less-dark to-black flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                    {/* Placeholder Icon/Viz */}
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-3xl font-bold text-white shadow-2xl z-10">
                                        {project.name.substring(0, 1)}
                                    </div>
                                    <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/30 border border-white/5 text-primary">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 h-15">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                        View Project <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* "See More" Card */}
                        <Link
                            href="/projects"
                            className="flex-shrink-0 w-[200px] bg-bg-less-dark/30 rounded-xl border-2 border-dashed border-border-color flex flex-col items-center justify-center hover:bg-white/5 hover:border-primary transition-colors snap-center cursor-pointer group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MdArrowForward size={30} className="text-primary" />
                            </div>
                            <span className="font-semibold text-white group-hover:text-primary transition-colors">View Ecosystem</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
