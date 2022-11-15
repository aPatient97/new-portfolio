import React from 'react'
import VisitButton from '../VisitButton'


function BfhCard() {
  return (
    <>
    <section className="container">
        <picture >
          <source loading='eager' media="(min-width: 900px)" className='image' srcSet='../images/bfh-large.webp' alt="big fact hunt quiz website screenshot" />
          <source loading='eager' media="(min-width: 900px)" className='image' srcSet='../images/bfh-large.jpg' alt="big fact hunt quiz website screenshot" />
          <img loading='eager' className='image' src='../images/facthunt.jpg' alt="big fact hunt quiz website screenshot" />
        </picture>
        <div className="middle">
          <h2 className="underline">Big Fact Hunt</h2>
          <p>A multiplayer quiz app where players can compete against each other in real time with the use of web-sockets and save their scores to the leaderboard. <br></br> This group project was made in 1 week using JavaScript, CSS, React, Redux, Netlify, Node/Express, PostgreSQL, Heroku, Socket.io.</p>
          <a href="https://big-fact-hunt.netlify.app/">
            <VisitButton />
          </a>  
      </div>
    </section>
    </>
    
  )
}

export default BfhCard
