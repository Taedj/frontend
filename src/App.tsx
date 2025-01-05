import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import './App.css'
import { dimensions } from './constants/constants'
import SideBar from './components/SideBar/SideBar'
import Home from './components/Home/Home'

const MainContainer = styled.div`
  display:grid;
  grid-template-columns: ${dimensions.sideBarWidth} 1fr;
`

function App() {
  return (
    <>
      <MainContainer>
        <SideBar/>
        <div>
          <Home/>
        </div>
      </MainContainer>
    </>
  )
}

export default App
