import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ImageGallery from "./ImageGallery";
import "./JobModel.css";
import ReactMarkdown from "react-markdown";

interface Props {
  title: string;
  category: string;
  images: string[];
  videos?: string[];
  description: string;
  technologies: string[];
  projectUrl?: string;
  sourceCodeUrl?: string;
  onClose: () => void;
}

const isDirectVideoFile = (url: string) => {
  if (!url) return false;
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("/storage/v1/object/") || lowerUrl.includes("/media/")) {
    return true;
  }
  const pathPart = url.split("?")[0].toLowerCase();
  return (
    pathPart.endsWith(".mp4") ||
    pathPart.endsWith(".webm") ||
    pathPart.endsWith(".ogg") ||
    pathPart.endsWith(".mov") ||
    pathPart.endsWith(".m4v")
  );
};

/**
 * Converts YouTube/Vimeo share URLs into embeddable iframe URLs.
 * Returns null if URL is not a recognized platform.
 */
const getEmbedUrl = (url: string): string | null => {
  if (!url) return null;
  try {
    const urlObj = new URL(url);
    const host = urlObj.hostname.replace("www.", "");

    // YouTube: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/shorts/ID, youtube.com/embed/ID
    if (host === "youtube.com" || host === "youtu.be" || host === "m.youtube.com") {
      let videoId: string | null = null;

      if (host === "youtu.be") {
        videoId = urlObj.pathname.slice(1).split("/")[0];
      } else if (urlObj.pathname.startsWith("/watch")) {
        videoId = urlObj.searchParams.get("v");
      } else if (urlObj.pathname.startsWith("/shorts/")) {
        videoId = urlObj.pathname.split("/shorts/")[1]?.split("/")[0];
      } else if (urlObj.pathname.startsWith("/embed/")) {
        return url; // already an embed URL
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
      }
    }

    // Vimeo: vimeo.com/ID
    if (host === "vimeo.com") {
      const vimeoId = urlObj.pathname.slice(1).split("/")[0];
      if (vimeoId && /^\d+$/.test(vimeoId)) {
        return `https://player.vimeo.com/video/${vimeoId}`;
      }
    }
  } catch {
    // invalid URL, fall through
  }
  return null;
};
const JobModel = ({
  title,
  category,
  images = [],
  videos = [],
  description,
  technologies = [],
  projectUrl,
  sourceCodeUrl,
  onClose,
}: Props) => {
  const [activeMediaTab, setActiveMediaTab] = useState<"photos" | "videos">("photos");
  const hasVideos = videos && videos.length > 0;

  return (
    <div
      className="
        relative
        w-[92vw] sm:w-[88vw] md:w-[85vw] lg:w-[80vw] 
        max-w-[85rem] 
        h-[90vh] md:h-[80vh] lg:h-[75vh] 
        p-5 sm:p-6 md:p-8 
        rounded-2xl 
        bg-job-model 
        text-cell-description 
        mx-auto 
        flex flex-col
        shadow-2xl
        border border-white/5
        overflow-y-auto md:overflow-hidden
      "
    >
      {/* Floating Close Button */}
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4 z-50 
          p-2.5 rounded-full 
          bg-black/30 hover:bg-primary/20 
          text-cell-description hover:text-primary 
          border border-white/10 hover:border-primary/30
          transition-all duration-300 
          focus:outline-none shadow-lg backdrop-blur-sm
          cursor-pointer
        "
        aria-label="Close details"
      >
        <RxCross1 size={18} />
      </button>

      {/* Main Grid Layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-grow md:h-[calc(100%-1rem)] mt-2">
        {/* Left Column: Media (Gallery & Videos) */}
        <div className="w-full md:w-[45%] h-auto md:h-full flex flex-col overflow-visible md:overflow-y-auto pr-0 md:pr-2">
          {/* Media Tab Selector */}
          {hasVideos && (
            <div className="flex gap-2 p-1 bg-black/20 border border-white/5 rounded-xl mb-4 w-fit">
              <button
                onClick={() => setActiveMediaTab("photos")}
                className={`
                  px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer
                  ${
                    activeMediaTab === "photos"
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-400 hover:text-gray-200"
                  }
                `}
              >
                Photos ({images.length})
              </button>
              <button
                onClick={() => setActiveMediaTab("videos")}
                className={`
                  px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer
                  ${
                    activeMediaTab === "videos"
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-400 hover:text-gray-200"
                  }
                `}
              >
                Videos ({videos.length})
              </button>
            </div>
          )}

          {/* Media Content */}
          <div className="flex-grow">
            {activeMediaTab === "photos" || !hasVideos ? (
              <ImageGallery images={images} />
            ) : (
              <div className="grid gap-5">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="
                      w-full aspect-video rounded-xl overflow-hidden 
                      border border-white/10 bg-black/30 shadow-inner
                    "
                  >
                    {isDirectVideoFile(video) ? (
                      <video
                        src={video}
                        controls
                        className="w-full h-full object-contain"
                        preload="metadata"
                        playsInline
                      />
                    ) : getEmbedUrl(video) ? (
                      <iframe
                        src={getEmbedUrl(video)!}
                        title={`${title} - Video ${index + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ border: "none" }}
                      />
                    ) : (
                      <video
                        src={video}
                        controls
                        className="w-full h-full object-contain"
                        preload="metadata"
                        playsInline
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Project details */}
        <div className="w-full md:w-[55%] h-auto md:h-full flex flex-col justify-between overflow-visible md:overflow-y-auto pl-0 md:pl-2">
          <div>
            {/* Header info */}
            <div className="mb-6 pr-10 md:pr-0">
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded bg-primary/10 text-primary border border-primary/20 mb-3">
                {category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {title}
              </h1>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide uppercase text-xs opacity-80">
                Project Overview
              </h2>
              <div className="text-sm sm:text-base leading-relaxed text-gray-300/90 whitespace-pre-wrap">
                <ReactMarkdown
                  components={{
                    a: ({ ...props }) => (
                      <a
                        className="text-primary hover:text-hover-primary underline font-semibold transition-colors duration-200"
                        target="_blank"
                        rel="noreferrer"
                        {...props}
                      />
                    ),
                  }}
                >
                  {description}
                </ReactMarkdown>
              </div>
            </div>

            {/* Technologies */}
            {technologies.length > 0 && (
              <div className="mb-8">
                <h2 className="text-base sm:text-lg font-bold text-white mb-3 tracking-wide uppercase text-xs opacity-80">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 text-xs md:text-sm font-medium rounded-full 
                        bg-primary/5 text-primary border border-primary/20 
                        transition-all duration-300 hover:bg-primary/10
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 mt-auto">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center justify-center gap-2 
                  px-5 py-2.5 rounded-xl font-semibold text-sm text-white
                  bg-primary hover:bg-hover-primary 
                  transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20
                "
              >
                <FiExternalLink size={16} />
                Live Demo
              </a>
            )}
            {sourceCodeUrl && (
              <a
                href={sourceCodeUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center justify-center gap-2 
                  px-5 py-2.5 rounded-xl font-semibold text-sm text-cell-description hover:text-white
                  bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20
                  transition-all duration-300 transform hover:-translate-y-0.5 shadow-md
                "
              >
                <FiGithub size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModel;
