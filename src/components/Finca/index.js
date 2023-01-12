import React from 'react'
import VisitButton from '../VisitButton'


function Finca() {
  return (
    <>
    <section className="container">
        <picture >
          <source loading='eager' media="(min-width: 900px)" srcSet='/images/finca-large.webp' alt="rojo rubi finca website" type="image/webp"/>
          <source loading='eager' media="(min-width: 900px)" className='image'src="images/finca-large.jpg" alt="rojo rubi finca website" type="image/jpg" />
          <img  loading='eager' className='image'src="images/finca.jpg" alt="rojo rubi finca website" />
        </picture>
        <div className="middle">
          <h2 className="underline">Finca Rojo Rubi</h2>
          <p>A property website made with vanilla Javascript and CSS.</p>
          <a href="https://affectionate-haibt-87a930.netlify.app/">
            <VisitButton />
          </a>  
        </div>
    </section> 
    </>
  )
}

export default Finca
