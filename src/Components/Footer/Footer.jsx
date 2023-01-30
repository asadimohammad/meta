import React from 'react'
import Brand from '../Header/Brand/Brand'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer container-fluid'>
        <ul>
            <li className='logo'>
                <Brand/>
            </li>
            <li>
                <p>contact US</p>
                <p>info@themetaverse.engineer</p>
            </li>
        </ul>
        <p className='copyright'>Copyright Reserved</p>
    </div>
  )
}

export default Footer