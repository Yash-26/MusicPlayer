import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify';
import './widgets.css';
import WidgetCard from './WidgetCard';

export default function Widgets({artistId}) {

    const [similar, setSimilar] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [newRelease, setNewRelease] = useState([]);

    useEffect(() => {
        if(artistId){
            apiClient.get(`/artists/${artistId}/related-artists`)
        .then(res => {
            const artistName = res.data?.artists?.slice(0,3);
            setSimilar(artistName);
        })
        .catch(err => console.error(err));

        apiClient.get(`/browse/featured-playlists`)
        .then(res => {
            const feature = res.data?.playlists?.items?.slice(0,3);
            setFeatured(feature);
        })
        .catch(err => console.error(err));

        apiClient.get(`/browse/new-releases`)
        .then(res => {
            const release = res.data?.albums?.items?.slice(0,3);
            setNewRelease(release);
        })
        .catch(err => console.error(err));
        }
    },[artistId]);
  return (
    <div className='widgets-body flex'>
        <WidgetCard title="Similar Artists" similar={similar}/>
        <WidgetCard title="Featured Playlists" feature={featured}/>
        <WidgetCard title="New Releases" releases={newRelease}/>        
    </div>
  )
}
