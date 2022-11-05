import React from 'react'
import './style.css'
import Burger from '../Burger'
import ContactIcons from '../ContactIcons'

function Header({setVisible, setAbout, setWelcome, welcome, visible, about}) {
  const showNav = e => {
    const nav = document.querySelector('.side-nav')
    nav.classList.toggle('nav-active')
  
    const burger = document.querySelector('.burger')
    burger.classList.toggle('toggle')
  }

  const showWelcome = e => {
    visible && setVisible(prevState => !prevState)
    about && setAbout(prevState => !prevState)
    !welcome && setWelcome(true)
  }

  return (
    <header>
      <Burger showNav={showNav}/>
      <ContactIcons />
      <p id="name-head" onClick={showWelcome}>Alex Patient</p>
    </header>
  )
}

export default Header
