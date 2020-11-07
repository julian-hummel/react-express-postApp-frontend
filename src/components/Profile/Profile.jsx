import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { Form, Button } from 'react-bootstrap'
import { updateUser } from './../../UserFunctions'
import { useState } from 'react';

export default function Profile(props) {
    const userApp = useSelector(selectUser)
    const [willBeNotificated, setWillBeNotificated] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
      if(!localStorage.getItem('usertoken')) {
        props.history.push('/login')
      }
    })

    function onSubmit() {
      setisLoading(true)
      var user = {}
      user.email = userApp.email
      user.notification = willBeNotificated

      updateUser(user)
      .finally(setisLoading(false))
    }
    
    return(        
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFIL</h1>
            <p>Vorname: {userApp.firstName}</p>
            <p>Nachname: {userApp.lastName}</p>
            <p>Email: {userApp.email}</p>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check disabled={isLoading} onClick={ e => setWillBeNotificated(!willBeNotificated) } type="checkbox" label="Ich will Mitteilungen erhalten" />
              </Form.Group>
              <Button size="sm" variant="primary" type="submit">Speichern</Button>
            </Form>
          </div>
        </div>
      </div>    
    );  
}