import React, { useEffect } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile'
import Post from './components/Post/Post'
import FlashMessage from './components/FlashMessage/FlashMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, selectUser } from './features/auth/authSlice'
import setAuthTokenAsHeader from './setAuthTokenAsHeader'
import { getProfile, validateToken } from './UserFunctions'
import { addFlashMessage } from './features/flashMesssage/flashMessageSlice';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  //Each time the page is loaded, it is checked, whether a jwt token is stored in the local storage
  //If yes, the user is logged in automatically
  useEffect(() => {
    if(localStorage.getItem('usertoken')) {
      var token = localStorage.getItem('usertoken')
      setAuthTokenAsHeader(token)
      if(!user.firstName) {
        getProfile().then(res => {
          if(res.errors) {
            localStorage.removeItem('usertoken')
            dispatch(addFlashMessage({ 
              text: res.errors.tokenExpired,
              type: "error"
            }))
          }else {
            dispatch(setCurrentUser(res))
          }
        })
      }else {
        validateToken().then(res => {
          if(res.errors) {
            localStorage.removeItem('usertoken')
            dispatch(addFlashMessage({ 
              text: res.errors.tokenExpired,
              type: "error"
            }))
          }
        })
      }
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <FlashMessage/>
        <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/posts" component={Post} />
          </div>
      </div>
    </Router>
  );
}

export default App;
