import React, {useEffect, useState} from 'react'
import BfhCard from '../BfhCard'
import Calculator from '../Calculator'
import Finca from '../Finca'
import MixerCard from '../MixerCard'
import NextButton from '../NextButton'
import PrevButton from '../PrevButton'
import UrlShortener from '../UrlShortener'
import './style.css'

function ProjectGallery() {

    const cardArray = ['Mixer', 'BFH', 'URL', 'Calc', 'Finca']
    const [count, setCount] = useState(0)
    const [card, setCard] = useState(cardArray[count])
    let last = cardArray.length -1
    const dot = document.querySelector(`#d${count}`)
    
    
    if (count === 5) {
        setCount(0)
    }
    if (count < 0) {
        setCount(last)
    } 

   useEffect(() => {
    // removeDot()
    changeCard()
    fillDot()
   }, [count])

    const changeCard = () => {
        setCard(cardArray[count])      
    }
    
    const handlePrev = e => {
        dot && dot.classList.remove('current')
        setCount(count => count - 1)  
        // dot.classList.remove('current')
               
    }

    const handleNext = e => {     
        dot && dot.classList.remove('current')       
        setCount(count => count + 1)
        // dot.classList.remove('current')
        
    }

    const handleDot = (count) => {
        dot.classList.remove('current')
        const newDot = document.querySelector(`#d${count}`)
        newDot.classList.add('current')
        console.log(count)
        setCard(cardArray[count])
        setCount(count)
        
        
    }

//  const removeDot = () => {
//     dot && dot.classList.remove('current')
//  }


 const fillDot = () => {
    dot && dot.classList.add('current')
//     console.log('dot filled')
 }
 fillDot()

  return (
    <>
    <h2>Projects</h2>
        <p>Click the images or hover for more information. Stay tuned for future projects.</p>
        <div className="center-projects">
            <PrevButton handlePrev={handlePrev}/>
            {card === 'Mixer' && (
                <MixerCard />
            )}

            {card === 'BFH' && (
                <BfhCard />
            )}

            {card === 'URL' && (
                <UrlShortener />
            )}

            {card === 'Calc' && (
                <Calculator />
            )}

            {card === 'Finca' && (
                <Finca />
            )}

            <NextButton handleNext={handleNext}/>
        </div>

        <div className="dots">
            {cardArray.map((x, count) => (
                <div className='dot' key={count} id={`d${count}`} onClick={() => handleDot(count)}>  </div>
            ))}
        </div>
    </>
  )
}

export default ProjectGallery
