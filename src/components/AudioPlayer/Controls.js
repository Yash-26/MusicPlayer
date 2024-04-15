import React from 'react'
import { IconContext } from 'react-icons'
import { FaPlay, FaPause } from "react-icons/fa6";
import { TfiControlSkipBackward, TfiControlSkipForward } from "react-icons/tfi";
import './controls.css';



export default function Controls({isPlaying, setIsPlaying, handleNext, handlePrev, total}) {
  
  return (
    <IconContext.Provider value={{size:"35px", color:"#C4D0E3"}}>
      <div className='controls-wrapper flex'>
        <div className='action-btn flex' onClick={handlePrev}>
          <TfiControlSkipBackward />
        </div>
        <div className='play-btn flex' onClick={() => setIsPlaying(prevstate =>!isPlaying)}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
        <div className='action-btn' onClick={handleNext}>
          <TfiControlSkipForward />
        </div>

      </div>
      
    </IconContext.Provider>
  )
}
