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

const calculateFontSize = () => {
  if (window.innerWidth < dimensions.mobileBreakpoint) {
    return `${(window.innerWidth - 492)*0.004 + 4}rem`;
  }
  return '6rem';
}

function App() {
  const [isMobile,setIsMobile] = useState(checkMobile());
  const [fontSize,setFontSize] = useState(calculateFontSize());
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
      setFontSize(calculateFontSize());
    }
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[]);
  return (
    <>
        {!isMobile && <SideBar/>}
        <div style={{marginLeft:isMobile ? '0' : dimensions.sideBarWidth}}>
          {isMobile && <Navbar/>}
          <Home fontSize={fontSize}/>
          <About/>
          <Services/>
          <Summary/>
          <Potfolio/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </div>
    </>
  )
}

export default App
