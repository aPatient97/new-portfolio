import React from 'react'
import VisitButton from '../VisitButton'

function Calculator() {
  return (
    <>
     <section className="container">
        <picture className='set-dimension'>
          <source loading='eager' media="(min-width: 900px)" className='image' srcSet='/images/calculator-large.webp' />
          <source loading='eager' media="(min-width: 900px)" className='image' srcSet='/images/calculator-large.jpg' />
          <img loading='eager' className='image' src="images/calc.jpg" alt="javascript calculator website"/>
        </picture>
      <div className="middle">
        <h2 className="underline">JS Calculator</h2>
        <p>A calculator made with vanilla Javascript and CSS.</p>
        <a href="https://shiny-donut-d6a6dc.netlify.app/">
          <VisitButton />
        </a> 
      </div>
    </section>
    {/* <div className="outer-card">
      <h3>Javascript Calculator</h3>
      <div className="card">
              <div className="inner-card">
                <div className='grid-item' >
                  <img src="images/calc.jpg" alt="javascript calculator website"/>
                </div>
                <div className="card-back">
                  <p>A calculator made with vanilla Javascript and CSS.</p>
                  <a href="https://shiny-donut-d6a6dc.netlify.app/">
                    <button  type="button">Visit here</button>
                  </a>
                </div>
              </div>
      </div>
    </div> */}
    </>
  )
}

export default Calculator
