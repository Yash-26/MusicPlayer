import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import Songcard from '../../components/SongCard/Songcard';
import Queue from '../../components/Queue/Queue';
import  './player.css';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import Widgets from '../../components/Widgets/Widgets';


export default function Player() {

  const location = useLocation();
  
  const [tracks,setTracks] = useState([]);
  const [curTrack, setCurTrack] = useState({});
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    if(location.state){
      apiClient.get("playlists/"+ location.state?.id +"/tracks")
      .then((res)=> {
        setCurTrack(res.data.items[0].track);
        setTracks(res.data.items);
      })
    }
  },[location.state])

  useEffect(() => {
    setCurTrack(tracks[curIndex]?.track);
  },[curIndex,tracks]);

  

  return (
    <div className='screen-container flex'>
      <div className='player-left'>
        <AudioPlayer currenttrack={curTrack} curIndex={curIndex} setcurIndex={setCurIndex} total={tracks}/>
        <Widgets artistId={curTrack?.album?.artists[0]?.id}/>
      </div>
      <div className='player-right'>
          <Songcard album={curTrack?.album}/>
          <Queue tracks={tracks} setCurIndex={setCurIndex}/>
      </div>
    </div>
  )
}
