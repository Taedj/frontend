import { FaQuidditch } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { colors } from "../../constants/constants";

export type Category = "UX/UI design" | "Mechanical Engineering" | "Teaching";

interface Props {
  title: string;
  category: Category;
  children: string;
}

const ServiceBox = ({ title, category, children }: Props) => {
  const categories = {
    "UX/UI design": <FaQuidditch size={40} color={colors.primaryColor} />,
    "Mechanical Engineering": (
      <MdEngineering size={40} color={colors.primaryColor} />
    ),
    Teaching: <GiTeacher size={40} color={colors.primaryColor} />,
  } as const;

  return (
    <div className="flex items-start gap-6 mb-8">
      <div className="self-start flex items-center justify-center px-6 py-4 bg-bg-dark rounded-lg shadow-sm">
        {categories[category]}
      </div>

      <div className="min-w-0">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white mb-2 leading-snug">
          {title}
        </h2>
        <p className="text-2xl sm:text-3xl md:text-3xl text-bg-text-less-dark leading-11">
          {children}
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
