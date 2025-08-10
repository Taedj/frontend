import {useState, useEffect} from 'react'
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

interface ServiceItem {
  category:string
}

interface PortfolioItem {
  id: number;
  title: string;
  images: { image: string }[];
  service: ServiceItem;
  description: string;
  category:string;
}

interface Props {
  data: PortfolioItem[];
  fontSize: string;
  isMobile: boolean;
  sliderWidth: string;
  breakpoint:boolean;
  handleModalOpen: (open: boolean) => void;
}

const Potfolio = ({data, fontSize, isMobile,sliderWidth,breakpoint, handleModalOpen }: Props) => {
  const [category,setCategory] = useState('All')
  const [open,setOpen] = useState(false)
  const [selectedWork,setSelectedWork] = useState<PortfolioItem|null>(null);
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  let selectedData = (category === 'All') ? data : data.filter((item) => item.service.category === category);
  console.log('data',data);
  console.log(category,selectedData);
  return (
    <div id="Portfolio"
      className='py-[7.2rem] px-0'
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundLessDarkColor
      }}
    >
      <div className='max-w-[1224px] mx-auto w-full'>
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
                  src={work.images[0].image}
                  alt={`Masonry item ${work.id}`}
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                  onClick={()=>{setOpen(true);handleModalOpen(true);setSelectedWork(work)}}
                />
                <div className="overlay">
                  <h3>{work.title}</h3>
                  <p>{work.service.category}</p>
                </div>
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
                  }} sliderWidth={sliderWidth} title={selectedWork.title} description={selectedWork.description} images={selectedWork.images.map(img => img.image)} breakpoint={breakpoint} />}
                </Modal>
          </Masonry>
        </div>
      </div>
    </div>
  )
}

export default Potfolio