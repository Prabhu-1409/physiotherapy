import React from 'react'
import './Styling.css'

function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
            <div className='logo-inner-container'>
                 <img alt='logo'></img>
            </div>
        </div>
        <div className='list-container'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Consult Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
