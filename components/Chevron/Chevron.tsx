import { FaChevronDown } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { colors } from "../../constants/constants";

const bounce = keyframes`
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
`;

const ChevronWrapper = styled.div`
  position: absolute;
  top: 97%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  cursor: pointer;
`;

const AnimatedChevron = styled(FaChevronDown)`
  animation: ${bounce} 1s infinite ease;
  font-size: 24px; /* Adjust size as needed */
  color: ${colors.whiteWithOpacity}; /* Adjust color as needed */
  cursor: pointer;
`;

const scrollToAboutMe = () => {
  document.getElementById("About-Me")?.scrollIntoView({ behavior: "smooth" });
};

const Chevron = () => {
  return (
    <>
      <ChevronWrapper onClick={scrollToAboutMe}>
        <AnimatedChevron />
      </ChevronWrapper>
    </>
  );
};

export default Chevron;
