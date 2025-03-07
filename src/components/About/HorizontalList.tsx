import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/constants'

const MainContainer = styled.div`
  margin-top:4.8rem;
`

const List = styled.ul`
  display:flex;
  margin:0 4.8rem;
  font-size:1.6rem;
  list-style:none;
  border-bottom:1px solid ${colors.borderColor};
  li:last-child {
    border-right:none
  }
`

const ListItem = styled.li`
  flex:1;
  padding:2rem 1.2rem;
  border-right:1px solid ${colors.borderColor};
`

const CellContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-item:center;
  text-align:center
`

const ValueCell = styled.div`
  font-size:4.8rem;
  text-align:center;
  color:${colors.backgroundLessTextDarkColor}
`

const ValueDescription = styled.div`
  color:${colors.cellDescriptionColor}
`

const getCell = (value:string,description:string) => {
  return <ListItem>
            <CellContainer>
              <ValueCell>{value}</ValueCell>
              <ValueDescription>{description}</ValueDescription>
            </CellContainer>
          </ListItem>
}

const value_description = [
  ['10+','Years Experience'],
  ['250+','Happy Clients'],
  ['650+','Projects Done'],
  ['38','Get Awards']
]

const HorizontalList = () => {
  return (
    // should be changed to be used map function 
    <MainContainer>
      <List>
        {getCell(...value_description[0])}
        {getCell(...value_description[1])} 
        {getCell(...value_description[2])}
        {getCell(...value_description[3])}
      </List>
    </MainContainer>
  )
}

export default HorizontalList