import React from 'react'
import VisitButton from '../VisitButton'
import './style.css'

function MixerCard() {
  return (
    <>     
          <section className="container">
            <picture>
              <source media="(min-width: 900px)" srcset="/images/mixer-large.webp" alt="Mixer website screenshot"/>
              <source media="(min-width: 900px)" className='image' src="./images/mixer-large.jpg" alt="Mixer website screenshot" />
              <img className='image' src="./images/mixr.jpg" alt="Mixer website screenshot" />
            </picture>
            <div className="middle">
              <h2 className="underline">Mixer</h2>
              <p>
                A cocktail app where users can generate a list of cocktails from the ingredients they have at home and explore hundeds of cocktails & ingredients. Users can sign in to save their favourites.<br></br> This group project was made in 1 week using JavaScript, React, Redux, CSS, Netlify, Python, Django, SQLite, PostgreSQL and Heroku.
              </p>
              <a href="https://mixer-cocktail.netlify.app/">
                    <VisitButton />
              </a>  
            </div>
          </section>     
    </>
  )
}

export default MixerCard
