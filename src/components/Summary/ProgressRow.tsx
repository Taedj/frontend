import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import styled from 'styled-components';


const MainContainer = styled.div`
  
`
const SkillBody = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:0.8rem;
  font-size:1.6rem;
  font-weight:500;
`

const SkillTitle = styled.h2`
  margin:0;
  margin-bottom:0.8rem;
  font-size:1.6rem;
`

const SkillProgress = styled.span`
`


interface Props {
    progress:number;
    color:string;
    title:string;
}

const ProgressRow = ({progress,color,title}:Props) => {
  return (
    <MainContainer>
      <SkillBody>
        <SkillTitle>{title}</SkillTitle>
        <SkillProgress>{progress + '%'}</SkillProgress>
      </SkillBody>
      <ProgressBar completed={progress} bgColor={color} height="8px" isLabelVisible={false} baseBgColor="black"/>
    </MainContainer>
  )
}

export default ProgressRow