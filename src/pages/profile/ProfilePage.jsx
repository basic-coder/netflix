import React from 'react'
import Nav from '../../components/nav/Nav'
import './profile.css'
import avatar from "../../images/avatar.png";
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/userSlice'
import { signOut } from "firebase/auth";
import {auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const signout = () =>{
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='profilePage'>
      <Nav />
      <div className="profilePage__body">
        <h1>Edit Profile</h1>
        <div className="profilePage__info">
          <img src={avatar} alt="avatar" />
          <div className="profilePage__details">
            <h2>{user.email}</h2>
            <div className="profilePage__plans">
              <button onClick={signout} className='profilePage__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage