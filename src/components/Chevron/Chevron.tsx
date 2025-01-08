import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import styled,{keyframes} from 'styled-components'
import { colors } from '../../constants/constants';

const bounce = keyframes`
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
`;

// Create a styled component for the icon
const AnimatedChevron = styled(FaChevronDown)`
  animation: ${bounce} 1s infinite ease;
  font-size: 24px; /* Adjust size as needed */
  color: ${colors.whiteWithOpacity}; /* Adjust color as needed */
  position:absolute;
  top:97%;
  left:50%;
`;

const Chevron = () => {
  return (
    <AnimatedChevron/>
  )
}

export default Chevron