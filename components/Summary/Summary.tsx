import { FaDownload } from "react-icons/fa"
import { colors } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import Button from '../Button/Button'
import Skills from './Skills'
import SummaryBox from './SummaryBox'
import useEducations from '../../hooks/useEducations'
import useExperiences from '../../hooks/useExperiences'


interface EducationItem {
  title:string,
  institution:string,
  description:string,
  start_date:string,
  end_date:string
}
 

const formatYear = (item:EducationItem) => {
  return `${item.start_date.slice(0,4)} - ${item.end_date.slice(0,4)}`
}

const Summary = () => {
  const {data:educations} = useEducations();
  const {data:experiences} = useExperiences();
  return (
    <div id="Resume" className='text-white p-20 pt-29 bg-bg-dark'>
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText="SUMMARY" innerText="Resume"/>
        <div className='flex max-md:flex-col mt-20'>
          <div className='md:w-1/2'>
            {(educations && educations?.length > 0)&& <h2 className='text-4xl pl-10'>My Education</h2>} 
            <div>
              {educations?.map(
                (item:EducationItem) => (
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
          <div className='md:w-1/2'>
              {(experiences && experiences?.length > 0)  && <h2 className='text-4xl pl-10'>My Experience</h2>}
              {experiences?.map(
                (item:EducationItem) => (
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
        <Skills/>
        <div className='flex justify-center !m-30 !mb-6'>
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