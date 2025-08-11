'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Potfolio from '../components/Portfolio/Potfolio';
import Services from '../components/Services/Services';
import SideBar from '../components/SideBar/SideBar';
import Summary from '../components/Summary/Summary';
import Testimonials from '../components/Testimonial/Testimonials';
import { dimensions } from '../constants/constants';


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

function App() {
  const [isMobile,setIsMobile] = useState(false);
  const queryClient = new QueryClient();
  const [modalOpen,setModalOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
    }
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {(!isMobile && !modalOpen) && <SideBar/>}
        <div style={{marginLeft:isMobile ? '0' : dimensions.sideBarWidth}}>
          {(isMobile  && !modalOpen )&& <Navbar/>}
          <Home/>
          <About/>
          <Services/>
          <Summary/>
          <Potfolio 
            handleModalOpen={setModalOpen} 
          />
          <Testimonials/>
          <Contact/>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
