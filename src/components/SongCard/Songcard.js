import React from 'react'
import Albumimage from './Albumimage'
import Albuminfo from './Albuminfo'
import './songcard.css';

export default function Songcard({album}) {
  if(!album || !album.name){
    return "Loading...";
  }
  return (
    <div className='card-body flex'>
        <Albumimage url={album?.images[0]?.url}/>
        <Albuminfo album={album}/>
    </div>
  )
}
