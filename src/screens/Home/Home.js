import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from '../Library/Library';
import Feed from "../Feed/Feed";
import Trend from '../Trend/Trend';
import Player from '../Player/Player';
import Fav from '../Fav/Fav';
import './home.css';
import Sidebar from '../../components/sidebar/sidebar';
import Login from '../auth/Login';
import { setClientToken } from '../../spotify';

export default function Home() {

  const [token,setToken] = useState('')

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(token);
   }
  },[]);
 return !token? (

  <Router>
      <Routes>
         <Route path='/' element={<Login />} />
      </Routes>
  </Router>
    ) :
    
    (

    <Router>
      <div className='main-body'>
        <Sidebar />
        <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/trend" element={<Trend />} />
              <Route path="/player" element={<Player />} />
              <Route path="/fav" element={<Fav />} />          
        </Routes>
      </div>        
    </Router>
  )
}
