import React,{useState} from 'react'
import styled from 'styled-components'
import Masonry from "react-masonry-css";
import BackgroundText from '../BackgroundText/BackgroundText'
import CategoriesSelector from './CategoriesSelector';
import { colors,fontSettings } from '../../constants/constants'
import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import image6 from '../../assets/images/6.jpg'
import image7 from '../../assets/images/7.jpg'
import image8 from '../../assets/images/8.jpg'
import image9 from '../../assets/images/9.jpg'
import image10 from '../../assets/images/10.jpg'
import image11 from '../../assets/images/11.jpg'
import image12 from '../../assets/images/12.jpg'
import image13 from '../../assets/images/13.jpg'
import './Portfolio.css'

const data = [
  {id:1,src:image1,category:'Design'},
  {id:2,src:image2,category:'Teaching'},
  {id:3,src:image3,category:'Mechanics'},
  {id:4,src:image4,category:'Design'},
  {id:5,src:image5,category:'Teaching'},
  {id:6,src:image6,category:'Mechanics'},
  {id:7,src:image7,category:'Design'},
  {id:8,src:image8,category:'Teaching'},
  {id:9,src:image9,category:'Mechanics'},
  {id:10,src:image10,category:'Design'},
  {id:11,src:image11,category:'Teaching'},
  {id:12,src:image12,category:'Mechanics'},
  {id:13,src:image13,category:'Design'},
  {id:14,src:image2,category:'Teaching'}
]

const breakpointColumnsObj = {
  default: 3, // 3 columns by default
  1100: 2,   // 2 columns at 1100px
  700: 1,    // 1 column at 700px
};

const Potfolio = () => {
  const [category,setCategory] = useState('All')
  let selectedData = (category === 'All') ? data : data.filter((item) => item.category === category);
  return (
    <div id="Portofolio"
      className='py-[7.2rem] px-0'
      style={{
        fontFamily:fontSettings.fontFamily,
        backgroundColor:colors.backgroundLessDarkColor
      }}
    >
      <BackgroundText backgroundText='PORTFOLIO' innerText='My Work'/>
      <CategoriesSelector categoryHandler={setCategory}/>
      <div className='py-0 px-[4.8rem]'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {selectedData.map((image) => (
            <div key={image.id} className="masonry-item">
              <img
                src={image.src}
                alt={`Masonry item ${image.id}`}
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Potfolio