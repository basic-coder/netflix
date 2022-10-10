import React, { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './signUp.css'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const Navigate = useNavigate()

  const register = (e) => {
    e.preventDefault()

    //const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        Navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }


  const signin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      Navigate("/")
    })
    .catch(() => {
      alert('invalid user or password')
    });
  }

  return (
    <div className='signUp'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type="submit" onClick={signin}>Sign In</button>
        <h4> <span className='signUp__gray'>New to Netflix?</span>
          <span className='signUp__link' onClick={register}>SignUp now.</span></h4>
      </form>
    </div>
  )
}

export default SignIn