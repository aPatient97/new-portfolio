import React, {useState} from 'react'
import './style.css'
import CvButton from '../CvButton'

function Welcome({setVisible, setWelcome}) {
  const [end, setEnd] = useState(false)

  const endTrail = () => {
    setEnd(true)
  }

  const trail = (e) => {

    const colours = [
      '#b8b8ff', '#9381ff', '#001c55', '#9567fe', '#7bdff2', '#390099', '#f7b801'
    ]
    
    if (!end) {
      const body = document.body
            let x = document.createElement('div')
            x.className = 'trail'
            x.setAttribute('style',`left: ${e.clientX - 10}px; top: ${e.clientY -10}px;`)
            let random = Math.floor(Math.random() * colours.length)
            x.style.background = `${colours[random]}`
            x.onanimationend = () => {
              x.remove()
            }
            end && x.remove()  
            body.insertAdjacentElement('beforeend', x)
    }   
  }

  const restartTrail = (e) => {
    setEnd(false)
  }

  const handleClick = () => {
    setVisible(true)
    setWelcome(false)
  }

  return (
    <>
      <div className="magic-box" onMouseMove={trail}>
        <div id="welcome" >
          <div className="home-ps">
            <p>Hello world, I am</p>
            <h1>Alex Patient</h1>
            <p>I'm a performance minded full-stack developer based in London.
            I enjoy designing & writing clean code using minimal libraries.<br></br>
            I have worked as a chef for 7 years and I am now looking for junior front-end developer roles, either working remotely or located in London.<br></br>
            My technical skills include HTML, CSS, JavaScript, React, Python, Flask & Django, NodeJS, SQL, MongoDB, Unit Testing with Jest, Github and Docker</p>

            <div className="end-it" onMouseMove={endTrail} onMouseLeave={restartTrail}>
              <a href="mailto:apatient97@gmail.com">
                <button className="hire-me">Hire me</button>
              </a>
              <CvButton />
              <button className='hire-me' onClick={handleClick}>Projects</button>
            </div>
            <a href="#anchor" id='scroll'>
              <svg fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>chevron-down</title>
              <path d="M26.531 10.47c-0.136-0.136-0.324-0.22-0.531-0.22s-0.395 0.084-0.531 0.22v0l-9.469 9.469-9.47-9.469c-0.135-0.131-0.319-0.212-0.523-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.388 0.213 0.523l10 10.001c0.136 0.135 0.323 0.219 0.53 0.219s0.394-0.084 0.53-0.219l10.001-10.001c0.135-0.136 0.218-0.323 0.218-0.53s-0.083-0.394-0.218-0.53l0 0z"></path>
              </svg>
              <p>Scroll down or click for more</p>
            </a>
          </div>
            
            
        </div>
      </div>
     
        <div className="parallax-container">
          <p className='padding' id='anchor'>You can view all my projects on the projects page but here are my favourites:</p>
          <div className="project-grid">

            <div className="grid-item top">
              <a href="https://mixer-cocktail.netlify.app/" target='_blank' rel="noreferrer">
                <img src="./images/mixer-large.webp" alt="mixer cocktail app" className="home-img pointer" />
              </a>
            </div>

            <div className="grid-item top-p">
              <p>A cocktail app where users can generate a list of cocktails from the ingredients they have at home and explore hundeds of cocktails & ingredients.<br></br> Users can create an account and sign in to save their favourites.<br></br> This group project was made in 1 week using JavaScript, React, Redux, CSS, Netlify, Python, Django, SQLite, PostgreSQL and Heroku.</p>
            </div>

            <div className="grid-item mid">
              <a href="https://big-fact-hunt.netlify.app/" target='_blank' rel="noreferrer">
                <img className='home-img point"er' src="./images/bfh-large.webp" alt="big fact hunt quiz" />
              </a>
            </div>

            <div className="grid-item middle-p">
              <p>A multiplayer quiz app where players can compete against each other in real time with the use of web-sockets and save their scores to the leaderboard. <br></br> This group project was made in 1 week using JavaScript, CSS, React, Redux, Netlify, Node/Express, PostgreSQL, Heroku, Socket.io.</p>
            </div>

            <div className="grid-item bottom">
              <a href="https://affectionate-haibt-87a930.netlify.app/" target='_blank' rel="noreferrer">
                <img src="./images/finca-large.webp" alt="finca property website" className="home-img pointer" />
              </a>
            </div>

            <div className="grid-item bottom-p">
              <p>A property website made with vanilla Javascript and CSS.</p>
            </div>
            
          </div>              
        </div>
    
    </>
  )
}

export default Welcome
