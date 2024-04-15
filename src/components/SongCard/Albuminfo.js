import React from 'react'
import './Albuminfo.css';

export default function Albuminfo({album}) {

  console.log(album);
  const artists = [];

  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
  
  return (
    <div className='albumInfo-card'>
      <div className='album-container'>
        <div className='marqu'>
          <p>{album.name + " - "+ artists.join(", ")}</p>
        </div>
      </div>
      <div className='album-info'>
        <p>{`${album?.name} is a ${album?.album_type} with ${album?.total_tracks} tracks`}</p>
      </div>
      <div className='album-release'>
        <p>Release Date: {album.release_date}</p>
      </div>
    </div>
  )
}
