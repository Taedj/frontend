import { colors, fontSettings } from '../../constants/constants'
import useConfig from '../../hooks/useConfig'
import BackgroundText from '../BackgroundText/BackgroundText'
import HorizontalList from './HorizontalList'
import Paragraph from './Paragraph'
import VerticalList from './VerticalList'



const About = () => {
  const {data:config} = useConfig();
  return (
    <>
      <div id='About-Me' className='py-29 px-19 text-2xl text-white bg-bg-dark' >
        <div className='max-w-[1224px] mx-auto w-full'>
          <BackgroundText backgroundText='ABOUT ME' innerText='Know Me More'/>
          <div className='flex flex-col md:flex-row w-full' >
            <div className='flex-3 min-w-0'>
              <Paragraph fullname={config?.fullname} description={config?.about_description}/>
            </div>
            <div className='flex-& min-w-0'>
              <VerticalList/>
            </div>
          </div>
          <HorizontalList/>
        </div>
      </div>
    </>
  )
}

export default About