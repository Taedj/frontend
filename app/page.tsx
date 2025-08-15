'use client';
import { QueryClient,QueryCache, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
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
import useIsMobile from '../hooks/useIsMobile';
import logger from '../lib/logger';
import clientLogger from '../lib/clientLogger';


function App() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onSuccess: (data, query) => {
        clientLogger.info(`Query success for ${query.queryKey}`, data);
      },
      onError: (err, query) => {
        console.error(`Query error for ${query.queryKey}`, err);
      },
    }),
  });
  const [modalOpen,setModalOpen] = useState(false);
  const {isMobile} = useIsMobile();

  clientLogger.info(isMobile ? 'Mobile|Tablet Client':'Desktop Client');

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
