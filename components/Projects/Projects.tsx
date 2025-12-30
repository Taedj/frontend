import React from "react";
import Link from "next/link";
import projectsData from "../../data/projects.json";

const Projects = () => {
    return (
        <section id="Taedj-Dev-Projects" className="py-20 bg-backgroundVeryDarkColor text-white">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col mb-12">
                    <h2 className="text-4xl font-bold mb-4 border-l-4 border-primaryColor pl-4">
                        Taedj Dev Projects
                    </h2>
                    <p className="text-gray-400 pl-5 max-w-2xl">
                        Explore our ecosystem of applications and tools.
                        <Link href="/projects" className="ml-2 text-primaryColor hover:underline font-semibold cursor-pointer">
                            View All Ecosystem &rarr;
                        </Link>
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide snap-x snap-mandatory">
                    {projectsData.slice(0, 5).map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="min-w-[300px] md:min-w-[350px] bg-backgroundDarkColor rounded-xl p-6 border border-borderColor hover:border-primaryColor transition-all duration-300 snap-center group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primaryColor to-cyan-500 flex items-center justify-center text-xl font-bold text-black">
                                    {project.name.substring(0, 1)}
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-primaryColor">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primaryColor transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-3">
                                {project.description}
                            </p>
                        </Link>
                    ))}

                    {/* "See More" Card at the end */}
                    <Link
                        href="/projects"
                        className="min-w-[200px] bg-backgroundDarkColor/50 rounded-xl p-6 border border-borderColor border-dashed flex flex-col items-center justify-center hover:bg-white/5 transition-colors snap-center cursor-pointer"
                    >
                        <span className="text-3xl mb-2 text-primaryColor">&rarr;</span>
                        <span className="font-semibold text-primaryColor">View All</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
