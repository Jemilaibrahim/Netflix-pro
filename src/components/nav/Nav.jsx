import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
  const [show, setShow]= useState(false)

  const transtionNavBar = ()=>{
  if (window.scrollY>100) {
    setShow(true)
    
  }else{
    setShow(false)
  }
  }

  useEffect(()=>{
    window.addEventListener('scroll', transtionNavBar)
    return()=>{
      window.removeEventListener('scroll', transtionNavBar)
    }
  })
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav-content">

        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />

        <img className='nav_avatar' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="" />
      </div>
      

    </div>
  )
}

export default Nav