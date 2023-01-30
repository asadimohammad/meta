import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Footer from './Footer/Footer'
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
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default LandingPage