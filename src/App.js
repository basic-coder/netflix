import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilePage from './pages/profile/ProfilePage';

function App() {

  const dispatch = useDispatch()
  var user = useSelector(selectUser)

  const SecureRoute = ({ children, redirectTo}) => {

    if(user){
      return !user ? <Navigate to={redirectTo} /> : children;
    }
      
   
  }

  useEffect(()=>{
    if (user) {
      let redirectTo="/login";
      SecureRoute(redirectTo);
    }
  }, [user])

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])

  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={
          <SecureRoute redirectTo="/login">
          <HomePage />
          </SecureRoute>
          } />
           <Route path='/profile' exact element={
          <SecureRoute redirectTo="/login">
          <ProfilePage />
          </SecureRoute>
          } />
          <Route path='/login' exact element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
