import React from 'react'
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
import './Portfolio.css'

const images = [
  {id:1,src:image1},
  {id:2,src:image2},
  {id:3,src:image3},
  {id:4,src:image4},
  {id:5,src:image5},
  {id:6,src:image6},
  // {id:7,src:image7}
]

const breakpointColumnsObj = {
  default: 3, // 3 columns by default
  1100: 2,   // 2 columns at 1100px
  700: 1,    // 1 column at 700px
};

const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  background-color:${colors.backgroundLessDarkColor};
  padding:7.2rem 0;
`

const ManstoryContainer = styled.div`
  padding:0 4.8rem;
`

const Potfolio = () => {
  return (
    <MainContainer id="Portfolio">
      <BackgroundText backgroundText='PORTFOLIO' innerText='My Work'/>
      <CategoriesSelector/>
      <ManstoryContainer>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {images.map((image) => (
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
      </ManstoryContainer>
    </MainContainer>
  )
}

export default Potfolio