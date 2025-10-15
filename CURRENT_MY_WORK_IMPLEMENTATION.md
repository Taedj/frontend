
# Current Implementation of the "My Work" Section

This document provides a detailed explanation of the current implementation of the "My Work" section on your portfolio website. This information is intended to be shared with a UI/UX specialist to help them understand the existing code and propose enhancements.

## 1. File Structure

The main files responsible for the "My Work" section are located in `frontend/components/Portfolio/`:

- **`Potfolio.tsx`:** The main component that displays the portfolio grid.
- **`JobModel.tsx`:** The dialog/modal component that displays the details of a selected project.
- **`Portfolio.css`:** CSS styles for the `Potfolio` component.
- **`JobModel.css`:** CSS styles for the `JobModel` component.
- **`CategoriesSelector.tsx`:** A component to filter projects by category.

## 2. Overall Structure: `Potfolio.tsx`

This component is responsible for fetching and displaying the portfolio items in a grid.

### Data Fetching

- Data is fetched using the `useWorks` custom hook, which returns an array of `PortfolioItem` objects.
- The data is then filtered based on the selected category. By default, all categories are shown.

### Layout

- A masonry grid layout is implemented using the `react-masonry-css` library. This creates a staggered grid of project images.
- The grid is responsive, with the number of columns changing at different screen breakpoints (3 columns by default, 2 at 1100px, and 1 at 700px).

### Interactivity

- When a user clicks on a project image, a modal is triggered.
- The `react-modal` library is used to create the modal window.
- The `JobModel` component is rendered inside this modal to display the project details.

### `Potfolio.tsx` Code

```typescript
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      clientLogger.info(`job page popup`);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const selectedData =
    category === "All"
      ? data
      : data?.filter((item) => item.service.category === category);
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
            {selectedData?.map((work) => (
              <div key={work.id} className="masonry-item">
                <Image
                  src={work.images[0].image}
                  width={500}
                  height={300}
                  alt={`Masonry item ${work.id}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onClick={() => {
                    setOpen(true);
                    handleModalOpen(true);
                    setSelectedWork(work);
                  }}
                />
                <div className="overlay">
                  <h3>{work.title}</h3>
                  <p>{work.service.category}</p>
                </div>
              </div>
            ))}

            {/* Modal preserved inside Masonry exactly like your original */}
            <Modal
              isOpen={open}
              style={{
                overlay: {
                  backgroundColor: colors.backgroundDarkColor,
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
                  description={selectedWork.description}
                  images={selectedWork.images.map((img) => img.image)}
                />
              )}
            </Modal>
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Potfolio;
```

## 3. Dialog/Modal Implementation: `JobModel.tsx`

This component is responsible for displaying the detailed information of a selected project in a modal window.

### Image Presentation

- The `react-slick` library is used to display project images in a carousel.
- The carousel is configured with dots for navigation, but no arrows.
- The height of the carousel is adaptive, which can cause the layout to shift as images of different heights are displayed.

### Layout

- On medium screens and larger, the layout is a two-column grid, with the image carousel on the left and the project information on the right.
- On smaller screens, the layout switches to a single column, with the image carousel at the top and the project information below it.

### Text Content

- The project's title and description are displayed.
- The title is a large, centered heading.
- The description is a block of text with a smaller font size.

### `JobModel.tsx` Code

```typescript
import { RxCross1 } from "react-icons/rx";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { dimensions } from "../../constants/constants";
import "../Testimonial/Carousel.css";
import "./JobModel.css";

interface Props {
  title: string;
  images: string[];
  description: string;
  onClose: () => void;
}

const JobModel = ({ title, images, description, onClose }: Props) => {
  const { breakpoint } = dimensions;

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    adaptiveHeight: false,
    centerMode: false,
    centerPadding: "0px",
    arrows: false,
  };

  return (
    <div
      className="
            w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] 
            max-w-[90rem] 
            h-[85vh] sm:h-[85vh] md:h-[90vh] lg:h-[80vh] 
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
      <h1 className="text-center text-5xl mb-12 font-semibold">{title}</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-2 sm:px-5 md:px-10">
        <div
          className={`slider-container ${
            breakpoint ? "mobile" : "desktop"
          } w-full md:w-1/2`}
        >
          <Slider {...settings} className="h-full">
            {images.map((image) => (
              <div key={image} className="slide-item">
                <div className="h-full w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 px-2 sm:px-4">
          <h2 className="text-4xl font-semibold mb-4">Project Info:</h2>
          <p className="text-2xl sm:text-3xl leading-12 mb-12">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default JobModel;
```

This detailed explanation should provide a clear understanding of the current implementation and help a specialist identify areas for improvement.
