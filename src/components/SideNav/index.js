import React from 'react'
import './style.css'

function SideNav({setVisible, visible, setWelcome, welcome, setAbout, about, contact, setContact}) {

  const hideNav = () => {
    const nav = document.querySelector('.side-nav')
    const burger = document.querySelector('.burger')
    nav.classList.toggle('nav-active')   
    burger.classList.toggle('toggle')
  }

  const handleClick = e => {
    setVisible(prevState => !prevState)    
    hideNav()
    welcome && setWelcome(prevState => !prevState)
    about && setAbout(prevState => !prevState)
}

  const handleAbout = () => {
    welcome && setWelcome(prevState => !prevState)
    visible && setVisible(prevState => !prevState)
    setAbout(prevState => !prevState)
    hideNav()

  }

  const handleContact = () => {
    const email = document.querySelector('#nav-gmail')
    const linkedIn = document.querySelector('#nav-linked-in')
    const github = document.querySelector('#nav-github')
    email.classList.toggle('animate-gmail')
    linkedIn.classList.toggle('animate-linked-in')
    github.classList.toggle('animate-github')
  }

  const showSvg = () => {
    // const svgs = document.querySelector('.contact-drop')
    // svgs.classList.add('move')
    console.log('moved')
  }

  

  return (
<>
      <nav className="side-nav">
          <p id="projects" className='hover-underline' onClick={handleClick}>Projects</p>
          <p id="about-me" className='hover-underline' onClick={handleAbout} >About Me</p>
          <a href="mailto:apatient97@gmail.com">
          <p id="contact" className='hover-underline' onClick={handleContact} onMouseOver={showSvg}>Contact</p>
          </a>         
      </nav>
</>
  )
}

export default SideNav
