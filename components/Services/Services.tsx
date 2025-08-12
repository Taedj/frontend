import { colors, fontSettings } from '../../constants/constants'
import useServices from '../../hooks/useServices'
import BackgroundText from '../BackgroundText/BackgroundText'
import ServiceBox, { Category } from './ServiceBox'


const Services = () => {
  const {data:services} = useServices();
  return (
    <div id="What-I-Do" className='p-0 py-29' style={{fontFamily:fontSettings.fontFamily,backgroundColor:colors.backgroundLessDarkColor}}>
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText="SERVICES" innerText="What I Do?"/>
        <div className='md:grid md:grid-cols-2 max-md:flex max-md:flex-col px-20 gap-8 mt-20'>
          {
            services?.map(
              service => <ServiceBox 
                            key={service.title}
                            title={service.title}
                            category={service.category as Category} 
                          >{service.description}
                          </ServiceBox>)
          }
        </div>
      </div>
    </div>
  )
}

export default Services