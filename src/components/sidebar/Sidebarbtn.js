import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './sidebarbtn.css';
import { IconContext } from 'react-icons';

export default function Sidebarbtn(props) {

  const loc=useLocation();

  const isactive=loc.pathname==props.to;

  const btnClass = isactive?'btn-container active' : 'btn-container';

  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{size:'24px', className:'btn-icon'}}>
          {props.icon}
          <p className='btn-title'>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}
