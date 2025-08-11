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
import { CoreClient,HomeClient } from '../http';
import { QueryClientProvider,QueryClient } from 'react-query';
import useConfig from '../hooks/useConfig';
import useWorks from '../hooks/useWorks';
import useServices from '../hooks/useServices';
import useSkills from '../hooks/useSkills';

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

const calculateJobModelSliderWidth = () => {
  if (window.innerWidth < dimensions.jobModelSliderWidthSmall) return '38rem';
  else if (window.innerWidth < dimensions.jobModelSliderWidthMedium) return '40rem';
  else return '60rem';
}

function App() {
  const queryClient = new QueryClient();
  const [isMobile,setIsMobile] = useState(checkMobile());
  const [modalOpen,setModalOpen] = useState(false);
  const [works,setWorks] = useState([]);
  const [skills,setSkills] = useState([]);
  const [services,setServices] = useState([]);
  const [config,setConfig] = useState<Config>({});
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/core/config/').then(res => setConfig(res.data[0]));
    axios.get('http://127.0.0.1:8000/home/works/').then(response => setWorks(response.data));
    axios.get('http://127.0.0.1:8000/home/skills/').then(response => setSkills(response.data));
    axios.get('http://127.0.0.1:8000/home/services/').then(response => setServices(response.data));
    // const {data:config} = useConfig();
    // const {data:works} = useWorks();
    // const {data:skills} = useSkills();
    // const {data:services} = useServices();
    const handleResize = () => {
      setIsMobile(checkMobile());
    }
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WorksContext.Provider value={works}>
          <SkillsContext.Provider value={skills}>
            <ConfigContext.Provider value={config}>
              {(!isMobile && !modalOpen) && <SideBar/>}
              <div style={{marginLeft:isMobile ? '0' : dimensions.sideBarWidth}}>
                {(isMobile  && !modalOpen )&& <Navbar/>}
                <Home/>
                <About/>
                <Services services={services}/>
                <Summary/>
                <Potfolio 
                  data={works} 
                  handleModalOpen={setModalOpen} 
                />
                <Testimonials/>
                <Contact/>
                <Footer />
              </div>
            </ConfigContext.Provider>
          </SkillsContext.Provider>
        </WorksContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
