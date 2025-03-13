import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import './App.css'
import { dimensions } from './constants/constants'
import SideBar from './components/SideBar/SideBar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Summary from './components/Summary/Summary'


const SideComponentsContainer = styled.div`
  margin-left:${dimensions.sideBarWidth};
`

function App() {
  return (
    <>
        <SideBar/>
        <SideComponentsContainer>
          <Home/>
          <About/>
          <Services/>
          <Summary/>
        </SideComponentsContainer>
    </>
  )
}

export default App
