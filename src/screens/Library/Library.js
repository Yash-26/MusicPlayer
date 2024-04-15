import React, { useEffect, useState } from 'react';
import Apikit from '../../spotify';
import { IconContext } from 'react-icons';
import { FaPlayCircle } from "react-icons/fa";
import './library.css';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';


export default function Library() {

  const [playLists,setPlaylist] = useState(null);
  // const [loading,setLoading] = useState(true);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player",{state:{id:id}});
  }

  useEffect(() => {
    const fetchPlaylist = async() => {
      try{
        const response = await Apikit.get("me/playlists");
          setPlaylist(response.data.items);
          // setLoading(false);
        }
      catch (error){
        console.log(error);
        // setLoading(false);
      }
    };
    
    const debouncedFetch = debounce(fetchPlaylist, 1000);

    debouncedFetch();

    return () => {
      debouncedFetch.cancel();
    };
  },[]);
  

  return (
    <div className='screen-container'>
      <div className='lib-body'>
        {playLists?.map((playlist) => (
          <div className='list-card' key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
            <img src={playlist.images[0].url} alt='playlist-img' className='thumbnail'/>
            <p className='title'>{playlist.name}</p>
            <p className='subtitle'>{playlist.tracks.total} Songs</p>
            <div className='play-fade'>
              <IconContext.Provider value={{size:"40px", color:"#E99D72"}}>
                <FaPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
