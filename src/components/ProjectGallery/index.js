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
    console.log(count)
    if (count === 5) {
        setCount(0)
    }
    if (count < 0) {
        setCount(4)
    } 

   useEffect(() => {
    changeCard()
   }, [count])

    const changeCard = () => {
        setCard(cardArray[count])
        console.log('changed to', cardArray[count])
    }
    
    const handlePrev = e => {
        setCount(count => count - 1)
        console.log('previous! Count is: ', count)     
    }

    const handleNext = e => {            
        setCount(count => count + 1)
        console.log('next! Count is:', count)     
    }
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
        
        
        
    
    </>
  )
}

export default ProjectGallery
