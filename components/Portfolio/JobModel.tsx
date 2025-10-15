import { RxCross1 } from "react-icons/rx";
import ImageGallery from "./ImageGallery";
import "./JobModel.css";
import ReactMarkdown from "react-markdown";

interface Props {
  title: string;
  category: string;
  images: string[];
  description: string;
  technologies: string[];
  projectUrl?: string;
  sourceCodeUrl?: string;
  onClose: () => void;
}

const JobModel = ({ title, category, images = [], description, technologies = [], projectUrl, sourceCodeUrl, onClose }: Props) => {
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
            overflow-auto
        "
    >
      <div className="flex justify-end mb-4" onClick={onClose}>
        <RxCross1 size={24} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-2 sm:px-5 md:px-10">
        <div className="w-full md:w-2/3 h-[60vh]">
          <ImageGallery images={images} />
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0 px-2 sm:px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">{category}</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Project Info:</h2>
          <div className="text-lg md:text-xl leading-7 mb-4">
            <ReactMarkdown
              components={{
                a: ({...props}) => <a style={{fontWeight: 'bold', color: 'blue'}} {...props} />
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
          <ul className="list-disc list-inside mb-4">
            {technologies.map((tech, index) => (
              <li key={index} className="text-lg md:text-xl">{tech}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            {projectUrl && <a href={projectUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Live Demo</a>}
            {sourceCodeUrl && <a href={sourceCodeUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Source Code</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModel;
