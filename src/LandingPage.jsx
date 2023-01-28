import React from 'react'
import Menu from './Components/Header/Navbar/Menu'
import IconsNft from './Components/IconsNft/IconsNft'
import Portfolio from './Components/Portfolio/Portfolio'
import Slideshow from './Components/Slideshow/Slideshow'
import WhatToDo from './Components/WhatToDo/WhatToDo'

const LandingPage = () => {
  return (
    <>
        <Menu/>
        <Slideshow/>
        <WhatToDo/>
        <IconsNft/>
        <Portfolio/>
    </>
  )
}

export default LandingPage