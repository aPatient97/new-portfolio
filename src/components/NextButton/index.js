import React from 'react'
import './style.css'

function NextButton({handleNext}) {
  return (
    <svg className='next' onClick={handleNext} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#3da5d9' transform='scale(1.5)'><path d="m11.707 3.293-1.414 1.414L17.586 12l-7.293 7.293 1.414 1.414L20.414 12l-8.707-8.707z"/><path d="M5.707 3.293 4.293 4.707 11.586 12l-7.293 7.293 1.414 1.414L14.414 12 5.707 3.293z"/></svg>
  )
}

export default NextButton
