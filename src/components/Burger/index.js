import React from 'react'
import './style.css'

function Burger({showNav}) {

    // const openNav = e => {
    //     const line1 = document.querySelector('#line1')
    //     const line3 = document.querySelector('#line3')
    //     line1.classList.add('toggle')
    // }
    
  return (
    <>
        <div className="burger" onClick={showNav}>
            <div id='line1'></div>
            <div id='line2'></div>
            <div id='line3'></div>
        </div>
        
    </>
  )
}

export default Burger
