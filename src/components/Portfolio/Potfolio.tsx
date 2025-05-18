import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Masonry from "react-masonry-css";
import Modal from 'react-modal'
import BackgroundText from '../BackgroundText/BackgroundText'
import JobModel from './JobModel';
import CategoriesSelector from './CategoriesSelector';
import { colors,fontSettings } from '../../constants/constants'
import './Portfolio.css'


const breakpointColumnsObj = {
  default: 3, // 3 columns by default
  1100: 2,   // 2 columns at 1100px
  700: 1,    // 1 column at 700px
};

interface PortfolioItem {
  id: number;
  title: string;
  images: string[];
  service: string;
  description: string;
}

interface Props {
  data: PortfolioItem[];
  fontSize: string;
  isMobile: boolean;
  sliderWidth: string;
  handleModalOpen: (open: boolean) => void;
}

const Potfolio = ({data, fontSize, isMobile,sliderWidth, handleModalOpen }: Props) => {
  const [category,setCategory] = useState('All')
  const [open,setOpen] = useState(false)
  const [selectedWork,setSelectedWork] = useState<PortfolioItem|null>(null);
  let selectedData = (category === 'All') ? data : data.filter((item) => item.service === category);
  return (
    <div id="Portfolio"
      className='py-[7.2rem] px-0'
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundLessDarkColor
      }}
    >
      <BackgroundText backgroundText='PORTFOLIO' innerText='My Work' fontSize={fontSize}/>
      <CategoriesSelector categoryHandler={setCategory}/>
      <div className='py-0 px-[4.8rem]'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {selectedData.map((work) => (
            <div key={work.id} className="masonry-item">

              <img
                src={work.images[0]['image']}
                alt={`Masonry item ${work.id}`}
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
                onClick={()=>{setOpen(true);handleModalOpen(true);setSelectedWork(work)}}
              />
            </div>
          ))}
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
                bodyOpenClassName="modal-open"
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => {
                  setOpen(false);
                  handleModalOpen(false);
                }}
              >
                { selectedWork && <JobModel onClose={() => {
                  setOpen(false);
                  handleModalOpen(false);
                }} sliderWidth={sliderWidth} title={selectedWork?.title} description={selectedWork?.description} images={selectedWork?.images.map(image => image.image)}/>}
              </Modal>
        </Masonry>
      </div>
    </div>
  )
}

export default Potfolio