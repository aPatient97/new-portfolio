import React from 'react'
import './style.css'

function PrevButton({handlePrev}) {
  return (
    // <button className="prev" onClick={handlePrev}>Back</button>
    // <svg className='prev' onClick={handlePrev} xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform='scale(1.5)' fill='#00b4d8'><path d="m11.707 3.293-1.414 1.414L17.586 12l-7.293 7.293 1.414 1.414L20.414 12l-8.707-8.707z"/><path d="M5.707 3.293 4.293 4.707 11.586 12l-7.293 7.293 1.414 1.414L14.414 12 5.707 3.293z"/></svg>
    <svg className='prev' onClick={handlePrev} xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform='scale(1.5)' fill='#3da5d9'><path d="m13.707 4.707-1.414-1.414L3.586 12l8.707 8.707 1.414-1.414L6.414 12l7.293-7.293z"/><path d="m19.707 4.707-1.414-1.414L9.586 12l8.707 8.707 1.414-1.414L12.414 12l7.293-7.293z"/></svg>
    
  )
}

export default PrevButton
