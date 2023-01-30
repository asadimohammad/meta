import React from 'react'
import moon from '../../images/moon.jpeg'
import '../../styles/slideShow.css'

const Slideshow = () => {
  return (
    <div className='slideShow container-fluid'>
      <div className='img'>
        <img src={moon} alt="moon" />
        <div className='overlay'></div>
      </div>
        <div className="text">
          <span className='txt1'>We Build</span>
          <span className='txt2'>Metaverse And</span>
          <span className='txt3'>Blockchain Games</span>
          <span className='txt4'>For You</span>
        </div>
    </div>
  )
}

export default Slideshow