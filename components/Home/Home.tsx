import { Typewriter } from 'react-simple-typewriter'
import { colors } from '../../constants/constants'
import useConfig, { Config } from '../../hooks/useConfig'
import Button from '../Button/Button'
import Chevron from '../Chevron/Chevron'

const getProfessionList = (config: Config) => {
  if (config.profession_list) return config.profession_list.split(',')
  return []
}

const Home = () => {
  const { data: config } = useConfig()
  const bgImage = config?.home_background_image
    ? `url(${config?.home_background_image})`
    : undefined

  return (
    <div id="Home" className="relative w-full h-screen text-white">
      <div
        className={`relative flex flex-col justify-center items-center w-full h-screen bg-fixed bg-cover before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/70 before:z-0`}
        style={{ backgroundImage: bgImage }}
      >
      <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.2] z-10 mb-6 text-center">
        Welcome
      </p>
      <div className="text-6xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold leading-[1.1] z-10 mb-10 text-center h-24 md:h-auto">
        {config?.profession_list && (
          <Typewriter
            words={getProfessionList(config)}
            typeSpeed={70}
            loop={0}
          />
        )}
      </div>
      <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] z-10 mb-12 text-center">
        based on Khroub, Constantine
      </p>
        <Button
          color={colors.primaryColor}
          width="14.5rem"
          height="5.1rem"
          filledBackground={false}
          hoverBackground={colors.primaryColor}
          borderWidth="2px"
        >
          <a href="#Contact">Hire Me</a>
        </Button>
      </div>

      <Chevron />
    </div>
  )
}

export default Home