import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { colors,dimensions } from './constants/constants'
import SideBar from './components/SideBar/SideBar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Summary from './components/Summary/Summary'
import Potfolio from './components/Portfolio/Potfolio'
import Testimonials from './components/Testimonial/Testimonials'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'


export const checkMobile = () => {
  return window.innerWidth < dimensions.mobileBreakpoint;
}

const calculateTypeWriterFontSize = () => {
  if (window.innerWidth < dimensions.mobileBreakpoint) {
    return `${(window.innerWidth - 492)*0.004 + 4}rem`;
  }
  return '6rem';
}

const calculateBackgroundTextFontSize = () => {
  if (window.innerWidth < 1200) {
    return `${(window.innerWidth - 492)*0.0014*6 + 7.2}rem`;
  }
  return '13.2rem';
}

const checkSummaryBreakpoint = () => {
  if (window.innerWidth < dimensions.summaryBreakpoint) return true;
  return false;
}

const calculateSlidesNumber = () => {
  if (window.innerWidth < dimensions.mobileBreakpoint) return 1;
  return 2
}

function App() {
  const [isMobile,setIsMobile] = useState(checkMobile());
  const [typewriterfontSize,setTypewriterFontSize] = useState(calculateTypeWriterFontSize());
  const [backgroundTextFontSize,setBackgroundTextFontSize] = useState(calculateBackgroundTextFontSize());
  const [summaryBreakpoint,setSummaryBreakpoint] = useState(checkSummaryBreakpoint());
  const [slideToShow,setSliderToShow] = useState(calculateSlidesNumber())
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
      setTypewriterFontSize(calculateTypeWriterFontSize());
      setBackgroundTextFontSize(calculateBackgroundTextFontSize());
      setSummaryBreakpoint(checkSummaryBreakpoint());
      setSliderToShow(calculateSlidesNumber());
    }
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[]);
  return (
    <>
        {!isMobile && <SideBar/>}
        <div style={{marginLeft:isMobile ? '0' : dimensions.sideBarWidth}}>
          {isMobile && <Navbar/>}
          <Home fontSize={typewriterfontSize}/>
          <About fontSize={backgroundTextFontSize} isMobile={isMobile}/>
          <Services fontSize={backgroundTextFontSize} isMobile={isMobile}/>
          <Summary fontSize={backgroundTextFontSize} isMobile={isMobile} breakpoint={summaryBreakpoint}/>
          <Potfolio fontSize={backgroundTextFontSize} isMobile={isMobile}/>
          <Testimonials fontSize={backgroundTextFontSize} isMobile={isMobile} slideToShow={slideToShow}/>
          <Contact fontSize={backgroundTextFontSize} isMobile={isMobile}/>
          <Footer/>
        </div>
    </>
  )
}

export default App
