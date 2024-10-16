import React, { useEffect, useState } from 'react'
import './Styling.css'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from  './images/logo.png'
import { IoMdClose } from "react-icons/io";

function Header() {
  const [isResponsive, setResponsive] = useState(false)
  const [windowWidth ,setWindowWidth] = useState(window.innerWidth)
  const [navbarclass, setnavbarclass] = useState('responsive')
  useEffect(()=>{
    setWindowWidth(window.innerWidth)
    // console.log(windowWidth)
  },[])
  useEffect(()=>{
    setnavbarclass(isResponsive?`responsive open`:`responsive close`)
  },[isResponsive])
  return (
    <div className='header'>
        <div className='logo-container'>
            <div className='logo-inner-container'>
                 <img className='logo' src={logo} alt='logo'></img>
            </div>
        </div>
        <div className='list-container'>
            <div className={window.innerWidth<900 && isResponsive?navbarclass:'not-responsive'}>
            <div className='gap'></div>
                <li className='list-reponsive'>Home</li>
                <span className='line'></span>
                <li className='list-reponsive'>Services</li>
                <span className='line'></span>
                <li className='list-reponsive'>About Us</li>
                <span className='line'></span>
                <li className='list-reponsive'>Consult Us</li>
                <div className='gap'></div>
            </div>
            {/* <div className='hamburger-container'> */}
            {isResponsive?
            <IoMdClose size={40} onClick={()=>setResponsive(!isResponsive)} className='close' color='white'/>:
            <GiHamburgerMenu size={40} onClick={()=>setResponsive(!isResponsive)} className='hamburger' color='white'/>
            }
           
            
            {/* <h6>Hello</h6> */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default Header
