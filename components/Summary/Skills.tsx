import { colors } from "../../constants/constants";
import useSkills from "../../hooks/useSkills";
import ProgressRow from "./ProgressRow";

const Skills = () => {
  const { data: skills } = useSkills();

  return (
    <div>
      {skills && skills.length > 0 && (
        <h1 className="text-4xl md:text-4xl font-semibold mb-12">My Skills</h1>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        {skills?.map((skill) => (
          <ProgressRow
            key={skill.title}
            progress={skill.percentage}
            title={skill.title}
            color={colors.primaryColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
