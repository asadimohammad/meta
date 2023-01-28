import React from 'react'
import Menu from './Header/Navbar/Menu'
import IconsNft from './IconsNft/IconsNft'
import Portfolio from './Portfolio/Portfolio'
import Slideshow from './Slideshow/Slideshow'
import WhatToDo from './WhatToDo/WhatToDo'

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