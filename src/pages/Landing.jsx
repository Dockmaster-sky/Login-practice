import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Landing = ({ user, login, logout, registerNewUser, letter, loading}) => {
  const fn = "</>"
  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <div className="menu">
            <a className="bars__link">
            <FontAwesomeIcon icon="bars" />
            </a>
          </div>
          <div className="logo">
            <h3>{fn}<span className="bold__text"> FrontEnd</span> Simplified</h3>
          </div>
          <div className="btn__container">
            
            {loading ? (
              <p>Loading...</p>
            ) : user ? (
               <button className="user__button" onClick={logout} >{letter}</button>
            ) : (
                <>
                  <button className="login btn" onClick={login} >Login</button>
                  <button className="register btn" onClick={registerNewUser} >Register</button>
                </>
            )}
            
          </div>
        </div>
        <div className="body">
          <div className="landing__menu">
            <button className="btn">one</button>
            <button className="btn">one</button>
            <button className="btn">one</button>
            <button className="btn">one</button>
            <button className="btn">one</button>
            <button className="btn">one</button>
            <button className="btn">one</button>
          </div>
          <div className="content">
            <div className="video__box">
              <p>the video box goes here</p>
            </div>
            <div className="content__description--container">
              <div className="content__description--header">
                <h1><span className="purple">Advanced E-Portfolio</span></h1>
              </div>
              <div className="content__description--container">
                <p>In this video you will be building one of the best e-portfolios we will build this incredible and impressive website that will increase your chances landing interviews.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing