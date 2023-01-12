import React from 'react'
import './style.css'

function PrevButton({handlePrev}) {
  return (
    <svg className='prev' onClick={handlePrev} xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform='scale(1.5)' fill='#264653'><path d="m13.707 4.707-1.414-1.414L3.586 12l8.707 8.707 1.414-1.414L6.414 12l7.293-7.293z"/><path d="m19.707 4.707-1.414-1.414L9.586 12l8.707 8.707 1.414-1.414L12.414 12l7.293-7.293z"/></svg>
    
  )
}

export default PrevButton
