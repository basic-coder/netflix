import React, { useState } from 'react'
import './login.css'
import logo from '../../images/logo.png'
import SignUp from '../../components/signUp/SignUp'

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className='loginPage'>
      <div className="loginPage__background">
        <img className='loginPage__logo' src={logo} alt="bg" />
        <button className='loginPage__button'>Log In</button>
        <div className="loginPage__gradient">

        </div>
      </div>

      <div className="loginPage__body">
        {
          signIn ? (
            <SignUp />
          ) : (
            <>
              <h1>Unlimited films, TV shows and many more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership</h3>
              <div className="loginPage__input">
                <form>
                  <input placeholder='Enter your Email' type="email" />
                  <button className='loginPage__getStarted' onClick={() => setSignIn(true)} type='submit'>GET STARTED</button>
                </form>
              </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default LoginPage