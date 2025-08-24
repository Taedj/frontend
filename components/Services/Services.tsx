import useServices from '../../hooks/useServices'
import BackgroundText from '../BackgroundText/BackgroundText'
import ServiceBox, { Category } from './ServiceBox'


const Services = () => {
  const {data:services} = useServices();
  return (
    <div id="What-I-Do" className="py-28 bg-bg-less-dark">
      <div className="max-w-[1224px] mx-auto w-full px-6">
        <BackgroundText backgroundText="SERVICES" innerText="What I Do?" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {services?.map(service => (
            <ServiceBox
              key={service.title}
              title={service.title}
              category={service.category as Category}
            >
              {service.description}
            </ServiceBox>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

