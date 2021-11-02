import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../features/auth/authSlice'
import { getPosts } from '../../UserFunctions';
import { useEffect } from 'react';
  
export default function Landing() {
    const token = localStorage.getItem('usertoken')
    const isAuthenticated = useSelector(selectAuth)
    const [ result, setResult ] = useState([])
    const [ isFetchingPosts, setIsFetchingPosts ] = useState(false)

    useEffect(() => {
      fetchPosts()
    }, []);

    /*
        * Returns array of all posts, fetched from the database
        */
    function fetchPosts() {
      try {
          setIsFetchingPosts(true)
          getPosts().then((res) => setResult(res.reverse()))
      }finally {
          setIsFetchingPosts(false)
      }
    }      

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