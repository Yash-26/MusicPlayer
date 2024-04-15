import React, { useEffect } from 'react';
import { loginEndpoint } from '../../spotify';
import './logo.css';
import log from '../../assets/Logo.jpg';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const nav = useNavigate();

  // useEffect(() => {

  //   const token = window.localStorage.getItem("token");   
  //   const logout= ()  =>{
  //   window.localStorage.removeItem('token');
  //   }

  // if (!token){
  //   logout();
  // }
  // else {
  //   nav('/')
  //   window.location.reload();  
  // }
  // },[])

  
  return (

    <div className='login'>
      <div className='bgimg'>

        <div className='bgblur'>
          <div className='login-container'>
              <img src={log} alt='logo' className='spotfy'/>

              <p>Login to your Account!</p>
              <a href={loginEndpoint}>
                  <div className='log-btn'>Login</div>
              </a>
            </div>
        </div>
      </div>    
    </div>
    )
}
