// Portfolio.tsx
"use client";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Modal from "react-modal";
import { colors } from "../../constants/constants";
import useWorks, { PortfolioItem } from "../../hooks/useWorks";
import BackgroundText from "../BackgroundText/BackgroundText";
import CategoriesSelector from "./CategoriesSelector";
import JobModel from "./JobModel";
import "./Portfolio.css";
import clientLogger from "../../lib/clientLogger";

const breakpointColumnsObj = {
  default: 3, // 3 columns by default
  1100: 2, // 2 columns at 1100px
  700: 1, // 1 column at 700px
};

export interface ServiceItem {
  category: string;
}

interface Props {
  handleModalOpen: (open: boolean) => void;
}

const Potfolio = ({ handleModalOpen }: Props) => {
  const { data } = useWorks();
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<PortfolioItem | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);



  const selectedData =
    category === "All"
      ? data
      : data?.filter((item) => item.service.category === category);

  const visibleData = selectedData?.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <div id="Portfolio" className="py-29 px-0 bg-bg-less-dark">
      <div className="max-w-[1224px] mx-auto w-full">
        <BackgroundText backgroundText="PORTFOLIO" innerText="My Work" />
        <CategoriesSelector categoryHandler={setCategory} />
        {/* Responsive padding wrapper (keeps same DOM structure) */}
        <div className="py-0 px-6 sm:px-10 md:px-12 lg:px-20">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {visibleData?.map((work) => (
              <div key={work.id} className="masonry-item">
                <Image
                  src={work.images[0].image}
                  width={500}
                  height={300}
                  alt={`Masonry item ${work.id}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"

                />
                <div className="overlay" onClick={() => {
                    setOpen(true);
                    handleModalOpen(true);
                    setSelectedWork(work);
                }}>
                  <h3>{work.title}</h3>
                  <a className="view-button">View</a>
                </div>
              </div>
            ))}

            {/* Modal preserved inside Masonry exactly like your original */}
            <Modal
              isOpen={open}
              style={{
                overlay: {
                  backgroundColor: "rgba(33, 37, 41, 0.8)",
                  zIndex: 10000,
                },
                content: {
                  backgroundColor: colors.backgroundLessDarkColor,
                  border: "none",
                  padding: "0",
                  inset: "50% auto auto 50%",
                  transform: "translate(-50%, -50%)",
                  width: "fit-content",
                  height: "fit-content",
                  zIndex: 10000,
                },
              }}
              htmlOpenClassName="modal-open"
              shouldCloseOnOverlayClick={true}
              onRequestClose={() => {
                setOpen(false);
                handleModalOpen(false);
              }}
            >
              {selectedWork && (
                <JobModel
                  onClose={() => {
                    setOpen(false);
                    handleModalOpen(false);
                  }}
                  title={selectedWork.title}
                  category={selectedWork.service.category}
                  description={selectedWork.description}
                  images={selectedWork.images.map((img) => img.image)}
                  technologies={selectedWork.technologies}
                  projectUrl={selectedWork.project_url}
                  sourceCodeUrl={selectedWork.source_code_url}
                />
              )}
            </Modal>
          </Masonry>
          {selectedData && visibleItems < selectedData.length && (
            <div className="text-center mt-8">
              <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Potfolio;
