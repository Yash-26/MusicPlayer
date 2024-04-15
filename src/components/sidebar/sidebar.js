import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import pic from '../../assets/mashahello.png';
import Sidebarbtn from './Sidebarbtn';
import { MdSpaceDashboard } from "react-icons/md";
import  { FaHotjar, FaPlay, FaSignOutAlt  } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import apiClient from '../../spotify';


export default function Sidebar() {
  const [images,setImage] =  useState(pic);

  const navigate = useNavigate();



  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    })
  },[])

  // useEffect(() => {
  //   localStorage.removeItem('access_token');
  //   window.location.reload();
  
  // },[logout])

  

  return (
    <div className='sidebar-container'>
        <img src={images} alt='profile' className='prof'/>
        <div>
            <Sidebarbtn title='Feed' to='/feed' icon={<MdSpaceDashboard />}/>
            <Sidebarbtn title='Trend' to='/trend' icon={<FaHotjar   />}/>
            <Sidebarbtn title='Player' to='/player' icon={<FaPlay />}/>
            <Sidebarbtn title='Fav' to='/fav' icon={<MdFavorite />}/>
            <Sidebarbtn title='Library' to='/' icon={<IoLibrary />}/>
        </div>
        <Sidebarbtn title='Sign Out' to='' icon={<FaSignOutAlt  />}  />
    </div>
  )
}
