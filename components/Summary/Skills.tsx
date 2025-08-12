import { colors } from '../../constants/constants'
import useSkills from '../../hooks/useSkills'
import ProgressRow from './ProgressRow'

const Skills = () => {
  const {data:skills} = useSkills();
  return (
    <div>
      {skills && skills.length > 0 && <h1 className='!my-10 !mx-0 text-[2.4rem] font-semibold'>My Skills</h1>}
      <div className='max-md:flex max-md:flex-col md:grid md:grid-cols-2 md:gap-[4rem]'>
        {
          skills?.map(
            skill => <ProgressRow 
                        key={skill.title}
                        progress={skill.percentage} 
                        title={skill.title} 
                        color={colors.primaryColor} 
                      />
          )
        }
      </div>
    </div>
  )
}

export default Skills