import React from 'react';
import './widgetentry.css';

export default function WidgetEntry({title, subtitle, image}) {
  return (
    <div className='entry-body flex'>
        <img src={image} alt={title} className='entryimage' />
        <div className='entry-right flex'>
            <p className='entrytitle'>{title}</p>
            <p className='entrysub'>{subtitle}</p>
        </div>
    </div>
  )
}
