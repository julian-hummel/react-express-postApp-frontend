import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'

export default function Profile(props) {
    const user = useSelector(selectUser)

    useEffect(() => {
      if(!localStorage.getItem('usertoken')) {
        props.history.push('/login')
      }
    })
    
    return(        
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFIL</h1>
            <p>Vorname: {user.firstName}</p>
            <p>Nachname: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>id: {user._id}</p>
          </div>
        </div>
      </div>    
    );  
}