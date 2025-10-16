"use client";
import { useState } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Potfolio from "../components/Portfolio/Potfolio";
import Services from "../components/Services/Services";
import SideBar from "../components/SideBar/SideBar";
import Summary from "../components/Summary/Summary";
import Testimonials from "../components/Testimonial/Testimonials";
import useIsMobile from "../hooks/useIsMobile";
import clientLogger from "../lib/clientLogger";
import Header from "../components/Header/Header";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isMobile } = useIsMobile();

  clientLogger.info(isMobile ? "Mobile|Tablet Client" : "Desktop Client");

  return (
    <div className="flex overflow-x-hidden">
      {/* Sidebar */}
      {!isMobile && !modalOpen && (
        <aside className="hidden lg:block fixed top-0 left-0 h-full w-sidebar">
          <SideBar />
        </aside>
      )}

      {/* Main content */}
      <main
        className={`
          ${
            !isMobile && !modalOpen
              ? "lg:ml-sidebar lg:w-[calc(100%-theme(spacing.sidebar))]"
              : "w-full"
          }
        `}
      >
        <Header />
        {isMobile && !modalOpen && <Navbar />}
        <Home />
        <About />
        <div id="Portfolio">
          <Potfolio handleModalOpen={setModalOpen} />
        </div>
        <div id="Services">
          <Services />
        </div>
        <div id="Resume">
          <Summary />
        </div>
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
