import React, { useEffect, useState } from 'react'
import './nav.css'
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png'

const Nav = () => {
    const [show, handleShow] = useState(false)

    const transitionHandler = () =>{
        if(window.scrollY > 300){
            handleShow(true)        
        }else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionHandler)
        return () => window.removeEventListener('scroll', transitionHandler)
    },[])
  return (
    <div className={`nav ${show && "nav__black"} `}>
        <div className="nav__contents">
        <img className='nav__logo' src={logo} alt="logo" />
        <img className='nav__avatar' src={avatar} alt="avatar" />
        </div>

    </div>
  )
}

export default Nav