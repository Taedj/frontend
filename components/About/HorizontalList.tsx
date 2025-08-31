import useConfig, { Config } from "../../hooks/useConfig";
import useWorks from "../../hooks/useWorks";

const getCell = (value: string | number, description: string) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-7xl text-bg-text-less-dark">{value}</div>
      <div className="text-cell-description">{description}</div>
    </div>
  );
};

const getValueDescription = (
  config: Config | undefined,
  worksLen: number,
): [string | number, string][] => {
  if (config)
    return [
      [config.experience_years, "Years Experience"],
      [config.awards_count, "Happy Clients"],
      [worksLen, "Projects Done"],
      [config.awards_count, "Get Awards"],
    ];
  return [
    ["", "Years Experience"],
    ["", "Happy Clients"],
    [worksLen, "Projects Done"],
    ["", "Get Awards"],
  ];
};

const HorizontalList = () => {
  const { data: config } = useConfig();
  const { data: works } = useWorks();
  const worksLen = works?.length ?? 0;
  const value_description = getValueDescription(config, worksLen);
  const mobileBorders = [
    "max-md:border-r max-md:border-b",
    "max-md:border-b",
    "max-md:border-r",
    "",
  ];

  return (
    <div className="mt-16">
      <ul className="max-md:grid max-md:grid-cols-2 md:flex my-0 mx-0 text-2xl list-none">
        {value_description.map(([val, desc], idx) => (
          <li
            key={idx}
            className={[
              "flex-1 py-8 px-5 flex flex-col items-center justify-center text-center",
              "max-md:border-about-border",
              mobileBorders[idx],
              "md:border-about-border md:border-r md:last:border-r-0",
            ].join(" ")}
          >
            {getCell(val, desc)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalList;
