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

const Summary = ({ fontSize, isMobile ,breakpoint}: Props) => {
  return (
    <div id="Resume" className='text-white p-[4.8rem] pt-[7.2rem]' style={{fontFamily:fontSettings.fontFamily,backgroundColor:colors.backgroundDarkColor}}>
      <BackgroundText backgroundText="SUMMARY" innerText="Resume" fontSize={fontSize}/>
      <div className={getEducationExperienceParentClass(breakpoint)}>
        <div>
          <h2 className='text-[2.4rem] pl-[2.4rem]'>
            My Education
          </h2>     
          <div>
          <SummaryBox 
              year="2000 - 2004" 
              title="Computer Science" 
              subTitle="International University">
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
            </SummaryBox>
            <SummaryBox 
              year="2000 - 2004" 
              title="Computer Science" 
              subTitle="International University">
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
            </SummaryBox>
            <SummaryBox 
              year="2000 - 2004" 
              title="Computer Science" 
              subTitle="International University">
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
            </SummaryBox>
        </div>
        </div>
        <div>
            <h2 className='text-[2.4rem] pl-[2.4rem]'>My Experience</h2>
            <SummaryBox 
              year="2000 - 2004" 
              title="Computer Science" 
              subTitle="International University">
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
            </SummaryBox>
            <SummaryBox 
              year="2000 - 2004" 
              title="Computer Science" 
              subTitle="International University">
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
            </SummaryBox>
            <SummaryBox 
              year="2000 - 2004" 
              title="Computer Science" 
              subTitle="International University">
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
            </SummaryBox>
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
  )
}

export default Summary