import React from 'react'
import styled from 'styled-components'
import { categories,colors,fontSettings } from '../../constants/constants'

const MainContainer = styled.div`
  font-family:${fontSettings.fontFamily};
  font-size:1.6rem;
  font-weight:400;
  color:${colors.categoriesSelectorColor};
  margin:4.8rem 0;
`

const Categories = styled.ul`
  display:flex;
  list-style:none;
  justify-content:center;
`

const Category = styled.li`
  padding:0.96rem 1.6rem;
`

const CategoriesSelector = () => {
  return (
    <MainContainer>
      <Categories>
        {categories.map((categoryText) => <Category>{categoryText}</Category>)}
      </Categories>
    </MainContainer>
  )
}

export default CategoriesSelector