import React from 'react'
import VisitButton from '../VisitButton'

function UrlShortener() {
  return (
    <>
    <section className="container">
      <picture>
        <source className='image' media="(min-width: 900px)" srcSet="images/url-large.webp" alt="url shortener website"/>
        <source media="(min-width: 900px)" src="images/url-large.jpg" alt="url shortener website" />
        <img className='image' src="images/shorten.jpg" alt="url shortener website" />
      </picture>
      <div className="middle">
        <h2 className='underline'>URL Shortener</h2>
          <p>A pair project where users input a url to shorten. The url is saved to a database in a python backend and a new shorter url is generated for the user. 
          </p>
          <a href="https://miniurl123.herokuapp.com/">
            <VisitButton />
          </a>  
      </div>
    </section>  
    </>
  )
}

export default UrlShortener
