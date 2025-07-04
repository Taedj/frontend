import axios from 'axios'
import {useState,useEffect} from 'react'
import { fontSettings,colors, dimensions } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import SummaryBox from './SummaryBox'
import Skills from './Skills'
import Button from '../Button/Button'
import { FaDownload } from "react-icons/fa";

interface Props {
  fontSize: string;
  isMobile: boolean;
  breakpoint:boolean;
}

const getEducationExperienceParentClass = (breakpoint:boolean) => {
  if (breakpoint) return 'flex flex-col mt-[4.8rem]';
  return 'flex mt-[4.8rem]'
} 

const formatYear = (item:object) => {
  return `${item.start_date.slice(0,4)} - ${item.end_date.slice(0,4)}`
}

const Summary = ({ fontSize, isMobile ,breakpoint}: Props) => {
  const [educations,setEducations] = useState([]);
  const [experiences,setExperiences] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/home/educations/')
      .then(res => setEducations(res.data));
    axios.get('http://127.0.0.1:8000/home/experiences/')
      .then(res => setExperiences(res.data))
  },[])
  return (
    <div id="Resume" className='text-white p-[4.8rem] pt-[7.2rem]' style={{fontFamily:fontSettings.fontFamily,backgroundColor:colors.backgroundDarkColor}}>
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText="SUMMARY" innerText="Resume" fontSize={fontSize}/>
        <div className={getEducationExperienceParentClass(breakpoint)}>
          <div className='w-1/2'>
            {educations.length > 0  && <h2 className='text-[2.4rem] pl-[2.4rem]'>My Education</h2>} 
            <div>
              {educations.map(
                item => (
                <SummaryBox year={formatYear(item)}
                            key={item.title}
                            title={item.title}
                            subTitle={item.institution}
                >
                  {item.description}
                </SummaryBox>
              ))}
            </div>
          </div>
          <div className='w-1/2'>
              {experiences.length > 0 && <h2 className='text-[2.4rem] pl-[2.4rem]'>My Experience</h2>}
              {experiences.map(
                item => (
                <SummaryBox year={formatYear(item)}
                            key={item.title}
                            title={item.title}
                            subTitle={item.institution}
                >
                  {item.description}
                </SummaryBox>
              ))}
          </div>
        </div>
        <Skills breakpoint={breakpoint}/>
        <div className='flex justify-center !m-[7.5rem] !mb-[1.5rem]'>
          <a href='/resume.pdf' download="My_CV.pdf">
            <Button 
            color={colors.backgroundTextDarkColor}
            height="5.2rem"
            width="21.5rem"
            backGroundColor="rgba(0, 0, 0, 0)"
            hoverBackground={colors.backgroundTextDarkColor}
            borderWidth='2px'
          >
              Download CV&nbsp;
              <FaDownload />
            </Button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Summary