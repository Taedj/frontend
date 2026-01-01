import React from "react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "../../data/projects.json";
import BackgroundText from "../BackgroundText/BackgroundText";
import { MdArrowForward } from "react-icons/md";
import "./Projects.css";

                                        </span >
                                    </div >
                                </div >

    <div className="p-10">
        <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
            {project.name}
        </h3>

        {/* Description: Increased size and clarity */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8 line-clamp-3 h-[5.4rem]">
            {project.description}
        </p>

        <div className="flex items-center text-sm font-black text-primary/60 group-hover:text-primary transition-colors uppercase tracking-[0.2em]">
            Launch Project <MdArrowForward className="ml-3 group-hover:translate-x-2 transition-transform text-xl" />
        </div>
    </div>
                            </Link >
                        ))}
                    </div >
                </div >
            </div >
        </section >
    );
};

export default Projects;
