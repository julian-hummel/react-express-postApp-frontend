import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../features/auth/authSlice'

export default function Landing() {
    const token = localStorage.getItem('usertoken')
    const isAuthenticated = useSelector(selectAuth)

    let name = ""
    if(token && isAuthenticated) {
      const user = jwt_decode(token)
      name = user.firstName
    }

    return(        
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Willkommen {name}</h1>
          </div>
        </div>
      </div>    
    );  
}