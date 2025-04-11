import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`

`

const ButtonsList = styled.div`
    display:flex;
`


const RadioButtonsList = () => {
  return (
    <MainContainer>
        <ButtonsList>
            <input type="radio" />
            <input type="radio" />
        </ButtonsList>
    </MainContainer>
  )
}

export default RadioButtonsList