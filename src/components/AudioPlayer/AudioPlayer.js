import React, { useEffect, useRef, useState } from 'react'
import './audioplayer.css';
import ProgressCircle from './ProgressCircle';
import Controls from './Controls';
import Waveanimate from './Waveanimate';

export default function AudioPlayer({currenttrack, curIndex, setcurIndex, total}) {

  const[isPlaying,setIsPlaying] = useState(false);
  const[trackProgress, setTrackprogress] = useState(0);
  var audsrc = total[curIndex]?.track?.preview_url;

  const audref = useRef(new Audio(total[0]?.track?.preview_url));
  console.log(audref);

  const intervalRef = useRef();

  const isReady = useRef(false);

  const {duration} = audref.current;

  const currPercentage = duration? (trackProgress/duration)*100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {

      if(audref.current.ended){
        handleNext();
      }
      else{
        setTrackprogress(audref.current.currentTime);
      }
    },1000);
  };

  useEffect(() => {
    if(audref.current.src){
      if(isPlaying){
        audref.current.play();
        startTimer();
      }
      else{
        clearInterval(intervalRef.current);
        if (!audref.current.paused) {
          audref.current.pause();
        }
      }
    }
    else{
      if(isPlaying){
        audref.current = new Audio(audsrc);
        audref.current.play();
        startTimer();
      }
      else{
        clearInterval(intervalRef.current);
        if (!audref.current.paused) {
          audref.current.pause();
        }
      }
    }
    
  },[isPlaying,audsrc]);

  useEffect(() => {
    audref.current.pause();
    audref.current = new Audio(audsrc);

    setTrackprogress(audref.current.currentTime);

    if(isReady.current && isPlaying){
      audref.current.play();
      startTimer();
      setIsPlaying(true);
    }
    else{
      isReady.current = true;
    }
  }, [curIndex, isPlaying, audsrc]);

  useEffect(() => {
    return () => {
      audref.current.pause();
      clearInterval(intervalRef.current);
    };
  },[])


  const handleNext = () => {
    if(curIndex< total.length-1 ){
      setcurIndex(curIndex+1);
    }
    else{
      setcurIndex(0);
    }
  };

  const handlePrev = () => {
    if(curIndex-1 < 0){
      setcurIndex(total.length-1);
    }
    else{
      setcurIndex(curIndex-1);
    }
  };

  const Zeros = (n) => {
    return n>9 ? "" + n : "0" + n;
  }



  const artists = [];

  currenttrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  return (
    <div className='audio-body flex'>
        <div className='audio-left'>
            <ProgressCircle 
            percentage={currPercentage} 
            isPlaying={isPlaying} 
            image={currenttrack?.album?.images[0]?.url} 
            size={300} color="#c96850" 
          />
        </div>
        <div className='audio-right flex'>
          <p className='song-title'>{currenttrack?.name}</p>
          <p className='song-artist'>{artists.join("|")}</p>
          <div className='audio-right-bottom flex'>
            <div className='song-duration flex'>
              <p className='duration'>0:{Zeros(Math.round(trackProgress))}</p>
              <Waveanimate isPlaying={isPlaying}/>
              <p className='duration'>0:30</p>
            </div>
            <Controls
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              total={total}
              handleNext={handleNext}
              handlePrev={handlePrev} 
            />
          </div>
          
        </div>
    </div>
  )
}
