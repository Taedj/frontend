'use client';
import { useState,useEffect } from 'react'
import axios from 'axios';
import { dimensions } from '../constants/constants'
import SideBar from '../components/SideBar/SideBar'
import Home from '../components/Home/Home'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Summary from '../components/Summary/Summary'
import Potfolio from '../components/Portfolio/Potfolio'
import Testimonials from '../components/Testimonial/Testimonials'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import JobModel from '../components/Portfolio/JobModel';
import { ConfigContext } from '../context/ConfigContext';
import { SkillsContext } from '../context/SkillsContext';
import { WorksContext } from '../context/WorksContext';

export interface Config {
  profession_list:string;
  about_description:string;
  fullname:string;
  email:string;
  age:string;
  experience_years:number;
  awards_count:number;
  phone1:string;
  phone2:string;
  address:string;
  home_background_image:string;
  profile_image:string;
}

export interface Skill {
  title:string;
  percentage:number;
}

export interface Service {
  title: string;
  description: string;
  category:string;
}


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

const checkAboutBreakpoint = () => {
  if (window.innerWidth < dimensions.aboutBreakpoint) return true;
  return false; 
}

const checkJobModelBreakpoint = () => {
  if (window.innerWidth < dimensions.jobModelSliderWidthSmall) return true;
  else return false ;
}

const calculateJobModelSliderWidth = () => {
  if (window.innerWidth < dimensions.jobModelSliderWidthSmall) return '38rem';
  else if (window.innerWidth < dimensions.jobModelSliderWidthMedium) return '40rem';
  else return '60rem';
}



function App() {
  const [isMobile,setIsMobile] = useState(checkMobile());
  const [typewriterfontSize,setTypewriterFontSize] = useState(calculateTypeWriterFontSize());
  const [backgroundTextFontSize,setBackgroundTextFontSize] = useState(calculateBackgroundTextFontSize());
  const [summaryBreakpoint,setSummaryBreakpoint] = useState(checkSummaryBreakpoint());
  const [aboutBreakpoint,setAboutBreakpoint] = useState(checkAboutBreakpoint());
  const [slideToShow,setSliderToShow] = useState(calculateSlidesNumber())
  const [modalOpen,setModalOpen] = useState(false);
  const initialSliderWidth = calculateJobModelSliderWidth();
  const [jobModelSliderWidth,setJobModelSliderWidth] = useState(initialSliderWidth);
  const [jobModelBreakpoint,setJobModelBreakpoint] = useState(checkJobModelBreakpoint());
  const [works,setWorks] = useState([]);
  const [skills,setSkills] = useState([]);
  const [services,setServices] = useState([]);
  const [config,setConfig] = useState<Config>({});
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/core/config/').then(res => setConfig(res.data[0]));
    axios.get('http://127.0.0.1:8000/home/works/').then(response => setWorks(response.data));
    axios.get('http://127.0.0.1:8000/home/skills/').then(response => setSkills(response.data));
    axios.get('http://127.0.0.1:8000/home/services/').then(response => setServices(response.data));
    const handleResize = () => {
      setIsMobile(checkMobile());
      setTypewriterFontSize(calculateTypeWriterFontSize());
      setBackgroundTextFontSize(calculateBackgroundTextFontSize());
      setSummaryBreakpoint(checkSummaryBreakpoint());
      setSliderToShow(calculateSlidesNumber());
      setJobModelSliderWidth(calculateJobModelSliderWidth());
      setJobModelBreakpoint(checkJobModelBreakpoint());
      setAboutBreakpoint(checkAboutBreakpoint());
    }
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[]);
  return (
    <>
      <WorksContext.Provider value={works}>
        <SkillsContext.Provider value={skills}>
          <ConfigContext.Provider value={config}>
            {(!isMobile && !modalOpen) && <SideBar/>}
            <div style={{marginLeft:isMobile ? '0' : dimensions.sideBarWidth}}>
              {(isMobile  && !modalOpen )&& <Navbar/>}
              <Home 
                fontSize={typewriterfontSize} 
              />
              <About 
                fontSize={backgroundTextFontSize}
                {...config}
              />
              <Services 
                fontSize={backgroundTextFontSize} 
                services={services}
              />
              <Summary 
                fontSize={backgroundTextFontSize} 
                isMobile={isMobile} 
                breakpoint={summaryBreakpoint}
              />
              <Potfolio 
                data={works} 
                fontSize={backgroundTextFontSize} 
                isMobile={isMobile} 
                handleModalOpen={setModalOpen} 
                sliderWidth={jobModelSliderWidth} 
                breakpoint={jobModelBreakpoint}
              />
              <Testimonials 
                fontSize={backgroundTextFontSize} 
                isMobile={isMobile} 
                slideToShow={slideToShow}
              />
              <Contact 
                fontSize={backgroundTextFontSize} 
                isMobile={isMobile}
              />
              <Footer 
                isMobile={isMobile}
              />
            </div>
          </ConfigContext.Provider>
        </SkillsContext.Provider>

      </WorksContext.Provider>
    </>
  )
}

export default App
