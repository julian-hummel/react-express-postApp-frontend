import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../features/auth/authSlice'

export default function Landing() {
    const token = localStorage.getItem('usertoken')
    const isAuthenticated = useSelector(selectAuth)

    let name = ""
    if(token && isAuthenticated) {
      const user = jwtDecode(token)
      name = user.firstName
    }

    return(        
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Wilkommen {name}</h1>
          </div>
        </div>
      </div>    
    );  
}