import React, {useState} from 'react'
import './style.css'

function Welcome() {
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

  return (
    <>
      <div className="magic-box" onMouseMove={trail}>
        <div id="welcome" >
            <p>Hello world, I am</p>
            <h1>Alex Patient</h1>
            <p>I'm a performance minded full-stack developer based in London. <br></br>I enjoy designing & writing clean code using minimal libraries.</p>
            <div className="end-it" onMouseMove={endTrail} onMouseLeave={restartTrail}>
            <a href="mailto:apatient97@gmail.com">
              <button className="hire-me" >Hire me</button>
            </a>
            </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Welcome
