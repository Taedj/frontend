import { FaDownload } from "react-icons/fa"
import { colors } from '../../constants/constants'
import BackgroundText from '../BackgroundText/BackgroundText'
import Button from '../Button/Button'
import Skills from './Skills'
import SummaryBox from './SummaryBox'
import useEducations from '../../hooks/useEducations'
import useExperiences from '../../hooks/useExperiences'

interface EducationItem {
  title: string,
  institution: string,
  description: string,
  start_date: string,
  end_date: string
}

const formatYear = (item: EducationItem) => {
  return `${item.start_date.slice(0,4)} - ${item.end_date.slice(0,4)}`
}

const Summary = () => {
  const { data: educations } = useEducations();
  const { data: experiences } = useExperiences();

  return (
    <section id="Resume" className="bg-bg-dark text-white py-24 px-6">
      <div className="max-w-[1224px] mx-auto w-full">
        <BackgroundText backgroundText="SUMMARY" innerText="Resume" />

        <div className="flex flex-col md:flex-row gap-12 mt-20">
          {/* Education */}
          <div className="flex-1">
            {educations && educations.length > 0 && (
              <h2 className="text-4xl font-semibold pl-6 mb-8">
                My Education
              </h2>
            )}
            <div className="space-y-8">
              {educations?.map((item: EducationItem) => (
                <SummaryBox
                  key={item.title}
                  year={formatYear(item)}
                  title={item.title}
                  subTitle={item.institution}
                >
                  {item.description}
                </SummaryBox>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="flex-1">
            {experiences && experiences.length > 0 && (
              <h2 className="text-3xl md:text-4xl font-semibold pl-6 mb-8">
                My Experience
              </h2>
            )}
            <div className="space-y-8">
              {experiences?.map((item: EducationItem) => (
                <SummaryBox
                  key={item.title}
                  year={formatYear(item)}
                  title={item.title}
                  subTitle={item.institution}
                >
                  {item.description}
                </SummaryBox>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <Skills />
        </div>

        {/* Download CV */}
        <div className="flex justify-center mt-16">
          <a href="/resume.pdf" download="My_CV.pdf">
            <Button
              color={colors.backgroundTextDarkColor}
              height="5.2rem"
              width="21.5rem"
              backGroundColor="rgba(0, 0, 0, 0)"
              hoverBackground={colors.backgroundTextDarkColor}
              borderWidth="2px"
            >
              Download CV&nbsp;
              <FaDownload />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Summary

