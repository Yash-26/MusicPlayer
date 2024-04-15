import React from 'react';
import WidgetEntry from './WidgetEntry';
import './widgetcard.css';
import { IconContext } from 'react-icons';
import { FaChevronRight } from "react-icons/fa6";


export default function WidgetCard({title, similar, feature, releases}) {
  return (
    <div className='widgetcard-body'>
        <p className='widget-title'>{title}</p>
        {
            similar? similar.map((artist) => (
                <WidgetEntry 
                    title={artist?.name}
                    subtitle={artist?.followers?.total + " Followers"}
                    image={artist?.images[2]?.url}
                />
            ))

            :feature? feature.map((playlist) =>(
                <WidgetEntry 
                    title={playlist?.name}
                    subtitle={playlist?.tracks?.total+" Songs"}
                    image={playlist?.images[0]?.url}
                />
            ))

            :releases? releases.map((album) => (
                <WidgetEntry 
                    title={album?.name}
                    subtitle={album?.artists[0]?.name}
                    image={album?.images[2]?.url}
                />
            ))

            :null
        }
        
        <div className='widgetfade'>
            <div className='fadebtn'>
                <IconContext.Provider value={{size:"24px", color:"#c4d0e3"}}>
                    <FaChevronRight />
                </IconContext.Provider>
            </div>
        </div>
    </div>
  )
}
