import { RxCross1 } from "react-icons/rx";
import ImageGallery from "./ImageGallery";
import "./JobModel.css";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

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

const JobModel = ({ title, category, images = [], videos = [], description, technologies = [], projectUrl, sourceCodeUrl, onClose }: Props) => {
  return (
    <div
      className="
            w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] 
            max-w-[90rem] 
            h-[95vh] 
            p-4 sm:p-6 md:p-8 
            rounded-lg 
            bg-job-model 
            text-cell-description 
            mx-auto 
            flex flex-col
        "
    >
      <div className="flex justify-end mb-4" onClick={onClose}>
        <RxCross1 size={24} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-2 sm:px-5 md:px-10 flex-grow">
        <div className="w-full md:w-1/3 h-full flex">
          <ImageGallery images={images} />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 px-2 sm:px-4 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-[25px] font-semibold mb-2">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-400">{category}</p>
          </div>


          <div className="text-[20px] leading-loose mb-4 whitespace-pre-wrap">
            <ReactMarkdown
              components={{
                a: ({ ...props }) => <a style={{ fontWeight: 'bold', color: 'red', backgroundColor: 'yellow' }} {...props} />
              }}
            >
              {description}
            </ReactMarkdown>
          </div>

          {videos && videos.length > 0 && (
            <div className="mb-8 grid gap-4">
              {videos.map((video, index) => (
                <div key={index} className="w-full aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <ReactPlayer url={video} width="100%" height="100%" controls />
                </div>
              ))}
            </div>
          )}
          <ul className="list-disc list-inside mb-4">
            {technologies.map((tech, index) => (
              <li key={index} className="text-lg md:text-xl">{tech}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            {projectUrl && <a href={projectUrl} target="_blank" rel="noreferrer" className="text-red-500 bg-yellow-300 hover:underline">Live Demo</a>}
            {sourceCodeUrl && <a href={sourceCodeUrl} target="_blank" rel="noreferrer" className="text-red-500 bg-yellow-300 hover:underline">Source Code</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModel;
