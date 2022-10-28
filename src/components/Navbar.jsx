import React,{useContext} from 'react';
import {signOut} from "firebase/auth";
import { auth } from '../firebase'
import { AuthContext } from '../contex/AuthContext';


export default function Navbar() {

  const {currentUser} = useContext(AuthContext);

  return (
          <div className="navbar">
                    <span className="logo">Awsome </span>
                    <div className="user">
                              <img src={currentUser.photoURL} alt="" />
                              <span>{currentUser.displayName}</span>
                              <button onClick={() => signOut(auth)}>LogOut</button>
                    </div>
          </div>
  )
}
