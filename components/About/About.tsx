import useConfig from "../../hooks/useConfig";
import BackgroundText from "../BackgroundText/BackgroundText";
import HorizontalList from "./HorizontalList";
import Paragraph from "./Paragraph";
import VerticalList from "./VerticalList";

const About = () => {
  const { data: config } = useConfig();
  return (
    <>
      <div
        id="About-Me"
        className="py-24 px-6 md:px-12 text-2xl text-white bg-bg-dark"
      >
        <div className="max-w-[1224px] mx-auto">
          <div className="mb-16">
            <BackgroundText
              backgroundText="ABOUT ME"
              innerText="Know Me More"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-[3] min-w-0">
              <Paragraph
                fullname={config?.fullname}
                description={config?.about_description}
              />
            </div>
            <div className="flex-[2] min-w-0">
              <VerticalList />
            </div>
          </div>
          <HorizontalList />
        </div>
      </div>
    </>
  );
};

export default About;
