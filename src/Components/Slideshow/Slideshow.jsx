import React from 'react'
import moon from '../../images/moon.jpeg'
import '../../styles/slideShow.css'

const Slideshow = () => {
  return (
    <div className='slideShow'>
      <div className='img'>
        <img src={moon} alt="moon" />
        <div className='overlay'></div>
      </div>
        <div className="text">
          <span>WE ARE BUILDING NFT PROJECTS FOT YOU</span>
        </div>
    </div>
  )
}

export default Slideshow