import React from 'react'
import './Albumimage.css';


export default function Albumimage({url}) {

  return (
    <div className='album-img flex'>
        <img src={url} alt='Album-Img' className='album-art' />
        <div className='albumimg-shadow'>
            <img src={url} alt='shadow' className='albumimg-shadow' /> 
        </div>    
    </div>
  )
}
