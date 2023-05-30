import React from 'react'
import './login.css';
import image1 from '../assests/image1.png';
import googlelogo from '../assests/googlelogo.svg';
import username from '../assests/userename.svg';
import Lock from '../assests/Lock.svg';

const login = () => {
  return (
    <div className="metaverse__login-container">
      <div className="metaverse__login-container_center scale-up-center">
        <div className="metaverse__login-container_left"><img src={image1} alt="image1" /></div>

        <div className="metaverse__login-container_right">
          <h1>LOGIN</h1>

          <div className="metaverse__username">
            <h2><img src={username} alt="username" />
            Username or email</h2>
            <input type={'email'} />
            <div />
          </div>

          <div className="metaverse__password">
            <h2><img src={Lock} alt="Lock" />
            Password</h2>
            <input type={"password"}/>
            <div />
          </div>

          <div className="metaverse__btn-container">
            <div className="metaverse__btn1">
              <button type='button'>Forgot password ?</button>
            </div>

            <div className="metaverse__btn2">
              <button type="button">Clear</button>
            </div>
          </div>
          
          <div className="metaverse__login-btn-container">
            <div className='metaverse__login-btn'>
              <button type="button">LOGIN</button>  
              <p>or</p>
            </div>

            <div className="metaverse__login-btn2">
              <button type="button"> <img src={googlelogo} alt="googlelogo" /> Log in with google</button>
              <p>Don't have an account? SignUp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login