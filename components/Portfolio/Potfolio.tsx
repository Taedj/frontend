// Portfolio.tsx
"use client";
import { useEffect, useState } from 'react';
import Masonry from "react-masonry-css";
import Image from 'next/image';
import Modal from 'react-modal';
import { colors } from '../../constants/constants';
import useWorks, { PortfolioItem } from '../../hooks/useWorks';
import BackgroundText from '../BackgroundText/BackgroundText';
import CategoriesSelector from './CategoriesSelector';
import JobModel from './JobModel';
import './Portfolio.css';
import clientLogger from '../../lib/clientLogger';


const breakpointColumnsObj = {
  default: 3, // 3 columns by default
  1100: 2,   // 2 columns at 1100px
  700: 1,    // 1 column at 700px
};

export interface ServiceItem {
  category:string
}


interface Props {
  handleModalOpen: (open: boolean) => void;
}

const Potfolio = ({handleModalOpen }: Props) => {
  const {data} = useWorks();
  const [category,setCategory] = useState('All')
  const [open,setOpen] = useState(false)
  const [selectedWork,setSelectedWork] = useState<PortfolioItem|null>(null);
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      clientLogger.info(`job page popup`);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const selectedData = (category === 'All') ? data : data?.filter((item) => item.service.category === category);
  return (
    <div id="Portfolio" className='py-29 px-0 bg-bg-less-dark'>
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText='PORTFOLIO' innerText='My Work'/>
        <CategoriesSelector categoryHandler={setCategory}/>
        {/* Responsive padding wrapper (keeps same DOM structure) */}
        <div className='py-0 px-6 sm:px-10 md:px-12 lg:px-20'>
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
                  className='w-full h-auto object-cover'
                  loading="lazy"
                  onClick={()=>{setOpen(true);handleModalOpen(true);setSelectedWork(work)}}
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
                overlay:{
                  backgroundColor:colors.backgroundDarkColor,
                  zIndex: 10000
                },
                content: {
                  backgroundColor: colors.backgroundLessDarkColor,
                  border: 'none',
                  padding: '0',
                  inset: '50% auto auto 50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'fit-content',
                  height: 'fit-content',
                  zIndex: 10000
                }
              }}
              htmlOpenClassName="modal-open"
              shouldCloseOnOverlayClick={true}
              onRequestClose={() => {
                setOpen(false);
                handleModalOpen(false);
              }}
            >
              { selectedWork && <JobModel onClose={() => {
                setOpen(false);
                handleModalOpen(false);
              }} title={selectedWork.title} description={selectedWork.description} images={selectedWork.images.map(img => img.image)}/> }
            </Modal>

          </Masonry>
        </div>
      </div>
    </div>
  )
}

export default Potfolio

